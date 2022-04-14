function flattenArray(array) {
  // Write your code here
  var newArray = []
  array.forEach((item) => {

    if(Array.isArray(item)){
      item.forEach((value) => {
       newArray.push(value);

      })}
    else{
      newArray.push(item);
    }

    
  })

  return newArray;
}

console.log(flattenArray([1, 2, [3, 4, 5], 6, [7, 8], {1: 23}, 9]))