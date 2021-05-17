const displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.add = function (value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let currentNode = this.root;
    let newNode = new Node(value);

    while (currentNode) {
      if (currentNode.value === value) {
        return null;
      }

      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  };

  this.findMin = function () {
    if (!this.root) return null;

    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  };

  this.findMax = function () {
    if (!this.root) return null;

    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  };

  this.isPresent = function (value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  };
}


function isBinarySearchTree(root, lower = -Infinity, upper = Infinity) {
  if (!root) return true;

  let currVal = root.value;
  if (currVal > lower && currVal < upper) {
    return isBinarySearchTree(root.left, lower, currVal) && isBinarySearchTree(root.right, currVal, upper);
  }

  return false;
}
