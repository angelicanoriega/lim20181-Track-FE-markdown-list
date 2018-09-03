const fetch = require('node-fetch');
const validateLink = (link) => {
  return fetch(link.href)
  .then(response => {
    link.status = response.status;
    link.statusText = response.statusText;
    return link;
  }).catch(err => {
    link.error = err.code;
    link.status = '400';
    link.statusText ='fail';
    return link;
  })
}
const retourWhitPromise=(path,option)=>{
  o=[]
	const optionV=option.validate;
  const optionS=option.stats;
  // const promise = new Promise((resolve, reject) => {
  if(optionV && !optionS){
   path.forEach(element => {
   validateLink(element)
   .then(
    response=>{
      console.log(response);
      
    }
  )   
  })    
  }
  if(!optionV && optionS){
    const obj={
     total:0,
     normal:0,
     broken:0
    }
    path.forEach(element => {
      validateLink(element)
      .then(
       response=>{
       if(response.status===200){
       obj.normal++;
       }  
       if(response.status==='400'){
        obj.broken++;
       } 
       if(response.href===response.href){
        obj.total++;
       } 
  console.log(obj);
  
       }
     )   
     }) 
  }
  if(optionV && optionS){
    o=[];
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
        console.log(response);
        
        }
      )   
      }) 
  }  
  // });
  
  
}

module.exports=retourWhitPromise;
    