const path=require('../onlyPath');
const fs = require('fs');
const currentPath = process.cwd();

describe('mdLink',()=>{
  test('validando mdLinks href text file',()=>{
    return path('C:\Users\MariaAngelica\Documents\laboratoria\markdowm-Fe\lim20181-Track-FE-markdown-list\test\readme\carpeta\otracarpeta\README.1.md')
      expect(path('C:\Users\MariaAngelica\Documents\laboratoria\markdowm-Fe\lim20181-Track-FE-markdown-list\test\readme\carpeta\otracarpeta\README.1.md')).toBe([ { href: 'https://nodejs.org/',
      text: 'Node.js',
      file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\otracarpeta\\README.1.md' },
    { href: 'https://nodejs.org/',
      text: 'Node.js',
      file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\otracarpeta\\README.1.md' } ])
    
  })});