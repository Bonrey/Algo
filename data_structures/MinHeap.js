const MinHeap = function () {
  const heap = [null];

  this.insert = function (node) {
    heap.push(node);
    let i = heap.length - 1;

    while (heap[Math.floor(i / 2)] && heap[i] < heap[Math.floor(i / 2)]) {
      [heap[i], heap[Math.floor(i / 2)]] = [heap[Math.floor(i / 2)], heap[i]];
      i = Math.floor(i / 2);
    }
  }

  this.remove = function () {
    const min = heap[1];
    const last = heap.pop();
    if (!this.size()) {
      return min || null;
    }

    let i = 1;
    heap[i] = last;
    while (heap[i]) {
      let left = heap[i * 2];
      let right = heap[i * 2 + 1];
      if (!left && !right) break;

      let j = i * 2;
      if (left && right) {
        j += (right < left);
      } else if (right) {
        j++;
      }

      if (heap[i] > heap[j]) {
        [heap[i], heap[j]] = [heap[j], heap[i]];
        i = j;
      } else {
        break;
      }
    }

    return min;
  }

  this.sort = function () {
    let result = [];
    while (this.size()) {
      result.push(this.remove());
    }
    return result;
  }

  this.size = function () {
    return heap.length - 1;
  }

  this.print = function () {
    return heap.slice(1);
  }
};


function isSorted(a) {
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] > a[i + 1]) {
      return false;
    }
  }
  return true;
}

// Generate a randomly filled array
function createRandomArray(size = 5) {
  let a = new Array(size);
  for (let i = 0; i < size; i++) {
    a[i] = Math.floor(Math.random() * 100);
  }
  return a;
}

const array = createRandomArray(10);
console.log(array);

let heap = new MinHeap();
for (const el of array) {
  heap.insert(el);
}

console.log(heap.sort());
