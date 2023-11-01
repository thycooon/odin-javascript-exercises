const repeatString = function(string, num) {
    if (typeof string === "string" && typeof num === "number"){
        if (num === 0 || string === '') {
            return ''
        } else if (num > 0 && string.length > 0) {
            let newString = "";
            for (let i=0; i<num; i++){
                newString += string;
            }
            return newString
        }
    }

    return "ERROR"
};

// Do not edit below this line
module.exports = repeatString;
