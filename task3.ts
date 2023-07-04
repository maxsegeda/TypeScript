//Задача:
//Напишите функцию на TypeScript,
//которая принимает массив чисел и возвращает их сумму.
const sumNumbers = (numbers: number[]): number => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  
  const Array1 = [1, 2, 3, 7, 5];
  console.log(sumNumbers(Array1)); 
  