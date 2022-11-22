
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let calc = (a, b, c) => {
//     if(a > b && b < c){
//         console.log(b)
//     }else if(b > a && a < c){
//         console.lg(a)
//     }else if (a > c && c < b){
//         console.log(c)
//     }
// }
// calc(5,3,8)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let calc = (a,b,c) => {
//     if(a > b && c < a){
//         console.log(a)
//     }else if (b > a && c < b){
//         console.log(b)
//     }else if (c > a && c > b ){
//         console.log(c)
//     }
// }
// calc(5, 8, 4);

// - створити функцію яка повертає найбільше число з масиву

// let calc = (arr) => {
//     let maxNum = arr[0]
//     for (const item of arr) {
//         if (maxNum < item){
//             maxNum = item
//         }
//     }
//     return maxNum
// }
// let array = [5, 7, 3];
// calc(array)

// - створити функцію яка повертає найменьше число з масиву

// let calc = (arr) => {
//     let maxNum = arr[0]
//     for (const item of arr) {
//         if(maxNum < item){
//             maxNum = item
//         }
//     }
//     console.log(maxNum)
// }
// array = [5, 26, 3, 63, 12];
// calc(array)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let calc = (arr) => {
//     let result = 0
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i]
//     }
//    return result
// }
// let array = [5, 20, 5, 30];
// calc(array)





// - Дано натуральное число n. Выведите все числа от 1 до n.

// let calc = Num => {
//     let g = Num
//     for (let i = 0; i < Num; i++) {
//         g--
//         let result = Num - g
//         console.log(result)
//     }
// }
// calc(10)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let calc = (a, b) => {
//     if(a < b){
//         for (let i = a; i <= b; i++) {
//             console.log(i)
//         }
//     }else if (a > b) {
//         for (let i = b; i <= a; i++) {
//             console.log(i)
//         }
//     }
// }
// calc(25, 20)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]





// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100










