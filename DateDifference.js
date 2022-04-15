

// Calculate difference between two dates in hours, minutes, and seconds

const dateDifference = (a, b) => {

  let obj = {
    hrs: 0,
    min: 0,
    sec: 0,
    
    
    };
    if(Math.abs(a.getHours()) > Math.abs(b.getHours()) ){
    obj.hrs = Math.abs(a.getHours()) - Math.abs(b.getHours());
  
    }

    else{
    obj.hrs = Math.abs(b.getHours()) - Math.abs(a.getHours());


    }
    if(Math.abs(a.getMinutes()) > Math.abs(b.getMinutes()) ){
      obj.min = Math.abs(a.getMinutes()) - Math.abs(b.getMinutes());
      }
      else{
      obj.min = Math.abs(b.getMinutes()) - Math.abs(a.getMinutes());

      }

      if(Math.abs(a.getSeconds()) > Math.abs(b.getSeconds()) ){
        obj.sec = Math.abs(a.getSeconds()) - Math.abs(b.getSeconds());
      
        }  
        else{
    
        obj.sec = Math.abs(b.getSeconds()) - Math.abs(a.getSeconds());
     
        }

    return obj;




}

console.log(dateDifference(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10')))
console.log(dateDifference(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00')))