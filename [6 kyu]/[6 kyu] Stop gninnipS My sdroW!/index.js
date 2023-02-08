function spinWords(string){
    let result = string.split(' ');
    
    for (let i = 0; i < result.length; i++) {
      console.log(`Я тут ${result}`)
      if (result[i].length > 4) {
        result[i] = result[i].split('').reverse().join('');
      }
    }
    return result.join(' ');
  }