const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	const ans = 
  arr.reduce((total,num)=>{
    return total+num;
  },0);
  return ans;
};

const multiply = function(arr) {
  const ans = 
  arr.reduce((total,num)=>{
    return total*num;
  },1);
  return ans;
};

const power = function(a,b) {
  return Math.pow(a,b);
};

const factorial = function(a) {
	if (a==0) {
    return 1;
  } else {
    let fac = 1;
    for (let i = 1;i<=a;i++) {
      fac = fac*i;
    }
    return fac;
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
