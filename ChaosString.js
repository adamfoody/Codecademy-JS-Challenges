// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);


function
myFunction
(
a, b
)
{
  let aFinish = [];
  let bFinish = [];
  
  for(let char of a) {
  if( char.toUpperCase() != char.toLowerCase()) 
     aFinish.push(char); 
  
  }
  
  for(let char of b) {
  if( char.toUpperCase() != char.toLowerCase()) 
     bFinish.push(char); 
  
  }
  
  let test = bFinish.reverse().join("");
  
  let test2 = aFinish.join("");

  const test3 = test2.charAt(0).toUpperCase() + test2.slice(1);

  
  
  return test3 + test; 
  
  
}

console.log(myFunction('java', 'tpi%rcs'));
console.log(myFunction('c%ountry', 'edis'))