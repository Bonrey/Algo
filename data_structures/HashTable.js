const getHash = str => str.split('').reduce((hashed, c) => hashed + c.charCodeAt(0), 0);

class HashTable {
  constructor() {
    this.collection = {};
  }

  add(key, value) {
    let hash = getHash(key);
    if (!(hash in this.collection)) {
      this.collection[hash] = {};
    }
    this.collection[hash][key] = value;
  };

  remove(key) {
    let hash = getHash(key);
    if (hash in this.collection) {
      delete this.collection[hash][key];

      if (!Object.keys(this.collection[hash]).length) {
        delete this.collection[hash];
      }
    }
  };

  lookup(key) {
    let hash = getHash(key);
    if (hash in this.collection) {
      return this.collection[hash][key] || null;
    }
    return null;
  };
}


let table = new HashTable();
table.add('hello', 1);
table.add('world', 2);
table.add('corld', 22);
table.add('!', 3);
table.remove('corld');
table.add('00', 0);
table.add('   ', 111);

console.log(table.collection);
