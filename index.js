#!/usr/bin/env node

const fs = require('fs');
const route = require('path');
const onlyPath=require('../lim20181-Track-FE-markdown-list/onlyPath');
const currentPath = process.cwd();
const [, , ...args] = process.argv;
const result=[];
const url=args[0];
const valueOptions=args[1];
const valueAllOptions=args[2];


const confirmInformation=(file,currentFile,onlyOptionsExists,twoOptionsExists,accumulator)=>{
    const saveData={
         route:'',
         option:{
             validate:false,
             stats:false
         }
    }
    if(file!==undefined){
    const confirmPath= route.isAbsolute(file); 
        if(confirmPath){ 
            saveData.route=file;
            // console.log(saveData);
            // console.log(saveData.route);
        }
        else{
            const convertPath= route.join(currentFile,file);
            saveData.route=convertPath;
            // console.log(saveData);
            // console.log(saveData.route);
        }  
    }
    if(file===undefined){
        console.log("Es una ruta invalida");
        console.log();
        console.log();
        console.log('La sintaxis correcta de la linea de comando es:  ');
        console.log();
        console.log(' 1:  mdLinks <ruta> ');  
        console.log(' 1:  mdLinks <ruta>  --stats  ');
        console.log(' 2:  mdLinks <ruta>  --validate   ');
        console.log(' 3:  mdLinks <ruta>  --validate  --stats  ');
        console.log(' 4:  mdLinks <ruta>  --stats     --validate ');
    }
    if(onlyOptionsExists===undefined){
        // console.log('e',saveData.route);
        onlyPath(saveData.route,accumulator)
        // .then(response =>console.log('index',response));        
    }
    if(onlyOptionsExists!==undefined){
        if(onlyOptionsExists=== '--stats' && twoOptionsExists===undefined ){
            saveData.option.stats=true;
            console.log(saveData.option);
            console.log(saveData.option.stats);
            // mdLinks(saveData.route,saveData.option);
        }      
       else if(onlyOptionsExists=== '--validate' && twoOptionsExists===undefined ){
            saveData.option.validate=true;
            console.log(saveData.option);
            console.log(saveData.option.validate);
            // mdLinks(saveData.route,saveData.option);
        }
        else if(onlyOptionsExists=== '--stats' && twoOptionsExists==='--validate' ){
            saveData.option.stats=true;
            saveData.option.validate=true;
            console.log(saveData.option);
            console.log(saveData.option.stats);
            // mdLinks(saveData.route,saveData.option);
        }

        else if(onlyOptionsExists=== '--validate' && twoOptionsExists==='--stats' ){
            saveData.option.stats=true;
            saveData.option.validate=true;    
            console.log(saveData.option);
            console.log(saveData.option.validate);
            console.log(saveData.option.stats);
            // mdLinks(saveData.route,saveData.option);
        }
        else if(onlyOptionsExists!== '--validate'||onlyOptionsExists!=='--stats'||twoOptionsExists!=='--validate'|| twoOptionsExists!=='--stats' ){
            console.log();
            console.log('Sintaxis incorrecta:');
            console.log();
            console.log('La sintaxis correcta de la linea de comando es:  ');
            console.log();
            console.log(' 1:  mdLinks <ruta> ');  
            console.log(' 1:  mdLinks <ruta>  --stats  ');
            console.log(' 2:  mdLinks <ruta>  --validate   ');
            console.log(' 3:  mdLinks <ruta>  --validate  --stats  ');
            console.log(' 4:  mdLinks <ruta>  --stats     --validate ');
        }
    }
}
 confirmInformation(url,currentPath,valueOptions,valueAllOptions,result);
