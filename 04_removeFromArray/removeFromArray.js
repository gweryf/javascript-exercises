const removeFromArray = function(...num) {
    const array = num[0];
    let arr = [];
    array.forEach((item) => {
        if(!num.includes(item)){
            arr.push(item);
        }
    });
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
