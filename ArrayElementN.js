function
myFunction
(
a, n
)
{

const newArray = [];

for(i = n - 1; i <= a.length; i += n){
  newArray.push(a[i]);

}



return newArray; 
}


  

  console.log(myFunction([1,2,3,4,5,6,7,8,9,10],3))
  console.log(myFunction([10,9,8,7,6,5,4,3,2,1],5))

  

