// Define a class 'Group' to represent a collection of unique values.
class Group {
  constructor() {
    return this; // Constructor returns the 'this' object.
  }

  // Method 'add' adds a unique value to the group.
  add(value) {
    if (!this.hasOwnProperty(value)) {
      this[value] = ""; // Add the value as a property in the group.
    }
  }

  // Method 'delete' removes a value from the group.
  delete(value) {
    if (this.hasOwnProperty(value)) {
      delete this[value]; // Delete the property associated with the value.
    }
  }

  // Method 'has' checks if a value is in the group.
  has(value) {
    return this.hasOwnProperty(value) ? true : false; // Check if the value is a property.
  }

  // Static method 'from' creates a group from an object.
  static from(object) {
    for (let key of Object.keys(object)) {
      this[key] = object[key]; // Copy properties from the object to the group.
    }

    return this;
  }
}

// Define a class 'GroupIterator' to iterate over the 'Group'.
class GroupIterator {
  constructor(group) {
    this.group = Object.keys(group); // Store the keys of the 'Group'.
    this.index = 0; // Initialize the index for iteration.
  }

  // Method 'next' advances the iterator and returns the next value.
  next() {
    if (this.index === this.group.length) {
      return { done: true }; // Indicate the end of iteration.
    }

    let value = this.group[this.index]; // Get the value at the current index.

    this.index++; // Increment the index for the next iteration.

    return { value: value, done: false }; // Return the current value and indicate it's not done.
  }
}

// Add an iterator to the 'Group' class using the Symbol.iterator property.
Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this); // Create and return a new iterator.
}

// Create an instance of the 'Group' class and add some values to it.
let group = new Group();
group.add("a");
group.add("b");
group.add("c");

// Iterate over the 'group' and log each value.
for (let g of group) {
  console.log(g);
}
