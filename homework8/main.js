// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

let arr = [];
function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

arr.push(new User(1, 'Ilia', 'Melnik', 'sadfkhjsdfklj@gmail.com', +380934564367));
arr.push(new User(54, 'Roma', 'Kovaluk', 'gsdfgdfsdfg@gmail.com', +3809712347));
arr.push(new User(64, 'Katya', 'Som', 'asasfasdfas@gmail.com', +380975734567));
arr.push(new User(1512, 'Sonya', 'Petrov', 'cxvbsdfg@gmail.com', +3809753567));
arr.push(new User(45, 'Maks', 'Humko', 'retydf45334@gmail.com', +38097545677));
arr.push(new User(167, 'Bodya', 'Heniy', 'sadfhsdfasd@gmail.com', +38097345677));
arr.push(new User(341, 'Tima', 'Zhuravel', 'F345asdfgaw@gmail.com', +38092345667));
arr.push(new User(786, 'Anna', 'Kovalko', 'asdfh34sdfg@gmail.com', +380923465467));
arr.push(new User(11, 'Serhiy', 'Tot', 'hgfhasdfgq@gmail.com', +380975745667));
arr.push(new User(12, 'Petro', 'Litvin', 'asdfgeqw4rt@gmail.com', +38097456467));


//--------------------------------------------------------------------------------------------------------------------------------------


// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = arr.filter(user => user.id % 2 === 0);
// console.log(filter)


//--------------------------------------------------------------------------------------------------------------------------------------




// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortId = arr.sort((a, b) => a.id - b.id);
// console.log(sortId)


//--------------------------------------------------------------------------------------------------------------------------------------











// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

let newArr = []
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let  user = new Client(1, 'Ilia', 'Melnik', 'sadfkhjsdfklj@gmail.com', +380934564367, ['milk', 'potatoes', 'juice'])
let  user1 = new Client(54, 'Roma', 'Kovaluk', 'gsdfgdfsdfg@gmail.com', +3809712347, ['ice', 'potatoes', 'erty'])
let  user2 = new Client(64, 'Katya', 'Som', 'asasfasdfas@gmail.com', +380975734567,['water', 'sdfgsdfg', 'sdfg'])
let  user3 = new Client(1512, 'Sonya', 'Petrov', 'cxvbsdfg@gmail.com', +3809753567,['cucumber', 'potatoes', 'juice'])
let  user4 = new Client(45, 'Maks', 'Humko', 'retydf45334@gmail.com', +38097545677,['milk', 'potatoes', 'juice'])
let  user5 = new Client(167, 'Bodya', 'Heniy', 'sadfhsdfasd@gmail.com', +38097345677,['bread', 'potatoes'])
let  user6 = new Client(341, 'Tima', 'Zhuravel', 'F345asdfgaw@gmail.com', +38092345667,['olia', 'potatoes', 'juice', 'lkjasdghf'])
let  user7 = new Client(786, 'Anna', 'Kovalko', 'asdfh34sdfg@gmail.com', +380923465467,['milk', 'potatoes', 'juice'])
let  user8 = new Client(11, 'Serhiy', 'Tot', 'hgfhasdfgq@gmail.com', +380975745667,['milk',  'juice'])
let  user9 = new Client(12, 'Petro', 'Litvin', 'asdfgeqw4rt@gmail.com', +38097456467,['milk', 'potatoes', 'juice'])

newArr.push(user, user1, user2, user3, user4, user5, user6, user7, user8, user9);



//--------------------------------------------------------------------------------------------------------------------------------------



// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sortOrder = newArr.sort((a, b) => a.order.length - b.order.length);
// console.log(sortOrder)



//--------------------------------------------------------------------------------------------------------------------------------------








// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car





function Cars1  (carModel, producer, year, maxSpeed, volume, ) {

    this.carModel = carModel;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;


    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`


    function drive()
    {
        return `їдемо зі швидкістю ${maxSpeed} на годину`
    }

    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

    function info()
    {
        return `model - ${carModel}, producer - ${producer}, year - ${year}, speed - ${maxSpeed}, volume - ${volume}`

    }


    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

    this.increaseMaxSpeed = (newSpeed) => this.maxSpeed = newSpeed;

    // -- changeYear (newValue) - змінює рік випуску на значення newValue


    this.changeYear = function (newValue)
    {
        return this.year = newValue
    }

    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


    this.addDriver = function (driver)
    {
        this.driver = driver
        return this + this.driver
    }
}


let car = new Cars1('X5', 'BMW', 2015, 220, 2.2);
car.increaseMaxSpeed(car.maxSpeed + 60)
console.log(car)



     //-----   // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної//
// швидкості// на значення newSpeed



let car1 = new Cars1('X6', 'BMW', 2020, 280, 3.1)
car1.changeYear(car1.year + 40) // -- changeYear (newValue) - змінює рік випуску на значення newValue
console.log(car1)




let car2 = new Cars1('EQE', 'Mercedes', 2022, 300, 2.7);
car2.addDriver({name: 'Oleg', age: 45, })       // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log(car2)



let car3 = new Cars1('S-Class', 'Mercedes', 2019, 260, 2.5)







//
//     - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//


//
//  class Cars {
//
//      constructor(carModel, producer, year, maxSpeed, volume, ) {
//          this.carModel = carModel;
//          this.producer = producer;
//          this.year = year;
//          this.maxSpeed = maxSpeed;
//          this.volume = volume;
//      }
//
//
//      // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//
//          drive() {
//             return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//          }
//
//      // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//
//          info (){
//             return `model - ${this.carModel}, producer - ${this.producer}, year - ${this.year}, speed - ${this.maxSpeed}, volume - ${this.volume}`
//
//          }
//
//      // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
//          increaseMaxSpeed (newSpeed) {
//              return this.maxSpeed += newSpeed
//         }
//
//         // -- changeYear (newValue) - змінює рік випуску на значення newValue
//
//
//         changeYear (newValue){
//            return this.year = newValue
//         }
//
//      // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
//      addDriver (driver){
//          this.driver = driver
//          return this + this.driver
//         }
// }
//
// let car = new Cars('X5', 'BMW', 2015, 220, 2.2);
// car.increaseMaxSpeed(35) //-----   // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
//
//
// let car1 = new Cars('X6', 'BMW', 2020, 280, 3.1)
// car1.changeYear(2032 ) // -- changeYear (newValue) - змінює рік випуску на значення newValue
//
//
//
// let car2 = new Cars('EQE', 'Mercedes', 2022, 300, 2.7);
// car2.addDriver({name: 'Oleg', age: 45, })       // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// let car3 = new Cars('S-Class', 'Mercedes', 2019, 260, 2.5)
//
//




//     -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//


 Cinderella = function (name, age, footSize){


        this.name = name;
        this.age = age;
        this.footSize = footSize;
}

user0 = new Cinderella('Olya', 34, 39);
user1 = new Cinderella('Lola', 23, 35);
user2 = new Cinderella('Anna', 34, 37);
user3 = new Cinderella('Yana', 17, 37);
user4 = new Cinderella('Svitlana', 24, 38);
user5 = new Cinderella('Sasha', 21, 40);
user6 = new Cinderella('Maks', 56, 44);
user7 = new Cinderella('Julia', 23, 39);
user8 = new Cinderella('Nika', 18, 38);
user9 = new Cinderella('VIka', 17, 36);


let girlsArr = []
girlsArr.push(user0, user1, user2, user3, user4, user5, user6, user7, user8, user9);


// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name
//         this.age = age
//         this.shoe = shoe
//     }
// }
//
// let prince = new Prince('John', 24, 44)
//
// for (const girl of girlsArr) {
//     girl.footSize === prince.shoe ? console.log(girl) : null
// }

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// let find = girlsArr.find(girl => girl.footSize === prince.shoe)
// console.log(find)
//
//
//





