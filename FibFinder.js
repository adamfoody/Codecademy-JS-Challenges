function fibFinder(n) {
  let fibarray = []
  fibarray[0] = 0
  fibarray[1] = 1

  for(i = 2; i <= n; i++){
    fibarray[i] = fibarray[i-1] + fibarray[i-2];



  }
  return fibarray[n];




}

console.log(fibFinder(6))