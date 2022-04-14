function uniqueCharacters(stringIn) {


  const array = [];


  for(i = 0; i < stringIn.length; i++){
    array.push(stringIn[i]);
     

    }

    const setArray = new Set();


    for(i = 0; i < array.length; i++){
      if(setArray.has(array[i])){
        return false;
      }
      else if (setArray.has(array[i]) == false) {
        setArray.add(array[i]);
        
      }
    
      

    }
return true; 
 

  

  }



console.log(uniqueCharacters("helo"));