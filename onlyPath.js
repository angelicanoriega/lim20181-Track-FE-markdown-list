const myMarked = require('marked');
const fs = require('fs');
const route = require('path');
const currentFile= process.cwd();
const ol=require('../lim20181-Track-FE-markdown-list/whitoption')

// leer los daros del archivo
const seeFile = (path) => {
const array=[]    
    const file = fs.readFileSync(path, 'utf8');
    var renderer = new myMarked.Renderer();
    renderer.link = (href,title,text) => {
    array.push(
            {
                href,
                text,
                file:path
            }
        )
    }
myMarked(file, { renderer }) 
return array
}

const fileOdirectory=(path)=>{
    
}

const onlyFileMd = (path) => {
    const md = /\.(md|mkdn|mdown|markdown?)$/i;
    const obj={
        path,
        value:md.test(route.extname(path))
    }
    return obj
    }
    
    
    const fileResultsAsPromise=(path)=>{
    const promise = new Promise((resolve, reject) => {  
    const pathContent=fs.statSync(path);
    if (pathContent.isFile()) {    
        const md=onlyFileMd(path)       
        if(md.value){ 
            const result=seeFile(md.path)        
            resolve(result);
        } 
        if(!md.value){   
            resolve('NO SE ENCONTRO MARDOWN');
        } 
    }
    else if (pathContent.isDirectory()) {
        const pathBuf = Buffer.from(path);
        const contentPath = fs.readdirSync(pathBuf, 'utf8');
            contentPath.forEach(element => {
            const newpath = path + '/' + element;
            // return fileResultsAsPromise(newpath);
             const md=onlyFileMd(newpath)           
            if(md.value){ 
                const result=seeFile(md.path)        
                resolve(result);
            }
            if(!md.value){   
                console.log('NO ES MARDOWN'+md.path);
            } 
            })                
    }  
    })
    return promise        
    }
    
// const onlyFileMd = (path) => {
// const md = /\.(md|mkdn|mdown|markdown?)$/i;
// const obj={
//     path,
//     value:md.test(route.extname(path))
// }
// return obj
// }


// const fileResultsAsPromise=(path)=>{
// const promise = new Promise((resolve, reject) => {  
// const pathContent=fs.statSync(path);
// if (pathContent.isFile()) {    
//     const md=onlyFileMd(path)       
//     if(md.value){ 
//         const result=seeFile(md.path)        
//         resolve(result);
//     } 
//     if(!md.value){   
//         resolve('NO SE ENCONTRO MARDOWN');
//     } 
// }
// else if (pathContent.isDirectory()) {
//     const pathBuf = Buffer.from(path);
//     const contentPath = fs.readdirSync(pathBuf, 'utf8');
//         contentPath.forEach(element => {
//         const newpath = path + '/' + element;
//         // return fileResultsAsPromise(newpath);
//          const md=onlyFileMd(newpath)           
//         if(md.value){ 
//             const result=seeFile(md.path)        
//             resolve(result);
//         }
//         if(!md.value){   
//             console.log('NO ES MARDOWN'+md.path);
//         } 
//         })                
// }  
// })
// return promise        
// }

// 


module.exports={fileResultsAsPromise,onlyFileMd,seeFile};

    
