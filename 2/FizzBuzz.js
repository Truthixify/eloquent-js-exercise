// This loop iterates from 0 to 99 (100 times), checking each number for specific conditions.

for (let i = 0; i < 100; i++) {
  // Check if 'i' is divisible by 3 and 5 (both Fizz and Buzz conditions).
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } 
  // Check if 'i' is divisible by 3 (Fizz condition).
  if (i % 3 == 0) {
    console.log("Fizz");
  } 
  // Check if 'i' is divisible by 5 (Buzz condition).
  if (i % 5 == 0){
    console.log("Buzz");
  }
}