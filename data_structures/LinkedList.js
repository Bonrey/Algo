function LinkedList() {
  let length = 0;
  let head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = () => length;
  this.head = () => head;

  this.add = function (element) {
    let node = new Node(element);
    if (!head) {
      head = node;
    } else {
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function (element) {
    if (head && head.element === element) {
      head = head.next;
      length--;
    } else {
      let currentNode = head;
      while (currentNode.next && currentNode.next.element !== element) {
        currentNode = currentNode.next;
      }
      if (currentNode.next) {
        currentNode.next = currentNode.next.next;
        length--;
      }
    }
  };

  this.removeAt = function (index) {
    if (index < 0 || index >= length) {
      return null;
    }

    length--;
    if (index === 0) {
      let res = head.element;
      head = head.next;
      return res;
    }

    let currentNode = head;
    while (index-- > 1) {
      currentNode = currentNode.next;
    }

    let res = currentNode.next.element;
    currentNode.next = currentNode.next.next;
    return res;
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.indexOf = function (element) {
    let i = 0;
    let currentNode = head;

    while (currentNode && currentNode.element !== element) {
      currentNode = currentNode.next;
      i++;
    }

    if (!currentNode) {
      i = -1;
    }

    return i;
  };

  this.elementAt = function (index) {
    if (index < 0 || index >= length) {
      return undefined;
    }

    let currentNode = head;
    while (index-- > 0) {
      currentNode = currentNode.next;
    }

    return currentNode.element;
  };
}



let list = new LinkedList();
list.add(0);
list.add(10);
list.add(20);
list.add(30);
list.add(40);
console.log(list.removeAt(0));


for (let i = 0; i < list.size(); i++) {
  console.log(i, list.elementAt(i));
}
