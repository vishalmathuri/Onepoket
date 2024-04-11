function sumArray(arr) {
    // Check if the input is an array and not empty
    if (!Array.isArray(arr) || arr.length === 0) {
      return 0;
    }
  
    // Calculate the sum of all numbers in the array
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  console.log("Sum:", sumArray(numbers)); // Output: Sum: 15
