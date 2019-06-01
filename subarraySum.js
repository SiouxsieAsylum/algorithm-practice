//Given an unsorted array A of size N of
// non-negative integers, find a continuous sub-array which adds to a given number S.
//EG [2,4,3,6,2,1,5,8] 12 should send back 2nd position and 5th position 
//efficient solution is to go through array and add up the numbers. 
//if it becomes bigger than sum, move up the starting point
//how do we do this
/* 
startIndex = 0
endIndex = 1
while endIndex is less than length
add up startindex up to endIndex
if total > sum
startindex++ 
endIndex++ 
 if total === sum, return [startIndex, endIndex]
 if endIndex == length return -1
*/

const reducer = (acc, curr) => acc + curr;

function subArraySum(){
    let startIndex = 0;
    let endIndex = 1; 
    function subArraySumInner(array, sum){
        while (endIndex < array.length) {
            let subArr = array.slice(startIndex, endIndex + 1);
            let total = subArr.reduce(reducer);
            if (total === sum){
                return [startIndex, endIndex];
            } else if (total > sum) {
                startIndex++;
            }
            endIndex++;
        }
        return -1;
    }
    return subArraySumInner
}

const subArrayAssessor = subArraySum();
console.log(subArrayAssessor([2,9,3,6,1,15,5,8,9,13], 21))

