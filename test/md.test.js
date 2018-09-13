const mdLink = require('../mdLinks');
const fs = require('fs');
const currentPath = process.cwd();

describe('mdLink', () => {
  test('validando mdLinks Directory (href text file) ', () => {
    return mdLink('C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta', currentPath, undefined, undefined)
      .then(res => {
        expect(res).toEqual(
          [{
              href: 'https://nodejs.org/',
              text: 'Node.js',
              file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta/otracarpeta/README.1.md'
            },
            {
              href: 'https://nodejs.org/',
              text: 'Node.js',
              file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta/otracarpeta/README.1.md'
            },
            {
              href: 'https://nodejs.org/',
              text: 'Node.js',
              file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta/otracarpeta/README.2.md'
            },
            {
              href: 'https:/FFFF/nodejs.org/',
              text: 'Node.js',
              file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta/otracarpeta/README.2.md'
            },
            {
              href: 'https://es.wikipedirg/wiki/Markdown',
              text: 'Markdown',
              file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta/README.4.md'
            },
            {
              href: 'https://nodejs.org/',
              text: 'Node.js',
              file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta/README.4.md'
            }
          ])

      })

  });
  test('validando mdLinks File (href text file Absoluta)', () => {
    return mdLink('C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md', currentPath, undefined, undefined)
      .then(res => {
        expect(res).toEqual(
          [{
              href: 'https://es.wikipedirg/wiki/Markdown',
              text: 'Markdown',
              file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md'
            },
            {
              href: 'https://nodejs.org/',
              text: 'Node.js',
              file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md'
            }
          ])

      })

  });
  test('validando mdLinks href text file relativa', () => {
    return mdLink('..\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md', currentPath, undefined, undefined)
      .then(res => {
        expect(res).toEqual(
          [{
              href: 'https://es.wikipedirg/wiki/Markdown',
              text: 'Markdown',
              file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md'
            },
            {
              href: 'https://nodejs.org/',
              text: 'Node.js',
              file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md'
            }
          ])
      })
  });
  test('validando mdLinks href text file Absoluta --stats', () => {
    return mdLink('C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md', currentPath, '--stats', undefined)
      .then(res => {
        expect(res).toEqual(
          [{
            total: 2,
            unique: 2,
            broken: 1
          }])

      })

  });
  test('validando mdLinks href text file Absoluta --validate', () => {
    return mdLink('C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md', currentPath, '--validate', undefined)
      .then(res => {
        expect(res).toEqual(
          [{
              href: 'https://es.wikipedirg/wiki/Markdown',
              text: 'Markdown',
              file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md',
              status: '400',
              statusText: 'fail'
            },
            {
              href: 'https://nodejs.org/',
              text: 'Node.js',
              file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md',
              status: 200,
              statusText: 'OK'
            }
          ])

      })

  });
  test('validando mdLinks href text file Absoluta --validate --stats', () => {
    return mdLink('C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md', currentPath, '--validate', '--stats')
      .then(res => {
        expect(res).toEqual(
          [{
              href: 'https://es.wikipedirg/wiki/Markdown',
              text: 'Markdown',
              file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md',
              status: '400',
              statusText: 'fail'
            },
            {
              href: 'https://nodejs.org/',
              text: 'Node.js',
              file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md',
              status: 200,
              statusText: 'OK'
            },
            {
              total: 2,
              unique: 2,
              broken: 1
            }
          ])

      })

  });
  test('validando mdLinks href text file Absoluta --stats --validate ', () => {
    return mdLink('C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md', currentPath, '--stats', '--validate')
      .then(res => {
        expect(res).toEqual(
          [{
              href: 'https://es.wikipedirg/wiki/Markdown',
              text: 'Markdown',
              file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md',
              status: '400',
              statusText: 'fail'
            },
            {
              href: 'https://nodejs.org/',
              text: 'Node.js',
              file: 'C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md',
              status: 200,
              statusText: 'OK'
            },
            {
              total: 2,
              unique: 2,
              broken: 1
            }
          ])

      })

  });
  test('validando mdLinks error message', () => {
    return mdLink('C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpetaVacia', currentPath, undefined, undefined)
      .then(res => {
        expect(res).toEqual('NO SE ENCONTRARON LINKS')

      })

  })
  test('validando mdLinks error message', () => {
    return mdLink('C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpetaVacia', currentPath, 'otra', undefined)
      .then(res => {})
      .catch(error => {
        expect(error).toEqual({
          error: 'SINTAXIS INCORRECTA',
          correctOption: 'La sintaxis correcta de la linea de comando es:',
          a: '  mdLinks <ruta> ',
          b: ' mdLinks <ruta>  --stats ',
          c: 'mdLinks <ruta>  --validate ',
          d: 'mdLinks <ruta>  --validate  --stats',
          e: ' mdLinks <ruta>  --stats     --validate'
        })
      })

  })

});
