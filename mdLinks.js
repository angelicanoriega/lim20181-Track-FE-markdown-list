const onlyPath = require('../lim20181-Track-FE-markdown-list/onlyPath');
const whitOption = require('../lim20181-Track-FE-markdown-list/whitoption');

const mdLinks = (path, options) => {
  const promise = new Promise((resolve, reject) => {
    whitOption(onlyPath(path), options)
      .then(response => {
        resolve(response);
      })
  })
  return promise;
}
module.exports = mdLinks;
