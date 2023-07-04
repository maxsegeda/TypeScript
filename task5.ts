//Задача: 
//Напишите функцию на TypeScript,
//которая принимает массив чисел и 
//возвращает массив, содержащий только
//четные числа из исходного массива.
const functionArray1 = (numbers: number[]) : number[] => {
    const evenNumbers :number[] = [];
    for(let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if(num % 2 === 0) {
            evenNumbers.push(num);
        }
       }
       return evenNumbers;
      } 
      
const arrayNumbers = [1, 2, 3, 4, 5, 6];
console.log(functionArray1(arrayNumbers));