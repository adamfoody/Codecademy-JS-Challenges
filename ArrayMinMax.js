

const myFunction = (min, max) => {

  let array = [];

  for(i = min; i <= max; i++){
     array.push(i); 
  }
  
  return array;


}

console.log(myFunction(2, 10));