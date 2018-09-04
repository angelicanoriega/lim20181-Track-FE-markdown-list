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
  const result=[];
  // const promise = new Promise((resolve, reject) => {
  if(optionV && !optionS){
   path.forEach(element => {
   validateLink(element)
   .then(
    response=>{
    result.push(response)
    calback(result)
    }
  )   
  })    
  }
  if(!optionV && optionS){
    const obj=[{
     total:0,
     normal:0,
     broken:0
    }]
    path.forEach(element => {
      validateLink(element)
      .then(
       response=>{
       if(response.status===200){
       obj[0].normal++;
       }  
       if(response.status==='400'){
        obj[0].broken++;
       } 
       if(response.href===response.href){
        obj[0].total++;
       } 
      calback(obj)
       }
     )   
     }) 
  }
  if(optionV && optionS){
    array=[];
    const obj=[{
      total:0,
      normal:0,
      broken:0
     }]
     path.forEach(element => {
       validateLink(element)
       .then(
        response=>{
        if(response.status===200){
          obj[0].normal++;
        }  
        if(response.status==='400'){
          obj[0].broken++;
        } 
        if(response.href===response.href){
         obj[0].total++;
        } 
        response.total=obj[0].total;
        response.normal=obj[0].normal;
        response.broken=obj[0].broken;
        result.push(response)
        calback(result)
        }
      )   
      }) 
  }  
  // });
  
  
}

module.exports=retourWhitPromise;
    