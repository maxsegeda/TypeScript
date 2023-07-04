//Задача:
//Напишите рекурсивную функцию для вычисления
//числа Фибоначчи с использованием заданного индекса.
const fibonacci = (num: number): number => {
    if (num <= 1) {
      return num;
    } else {
      return fibonacci(num - 1) + fibonacci(num - 2);
    }
  };
  
  console.log(fibonacci(6));