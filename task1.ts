///Задача:
///Напишите функцию на TypeScript, которая принимает
///массив чисел и возвращает новый массив, содержащий
///только уникальные числа из 
const uniqueNumber = (numbers: number[]): number[] => {
    const uniqueSet = new Set(numbers);
    return Array.from(uniqueSet);
}

const numbers1 = [1, 2, 3, 3, 4, 4, 5];
console.log(uniqueNumber(numbers1));
