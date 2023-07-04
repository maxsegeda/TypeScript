//Задача:
//Напишите функцию на TypeScript,
//которая принимает массив строк
//и возвращает новый массив, содержащий
//только строки, начинающиеся с заглавной буквы.
const functionOnTS = (strings: string[]): string[] => {
    const arrayCapital: string[] = [];
    for(let i = 0; i < strings.length; i++) {
        const str = strings[i];
        if (str[0] === str[0].toUpperCase()) {
        arrayCapital.push(str);
        }
      }
      return arrayCapital
    }
    
    const arrayString = ['Tv', 'Maksym', 'laptop', 'Phone'];
    console.log(functionOnTS(arrayString));

    
      