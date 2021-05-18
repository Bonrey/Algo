const displayTree = tree => console.log(JSON.stringify(tree, null, 2));

const Node = function () {
  this.keys = {};
  this.end = false;

  this.setEnd = function () {
    this.end = true;
  };

  this.isEnd = function () {
    return this.end;
  };
};

const Trie = function () {
  this.root = new Node();

  this.add = function (word, root = this.root) {
    if (!word) {
      root.setEnd();
    } else {
      let letter = word[0];
      if (!root.keys.hasOwnProperty(letter)) {
        root.keys[letter] = new Node();
      }

      this.add(word.slice(1), root.keys[letter]);
    }
  };

  this.isWord = function (str, root = this.root) {
    if (!str) return root.isEnd();

    let letter = str[0];
    if (letter in root.keys) {
      return this.isWord(str.slice(1), root.keys[letter]);
    }

    return false;
  };

  this.print = function () {
    let words = [];

    function getWords(root, currentString) {
      if (root.isEnd()) {
        words.push(currentString);
      }

      for (const key in root.keys) {
        getWords(root.keys[key], currentString + key);
      }
    }

    getWords(this.root, '');
    return words;
  };
};
