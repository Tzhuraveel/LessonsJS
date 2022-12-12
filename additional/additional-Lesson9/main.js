let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];





// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let newArr = [];
// for (const user of users) {
//     newArr.push(JSON.parse(JSON.stringify(user.address)));
// }
// console.log(newArr);


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (const user of users) {
//     let generalDiv = document.createElement('div');
//     generalDiv.innerHTML = `${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`
//     document.body.appendChild(generalDiv)
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// for (const user of users) {
//     let userDiv = document.createElement('div');
//     document.body.appendChild(userDiv)
//
//     for (const userKey in user) {
//         let keyDiv = document.createElement('div');
//         let key = user[userKey]
//
//             if(userKey === 'address'){
//                  keyDiv.innerHTML = `${key.city} ${key.country} ${key.street} ${key.houseNumber}`
//              }else{keyDiv.innerHTML = `${key}`}
//
//         userDiv.appendChild(keyDiv)
//     }
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (const user of users) {
//     let generalDiv = document.createElement('div');
//     document.body.appendChild(generalDiv)
//
//     let h5 = document.createElement('h3');
//     let age = document.createElement('h3')
//     let status = document.createElement('h3');
//     let infoAddress = document.createElement('ul')
//     h5.innerHTML = `${user.name}`
//     age.innerHTML = `${user.age}`;
//     status.innerHTML = `${user.status}`
//
//     for (const key in user.address) {
//         let li = document.createElement('li');
//         infoAddress.appendChild(li)
//         li.innerHTML = `${user.address[key]}`
//     }
//
//     generalDiv.append(h5, age, status, infoAddress);
//
// }


//-------------------------------------------------------------------------------------------------------------------------------------------


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//



// let divWrap = document.getElementById('wrap')
// let divRules = divWrap.getElementsByClassName('rules');
// let divContent = document.getElementById('content');
// let ul = document.createElement('ul');
// divContent.appendChild(ul)
//
//
// function struggle(div) {
//     for (let i = 0; i < div.length; i++) {
//         const divElement = div[i];
//         let li = document.createElement('li');
//         ul.appendChild(li)
//
//         let reference = divElement.getElementsByTagName(`h2`)[0];
//         li.innerHTML = `${reference.innerHTML}`
//
//     }
// }
// struggle(divRules)



//-------------------------------------------------------------------------------------------------------------------------------------------

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];



// function result(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         let divRules = document.createElement('div');
//         let h2 = document.createElement('h2');
//         let h4 = document.createElement('h4')
//         divRules.style.background = `silver`;
//
//         h2.innerHTML = `${item.title}`
//         h4.innerHTML = `${item.body}`
//         document.body.appendChild(divRules)
//         divRules.append(h2,h4)
//     }
// }
// result(rules)
//

