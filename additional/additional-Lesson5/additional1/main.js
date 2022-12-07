// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function calc(...number){
    let min = number[0]
    for (let i = 0; i < number.length; i++) {
        if(min > number[i]){
            min = number[i]
        }
    }
    console.log(min)

}
calc(4, 3, 6);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function calculator(...arr){
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
       if(max < arr[i]){
           max = arr[i];
       }
    }
    console.log(max)
}

calculator(2, 4, 1)

// - створити функцію яка повертає найбільше число з масиву


let array3 = [34, 76,4345345, 23, 978];

function calcul(){
    let max = arguments[0][0]
    for (let i = 0; i < arguments[0].length; i++) {
        let item = arguments[0][i]
        if (max < item){
            max = item
        }
    }
    console.log(max)
}
calcul(array3)



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function calculatorAll(arr){
    let empty = 0
    for (let i = 0; i < arr.length; i++) {
     if(empty <= arr[i]){
         empty += arr[i]
     }else if(empty >= arr[i]){
         empty += arr[i]
     }
    }
    return empty / arr.length
}

calculatorAll([15, 10, 5, 30]);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function numbers(...listNum){
    let minNum = listNum[0]
    let maxNum = listNum[0]
    for (let i = 0; i < listNum.length; i++) {
        const item = listNum[i];
        if(minNum > item){
            minNum = item
        }if(maxNum < item){
            maxNum = item
        }
    }
    console.log(maxNum)
    return (minNum)
}
 numbers(3, 4, 67, 1, 78, -234, 23);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

    let emptyArr = [];
function array(arr){
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.round(Math.random() * 100)
    }
    console.log(arr)
}
array(emptyArr)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let arrayEmpty = [];
function arrayTwo(arr, limit){
    for (let i = 0; i < 10; i++) {
        arrayEmpty[i] = Math.round(Math.random() * limit)
    }
    console.log(arrayEmpty)
}
arrayTwo(arrayEmpty, 25)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let arrayThree = [1, 2, 3];
function tryArr(){
    let newArr1 = [];
    for (let i = arrayThree.length - 1, g = 0; i >= 0; i--) {
        newArr1[g] = arrayThree[i]
        g++
    }
    console.log(newArr1)
}
tryArr(arrayThree)

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function argCover(){
    if(arguments.length === 1){
        console.log(arguments[0])
    }else if(arguments.length === 2){
        let result = arguments[0] + arguments[1]
        console.log(result)
    }
}

argCover('hello ', 'world');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// EXAMPLE:
//     [1,2,3,4]
//         [2,3,4,5]
// результат
//     [3,5,7,9]

let resultArr = []
function arrayAccepts(arr1, arr2){
    for (let i = 0, g = 0, h = 0; i < arr1.length, g < arr2.length; i++, g++) {
        resultArr[h] = arr1[i] + arr2[g];
        h++
    }
    console.log(resultArr)
}

arrayAccepts([1, 2, 10, 6], [2, 3, 4, 5]);




// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let resultArray = []
function NewArr(array) {
    for (let i = 0, q = 0; i < array.length; i++) {
        for (const arrayKey in array[i]) {
            resultArray[q++] = arrayKey
        }

    }
    return resultArray
}

let ArrayUsers = [{name: 'Dima', age: 13}, {model: 'Camry'}];
console.log(NewArr(ArrayUsers));


//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let resultArray1 = []
function NewArr1(array) {
    for (let i = 0, q = 0; i < array.length; i++) {
        for (const key in array[i]) {
            resultArray1[q] = array[i][key]
            q++
        }

    }
    return resultArray1
}

console.log(NewArr1(ArrayUsers));
