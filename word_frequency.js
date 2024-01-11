const fs = require('fs')
const path = require('path')
const filePath = process.argv[2]

const stopwords = [
  'a',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'by',
  'for',
  'from',
  'has',
  'he',
  'i',
  'in',
  'is',
  'it',
  'its',
  'of',
  'on',
  'that',
  'the',
  'to',
  'were',
  'will',
  'with',
]

// function remove_stopwords(str) {
//   res = []
//   const allWords = str.split(' ')
//   for(i=0;i<allWords.length;i++) {

//   word_clean = allWords[i].split(".").join("")
//   if(!STOP_WORDS.includes(word_clean)) {
//     res.push(word_clean)
//   }
// }
//   return(res.join(' '))
// }

// remove_stopwords(./test_text.txt);
// console.log(word_clean);


function printWordFreq(file, callback) {
  // Read in `file` and print out the frequency of words in that file.
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err)
      process.exit(1)
    }
    // TODO: write code to count the words in the file
    
    
    const words = data.toLowerCase().split(/\W+/).sort();
    // remove_stopwords(data);
    const wordFrequency = new Map();
    for(let word of words) {
      if(word === '') continue;
      if(stopwords.includes(word)) continue;
      if(wordFrequency.has(word)) {
        wordFrequency.set(word, wordFrequency.get(word) + 1)
      } else {
        wordFrequency.set(word, 1)
      }
      }
    console.log('Initial data read from file: ', data)
    callback(wordFrequency)
  });
}
// console.log(data);

printWordFreq(filePath, (wordCount) => {
  // console.log('The results from your word counts:', wordCount)
  console.log(wordCount)
})
