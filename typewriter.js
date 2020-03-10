const sentence = "hello there from lighthouse labs";
let count = 0;

for (const char of sentence) {
  if (count === sentence.length - 1) {
    setTimeout(() => {
    console.log()
  }, (count + 1) * 50);
}
  setTimeout(() => {
    process.stdout.write(char);
    // if (count === sentence.length*50) {
      // console.log(count, sentence.length);
    // }
  }, count * 50) 
  count++;
};
