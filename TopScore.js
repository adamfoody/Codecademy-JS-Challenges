function scoreSorter(array, topScore) {
  // Write your code here

  let arr2 = []

  
    array.forEach((value, index) => {
      if(value <= topScore){
        arr2.push(value);
      }

    })


  const sorty = (a, b) => {
      return b - a; 
    
  } 

  return arr2.sort(sorty);



}

console.log(scoreSorter([1, 4, 20000, 2, 3, 9999, 13], 10000))