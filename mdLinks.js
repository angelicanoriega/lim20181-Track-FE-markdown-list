const myMarked = require('marked');
const fs = require('fs');
const route = require('path');

/*-----------------------------------------------------
Valores del archivo */

// leer los datos del archivo
const seeFile = (path) => {
  const array = [];
  path.forEach(element => {
    const file = fs.readFileSync(element, 'utf8');
    var renderer = new myMarked.Renderer();
    renderer.link = (href, title, text) => {
      array.push({
        href,
        text,
        file: element
      })
    }
    myMarked(file, {
      renderer
    });
  });
  return array
}
//recursividad de directorios mas filtrado de archivos md
const fileOdirectory = (path, array) => {
  const pathContent = fs.statSync(path);
  if (pathContent.isFile()) {
    const md = /\.(md|mkdn|mdown|markdown?)$/i;
    const boliano = md.test(route.extname(path));
    if (boliano) {
      array.push(path);
    }
  } else if (pathContent.isDirectory()) {
    const pathBuf = Buffer.from(path);
    const contentPath = fs.readdirSync(pathBuf, 'utf8');
    contentPath.forEach(element => {
      const newpath = path + '/' + element;
      fileOdirectory(newpath, array);
    })
  }
}
// retorno 
const onlyPath = (path) => {
  const currentFile = process.cwd();
  const saveData = {
    route: '',
  }
  const confirmPath = route.isAbsolute(path);
  if (confirmPath) {
    saveData.route = path;
  } else if (!confirmPath) {
    const convertPath = route.join(currentFile, path);
    saveData.route = convertPath;
  }
  const file = [];
  fileOdirectory(saveData.route, file);
  const result = seeFile(file);
  return result
}

/*----------------------------------------------------- 
Volores con opions*/

// Filtra los links que no se repiten
const unique = (array, prop) => {
  const nuevoArray = [];
  const lookup = {};

  for (let i in array) {
    lookup[array[i][prop]] = array[i];
  }
  for (let i in lookup) {
    nuevoArray.push(lookup[i]);
  }
  return nuevoArray;
}
// Validar el status del link
const fetch = require('node-fetch');
const validateLink = (link) => {
  return fetch(link.href)
    .then(response => {
      link.status = response.status;
      link.statusText = response.statusText;
      return link;
    }).catch(err => {
      link.status = '400';
      link.statusText = 'fail';
      return link;
    })
}
// retornando ...........
const whitOption = (path, option) => {
  const optionV = option.validate;
  const optionS = option.stats;
  const obj = [{
    total: 0,
    unique: 0,
    broken: 0
  }]
  const promise = new Promise((resolve, reject) => {
    if (!optionV && !optionS) {
      resolve(path)
    } else {
      Promise.all(path.map(element => {
          return validateLink(element)
        }))
        .then(
          response => {
            if (optionV && !optionS) {
              resolve(response)
            }
            if (!optionV && optionS) {
              const funcional = unique(response, 'href');
              obj[0].unique = funcional.length;
              obj[0].total = response.length;
              response.map(element => {
                if (element.status === '400') {
                  obj[0].broken++;
                }
                return (element)
              });
              resolve(obj)
            }
            if (optionV && optionS) {
              const funcional = unique(response, 'href');
              obj[0].unique = funcional.length;
              obj[0].total = response.length;
              response.map(element => {
                if (element.status === '400') {
                  obj[0].broken++;
                }
                return element
              });
              response.push(obj[0]);
              resolve(response)
            }
          })
    }
  });
  return promise
}
/*----------------------------------------------------- */
const mdLinks = (path, options) => {
  const promise = new Promise((resolve, reject) => {
    whitOption(onlyPath(path), options)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error)
      })
  })
  return promise;
}
module.exports = mdLinks;
