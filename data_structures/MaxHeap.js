const MaxHeap = function () {
  const heap = [null];

  this.insert = function (node) {
    heap.push(node);
    let i = heap.length - 1;

    while (heap[Math.floor(i / 2)] && heap[i] > heap[Math.floor(i / 2)]) {
      [heap[i], heap[Math.floor(i / 2)]] = [heap[Math.floor(i / 2)], heap[i]];
      i = Math.floor(i / 2);
    }
  }

  this.remove = function () {
    if (!this.size()) return null;

    const max = heap[1];
    const last = heap.pop();

    let i = 1;
    heap[i] = last;
    while (heap[i]) {
      let left = heap[i * 2];
      let right = heap[i * 2 + 1];
      if (!left && !right) break;

      let j = i * 2;
      if (left && right) {
        j += (left < right);
      } else if (right) {
        j++;
      }

      if (heap[i] < heap[j]) {
        [heap[i], heap[j]] = [heap[j], heap[i]];
        i = j;
      } else {
        break;
      }
    }

    return max;
  }

  this.size = function () {
    return heap.length - 1;
  }

  this.print = function () {
    return heap.slice(1);
  }
};


let heap = new MaxHeap();
heap.insert(9);
heap.insert(4);
heap.insert(3);
heap.insert(1);
heap.insert(0);
heap.insert(2);

console.log(heap.print());
heap.remove();
console.log(heap.print());
