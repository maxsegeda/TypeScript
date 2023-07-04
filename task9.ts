//Чистые функции (Pure Functions):

//Чистая функция возвращает результат,
//основываясь только на своих входных аргументах,
//без изменения внешнего состояния. Она не имеет побочных
//эффектов и всегда возвращает одинаковый результат для одних
//и тех же входных данных. Чистые функции легко 
//тестируются и обеспечивают предсказуемость кода.
//Задача:
//Напишите чистую функцию, которая
//принимает строку в качестве аргумента
//и возвращает ее в обратном порядке.

const pureFunction = (str: string): string => {
    return str.split('').reverse().join('');
};

console.log(pureFunction('Hello'))