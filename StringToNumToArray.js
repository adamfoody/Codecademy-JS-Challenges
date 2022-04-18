function myFunction(a) {
   
  let string = a.toString()
  let array = [];
  
  for(let char of string){
     array.push(parseInt(char)); 
  
  }
  
  return array; 
}



console.log(myFunction(10));
console.log(myFunction(193278))
