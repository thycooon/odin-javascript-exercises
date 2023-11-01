const removeFromArray = function(array,...elementsToRemove) {
    if (Array.isArray(array)){
        if (elementsToRemove.length > 0){
            elementsToRemove.forEach(element => {
                if (array.includes(element)){
                    let elementIdx = array.indexOf(element)
                    array = [...array.slice(0,elementIdx),...array.slice(elementIdx+1)]
                }
            })
            return array;
        } else {
            return array;
        }
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = removeFromArray;
