function primeFinder(n) {
  // Write your code here

  const primearray = [];
  
  for(let i = 1; i <= n; i++){
    if(isPrime(i)){
      primearray.push(i);
    }

  }
  return primearray;
  }

const isPrime = (n) => {
    if(n === 1){
      return false;
    
    } else if ( n === 2){
      return true;
    }

    for(let i = n - 1; i > 1; i--){
      if(n % i === 0){
        return false;
      }
  

    }
        return true;
    
}


console.log(primeFinder(11))