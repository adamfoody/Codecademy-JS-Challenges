// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array




const myFunction = (a, b) => {
  let obj = {};

  a.forEach((value, iterator) => {
    if(obj[value]){
     obj[value] += 1; 
  
     }
    else{
     obj[value] = 1; 
     }
  
  
  })
  
  return obj;

}

console.log(myFunction([1,2,2,3]))
