#!/usr/bin/env node

const  fs  = require ( 'fs' ) ; 

console.log("hola");
const [,, ...args]=process.argv;
console.log("args",fs.access);

console.log("args",args);

console.log("1:path",args[0]);
console.log("2:option",args[1]);

console.log("argv",process.argv);


