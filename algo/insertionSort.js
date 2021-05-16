function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i], j = i - 1;

    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = curr;
  }
}


let a = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
insertionSort(a);

console.log(a);
