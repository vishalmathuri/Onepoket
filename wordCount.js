const fs = require('fs');

// Function to count the number of words in a string
function countWords(text) {
  // Remove any leading or trailing whitespaces and split the text by spaces
  const words = text.trim().split(/\s+/);
  // Return the length of the array, which represents the number of words
  return words.length;
}

// Read the content of the "data.txt" file
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Count the number of words in the file content
  const wordCount = countWords(data);
  console.log('Total word count:', wordCount);
});
