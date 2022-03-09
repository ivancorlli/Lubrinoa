const {
  createProduct,
  deleteProductById,
  editProductById,
  findProductById,
  createManyProducts,
  editManyProducts,
  findManyProducts,
  deleteManyProducts,
} = require("../services/product.services");
const { badRequest, internalError } = require("../error/error.services");
const toJSON = require('../utils/convertXLSX');
const filesHelper = require('../utils/uploadHelper');


async function postProduct(req, res) {
  const body = req.body;
  if (!body.code || !body.precio || !body.categoria)
    return badRequest(res, "Envie todos los campos requeridos");

  body.code = body.code.toUpperCase();
  try {
    let newProduct = await createProduct(body);
    if (!newProduct) return badRequest(res, "La categoria enviada no existe");

    return res.status(201).send({ ok: true, msg: "Producto creado con exito"});
  } catch (err) {
    if (err.code === 11000){
        return badRequest(res, "Ya existe un producto con el codigo ingresado");
    }
    return internalError(res, "Se produjo un error al crear el producto");
  }
}

async function deleteProduct(req, res) {
  const { productId } = req.params;
  if (!productId) return badRequest(res, "Es necesario enviar un ID");

  try {
    let productDeleted = await deleteProductById(productId);
    if (!productDeleted) return badRequest(res, "El producto buscado no existe");

    return res.status(200).send({ ok: true, msg: "Producto eliminado con exito" });
  } catch (err) {
    return internalError(res, "Se produjo un error al eliminar el producto");
  }
}

async function editProduct(req, res) {
  const body = req.body;
  if (!body.id || !body.code ) return badRequest(res, "Es necesario enviar un ID");
    
  if(body.code){
      body.code = body.code.toUpperCase();
  }

  try{
      let productUpdated = await editProductById(body.id,body)
      if(!productUpdated) return badRequest(res, "El producto o la categoria ingresada no existe");

      return res.status(200).send({ ok: true, msg:"Producto editado con exito"});
  }catch(err){
    if (err.code === 11000){
        return badRequest(res, "Ya existe un producto con el codigo ingresado");
    }
    return internalError(res, "Se produjo un error al eliminar el producto");
  }
}

async function getProduct(req,res){
    const { productId } = req.params;
    if (!productId) return badRequest(res, "Es necesario enviar un producto")
    try{
        let product = await findProductById(productId);
        if(!product) return badRequest(res, "El producto buscado no existe");

        return res.status(200).send({ ok: true, msg:"Producto obtenido con exito",response:product});
    }catch(err){
        return internalError(res, "Se produjo un error al obtener el producto")
    }
}

async function addProducts(req,res){
    const file = req.file;
    if(!file) return badRequest(res,'Es necesario enviar un archivo excel');

    const excel = toJSON(file.path).filter(el=>{
      return el.code && el.categoria && el.precio
    } );

    try{
      let response = await createManyProducts(excel)
        
        filesHelper.resetTmp(file.path);
      return res.status(201).send({
        ok:true,
        msg:{
          1:`Se crearon ${response.newProducts.length} nuevos productos `,
          2:`Se encontraron ${response.productExisting.length} productos ya existentes`,
          3:`Hubo ${response.categoryErrors.length} errores en las categorias de algunos productos`,
          4:`Se crearon ${response.newProducts.length - (response.productExisting.length + response.categoryErrors.length)} productos de ${excel.length}`
        },
        existingProducts:response.productExisting,
        categoryErrors:response.categoryErrors,
      })
    }catch(err){
      return internalError(res,'Se produjo un error al crear los productos')
    }
}

async function editProducts(req,res){
    const file = req.file;
    if(!file) return badRequest(res,'Es necesario enviar un archivo excel');

    const excel = toJSON(file.path).filter(el=>{
      return el.code && el.categoria && el.precio
    } );
    try{

      let response = await editManyProducts(excel);

        filesHelper.resetTmp(file.path);

        return res.status(201).send({
          ok:true,
          msg:{
            1:`Se actualizaron ${response.updateProducts.length} productos`,
            2:`Se encontraron ${response.productInExisting.length} productos inexistentes`,
            3:`Hubo ${response.categoryErrors.length} errores en las categorias de algunos productos`,
            4:`Se actualizaron ${response.updateProducts.length - response.productInExisting.length + response.categoryErrors.length}  productos  de ${excel.length}`
          },
          productInExisting:response.productInExisting,
          categoryErrors:response.categoryErrors,
        })
    }catch(err){
      return internalError(res,'Se produjo un error al actualizar los productos')
    }
}

async function getProducts(req,res){
  const code = req.params.code;
  const page = req.params.page;
  try{
      let products = await findManyProducts(code,page)
      return res.status(200).send({ ok: true, msg:"Productos obtenidos con exito",
      page:products.page,
      totalPages:products.totalPages,
      response:products.products, 
    });
  }catch(err){
    return internalError(res, "Se produjo un error al obtener el producto")
  }
}

async function deleteProducts(req,res){
    const productsToDelete = req.body.productsToDelete;
    if(! productsToDelete)return badRequest(res,'Debe enviar productos');
    try{
      let products = await deleteManyProducts( productsToDelete);
      return res.status(201).send({ok:true, msg:`Se eliminaron ${products.length} productos correctamente`})
    }catch(err){
      return internalError(res, "Se produjo un error al obtener el producto")
    }
    
}

module.exports = {
  postProduct,
  deleteProduct,
  editProduct,
  getProduct,
  addProducts,
  editProducts,
  getProducts,
  deleteProducts
};
