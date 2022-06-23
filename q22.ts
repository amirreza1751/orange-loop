import MergeSort from "./MergeSort"

function binary_search(arr:Array<number>,l:number,h:number,x:number)
{
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        if (arr[mid] < x)
            l = mid + 1;
        else
            h = mid - 1;
    }
    return h;
}

function count_smaller_elements(arr1:Array<number>,arr2:Array<number>,m:number,n:number)
{
    arr1 = MergeSort(arr1)
    console.log("Array1", arr1.toString())
    console.log("Array2", arr2.toString())



    for (let i = 0; i < n; i++) {
        let index = binary_search(arr1, 0, m - 1, arr2[i]);


        console.log("Element:", arr2[i], "Count:", (index + 1));
    }
}

let arr1:number[] = Array.from({length: 10}, () => Math.round((Math.random() + Number.EPSILON) * 100) / 100)
let arr2:number[] = Array.from({length: 15}, () => Math.round((Math.random() + Number.EPSILON) * 100) / 100)
count_smaller_elements(arr1, arr2, arr1.length, arr2.length);
 