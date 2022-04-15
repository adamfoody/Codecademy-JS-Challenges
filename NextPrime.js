const primer = (a) => {
  let counter = 0;
	  do {
	    counter = 0;
	    for (let i = 2; i <= a; i++) {
	      if (a % i === 0) counter++;
	    }
	    a++;
	  } while (counter > 1);
	  return a - 1;




}

console.log(primer(38));