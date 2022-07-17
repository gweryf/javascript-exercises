const ftoc = function(fah) {
  let c = Math.round(((fah-32)*5*10)/9)/10;
  return c;
};

const ctof = function(cel) {
  let f = Math.round((1.8*cel + 32)*10)/10;
  return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
