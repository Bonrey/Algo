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

  this.findMinHeight = function () {
    if (!this.root) return -1;

    let minHeight = Infinity;
    function traverse(root, curr = 0) {
      if (!root) {
        minHeight = Math.min(maxHeight, curr - 1);
        return;
      }

      traverse(root.left, curr + 1);
      traverse(root.right, curr + 1);
    }

    traverse(this.root);
    return minHeight;
  };

  this.findMaxHeight = function () {
    if (!this.root) return -1;

    let maxHeight = 0;
    function traverse(root, curr = 0) {
      if (!root) {
        maxHeight = Math.max(maxHeight, curr - 1);
        return;
      }

      traverse(root.left, curr + 1);
      traverse(root.right, curr + 1);
    }

    traverse(this.root);
    return maxHeight;
  };

  this.isBalanced = function () {
    return this.findMaxHeight() - this.findMinHeight() <= 1;
  };

  this.inorder = function () {
    if (!this.root) return null;

    let result = [];
    function traverse(root) {
      if (!root) return;

      traverse(root.left);
      result.push(root.value);
      traverse(root.right);
    }

    traverse(this.root);
    return result;
  };

  this.preorder = function () {
    if (!this.root) return null;

    let result = [];
    function traverse(root) {
      if (!root) return;

      result.push(root.value);
      traverse(root.left);
      traverse(root.right);
    }

    traverse(this.root);
    return result;
  };

  this.postorder = function () {
    if (!this.root) return null;

    let result = [];
    function traverse(root) {
      if (!root) return;

      traverse(root.left);
      traverse(root.right);
      result.push(root.value);
    }

    traverse(this.root);
    return result;
  };

  this.levelOrder = function () {
    if (!this.root) return null;

    let result = [];
    function traverse(root) {
      const queue = [root];

      while (queue.length) {
        let node = queue.shift();
        result.push(node.value);

        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }

    traverse(this.root);
    return result;
  };

  this.reverseLevelOrder = function () {
    if (!this.root) return null;

    let result = [];
    function traverse(root) {
      const queue = [root];

      while (queue.length) {
        let node = queue.shift();
        result.push(node.value);

        if (node.right) {
          queue.push(node.right);
        }
        if (node.left) {
          queue.push(node.left);
        }
      }
    }

    traverse(this.root);
    return result;
  };

  this.remove = function (value) {
    function getType(node) {
      return !node ? -1 : node.left && node.right ? 2 : node.left || node.right ? 1 : 0;
    }

    const find = value => {
      let parent = null;
      let current = this.root;

      while (current && current.value !== value) {
        parent = current;
        current = value < current.value ? current.left : current.right;
      }

      return { current, parent, type: getType(current) };
    }

    let found = find(value);


    switch (found.type) {
      case 0:
        if (!found.parent) {
          this.root = null;
        } else {
          if (found.parent.value > found.current.value) {
            found.parent.left = null;
          } else {
            found.parent.right = null;
          }
        }
        break;

      case 1:
        if (!found.parent) {
          this.root = found.current.left || found.current.right;
        } else {
          if (found.parent.value > found.current.value) {
            found.parent.left = found.current.left || found.current.right;
          } else {
            found.parent.right = found.current.left || found.current.right;
          }
        }
        break;

      case 2:
        let prevNode = null;
        let currentNode = found.current.right;

        while (currentNode.left) {
          [prevNode, currentNode] = [currentNode, currentNode.left];
        }

        if (!prevNode) {
          currentNode.left = this.root.left;
          this.root = currentNode;
        } else {

          if (getType(currentNode) === 1) {
            prevNode.left = currentNode.right;
          } else {
            prevNode.left = null;
          }

          currentNode = found.current;
          if (!found.parent) {
            this.root = currentNode;
          } else {
            found.parent.right = currentNode;
          }
        }

        break;
      default:
        return null;
    }
  };
  
  this.invert = function (node = this.root) {
    if (!node) return;

    currentNode = node;
    [currentNode.left, currentNode.right] = [currentNode.right, currentNode.left];

    this.invert(node.left);
    this.invert(node.right);
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
