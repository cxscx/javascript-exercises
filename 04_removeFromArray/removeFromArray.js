const removeFromArray = function(initialArray, ...args) {
    const newArray = []
    initialArray.forEach( element => {
        if (!args.includes(element)) newArray.push(element);
    })
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
