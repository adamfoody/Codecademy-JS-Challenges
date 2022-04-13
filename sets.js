
const setsArray = (set, array) => {

  array.forEach((value) => {
    if(!set.has(value)){
      set.add(value);


    }

  })
  return set; 

}

console.log(setsArray(new Set([1, 2, 3]), [4, 5, 6]))
console.log(setsArray(new Set('12345'), [...'6789']))
console.log(setsArray(new Set('123'), [...'123']))


function
myFunction
(
a
)
{

return a.toFixed(2);
}


console.log(myFunction(2.223232));