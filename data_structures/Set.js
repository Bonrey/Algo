class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.values(this.dictionary);
  }

  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }
    
    return false;
  }

  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }

  size() {
    return this.length;
  }
  
  union(anotherSet) {
    const newSet = new Set();  
    this.values().forEach(el => newSet.add(el));
    anotherSet.values().forEach(el => newSet.add(el));

    return newSet;
  }
  
  intersection(anotherSet) {
    const newSet = new Set();
    this.values().forEach(el => {
      if (anotherSet.has(el)) {
        newSet.add(el);
      }
    });
    
    return newSet;
  }
}
