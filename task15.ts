//Задача: 
//Создайте класс Person с методом getFullName, 
//который принимает имя и фамилию в качестве аргументов и возвращает полное имя.

class Person {
    constructor(public firstName: string, public lastName: string) {}
  
    getFullName(): string {
      return this.firstName + ' ' + this.lastName;
    }
  }
  
  const person = new Person('John', 'Doe');
  console.log(person.getFullName()); 
  