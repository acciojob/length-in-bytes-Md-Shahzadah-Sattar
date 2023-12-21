function byteSize(str) {
  // Create a Blob object with the input string
  const blob = new Blob([str]);

  // Retrieve the size of the Blob in bytes
  const sizeInBytes = blob.size;

  return sizeInBytes;
}

// Test cases
console.log(byteSize('hello world'));      // Output: 11
console.log(byteSize('안녕하세요'));         // Output: 15
console.log(byteSize(''));                  // Output: 0

// Do not change the code below
// const str = prompt("Enter some string.");
// alert(byteSize(str));
