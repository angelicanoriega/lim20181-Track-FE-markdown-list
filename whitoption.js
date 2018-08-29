const axios = require('axios');

const fileResultsAsPromiseWhitOption=(acumulator)=>{
    acumulator.forEach(element => {
        const link=element.href;
        const paht=element.file;
        console.log();
        axios.get(link)
        .then((response) =>{
            // handle success
            const t=[];

            console.log(response.status);
            t.push(
                {
                    href:path,
                    file:link,
                    status:'200',
                    validate:'ok'

                }
            )
            console.log(t);
          })
          .catch((error)=> {
            // handle error
            console.log('404');
          })


    });
}
module.exports=fileResultsAsPromiseWhitOption;
    