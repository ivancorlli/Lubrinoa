const XLSX = require("xlsx");

/**
 * @module Excel
 */

/**
 * Convertir datos a JSON
 * @param {string} path Ruta del archivo excel
 * @returns {Array<object>} Devuelve un array con los datos del excel
 */

function toJSON(path) {
  const excel = XLSX.readFile(path);
  let sheetNames = excel.SheetNames;
  let datos = XLSX.utils.sheet_to_json(excel.Sheets[sheetNames[0]])
  return datos
}

module.exports = toJSON
