const {badRequest,internalError,unathorized} = require('../error/error.services');

const {createCategoryName, findAllCategorys} = require('../services/category.services');

async function postCategory(req,res){
    const body = req.body
    if(!body.name) return badRequest(res,'Es necesario enviar un nombre a la categoria')
    try{
        body.name = body.name.toUpperCase();

        let newCategory = await createCategoryName(body);
            if(!newCategory) throw new Error('Se produjo un error al crear la categoria');

        await newCategory.save();
        return res.status(201).send({ok:true, msg:'Categoria creada con exito',newCategory});
    }catch(err){
        if(err.code === 11000) return badRequest(res,'Ya existe una categoria con este nombre')
        return internalError(res,'Se produjo un error al crear la categoria')
    }
}

async function getCategories(req,res){
    const {name,page} = req.params;
    try{
        let categories = await findAllCategorys(name,page);
        return res.status(200).send({ok:true,msg:'Categorias Obtenidas con exito', response:categories})
    }catch(err){
        return internalError(res,'Se produjo un error al obtener las categorias')
    }
}

async function getCategoryName(req,res){
    try{
        let categories = await findAllCategorys();
        categories = categories.map(el=> el.name); 
        return res.status(200).send({ok:true,msg:'Categorias Obtenidas con exito', response:categories})
    }catch(err){
        console.log(err)
        return internalError(res,'Se produjo un error al obtener las categorias')
    }
}

module.exports ={
    postCategory,
    getCategories,
    getCategoryName,
}