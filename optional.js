#!/usr/bin/env node

const mdLink = require('../lim20181-Track-FE-markdown-list/mdLinks');
const currentPath = process.cwd();
const [, , ...args] = process.argv;
const url = args[0];
const valueOptions = args[1];
const valueAllOptions = args[2];

mdLink(url, currentPath, valueOptions, valueAllOptions)
  .then(response => {
    console.log(response.length);

    // ruta
    if (!response[0].hasOwnProperty('status') && !response[0].hasOwnProperty('total')) {
      response.forEach(element => {
        console.log('hola1', response);
      });
    }
    //   stats
    if (!response[0].hasOwnProperty('status') && !response[0].hasOwnProperty('href')) {
      response.forEach(element => {
        console.log('hola1', response);
      });
    }
    //   validate
    if (!response[(response.length) - 1].hasOwnProperty('total') && response[0].hasOwnProperty('status')) {
      response.forEach(element => {
        console.log('hola1', response);
      });
    }
    if (response[(response.length) - 1].hasOwnProperty('total') && response[0].hasOwnProperty('status')) {
      response.forEach(element => {
        console.log('hola1', response);
      });
    }


  })
  .catch(error => {
    console.log(error);

  })
