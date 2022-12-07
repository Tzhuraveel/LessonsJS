// 1) Створити масив з 20 чисел та:

// let arr = [1, 3245, 212, 10,  63456, 123, 20, 14,  41235, 412, 4567, 231, 678789, 54446, 11234, 678, 2345, 678,
// 434556, 266];


//     a) відсортувати його від меншого до більшого.

// let sortArr = arr.sort((a, b) => a - b)
// console.log(sortArr);

//---------------------------------------------------------------------------------------------------------------------------------------//
// b) відсортувати його від більшого до меншого.

// let sortArr = arr.sort((a, b) => b - a)
// console.log(sortArr);
//

//---------------------------------------------------------------------------------------------------------------------------------------//

//     c) Відфілтрувати числа які є кратними 3.

// let filterArr = arr.filter(value => value % 3 === 0);
// console.log(filterArr)

//---------------------------------------------------------------------------------------------------------------------------------------//

// d) Відфілтрувати числа які є більшими за 10.

// let filterArr = arr.filter(value => value > 10);
// console.log(filterArr)

//---------------------------------------------------------------------------------------------------------------------------------------//

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

// arr.forEach(value => document.write(`<h4>${value}</h4>`))

//---------------------------------------------------------------------------------------------------------------------------------------//

// f) За допомогою map збільшити кожен елемент в масиві в три рази.

// let mapArr = arr.map(value => value * 3);
// console.log(mapArr)


//---------------------------------------------------------------------------------------------------------------------------------------//

//     g) Порахувати загальну суму всіх елментів у масиві (reduce)


//  let arrReduce = arr.reduce((newArr, value) => newArr + value);
// console.log(arrReduce)


//---------------------------------------------------------------------------------------------------------------------------------------//


// 2) Створити масив з 20 стрічок та:

// let array = ['long', 'short', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'o', 'lol', 'fifteen', 'sixteen',
// 'dog', 'eighteen', 'nineteen', 'sea'];

//     a) Відсортувати його в алфавітному порядку


// let sort = array.sort();
// console.log(sort)

//---------------------------------------------------------------------------------------------------------------------------------------//


// b) Відсортувати в зворотньому порядку


// let result = array
//                  .sort()
//                  .reverse()
//
// console.log(result);


//---------------------------------------------------------------------------------------------------------------------------------------//


// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

// let result = array.filter(value => value.length > 4)
// console.log(result)

//---------------------------------------------------------------------------------------------------------------------------------------//


// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

//
// function changeArr(arr){
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         arr[i] = (item.replace(item, `'Sam says ${item}'`))
//     }
//     return arr
//
// }
//
// console.log(changeArr(array));


//---------------------------------------------------------------------------------------------------------------------------------------//


//
// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :


// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];


// a) відсортувати його за  віком (зростання , а потім окремо спадання)

// let sortUsers = users.sort((a, b) => a.age - b.age);
// console.log(sortUsers)

// let sortUsers = users.sort((a, b) => b.age - a.age);
// console.log(sortUsers)

//---------------------------------------------------------------------------------------------------------------------------------------//


// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let sortUsers = users.sort((a,b) => a.name.length - b.name.length)
// console.log(sortUsers)

// let sortUsers = users.sort((a,b) => b.name.length - a.name.length)
// console.log(sortUsers)


//---------------------------------------------------------------------------------------------------------------------------------------//

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу
// його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// let newArr = [];
// users.map((user, index) => (
//     newArr.push({...user, id: index + 1})
// ));
// console.log(newArr)


//---------------------------------------------------------------------------------------------------------------------------------------//


// d) відсортувати його за індентифікатором


// let sortUsers = newArr.sort((a, b) => b.id - a.id);
// console.log(sortUsers)


//---------------------------------------------------------------------------------------------------------------------------------------//


// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)


// let reduceUsers = newArr.reduce((accumulator, user) => {
//         if (user.isMarried) {
//                 accumulator.push(({...user, apartment: true}))
//         }
//         if(!user.isMarried){
//                 accumulator.push(user)
//         }
//         return accumulator
//
// }, []);
// console.log(reduceUsers)


//---------------------------------------------------------------------------------------------------------------------------------------//


// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________


// const cars = [
//         {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power:
// 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power:
// 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power:
// 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power:
// 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power:
// 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power:
// 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
// {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
// {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
// {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
// {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];


// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів


// let filterCars = cars.filter(value => value.volume > 3)
// console.log(filterCars)

//---------------------------------------------------------------------------------------------------------------------------------------//


// - двигун = 2л

// let filterCars = cars.filter(value => value.volume === 2)
// console.log(filterCars)


//---------------------------------------------------------------------------------------------------------------------------------------//


// - виробник мерс

// let filterCars = cars.filter(value => value.producer === "mercedes")
// console.log(filterCars)


//---------------------------------------------------------------------------------------------------------------------------------------//

// - двигун більше 3х літрів + виробник мерседес

// let filterCars = cars.filter(value => value.volume > 3 &  value.producer === "mercedes")
// console.log(filterCars)

//В МАСИВІ НЕМА ТАКОГО


//---------------------------------------------------------------------------------------------------------------------------------------//

// - двигун більше 3х літрів + виробник субару


// let filterCars = cars.filter(value => value.volume > 3 &  value.producer === "subaru")
// console.log(filterCars)

//В МАСИВІ НЕМА ТАКОГО


//---------------------------------------------------------------------------------------------------------------------------------------//

// - сили більше ніж 300


// let filterCars = cars.filter(value => value.power > 300)
// console.log(filterCars)


//---------------------------------------------------------------------------------------------------------------------------------------//

// - сили більше ніж 300 + виробник субару

// let filterCars = cars.filter(value => value.power > 300 && value.producer === 'subaru')
// console.log(filterCars)


//---------------------------------------------------------------------------------------------------------------------------------------//

// - мотор серіі ej


// let filterCars = cars.filter(value => value.engine.startsWith('ej'))
// console.log(filterCars)

//---------------------------------------------------------------------------------------------------------------------------------------//


// - сили більше ніж 300 + виробник субару + мотор серіі ej

// let filterCars = cars.filter(value => value.power > 300 && value.producer === 'subaru' &&
// value.engine.startsWith('ej')) console.log(filterCars)


//---------------------------------------------------------------------------------------------------------------------------------------//


// - двигун меньше 3х літрів + виробник мерседес

// let filterCars = cars.filter(value => value.volume < 3 && value.producer === 'mercedes' )
// console.log(filterCars)


//---------------------------------------------------------------------------------------------------------------------------------------//

// - двигун більше 2л + сили більше 250

// let filterCars = cars.filter(value => value.volume > 2 && value.power > 250 )
// console.log(filterCars)


//---------------------------------------------------------------------------------------------------------------------------------------//


// - сили більше 250  + виробник бмв

// let filterCars = cars.filter(value =>  value.power > 250 && value.producer === 'bmw' )
// console.log(filterCars)


//---------------------------------------------------------------------------------------------------------------------------------------//


// - взять слдующий массив
// const usersWithAddress = [
//         {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//         {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//         {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//         {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number:
// 90}},
//         {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//         {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//         {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//         {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number:
// 43}},
//         {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//         {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//         {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number:
// 121}} ];


// -- Відсортувати їх по ID


// let sortUsers = usersWithAddress.sort((a,b) => a.id - b.id)
// console.log(sortUsers)


//---------------------------------------------------------------------------------------------------------------------------------------//


// -- Відсортувати їх по ID в зворотньому порядку

// let sortUsers = usersWithAddress.sort((a,b) => b.id - a.id)
// console.log(sortUsers)


//---------------------------------------------------------------------------------------------------------------------------------------//

// -- Відсортувати по віку


// let sortUsers = usersWithAddress.sort((a,b) => a.age - b.age)
// console.log(sortUsers)
//

//---------------------------------------------------------------------------------------------------------------------------------------//

// -- Відсортувати по віку в зворотньому порядку


// let sortUsers = usersWithAddress.sort((a,b) => b.age - a.age)
// console.log(sortUsers)

//---------------------------------------------------------------------------------------------------------------------------------------//


// -- Відсорутвати по імені


// let sortUsersName = usersWithAddress.sort((a, b) => {
//         if(a.name > b.name){
//                 return 1
//         }else if(a.name < b.name){
//                 return -1
//         }else if(a.name === b.name){
//                 return 0
//         }
// });
// console.log(sortUsersName)

//---------------------------------------------------------------------------------------------------------------------------------------//

// -- Відсорутвати по назві вулиці


// let sortUsersName = usersWithAddress.sort((a, b) => {
//         if(a.address.street > b.address.street){
//                 return 1
//         }else if(a.address.street < b.address.street){
//                 return -1
//         }else if(a.address.street === b.address.street){
//                 return 0
//         }
// });
// console.log(sortUsersName)


//---------------------------------------------------------------------------------------------------------------------------------------//

// -- Відсорутвати по номеру будинку


// let sortUsersName = usersWithAddress.sort((a, b) => a.address.number - b.address.number);
// console.log(sortUsersName)


//---------------------------------------------------------------------------------------------------------------------------------------//
// -- Залишити тільки тих, хто молодший ніж 30 (filter)


// let filterUsersAge = usersWithAddress.filter(value => value.age < 30)
// console.log(filterUsersAge)


//---------------------------------------------------------------------------------------------------------------------------------------//
// -- Залишити тільки одружених


// let filterUsersAge = usersWithAddress.filter(value => value.isMarried)
// console.log(filterUsersAge)


//---------------------------------------------------------------------------------------------------------------------------------------//
// -- Залишити тільки одружених, які молодні за 30


// let filterUsersAge = usersWithAddress.filter(value => value.isMarried && value.age < 30)
// console.log(filterUsersAge)


//---------------------------------------------------------------------------------------------------------------------------------------//
// -- Залишити лише тих, в кого парні номери будинків.

// let filterUsersAge = usersWithAddress.filter(value => value.address.number % 2 === 0 )
// console.log(filterUsersAge)


//---------------------------------------------------------------------------------------------------------------------------------------//
// -- Порахувати загальний вік всіх людей. (reduce)


// let sdfasdf = usersWithAddress.reduce((total, currentValue) => total + currentValue.age, 0);
// console.log(sdfasdf)


//---------------------------------------------------------------------------------------------------------------------------------------//
// -- Ті, хто одружений і старший за 30 має отримати обєкти child і попасти в новий масив (reduce)

// let reduceUsers = usersWithAddress.reduce((accumulator, user) => {
//         if(user.isMarried && user.age >= 30) {
//                 accumulator.push(({...user, child: true}))
//         }
//         return accumulator
//
//         }, []);
// console.log(reduceUsers)


// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________


const cars = [
    {brand: 'subaru', volume: 2, owner: {name: 'Roki', age: 30, drivingExperience: 4}, price: 200, year: 2010},
    {brand: 'subaru', volume: 3, owner: {name: 'Yura', age: 20, drivingExperience: 1}, price: 700, year: 2020},
    {brand: 'subaru', volume: 6, owner: {name: 'John', age: 26, drivingExperience: 2}, price: 500, year: 2008},
    {brand: 'bmw', volume: 1, owner: {name: 'Andrii', age: 34, drivingExperience: 6}, price: 400, year: 2016},
    {brand: 'bmw', volume: 4, owner: {name: 'Olya', age: 27, drivingExperience: 1}, price: 300, year: 2015},
    {brand: 'mercedes', volume: 3, owner: {name: 'Anna', age: 29, drivingExperience: 3}, price: 450, year: 2007},
    {brand: 'audi', volume: 6, owner: {name: 'Obama', age: 57, drivingExperience: 25}, price: 900, year: 2019},
    {brand: 'audi', volume: 1, owner: {name: 'Biden', age: 62, drivingExperience: 30}, price: 1100, year: 2021},
];


// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної
// потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

let ownerCarName = ['Oleg', 'Tima', 'Sethii', 'Yurchik', 'Dmitro'];

cars.forEach(value => {
    if (value.volume <= 3) {
       value.volume = value.volume + (value.volume * 10 / 100)
        value.owner.name = ownerCarName[0]
        if(value.owner.name === ownerCarName[0]){
            ownerCarName.shift()
        }

    } else{}


});
console.log(cars)

// Далі необхідно дати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та
// ціну на 5%

cars.filter((value, index) => {
    if (index % 2 === 0) {
        value.volume = value.volume + (value.volume * 10 / 100)
        value.price = value.price + (value.price * 5 / 100);
    }
    else{}
});
console.log(cars)


//---------------------------------------------------------------------------------------------------------------------------------------//

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

let newArr = []
let courseDriving = cars.reduce((arr, person) => {

    if (person.owner.drivingExperience < 5 && person.owner.age > 25) {
        person.owner.drivingExperience += 1
        arr.push(person)
        newArr.push(person)

    }else{
        arr.push(person)
    }

    return arr
}, []);
console.log(courseDriving)

function result(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i].price

    }
    return sum
}

console.log(result(newArr));



// ---------------------------------------------------------------------------------------------------------------------в------------------//
// ---------------------------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------------------------//








