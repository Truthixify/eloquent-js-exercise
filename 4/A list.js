// Function to convert an array to a linked list
function arrayToList(array) {
  let list = null;

  // Loop through the array in reverse order
  for (let i = array.length - 1; i >= 0; i--) {
    // Create a new object with a 'value' property and a 'rest' property that references the previous list
    list = { value: array[i], rest: list };
  }

  return list; // Return the resulting linked list
}

// Function to convert a linked list to an array
function listToArray(list) {
  let array = [list.value];

  // Traverse the linked list and add each 'value' to the array
  while (list.rest !== null) {
    list = list.rest;
    array.push(list.value);
  }

  return array; // Return the resulting array
}

// Function to prepend an item to a linked list
function prepend(item, list) {
  // Convert the linked list to an array, add the 'item', and then convert it back to a linked list
  let arr = listToArray(list);
  arr.push(item);
  let newList = arrayToList(arr);

  return newList; // Return the new linked list
}

// Function to find the nth element of a linked list
function nth(list, n) {
  let arr = listToArray(list);

  // Loop through the array and find the element at the specified index 'n'
  for (let i = 0; i < arr.length; i++) {
    if (i === n) {
      return arr[i]; // Return the element at index 'n'
    }
  }
}

// Create a linked list from an array and perform various operations
const listFromArray = arrayToList([1, 2, 3, 4, 5, 6]);
console.log(listFromArray); // Output the linked list
console.log(listToArray(listFromArray)); // Output the array from the linked list
console.log(prepend(4, arrayToList([1, 2]))); // Output the linked list after prepending 4
console.log(nth(listFromArray, 5)); // Output the 5th element in the linked list