function wordReverser(phrase) {
  // Write your code here

  let arr = [];

  const string = phrase.split(' ');

  for(i = string.length; i >= 0; i--){
    arr.push(string[i]);
  }

return arr.join(' ');  
  
}

console.log(wordReverser("Codecademy rules"));
console.log(wordReverser("May the Fourth be with you"))
