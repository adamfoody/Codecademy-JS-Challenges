function
myFunction
(
x, y
)
{

  let yKeys = Object.keys(y);
  let yValues = Object.values(y);
  let newKeys = [];

  let xKeys = Object.keys(x);
  let xValues = Object.values(x);


  
  yKeys.forEach((value) => {
    if(value === 'b'){
      newKeys.push('d');

    }
    else{
      newKeys.push(value);

    }



  })

  let newY = {};
  let newX = {};
 
  for(i = 0; i < yKeys.length; i++){
    newY[newKeys[i]] = yValues[i]; 

  }


  for(i = 0; i < xKeys.length; i++){
    newX[xKeys[i]] = xValues[i]; 

  }




  


return  {...newX, ...newY }

}

console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));