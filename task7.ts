//Задача:
//Напишите функцию на TypeScript,
//которая принимает массив объектов
//"пользователей" и возвращает массив
//их имен (свойство "name") в верхнем
//регистре, отсортированный в обратном алфавитном порядке.
interface user {
    name: string;
    age: number;
};

const functionName = (users: user[]): string[] => {
    const names: string[] = [];
    for(let i = 0; i < users.length; i++) {
    const namess = users[i].name.toUpperCase()
    names.push(namess)
    }
    return names.sort().reverse()
};

const users: user[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

console.log(functionName(users));
