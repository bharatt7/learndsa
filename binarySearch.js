/* Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array.
   Return -1 if the target element is not found.
*/

function binarySearch(arr, target) {
  if (arr.length) {
    middleIndex = Math.round((arr.length - 1) / 2);
    if (arr[middleIndex] === target) return middleIndex;
    if (target > arr[middleIndex]) {
      for (let i = middleIndex + 1; i < arr.length; i++) {
        if (arr[i] === target) return i;
      }
      return -1;
    }
    if (target < arr[middleIndex]) {
      for (let i = 0; i < middleIndex; i++) {
        if (arr[i] === target) return i;
      }
      return -1;
    }
  } else return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));
