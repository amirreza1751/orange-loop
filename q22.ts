function binary_search(arr:Array<number>,l:number,h:number,x:number)
{
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);

        // if 'x' is greater than or equal
        // to arr[mid], then search in
        // arr[mid+1...h]
        if (arr[mid] <= x)
            l = mid + 1;

        // else search in arr[l...mid-1]
        else
            h = mid - 1;
    }

    // Required index
    return h;
}
 
// Method to count for each
// element in 1st array,
// elements less than or equal
// to it in 2nd array
function countEleLessThanOrEqual(arr1:Array<number>,arr2:Array<number>,m:number,n:number)
{
    // Sort the 2nd array
    arr2.sort(function(a:number,b:number){return a-b;});

    // for each element of 1st array
    for (let i = 0; i < m; i++) {
        // Last index of largest element
        // smaller than or equal to x
        let index = binary_search(
            arr2, 0, n - 1, arr1[i]);

        // Required count for the element arr1[i]
        console.log((index + 1) + " ");
    }
}

let arr1=[1, 2, 3, 4, 7, 9 ];
    let arr2=[0, 1, 2, 1, 1.5, 4];
    countEleLessThanOrEqual(
            arr1, arr2, arr1.length,
            arr2.length);
 