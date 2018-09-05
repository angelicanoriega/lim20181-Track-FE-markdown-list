 const unique=(arr, prop)=> {
  const nuevoArray = [];
  const lookup  = {};
  for (var i in arr) {
      lookup[arr[i][prop]] = arr[i];
  }
  for (i in lookup) {
      nuevoArray.push(lookup[i]);
  }
  return nuevoArray;
}

const fetch = require('node-fetch');
const validateLink = (link) => {
  return fetch(link.href)
  .then(response => {
    link.status = response.status;
    link.statusText = response.statusText;
    return link;
  }).catch(err => {
    link.status = '400';
    link.statusText ='fail';
    return link;
  })
}
const retourWhitPromise=(path,option,calback)=>{
	const optionV=option.validate;
  const optionS=option.stats;
  const promise = new Promise((resolve, reject) => {
  if(optionV && !optionS){
   Promise.all(path.map(element=>{
     return validateLink(element)
  }))
   .then(
    response=>{
    calback(response)
    }
  )   
  }
  if(!optionV && optionS){
    const obj=[{
     total:0,
     unique:0,
     broken:0
    }]
    Promise.all(path.map(element=>{
      return validateLink(element)
    }))
      .then(
      response=>{
      const funcional=unique(response,'href');
      obj[0].unique=funcional.length;
      response.map(element => {
       
       if(element.status==='400'){
        obj[0].broken++;
       } 
       if(element.href===element.href){
        obj[0].total++;
       } 
        return (element.href)
       }); 
       
      calback(obj)
      
       }
     )   
     
  }
  if(optionV && optionS) {
    Promise.all(path.map(element=>{
      return validateLink(element)
    }))
      .then(
       response=>{
        const funcional=unique(response,'href');
        response.unique=funcional.length;
        response.broken=0;
        response.total=0;
        response.map(element => {
       if(element.status==='400'){
        response.broken++;
       } 
       if(element.href===element.href){
        response.total++;
       } 
        return element
       }); 
      calback(response)
       }
     ) 
  }   
  });
  
  
}

module.exports=retourWhitPromise;
    