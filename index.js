#!/usr/bin/env node

const mdLink = require('../lim20181-Track-FE-markdown-list/mdLinks');
const currentPath = process.cwd();
const [, , ...args] = process.argv;
const url = args[0];
const valueOptions = args[1];
const valueAllOptions = args[2];

mdLink(url, currentPath, valueOptions, valueAllOptions)
.then(response=>{
    console.log(response);
})
.catch(error=>{
    console.log(error);
    
})