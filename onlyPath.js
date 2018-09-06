const myMarked = require('marked');
const fs = require('fs');
const route = require('path');

// leer los datos del archivo
const seeFile = (path) => {
const array=[];   
path.forEach(element=>{
    const file = fs.readFileSync(element, 'utf8');
    var renderer = new myMarked.Renderer();
    renderer.link = (href,title,text) => {
    array.push( {
    href,
    text,
    file:element
    })
    }
myMarked(file, { renderer }); 
}) ;
return array
}

//recursividad de directorios mas filtrado de archivos md
const fileOdirectory=(path,array)=>{
const pathContent=fs.statSync(path);
if (pathContent.isFile()) { 
    const md = /\.(md|mkdn|mdown|markdown?)$/i;   
    const boliano=md.test(route.extname(path));  
    if(boliano){
        array.push(path)
    }
}
else if (pathContent.isDirectory()) {
    const pathBuf = Buffer.from(path);
    const contentPath = fs.readdirSync(pathBuf, 'utf8');
        contentPath.forEach(element => {
        const newpath = path + '/' + element;
        fileOdirectory(newpath,array);
        })                
}         
}

// retorno con promesas
const fileResultsAsPromise=(path)=>{   
    const file=[];
    const promise = new Promise((resolve, reject) => { 
    fileOdirectory(path,file)
    const result=seeFile(file);        
    resolve(result);
     })
    return promise  
}

module.exports={fileResultsAsPromise,seeFile};

    
