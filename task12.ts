//Задача: 
//Напишите функцию высшего порядка, которая принимает 
//функцию и массив чисел в качестве аргументов, 
//и применяет данную функцию к каждому элементу массива.

function applyFunctionToNumbers(numbers: number[], func: (x: number) => number): number[] {
    return numbers.map(func);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = applyFunctionToNumbers(numbers, (x) => x * 2);
  console.log(doubledNumbers); 