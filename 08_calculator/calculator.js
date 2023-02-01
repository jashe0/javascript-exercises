const add = function(numA,numB) {
	let numC = numA + numB;
  return numC;
};

const subtract = function(numA,numB) {
  let numC = numA - numB;
  return numC;	
};

const sum = function(arr) {
	if(!Array.isArray(arr)) return;
  let totalNumber = 0;
  for (let i=0,l=arr.length; i<l; i++) {
     totalNumber+=arr[i];
  }
  return totalNumber;

};

const multiply = function(arr) {
  let output = 1;
  for (let i = 0; i < arr.length; ++i) { 
    output *= arr[i]; 
  } 
  return output;
};

const power = function(numA,numB) {
	let power = Math.pow(numA,numB);
  return power;
};

const factorial = function(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
    else {
        return (num * factorial(num - 1));
    }	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
