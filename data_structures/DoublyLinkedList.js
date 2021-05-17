const Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};

const DoublyLinkedList = function () {
  let length = 0;
  this.head = null;
  this.tail = null;

  this.add = function (el) {
    const newNode = new Node(el, this.tail);

    if (this.size() === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let tmp = this.tail;
      this.tail.next = newNode;
      this.tail = this.tail.next;
      this.tail.prev = tmp;
    }

    length++;
  };

  this.remove = function (el) {
    if (this.size() === 0) return null;

    while (this.head && this.head.data === el) {
      this.head = this.head.next;
      length--;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === el) {
        length--;
        currentNode.prev.next = currentNode.next;
        if (currentNode.next) {
          currentNode.next.prev = currentNode.prev;
        }
      }
      currentNode = currentNode.next;
    }
  };

  this.size = function() {
    return length;
  };

  this.print = function() {
    let currentNode = this.head;
    let result = [];

    while (currentNode) {
      result.push(currentNode.data);
      currentNode = currentNode.next;
    }

    console.log(result.join(', '));
  };

  this.reverse = function () {
    if (this.size() === 0) return null;

    this.tail = this.head;
    let currentNode = this.head;

    while (currentNode.next) {
      [currentNode.next, currentNode.prev] = [currentNode.prev, currentNode.next];
      currentNode = currentNode.prev;
    }

    this.head = currentNode;
    [this.head.prev, this.head.next] = [null, currentNode.prev];
  };
};
