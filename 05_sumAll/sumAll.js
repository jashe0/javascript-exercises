const sumAll = function(numA,numB) {
    let finalSum = 0;
    let error = "ERROR";
    let largerValue = Math.max(numA,numB);
    let smallerValue = Math.min(numA,numB);
    if (((typeof numA==="string"))||(typeof numB==="string")){
        return error;
    } else if (((typeof numA==="object"))||(typeof numB==="object")){
        return error;
    } else if ((largerValue >= 0)&&(smallerValue >=0)){
        for (let i = smallerValue; i<=largerValue; i++ ){
            finalSum = finalSum+i;
        } 
    } else return error 
    return finalSum;
    
}

// Do not edit below this line
module.exports = sumAll;
