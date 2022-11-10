// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


for (let i = 0; i < 10; i++) {
    document.write(`<div class="target">TEXT</div>`)
}
document.write('--------------------------------------')

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


numbers = [
    {num: 'zero',},
    {num: 'one'},
    {num: 'two'},
    {num: 'three'},
    {num: 'four'},
    {num: 'five'},
    {num: 'six'},
    {num: 'seven'},
    {num: 'eight'},
    {num: 'nine'},
];


for (let i = 0; i < numbers.length; i++) {
    document.write(
        `<div class="numbers">
             ${numbers[i].num}
        </div>`
    );
}
document.write('--------------------------------------')
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write(
        `<div><h1>Hello, man!</h1></div>`
    )
    i++;
}
document.write('--------------------------------------')

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

let o = 0;
while (o < numbers.length) {
    document.write(
        `<div>
            <h1>${numbers[o]}</h1>
         </div>`
    )
    o++;
}
document.write('--------------------------------------')


// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul class="all">`)
for (i = 0; i < listOfItems.length; i++) {
    document.write(` <li>${listOfItems[i]}</li>`)
}
document.write(`</ul>`)
document.write('--------------------------------------')

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (i = 0; i < products.length; i++) {
    document.write(`<div class="products-all">
            <h3 class="product-title">${products[i].title}. price - ${products[i]['price']}</h3>
            <img src="${products[i].image}" class="product-image" alt="${products[i]['title']}">
        </div>`)
}
document.write('--------------------------------------')


//
//
// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


for (i = 0; i < users.length; i++){
    if(users[i].status){
        document.write(`
           <div class="block-for-all-users">
              <h3 class="h3">
                <span class="span-name">${users[i].name}</span> <span class="span-age">${users[i].age}</span> <span class="span-status">${users[i].status}</span>
             </h3>
           </div>`)
    }
}

document.write('--------------------------------------')

for (i = 0; i < users.length; i++){
    if(!users[i].status) {
        document.write(`
           <div class="block-for-all-users">
              <h3 class="h3">
                <span class="span-name">${users[i].name}</span> <span class="span-age">${users[i].age}</span> <span class="span-status">${users[i].status}</span>
             </h3>
           </div>  
        `)
    }
}

document.write('--------------------------------------')
for (i = 0; i < users.length; i++){
    if(users[i].age >= 30) {
        document.write(`
           <div class="block-for-all-users">
              <h3 class="h3">
                <span class="span-name">${users[i].name}</span> <span class="span-age">${users[i].age}</span> <span class="span-status">${users[i].status}</span>
             </h3>
           </div>  
        `)
    }
}
