const sumAll = function(firstInt, finalInt ) {
    
    let sum = 0
    if (firstInt > finalInt) {
        [firstInt, finalInt] = [finalInt, firstInt];
    }
    if (firstInt < 0 || finalInt < 0 ||
        !Number.isInteger(firstInt) || !Number.isInteger(finalInt)) {
            return "ERROR";
        }
    for (i = firstInt; i <= finalInt; i++) {
        sum += i;
    } return sum;
};

// Do not edit below this line
module.exports = sumAll;
