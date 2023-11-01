const sumAll = function(intNum1, intNum2) {
    if (typeof intNum1 === "number" && typeof intNum2 ==="number"){
        if (intNum1 >= 0 && intNum2 >= 0){
            let sum = 0;
            let i = (intNum1 < intNum2) ? intNum1 : intNum2;
            let limit = (intNum1 < intNum2) ? intNum2 : intNum1;
            for (i; i<=limit; i++){
                sum += i;
            }
            return sum
        }
    }
    return "ERROR"
};

// Do not edit below this line
module.exports = sumAll;
