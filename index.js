#!/usr/bin/env node

const fs = require('fs');
const route = require('path');
const onlyPath=require('../lim20181-Track-FE-markdown-list/onlyPath');
const whitOption=require('../lim20181-Track-FE-markdown-list/whitoption');
const currentPath = process.cwd();
const [, , ...args] = process.argv;
const url=args[0];
const valueOptions=args[1];
const valueAllOptions=args[2];


const mdLinks=(file,currentFile,onlyOptionsExists,twoOptionsExists)=>{
    const errorMesage={
        error:'RUTA INVALIDA',
        correctOption:'La sintaxis correcta de la linea de comando es:',
        a:'  mdLinks <ruta> ',
        b:' mdLinks <ruta>  --stats ',
        c:'mdLinks <ruta>  --validate ',
        d:'mdLinks <ruta>  --validate  --stats',
        e:' mdLinks <ruta>  --stats     --validate'
    }    
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
        }
        else if(!confirmPath){
            const convertPath= route.join(currentFile,file);
            saveData.route=convertPath;
        }  

    }
    if(file===undefined){
        return console.log(errorMesage);
    }
    if(onlyOptionsExists===undefined){
        onlyPath.fileResultsAsPromise(saveData.route)
        .then(response =>{
         if(response[0]===undefined){
            console.log('NO SE ENCONTRARON LINKS')   
         }  
         else{console.log(response)  } 
         
        });  
                   
    }
    if(onlyOptionsExists!==undefined){
        if(onlyOptionsExists=== '--stats' && twoOptionsExists===undefined ){
            saveData.option.stats=true;
            onlyPath.fileResultsAsPromise(saveData.route)
            .then(response =>{
             if(response[0]===undefined){
                console.log('NO SE ENCONTRARON LINKS')   
             }  
             else{ 
             whitOption(response,saveData.option,'callback')
             .then(response =>{
                console.log(response);
                
            })
             
             }
            });  
        }      
       else if(onlyOptionsExists=== '--validate' && twoOptionsExists===undefined ){
            saveData.option.validate=true;
            onlyPath.fileResultsAsPromise(saveData.route)
            .then(response =>{
             if(response[0]===undefined){
                console.log('NO SE ENCONTRARON LINKS')   
             }  
             else{ whitOption(response,saveData.option)
             .then(response =>{
                 console.log(response);
                 
             })

             }
        }) 

       }   
        else if(onlyOptionsExists=== '--stats' && twoOptionsExists==='--validate' ){
            saveData.option.stats=true;
            saveData.option.validate=true;
            onlyPath.fileResultsAsPromise(saveData.route)
            .then(response =>{
             if(response[0]===undefined){
                console.log('NO SE ENCONTRARON LINKS')   
             }  
             else{
                whitOption(response,saveData.option)
                .then(response =>{
                    console.log(response);
                    
                })
            } 
            });  
        }

        else if(onlyOptionsExists=== '--validate' && twoOptionsExists==='--stats' ){
            saveData.option.stats=true;
            saveData.option.validate=true;    
            onlyPath.fileResultsAsPromise(saveData.route)
            .then(response =>{
             if(response[0]===undefined){
                console.log('NO SE ENCONTRARON LINKS')   
             }  
             else{ 
                   whitOption(response,saveData.option)
                   .then(response =>{
                    console.log(response);
                    
                })
            } 
            });  
        }
        else if(onlyOptionsExists!== '--validate'||onlyOptionsExists!=='--stats'||twoOptionsExists!=='--validate'|| twoOptionsExists!=='--stats' ){
            errorMesage.error='SINTAXIS INCORRECTA';
            return console.log(errorMesage);
        }
    }
return saveData  
}
 mdLinks(url,currentPath,valueOptions,valueAllOptions);
 module.exports=mdLinks;