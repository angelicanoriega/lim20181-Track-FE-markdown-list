const mdLink=require('../lim20181-Track-FE-markdown-list/index');
jest.setTimeout(30000);
const fs = require('fs');
const currentPath = process.cwd();

describe('Veifica que es una promesa',()=>{
  test('validando mdLinks es una funcion',()=>{
    mdLink('..\lim20181-Track-FE-markdown-list\readme-original\carpeta\otracarpeta\README.2.md',currentPath,undefined,undefined)
    .then((response)=>{
      expect(response).toEqual(
    [ { href: 'https://nodejs.org/',
      text: 'Node.js',
      file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\carpeta\\otracarpeta\\README.2.md' },
    { href: 'https:/FFFF/nodejs.org/',
      text: 'Node.js',
      file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\carpeta\\otracarpeta\\README.2.md' } ]
  );
    })
  })
})



// it('Ruta normal ', () => {
//   mdLink(file,currentPath,undefined,undefined)
//  .then(res=>{
//    expect(res).toBe([ { href: 'https://es.wikipedirg/wiki/Markdown',
//    text: 'Markdown',
//    file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md' },
//  { href: 'https://nodejs.org/',
//    text: 'Node.js',
//    file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md' },
//  { href: 'https://nodejs.org/',
//    text: 'Node.js',
//    file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md' },
//  { href: 'https://nodejs.org/',
//    text: 'Node.js',
//    file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md' },
//  { href: 'https://nodejs.org/',
//    text: 'Node.js',
//    file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md' },
//  { href: 'https://nodejs.org/',
//    text: 'Node.js',
//    file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md' } ]
//    )})
//  });
//  it('Ruta con stats ', () => {
//   mdLink(file,currentPath,'--stats',undefined)
//  .then(res=>{
//    expect(res).toBe([ { total: 6, unique: 2, broken: 1 } ])})
//  });
//  it('Ruta con validate ', () => {
//   mdLink(file,currentPath,'--validate',undefined)
//  .then(res=>{
//    expect(res).toBe([ { href: 'https://es.wikipedirg/wiki/Markdown',
//    text: 'Markdown',
//    file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//    status: '400',
//    statusText: 'fail' },
//  { href: 'https://nodejs.org/',
//    text: 'Node.js',
//    file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//    status: 200,
//    statusText: 'OK' },
//  { href: 'https://nodejs.org/',
//    text: 'Node.js',
//    file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//    status: 200,
//    statusText: 'OK' },
//  { href: 'https://nodejs.org/',
//    text: 'Node.js',
//    file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//    status: 200,
//    statusText: 'OK' },
//  { href: 'https://nodejs.org/',
//    text: 'Node.js',
//    file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//    status: 200,
//    statusText: 'OK' },
//  { href: 'https://nodejs.org/',
//    text: 'Node.js',
//    file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//    status: 200,
//    statusText: 'OK' } ]
// )})
//  });
//  it('Ruta con validate stats', () => {
//   mdLink(file,currentPath,'--validate','--stats')
//  .then(res=>{
//    expect(res).toBe(
//     [ { href: 'https://es.wikipedirg/wiki/Markdown',
//     text: 'Markdown',
//     file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//     status: '400',
//     statusText: 'fail',
//     unique: 2,
//     broken: 1,
//     total: 6 },
//   { href: 'https://nodejs.org/',
//     text: 'Node.js',
//     file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//     status: 200,
//     statusText: 'OK' },
//   { href: 'https://nodejs.org/',
//     text: 'Node.js',
//     file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//     status: 200,
//     statusText: 'OK' },
//   { href: 'https://nodejs.org/',
//     text: 'Node.js',
//     file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//     status: 200,
//     statusText: 'OK' },
//   { href: 'https://nodejs.org/',
//     text: 'Node.js',
//     file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//     status: 200,
//     statusText: 'OK' },
//   { href: 'https://nodejs.org/',
//     text: 'Node.js',
//     file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//     status: 200,
//     statusText: 'OK' } ]
// )})
//  });
//   it('Ruta con stats validate ', () => {
//   mdLink(file,currentPath,'--stats','--validate')
//  .then(res=>{
//    expect(res).toBe(
//     [ { href: 'https://es.wikipedirg/wiki/Markdown',
//     text: 'Markdown',
//     file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//     status: '400',
//     statusText: 'fail',
//     unique: 2,
//     broken: 1,
//     total: 6 },
//   { href: 'https://nodejs.org/',
//     text: 'Node.js',
//     file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//     status: 200,
//     statusText: 'OK' },
//   { href: 'https://nodejs.org/',
//     text: 'Node.js',
//     file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//     status: 200,
//     statusText: 'OK' },
//   { href: 'https://nodejs.org/',
//     text: 'Node.js',
//     file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//     status: 200,
//     statusText: 'OK' },
//   { href: 'https://nodejs.org/',
//     text: 'Node.js',
//     file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//     status: 200,
//     statusText: 'OK' },
//   { href: 'https://nodejs.org/',
//     text: 'Node.js',
//     file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//     status: 200,
//     statusText: 'OK' } ]
// )})
//  });
//  it('error mensaje', () => {
//   mdLink(file,currentPath,'--vali',undefined)
//  .then(res=>{
//    expect(res).toBe(
//     { error: 'SINTAXIS INCORRECTA',
//     correctOption: 'La sintaxis correcta de la linea de comando es:',
//     a: '  mdLinks <ruta> ',
//     b: ' mdLinks <ruta>  --stats ',
//     c: 'mdLinks <ruta>  --validate ',
//     d: 'mdLinks <ruta>  --validate  --stats',
//     e: ' mdLinks <ruta>  --stats     --validate' }
// )})
//  });