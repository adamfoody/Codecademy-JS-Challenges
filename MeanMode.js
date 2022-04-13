

//Mean and Mode

/* 
Calculate the Mean and Mode
Create a statsFinder() function that takes in a list of numbers and returns a list containing the mean and mode, in that order. As a reminder, the mean is the average of the values and the mode is the most occurring value. If there are multiple modes, return the mode that occurs first. Make sure that you write your functions and find these answers from scratch – don’t use imported tools!

For example, statsFinder([500, 400, 400, 375, 300, 350, 325, 300]) should return [368.75, 400].
*/

const statsFinder = (array) => {
  // Write your code here

  
  const total = array.reduce((total, item) => {
    return total += item / array.length;
  }, 0)
  
 const hist = {}
 
  array.forEach((x) => {
      hist[x] = 1 + (hist[x] || 0);

  })

  let mode = ''
  let count = 0

  array.reverse().forEach((x) => {
    if(hist[x] >= count){
      mode = x;
      count = hist[x];

    }

  })

  return [total, mode]


}


console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]))