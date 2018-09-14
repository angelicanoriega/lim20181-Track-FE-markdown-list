const mdLink = require('../mdLinks');
const fs = require('fs');
const currentPath = process.cwd();

describe('mdLink', () => {

  test('validando mdLinks Directory (href text file) ', () => {
    const option = {
      validate: false,
      stats: false
    }
    return mdLink('C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta', option)
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
  test('validando mdLinks File (href text file Absoluta)--validate', () => {
    const option = {
      validate: true,
      stats: false
    }
    return mdLink('C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md', option)
      .then(res => {
        expect(res).toEqual(
          [{
            "file": "C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md",
            "href": "https://es.wikipedirg/wiki/Markdown",
            "status": "400",
            "statusText": "fail",
            "text": "Markdown"
          }, {
            "file": "C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md",
            "href": "https://nodejs.org/",
            "status": 200,
            "statusText": "OK",
            "text": "Node.js"
          }])

      })

  });
  test('validando mdLinks href text file Absoluta --stats', () => {
    const option = {
      validate: false,
      stats: true
    }
    return mdLink('C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md', option)
      .then(res => {
        expect(res).toEqual(
          [{
            total: 2,
            unique: 2,
            broken: 1
          }])

      })

  });
  test('validando mdLinks href text file relativa', () => {
    const option = {
      validate: false,
      stats: false
    }
    return mdLink('..\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md', option)
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
    const option = {
      validate: true,
      stats: true
    }
    return mdLink('..\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md', option)
      .then(res => {
        expect(res).toEqual(
          [{
            "file": "C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md",
            "href": "https://es.wikipedirg/wiki/Markdown",
            "status": "400",
            "statusText": "fail",
            "text": "Markdown"
          }, {
            "file": "C:\\Users\\MariaAngelica\\Documents\\laboratoria\\markdowm-Fe\\lim20181-Track-FE-markdown-list\\test\\readme\\carpeta\\README.4.md",
            "href": "https://nodejs.org/",
            "status": 200,
            "statusText": "OK",
            "text": "Node.js"
          }, {
            "broken": 1,
            "total": 2,
            "unique": 2
          }])
      })
  });


});
