function solution(number){
    let result = 0;
    for (let i = 0; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
          result += i;
          continue;
      } else if (i % 5 == 0) {
          result += i;
          continue;
      } 
      if (i < 0) {
        console.log("Ниже нуля", 0);
        return 0
      }
    }
    return result
    console.log("Я тоже работаю!");
  }