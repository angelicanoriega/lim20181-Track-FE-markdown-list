const mdLink = require('../index');
const fs = require('fs');
const currentPath = process.cwd();

describe('mdLink', () => {
  test('validando mdLinks href text file Absoluta', () => {
    return mdLink('C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md', currentPath, undefined, undefined)
      .then(res => {
        expect(res).toEqual(
          [{
            href: 'https://es.wikipedirg/wiki/Markdown',
            text: 'Markdown',
            file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md'
          }])

      })

  })
  test('validando mdLinks href text file relativa', () => {
    return mdLink('..\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md', currentPath, undefined, undefined)
      .then(res => {
        expect(res).toEqual(
          [{
            href: 'https://es.wikipedirg/wiki/Markdown',
            text: 'Markdown',
            file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md'
          }])
      })
  })
  test('validando mdLinks href text file Absoluta --stats', () => {
    return mdLink('C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md', currentPath, '--stats', undefined)
      .then(res => {
        expect(res).toEqual(
          [{
            total: 1,
            unique: 1,
            broken: 1
          }])

      })

  })
  test('validando mdLinks href text file Absoluta --validate', () => {
    return mdLink('C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md', currentPath, '--validate', undefined)
      .then(res => {
        expect(res).toEqual(
          [{
            file:'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md',
            href: 'https://es.wikipedirg/wiki/Markdown',
            status: '400',
            statusText: 'fail',
            text: 'Markdown',
          }])

      })

  })
  test('validando mdLinks href text file Absoluta --validate --stats', () => {
    return mdLink('C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md', currentPath, '--validate', '--stats')
      .then(res => {
        expect(res).toEqual(
          [{
            file:'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md',
            href: 'https://es.wikipedirg/wiki/Markdown',
            status: '400',
            statusText: 'fail',
            text: 'Markdown',
          }])

      })

  })

});
