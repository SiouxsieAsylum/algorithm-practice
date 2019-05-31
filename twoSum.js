// Closure Version
function twoSum(){
    let startingIndex = 0;
    let resultArray = []
     function innerFunction(array, integer){
        let startNum = array.shift();
        let subtractedNum = integer - startNum;
        let found = array.findIndex(function (element){
            return element === subtractedNum;
        })
    
        if (found >= 0) {
            //found is the index of the shortened array
            //add 1 for the initial shift
            //add starting index, which doubles to track the amount of shifts thus far
            let endingIndex = found + 1 + startingIndex;
            return [startingIndex, endingIndex];
        } else {
            startingIndex++;
            return innerFunction(array, integer);
        }
    }
    return innerFunction;
}

const result = twoSum()
console.log(result([4,2,5,7,8,1,9,12,3], 15))

// Unwrapped Version
let startingIndex = 0;
function twoSum(numArr, target){
    let startNum = numArr.shift();
    let subtractedNum = target - startNum;
    let found = numArr.findIndex(function (element){
        return element === subtractedNum
    })

    if (found >= 0) {
        //found is the index of the shortened array
        //add for the initial shift
        //add starting index, which doubles to track the amount of shifts thus far
        let endingIndex = found + 1 + startingIndex
        return [startingIndex, endingIndex];
    } else {
        startingIndex++;
        return twoSum(numArr, target);
    }
}

 console.log(twoSum([4,2,5,7,8,1,9,12,3], 15))