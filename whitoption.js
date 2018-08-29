const axios = require('axios');
const onlyPath=require('../lim20181-Track-FE-markdown-list/onlyPath');


const fileResultsOption=(acumulator)=>{
    acumulator.forEach(element => {
        const link=element.href;
        const paht=element.file;
        console.log();
        return new Promise( (resolve, reject) => {
            fetch(link)
              .then(response => {
                if(response.ok) {
                  return response.text();
                }
                reject('No se ha podido acceder a ese recurso. Status: ' + response.status);
              })
              .then( texto => resolve(texto) )
              .catch (err => reject(err) );
          });
        // axios.get(link)
        // .then((response) =>{
        //     // handle success
        //     const t=[];

        //     console.log(response.status);
        //     t.push(
        //         {
        //             href:path,
        //             file:link,
        //             status:'200',
        //             validate:'ok'

        //         }
        //     )
        //     console.log(t);
        //   })
        //   .catch((error)=> {
        //     // handle errorq
        //     console.log('404');
        //   })


    });
}
// 
// }const retourWhitPromise=(path)=>{
// //     // const acumulator=[];
// //     // const firstResult=onlyPath(path,accumulator);
// //     fileResultsOption(firstResult);


module.exports=fileResultsOption;
    