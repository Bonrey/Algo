const Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};

const DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;

  this.add = function (el) {
    const newNode = new Node(el, this.tail);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let tmp = this.tail;
      this.tail.next = newNode;
      this.tail = this.tail.next;
      this.tail.prev = tmp;
    }
  }

  this.remove = function (el) {
    if (!this.head) return null;

    while (this.head && this.head.data === el) {
      this.head = this.head.next;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === el) {
        currentNode.prev.next = currentNode.next;
        if (currentNode.next) {
          currentNode.next.prev = currentNode.prev;
        }
      }
      currentNode = currentNode.next;
    }
  }
};

