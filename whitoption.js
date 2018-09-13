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
const retourWhitPromise = (path, option) => {
  const optionV = option.validate;
  const optionS = option.stats;
  const obj = [{
    total: 0,
    unique: 0,
    broken: 0
  }]
  const promise = new Promise((resolve, reject) => {
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
  });
  return promise
}

module.exports = retourWhitPromise;
