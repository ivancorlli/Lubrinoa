const ApiError = require("./ApiError");

exports.badRequest = (res,msg)=>{
return res.status(400).send({ok:false, msg});
}

exports.internalError = (res,msg)=>{
return res.status(500).send({ok:false,msg})
}

exports.unathorized = (res,msg)=>{
    return res.status(401).send({ok:false, msg});
    }