// run `node index.js` in the terminal

const myFunction = (arr) => {
var obj = {};

arr.forEach((value) => {

if (obj[value.charAt(0).toLowerCase()] === undefined) {

obj[value.charAt(0).toLowerCase()] = [value]; 

}
else{

  obj[value.charAt(0).toLowerCase()].push(value);
}

})

return obj;

}

console.log(myFunction(['Alf', 'Alice', 'Ben']));
console.log(myFunction(['Ant', 'Bear', 'Bird']))