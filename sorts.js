// function mergeSort(array){
//     //get midpoint of array
//     //divide the arrays into two arrays of equal length or one above
//     if (array.length > 1){
//         const midpoint = array.length / 2;
//         const left = array.slice(0, midpoint);
//         const right = array.slice(midpoint);
    
//         const leftLength = left.length;
//         const rightLength = right.length;
    
//         mergeSort(left);
//         mergeSort(right);
    
//         //get initial indexes of the arrays
//         let leftIdx = 0;
//         let rightIdx = 0;
//         let arrayIdx = 0;
    
//         //while leftIdx is less
//         while(leftIdx < leftLength && rightIdx < rightLength){
//             if (left[leftIdx] <= right[rightIdx]){
//                 array[arrayIdx] = left[leftIdx];
//                 leftIdx++;
//             } else {
//                 array[arrayIdx] = right[rightIdx];
//                 rightIdx++;
//             }
//             arrayIdx++;
//         }    
    
//         //check for leftover elements
//         while (leftIdx < leftLength){
//             array[arrayIdx] = left[leftIdx];
//             leftIdx++;
//             arrayIdx++;
//         }
    
//         while(rightIdx < rightLength){
//             array[arrayIdx] = right[rightIdx];
//             rightIdx++;
//             arrayIdx++;
//         }
//     }
//     return array;
// }

// console.log(mergeSort([3,8,2,1,9,5,7,4]))

function bubbleSort(array){
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length - i; j++){
            if (array[j] > array[j + 1]){
                let temp = arrayarray[j + 1]
                array[j + 1] = array[j]
                array[j] = temp;
            }
        }
    }

    return array;
}

console.log(bubbleSort([3,8,2,1,9,5,7,4]))
