const multer = require("multer");
const path = require("path");
const fs = require("fs");

/**
 * @module Upload
 */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let route = path.resolve("./tmp");
    cb(null, route);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("excel");
/**
 * Borrar un archivo 
 * @param {string} path Ruta del archivo excel 
 */
 function resetTmp (path){

    fs.unlink(path, (err)=> {
        if(err) throw err
    } )
}


module.exports = {
  upload,
  resetTmp
};