import MergeSort from "./MergeSort"

let array1:number[] = Array.from({length: 10}, () => Math.round((Math.random() + Number.EPSILON) * 100) / 100)
let array2:number[] = Array.from({length: 15}, () => Math.round((Math.random() + Number.EPSILON) * 100) / 100)

// console.log("Array 1 Before Sort", array1.toString())
// console.log("Array 1 After Sort", MergeSort(array1).toString())

console.log("Array2", array2.toString())
// let halfLength = Math.floor(array2.length / 2)
// console.log(halfLength, array2[halfLength])

function binarySearchCount(arr: Array<number>, n: number, key:number)
    {
        let left = 0, right = n;
 
        let mid = 0;
        while (left < right) {
            mid = (right + left) >> 1;
 
            // Check if key is present in array
            if (arr[mid] == key) {
 
                // If duplicates are
                // present it returns
                // the position of last element
                while ((mid + 1) < n &&
                       arr[mid + 1] == key)
                    mid++;
                break;
            }
 
            // If key is smaller, ignore right half
            else if (arr[mid] > key)
                right = mid;
 
            // If key is greater, ignore left half
            else
                left = mid + 1;
        }
 
        // If key is not found
        // in array then it will be
        // before mid
        while (mid > -1 && arr[mid] > key)
            mid--;
 
        // Return mid + 1 because of 0-based indexing
        // of array
        return mid + 1;
    }

let sorted_array1 = MergeSort(array1)
console.log(sorted_array1.toString())
array2.forEach((item) => {
    console.log(item, binarySearchCount(sorted_array1, array1.length, item))
})
