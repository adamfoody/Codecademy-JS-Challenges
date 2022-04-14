function maxProfitDays(stockPrices) {

  let max = 0;
  let maxIndex = 0;
  let minIndex = 0; 

  
  
  for(i = 0; i < stockPrices.length; i++){
    for(j = stockPrices.length; j > i; j--){
      if(stockPrices[j] - stockPrices[i] > max){
        max = stockPrices[j] - stockPrices[i];
        maxIndex = i; 
        minIndex = j;
        
      }
    }

  }
  
  return [maxIndex, minIndex];
  
  }
  

console.log(maxProfitDays([17, 11, 60, 25, 150, 75, 31, 120]));
