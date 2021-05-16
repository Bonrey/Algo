class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.size = size;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    let next = (this.write + 1) % this.size;
    if (this.queue[this.write] != null) {
      return null;
    }

    this.queue[this.write] = item;
    this.write = next;
    return item;
  }

  dequeue() {
    let next = (this.read + 1) % this.size;
    if (this.queue[this.read] == null) {
      return null;
    }

    let res = this.queue[this.read];
    this.queue[this.read] = null;
    this.read = next;
    return res;
  }
}
