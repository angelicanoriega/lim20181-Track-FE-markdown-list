const fs = require('fs');
const route = require('path');
const onlyPath = require('../lim20181-Track-FE-markdown-list/onlyPath');
const mdLinks = require('../lim20181-Track-FE-markdown-list/mdLinks');
const currentFile = process.cwd();
const [, , ...args] = process.argv;
const file = args[0];
const onlyOptionsExists = args[1];
const twoOptionsExists = args[2];


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
  mdLinks(saveData.route, saveData.option)
    .then(response => {
      if (response === undefined) {
        console.log('NO SE ENCONTRARON LINKS');
      } else {
        response.forEach(element => {
          console.log(element.file, '', element.href, '', element.text);
        });
      }
    })
}
if (onlyOptionsExists !== undefined) {
  if (onlyOptionsExists === '--stats' && twoOptionsExists === undefined) {
    saveData.option.stats = true;
    mdLinks(saveData.route, saveData.option)
      .then(response => {
        response.forEach(element => {
          console.log(element.total, '', element.unique);
        });      })
  } else if (onlyOptionsExists === '--validate' && twoOptionsExists === undefined) {
    saveData.option.validate = true;
    mdLinks(saveData.route, saveData.option)
      .then(response => {
        response.forEach(element => {
          console.log(element.file, '', element.href, '', element.statusText, '', element.status, element.text);
        });
      })
  } else if (onlyOptionsExists === '--stats' && twoOptionsExists === '--validate') {
    saveData.option.stats = true;
    saveData.option.validate = true;
    mdLinks(saveData.route, saveData.option)
      .then(response => {
        response.forEach(element => {
          console.log(element.total, '', element.unique,'',element.broken);
        });
      })
  } else if (onlyOptionsExists === '--validate' && twoOptionsExists === '--stats') {
    saveData.option.stats = true;
    saveData.option.validate = true;
    mdLinks(saveData.route, saveData.option)
      .then(response => {
        response.forEach(element => {
          console.log(element.total, '', element.unique,'',element.broken);
        });
      })
  } else if (onlyOptionsExists !== '--validate' || onlyOptionsExists !== '--stats' || twoOptionsExists !== '--validate' || twoOptionsExists !== '--stats') {
    console.log(errorMesage);
  }
}
