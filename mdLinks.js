
const fs = require('fs');
const route = require('path');
const onlyPath = require('../lim20181-Track-FE-markdown-list/onlyPath');
const whitOption = require('../lim20181-Track-FE-markdown-list/whitoption');


const mdLinks = (file, currentFile, onlyOptionsExists, twoOptionsExists) => {
  const errorMesage = {
    error: 'SINTAXIS INCORRECTA',
    correctOption: 'La sintaxis correcta de la linea de comando es:',
    a: '  mdLinks <ruta> ',
    b: ' mdLinks <ruta>  --stats ',
    c: 'mdLinks <ruta>  --validate ',
    d: 'mdLinks <ruta>  --validate  --stats',
    e: ' mdLinks <ruta>  --stats     --validate'
  }
  const saveData = {
    route: '',
    option: {
      validate: false,
      stats: false
    }
  }
  const promise = new Promise((resolve, reject) => {
    if (file !== undefined) {
      const confirmPath = route.isAbsolute(file);
      if (confirmPath) {
        saveData.route = file;
      } else if (!confirmPath) {
        const convertPath = route.join(currentFile, file);
        saveData.route = convertPath;
      }
    }
    if (onlyOptionsExists === undefined) {
      if (onlyPath(saveData.route)[0] === undefined) {
        resolve('NO SE ENCONTRARON LINKS');
      } else {
        resolve(onlyPath(saveData.route));
      }
    }
    if (onlyOptionsExists !== undefined) {
      if (onlyOptionsExists === '--stats' && twoOptionsExists === undefined) {
        saveData.option.stats = true;
        whitOption(onlyPath(saveData.route), saveData.option)
          .then(response => {
            resolve(response);
          })
      } else if (onlyOptionsExists === '--validate' && twoOptionsExists === undefined) {
        saveData.option.validate = true;
        whitOption(onlyPath(saveData.route), saveData.option)
          .then(response => {
            resolve(response);
          })
      } else if (onlyOptionsExists === '--stats' && twoOptionsExists === '--validate') {
        saveData.option.stats = true;
        saveData.option.validate = true;
        whitOption(onlyPath(saveData.route), saveData.option)
          .then(response => {
            resolve(response);
          })
      } else if (onlyOptionsExists === '--validate' && twoOptionsExists === '--stats') {
        saveData.option.stats = true;
        saveData.option.validate = true;
        whitOption(onlyPath(saveData.route), saveData.option)
          .then(response => {
            resolve(response);
          })
      } else if (onlyOptionsExists !== '--validate' || onlyOptionsExists !== '--stats' || twoOptionsExists !== '--validate' || twoOptionsExists !== '--stats') {
        resolve(errorMesage);
      }
    }
  })
  return promise
}
module.exports = mdLinks;