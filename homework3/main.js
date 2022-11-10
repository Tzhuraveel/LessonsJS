// // - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що
// // дорівнює 1, 0, -3
//
let x = 2003;
if (x !== 0) {
    console.log(true)
} else {
    console.log(false)
}


let a = 1;

if (a !== 0) {
    console.log(true)
} else {
    console.log(false)
}


let a2 = 0;
if (a2 !== 0) {
    console.log(true)
} else {
    console.log(false)
}


let a3 = -3;
if (a3 !== 0) {
    console.log(true)
} else {
    console.log(false)
}

//
// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// // попадає число (в першу, другу, третю или четверту частину години).
//

let time = -45;
if (time < 0) {
    console.log('What are you mean?')
} else if (time <= 15) {
    console.log(1)
} else if (time <= 30) {
    console.log(2)
} else if (time <= 45) {
    console.log(3)
} else if (time <= 59) {
    console.log(4)
} else {
    console.log('Hey?')
}
//
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// // (у першу, другу чи третю).
//

let day = 1;
if (day <= 0) {
    console.log('fault');
} else if (day <= 15) {
    console.log(1)
} else if (day <= 20) {
    console.log(2)
} else if (day <= 31) {
    console.log(3)
} else {
    console.log('fault')
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week = +prompt('enter a day')
switch (week) {
    case 1:
        document.write('<h2>Monday</h2>');
        break;
    case 2:
        document.write('<h2>Tuesday</h2>');
        break;
    case 3:
        document.write('<h2>Wednesday</h2>');
        break;
    case 4:
        document.write('<h2>Thursday</h2>');
        break;
    case 5:
        document.write('<h2>Friday</h2>');
        break;
    case 6:
        document.write('<h2>Saturday</h2>');
        break;
    case 7:
        document.write('<h2>Sunday</h2>');
        break;
    default:
        document.write('<h2>What?</h2>');
}

// - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох . Також потрібно
// врахувати коли введені рівні числа.


let number1 = +prompt('Enter number');
let number2 = +prompt('Enter number2');
if(number1 > number2){
    console.log(number1);
}else if(number2 > number1) {
    console.log(number2)
}


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)



let qqq = '' || 0 || NaN || undefined || null || false || 'default';
console.log(qqq);








































