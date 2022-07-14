const reverseString = function(word) {
    let wrd2 = '';
    let n = word.length;
    for(let i = n-1; i>=0; i--){
        wrd2 += word[i];
    }
    return wrd2;
};

// Do not edit below this line
module.exports = reverseString;
