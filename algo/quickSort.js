function quickSort(arr) {
  if (!arr.length) return [];

  let pivot = arr[0];
  let lesser = [], equal = [], greater = [];
  for (let val of arr) {
    if (val < pivot) {
      lesser.push(val);
    } else if (val > pivot) {
      greater.push(val);
    } else {
      equal.push(val);
    }
  }

  return [...quickSort(lesser), ...equal, ...quickSort(greater)];
}


let a = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];
let b = quickSort(a);

console.log(b);
