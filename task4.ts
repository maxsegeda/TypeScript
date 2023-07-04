//Задача:
//Напишите функцию, которая принимает
//массив чисел и возвращает их среднее
//значение (сумму чисел, деленную на количество чисел). 
const numberArray = (numbers: number[]): number => {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i]   
 }
 return sum / numbers.length;
}

let Array2 = [1,2,3,4,5];
console.log(numberArray(Array2))