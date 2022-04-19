function getX(x, nums) {
  // Write your code here

  const sorty = (a, b) => {
    return a - b; 

  }

  let arr = nums.sort(sorty);
  let answer = 0; 

  arr.forEach((value, iterator) => {
    if(iterator === x - 1){
      answer = value; 
    }
  })

return answer; 
}

console.log(getX(4, [5, 10, -3, -3, 7, 9]));
