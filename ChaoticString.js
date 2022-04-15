// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

const chaosString = (a, b) => {

  let array = [];

for(let char of a){
  if(char != "%"){
    array.push(char);

  }

}
let array2 = [];

let newA2 = array.join("");

let aCapital = newA2.charAt(0).toUpperCase() + newA2.substr(1, newA2.length);

let newString = "";

for(let char of b){
  if(char != "%"){
    array2.push(char);

  }

}
let newArray = array2.reverse();

let newA = newArray.join("");


return aCapital + newA;

}

console.log(chaosString('java', 'tpi%rcs'));
console.log(chaosString('c%ountry', 'edis'));
console.log(chaosString('down', 'nw%ot'));