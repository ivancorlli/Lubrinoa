const Product = require('../models/productSchema');
const {
  findCategoryById,
  deleteProductFromCategory,
  addProductToCategory,
  findCategoryByName,
} = require("../services/category.services");

/**
 * @module Product-Services
 */

/**
 * Crea un nuevo producto
 * @param {object} productData Informacion del producto 
 * @returns {Product} Devuelve un nuevo producto
 */
exports.createProduct = (productData)=>{
    return new Promise (async(resolve,reject)=>{
        if(!productData) throw new Error('Es necesario enviar informacion del producto');
        try{
            let category = await findCategoryById(productData.categoria);
            if(!category) resolve(category);
            
            productData.categoria = category.id
            let product = await new Product(productData);
            let productSaved = await product.save();
            await addProductToCategory(productSaved.categoria, productSaved);

            resolve(productSaved);
        }catch(err){
            reject(err)
        }
    })
}
/**
 * Encuentra un producto por su ID
 * @param {string} productId Id del producto
 * @returns {Product} Producto encontrado
 */
exports.findProductById =(productId)=>{
    return new Promise(async(resolve,reject)=>{

        if(!productId) throw new Error('Es necesario enviar el ID del producto');
        try{
            let product = await Product.findById(productId).populate('categoria','name');
            if(!product) resolve(product)

            resolve(product)
        }catch(err){
            reject(err)
        }
    })
}

/**
 * Eliminar un producto por id
 * @param {string} productId Id del producto
 * @returns {Product} Producto eliminado
 */
exports.deleteProductById =(productId)=>{
    return new Promise (async(resolve,reject)=>{

        if(!productId) throw new Error('Es necesario enviar el ID del producto');
        try{
            let product = await Product.findByIdAndDelete(productId);
            if(!product) resolve(product);
            
            await deleteProductFromCategory(product.categoria,product.id)
            resolve(product)
        }catch(err){
            reject(err)
        }
    })
}

exports.editProductById =(productId,newProductData)=>{
    return new Promise(async(resolve,reject)=>{
        if(!productId || !newProductData)  throw new Error('Es necesario enviar el ID del producto');
        try{
            let product = await Product.findByIdAndUpdate(productId,newProductData);
            if(!product) resolve(product)

            if(product.categoria.toString() !== newProductData.categoria){
               let category = await addProductToCategory(newProductData.categoria,productId)
               if(!category)resolve(category)
                await deleteProductFromCategory(product.categoria,product.id);
            }
            product.timestamps.updatedAt = Date.now()
           await product.save()

            resolve(product)
        }catch(err){
            reject(err)
        }
    })
}

exports.createManyProducts= (array)=>{
    return new Promise(async(resolve,reject)=>{
        if(!array) throw new Error('Es neceasrio enviar un listado de productos');

        try{
            let errors = []
            let productExisting = []
            let newProducts = await Promise.all(

                array.map(async(el)=>{
                el.code = el.code.toUpperCase();
                el.aplicacion = el.aplicacion.toLowerCase();
                el.precio = Math.ceil(el.precio);
                    let category = await findCategoryByName(el.categoria);
                        if(!category){
                            let product={
                                code:el.code,
                                categoria:el.categoria,
                            }
                            errors.push(product);
                            return null
                        }
                 el.categoria = category.id
                    let oldProduct = await Product.findOne({code:el.code})
                        if(oldProduct){
                            productExisting.push(el.code);
                            return null
                        }
                    let product = await new Product(el);
                    let productSaved = await product.save();
                    await addProductToCategory(productSaved.categoria, productSaved);

                    return productSaved 
                })
            )
            newProducts = newProducts.filter(el=>el !== null);
            resolve({
                    newProducts:newProducts,
                    categoryErrors: errors,
                    productExisting: productExisting,
                    })
        }catch(err){
            reject(err);
        }
    })
}

exports.editManyProducts= (array)=>{
    return new Promise(async(resolve,reject)=>{
        if(!array) throw new Error('Es neceasrio enviar un listado de productos');

        try{
            let categoryError = [];
            let productInExisting = [];
            let updateProducts = await Promise.all(
                array.map(async(el)=>{

                el.code = el.code.toUpperCase();  
                let category = await findCategoryByName(el.categoria);
                        if(!category){
                            categoryError.push(el.code);
                            return null
                        }     
                el.categoria = category.id
                let product = await Product.findOneAndUpdate({code:el.code},el)
                        if(!product){
                            productInExisting.push(el.code)
                            return null
                        }
                if(product.categoria.toString() !== category.id){
                    await addProductToCategory(category.id,product.id)
                    await deleteProductFromCategory(product.categoria,product.id);
                }
                    product.timestamps.updatedAt = Date.now()
                    await product.save()
                    return product
                })
            )
                resolve({
                    updateProducts:updateProducts,
                    categoryErrors: categoryError,
                    productInExisting: productInExisting,
                })
        }catch(err){
            reject(err);
        }
    })
}

exports.findManyProducts =(code,page=1)=>{
    return new Promise(async(resolve,reject)=>{
        const perPage = 10;
        try{
            let products;
            let response;
            let count = await Product.count();
            if(code){
                code = code.toUpperCase();
                products =  await Product.find({code:{$regex:code}}).populate('categoria','name').skip((perPage * page)-perPage).limit(perPage);
                response = {
                    products:products,
                    totalPages:Math.ceil(count/perPage),
                    page:page,
                }
                resolve(response)
            }else{
                products = await Product.find().populate('categoria','name').skip((perPage * page)-perPage).limit(perPage);
                response = {
                    products:products,
                    totalPages:Math.ceil(count/perPage),
                    page:page,
                }
                resolve(response);
            }

        }catch(err){
            reject(err);
        }
    })
}

exports.deleteManyProducts=(array)=>{
    return new Promise(async(resolve,reject)=>{
        if(!array) return new Error('Es necesario enviar un listado de productos')
        try{    
            array = array.split(',')
            let productsDeleted = await Promise.all(
                array.map(async(el)=>{
                    let deleted = await Product.findByIdAndDelete(el);
                    await deleteProductFromCategory(deleted.categoria,deleted.id);
                    return deleted;
                })
            ) ;
            resolve(productsDeleted)
        }catch(err){
            reject(err);
        }
    })
}