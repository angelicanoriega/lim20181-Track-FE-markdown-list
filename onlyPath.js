const myMarked = require('marked');
const fs = require('fs');
const route = require('path');
const ol=require('../lim20181-Track-FE-markdown-list/whitoption')

const seeFile = (path, acumulator) => {
    const file = fs.readFileSync(path, 'utf8');
    
    console.log('file', file);
    var renderer = new myMarked.Renderer();
    renderer.link = (href,title,text) => {
        acumulator.push(
            {
                href,
                text,
                file:path
            }
        )
    }
    
    
    myMarked(file, { renderer })
    ol(acumulator)
    
    

}
const onlyFileMd = (path, acumulator) => {
    const separatorMd = path.split('.');
    // console.log(separatorMd);
    const elementMd = separatorMd.pop();
    // console.log(elementMd);
    if (elementMd === 'md') {
        seeFile(path,acumulator);
    } else {
    }
}
const confirmCurrent=(path,acumulator)=>{
    fs.stat(path,(err,pathContent) => {
        if (pathContent.isFile()) {
            // console.log('    file');
            onlyFileMd(path,acumulator);
        }
        else if (pathContent.isDirectory()) {
            // console.log('    directory');
            const pathBuf = Buffer.from(path);
            fs.readdir(pathBuf, 'utf-8', (err, pathContent) => {
                if (err) { 
                console.log(err.message);
                } 
                else {
                    pathContent.forEach(element => {
                        const newPath = path + '/' + element;
                        confirmCurrent(newPath,acumulator);
                    });
                }
            })
        }
    }) 
};


const fileResultsAsPromise=(path,acumulator)=>{
    // console.log('hola',path);
    confirmCurrent(path,acumulator);
}


module.exports=fileResultsAsPromise;
    
