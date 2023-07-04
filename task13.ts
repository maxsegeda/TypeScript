//Задача: 
//Напишите функцию, которая принимает массив чисел и 
//возвращает новый массив, содержащий только четные числа.

const anonymous = (array: number[]): number[] => {
    const array2: number[] = []

for(let i = 0; i < array.length; i++){
    const num = array[i];

if (num % 2 === 0){
    array2.push(num)
    }
  }
return array2;
}
const array3 = [1, 2, 3, 4, 5, 6, 7, 8,];
console.log(anonymous(array3));