const Category = require('../models/categorySchema');


exports.createCategoryName =(categoryName)=>{
    return new Promise (async(resolve,reject)=>{

        if(!categoryName) throw new Error ('Es necesario un nombre para la categoria');
        try{
            let category = await new Category(categoryName);
            resolve(category)
        }catch(err){
            reject(err)
        }
    })

}

exports.findCategoryById =(categoryId)=>{
    return new Promise (async(resolve,reject)=>{

        if(!categoryId) throw new Error('Es necesario el ID de la categoria');
        try{
            let category = await Category.findById(categoryId);
            resolve(category)
        }catch(err){
            reject(err)
        }
    })
}

exports.findCategoryByName =(categoryName)=>{
    return new Promise (async(resolve,reject)=>{

        if(!categoryName) throw new Error('Es necesario el nombre de la categoria');
        categoryName = categoryName.toUpperCase();
        try{
            let category = await Category.findOne({name:categoryName})
            resolve(category);
        }catch(err){
            reject(err)
        }
    })
}

exports.findAllCategorys = (name,page=1)=>{
    return new Promise(async(resolve,reject)=>{
        const perPage= 10;
        try{
            let categories;
            let response;
            let count = await Category.count()
            if(name){
                name = name.toUpperCase();
                categories= await Category.find({name:{$regex:name}}).skip((perPage * page)-perPage).limit(perPage);
                response={
                    page:page,
                    totalPages:Math.ceil(count/perPage),
                    categories:categories,
                }

                resolve(response)
            }else{
                categories= await Category.find().skip((perPage * page)-perPage).limit(perPage);
                response={
                    page:page,
                    totalPages:Math.ceil(count/perPage),
                    categories:categories,
                }
                resolve(response);
            }
        }catch(err){
            reject(err)
        }
    })

}


exports.addProductToCategory =(categoryID,product)=>{
    return new Promise(async(resolve,reject)=>{

        if(!categoryID || !product) throw new Error('Es necesario enviar una categoria y un producto');
        
        try{
            let category = await Category.findOneAndUpdate({_id:categoryID},{
                $push:{
                   products: product 
                }
            })
            if(!category) resolve(category)
            
            resolve(category)
        }catch(err){
            reject(err)
        }
    })
}

exports.deleteProductFromCategory =(categoryID,productId)=>{
    return new Promise(async(resolve,reject)=>{

        if(!categoryID || !productId) throw new Error('Es necesario enviar una categoria y un producto');
        
        try{
            let category = await Category.findOneAndUpdate({_id:categoryID},{
                $pull:{
                   products: productId 
                }
            })
            if(!category) resolve(category)
            
            resolve(category)
        }catch(err){
            reject(err)
        }
    })

}

