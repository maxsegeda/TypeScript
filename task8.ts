//Задача:
//Напишите функцию filterExpensiveProducts,
//которая принимает массив объектов products
//и максимальную цену maxPrice. Функция должна
//вернуть новый массив, содержащий только продукты,
//цена которых не превышает maxPrice.\
interface priceName {
    name: string;
    price: number;
}
const filterExpensiveProducts = (priceNames: priceName[], maxPrice: number ): priceName[] => {
    const arrayPrice: priceName[] = [];

    for(let i = 0; i < priceNames.length; i++){
    const pricee = priceNames[i]; 

    if(pricee.price <= maxPrice) {
    arrayPrice.push(pricee);
  }
 }
    return arrayPrice
}

const products: priceName[] = [
    { name: "iPhone", price: 1000 },
    { name: "Samsung Galaxy", price: 800 },
    { name: "Google Pixel", price: 700 },
    { name: "Xiaomi Redmi", price: 300 },]

    const maxPrice = 800;
    const result = filterExpensiveProducts(products, maxPrice);
    console.log(result);