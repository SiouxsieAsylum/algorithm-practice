// Given an array of integers, 
//return indices of the two numbers such that they add up to a specific target.

// given a number
// shift first number
// subtract a the first number and save that index 
// loop through and see what number is equal to the remainder
// if none, increase startingIndex and go through the loop again

let startingIndex = 0;
function twoSum(numArr, target){
    //figure out how to initialize this and carry the index
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
            twoSum(numArr, target);
    }
}

twoSum([4,2,5,7,8,1,9,12,3], 15)