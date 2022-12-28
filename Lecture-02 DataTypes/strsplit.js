const str = 'The quick brown fox jumps over the lazy dog.0';

const words = str.split(' ');
console.log(words[3]);
//expected outpout: "fox"

const chars = str.split(' ');
console.log(chars[8]);
//expected output: "k"