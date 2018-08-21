#!/usr/bin/env node

const  fs  = require ( 'fs' ) ; 

const [,, ...args]=process.argv;

const path =args[0];

const mdLinks=(path)=>{
fs.stat(path,(err, file) =>{
    console.log('path',path);
    // console.log();
    // console.log('algo',file);
    // console.log();
 
    if (file.isFile()) {

        console.log('    file'); 
        onlyFileMd(path);
    }
    if (file.isDirectory()) {
        console.log('    directory');
        searchInDirectory(path);
    }
    if(err){
        console.log("Es una ruta invalida");
        
    }

 
})};

const searchInDirectory=(path)=>{
    const pathBuf=Buffer.from(path);

    fs.readdir(pathBuf,'utf-8',(err,pathContent)=>{
        if(err){
            console.log(err.message);
            
        }
        else{console.log(pathContent);
            console.log(path);
            pathContent.forEach(element => {
                console.log(element);
                console.log(path + '/' + element);
                mdLinks(path + '/' + element);
            });
        }
    })
    }
//Archivos md
const onlyFileMd=(path)=>{
   const separatorMd= path.split('.');
   console.log(separatorMd);
   const elementMd=separatorMd.pop ();
   console.log(elementMd);
   if (elementMd ==='md'){
    seeFile(path) ;  
   }
   else{
       console.log('NO EL UN ARCHIVO MD');      
   }
}

//buscar los links 
const  seeFile=(path)=>{
fs.readFile(path,'utf-8',(err,pathContent)=>{
    if(err){
        console.log(err.message);
        
    }
    else{console.log(pathContent);
    }
})
}
mdLinks(path)



    // console.log('    size: ' + stats["size"]);
    // console.log('    mode: ' + stats["mode"]);
    // console.log('    others eXecute: ' + (stats["mode"] & 1 ? 'x' : '-'));
    // console.log('    others Write:   ' + (stats["mode"] & 2 ? 'w' : '-'));
    // console.log('    others Read:    ' + (stats["mode"] & 4 ? 'r' : '-'));
 
    // console.log('    group eXecute:  ' + (stats["mode"] & 10 ? 'x' : '-'));
    // console.log('    group Write:    ' + (stats["mode"] & 20 ? 'w' : '-'));
    // console.log('    group Read:     ' + (stats["mode"] & 40 ? 'r' : '-'));
 
    // console.log('    owner eXecute:  ' + (stats["mode"] & 100 ? 'x' : '-'));
    // console.log('    owner Write:    ' + (stats["mode"] & 200 ? 'w' : '-'));
    // console.log('    owner Read:     ' + (stats["mode"] & 400 ? 'r' : '-'));
 
 
    // console.log('    file:           ' + (stats["mode"] & 0100000 ? 'f' : '-'));
    // console.log('    directory:      ' + (stats["mode"] & 0040000 ? 'd' : '-'));