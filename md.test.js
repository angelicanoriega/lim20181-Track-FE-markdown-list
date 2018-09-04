const mdLink=require('../lim20181-Track-FE-markdown-list/onlyPath');
const whitOption=require('../lim20181-Track-FE-markdown-list/whitoption')
const fs = require('fs');
const file='C:\Users\MariaAngelica\Documents\laboratoria\markdowm-Fe\lim20181-Track-FE-markdown-list\readme-original\README.md';
const directory='C:\Users\MariaAngelica\Documents\laboratoria\markdowm-Fe\lim20181-Track-FE-markdown-list\readme-original';
const errorFile='C:\Users\MariaAngelica\Documents\laboratoria\markdowm-Fe\lim20181-Track-FE-markdown-list\readme-original\ghj.html';

// test('Ruta de archivo ', () => {
//   mdLink.fileResultsAsPromise(file)
//   .then(response =>{
//    expect(response).toBe([ { href: 'https://es.wikipedirg/wiki/Markdown',
//    text: 'Markdown',
//    file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md' },
//  { href: 'https://es.wikipedirg/wiki/Markdown',
//    text: 'Markdown',
//    file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md' },
//  { href: 'https://nodejs.org/',
//    text: 'Node.js',
//    file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md' } ])
//   });  
  
// });
// test('Ruta de carpeta ', () => {
//   mdLink.fileResultsAsPromise(directory)
//   .then(response =>{
//    expect(response).toBe([ { href: 'https://es.wikipedirg/wiki/Markdown',
//    text: 'Markdown',
//    file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md' },
//  { href: 'https://es.wikipedirg/wiki/Markdown',
//    text: 'Markdown',
//    file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md' },
//  { href: 'https://nodejs.org/',
//    text: 'Node.js',
//    file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md' } ])
//   });  
  
// });
// test('Ruta Stast', () => {
//   const saveData={
//     option:{
//         validate:false,
//         stats:true
//     }
// }
//   mdLink.fileResultsAsPromise(file)
//   .then(response =>{
//     whitOption(response,saveData.option,(callback)=>{
//       expect(callback).toBe([ { total: 3, normal: 1, broken: 2 } ])
//   }) 
// });
// });
// test('Ruta Valiate', () => {
//   const saveData={
//     option:{
//         validate:true,
//         stats:false
//     }
// }
//   mdLink.fileResultsAsPromise(file)
//   .then(response =>{
//     whitOption(response,saveData.option,(callback)=>{
//       expect(callback)
//       .toBe([ { href: 'https://es.wikipedirg/wiki/Markdown',
//       text: 'Markdown',
//       file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//       error: 'ENOTFOUND',
//       status: '400',
//       statusText: 'fail' },
//     { href: 'https://es.wikipedirg/wiki/Markdown',
//       text: 'Markdown',
//       file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//       error: 'ENOTFOUND',
//       status: '400',
//       statusText: 'fail' },
//     { href: 'https://nodejs.org/',
//       text: 'Node.js',
//       file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//       status: 200,
//       statusText: 'OK' } ]
//   )
//   }) 
// });
// });
// test('Ruta Valiate & stats', () => {
//   const saveData={
//     option:{
//         validate:true,
//         stats:true
//     }
// }
//   mdLink.fileResultsAsPromise(file)
//   .then(response =>{
//     whitOption(response,saveData.option,(callback)=>{
//       expect(callback)
//       .toBe( [ { href: 'https://es.wikipedirg/wiki/Markdown',
//       text: 'Markdown',
//       file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//       error: 'ENOTFOUND',
//       status: '400',
//       statusText: 'fail',
//       total: 1,
//       normal: 0,
//       broken: 1 },
//     { href: 'https://es.wikipedirg/wiki/Markdown',
//       text: 'Markdown',
//       file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//       error: 'ENOTFOUND',
//       status: '400',
//       statusText: 'fail',
//       total: 2,
//       normal: 0,
//       broken: 2 },
//     { href: 'https://nodejs.org/',
//       text: 'Node.js',
//       file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\readme-original\\README.md',
//       status: 200,
//       statusText: 'OK',
//       total: 3,
//       normal: 1,
//       broken: 2 } ]
//   )
//   }) 
// });
// });
test('MD:path', () => {
  expect(mdLink.onlyFileMd(file).path).toBe('C:\Users\MariaAngelica\Documents\laboratoria\markdowm-Fe\lim20181-Track-FE-markdown-list\readme-original\README.md');
});
test('MD:value true', () => {
  expect(mdLink.onlyFileMd(file).value).toBe(true);
});
test('MD:value false', () => {
  expect(mdLink.onlyFileMd(errorFile).value).toBe(false);
});