// Define a class 'Vec' to represent 2D vectors.
class Vec {
  // Constructor that initializes the x and y components of the vector.
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Method 'plus' adds two vectors and returns a new vector.
  plus(vector) {
    return new Vec(this.x + vector.x, this.y + vector.y);
  }

  // Method 'minus' subtracts one vector from another and returns a new vector.
  minus(vector) {
    return new Vec(this.x - vector.x, this.y - vector.y);
  }

  // Method 'get' calculates the magnitude (length) of the vector.
  get() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

// Create two vector objects for testing.
const vec1 = new Vec(10, 6);
const vec2 = new Vec(5, 1);

// Output the results of vector operations.
console.log(vec1.plus(vec2)); // Output: Vec { x: 15, y: 7 } (result of addition)
console.log(vec1.minus(vec2)); // Output: Vec { x: 5, y: 5 } (result of subtraction)
console.log(vec1.get()); // Output: 11 (magnitude of the vector)
