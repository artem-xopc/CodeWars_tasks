function getCount(str) {
  let count = 0;
  let vowels = ["a","e","i","o","u"];
  let chars = str.slice("");
  for (let i of chars) {
    if (vowels.includes(i)) {
      count++;
    }
  }
  return count;
}