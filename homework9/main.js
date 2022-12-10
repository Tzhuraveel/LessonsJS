// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

//
// for (const simpson of simpsons) {
//     let div = document.createElement('div');
//     div.classList.add('member');
//     document.body.appendChild(div)
//     let generalTitle = document.createElement('h4');
//     generalTitle.innerText = `${simpson.name} ${simpson.surname}`;
//     let ageMember = document.createElement('h4')
//     ageMember.innerHTML = `Age - ${simpson.age}`
//     let infoMember = document.createElement('p');
//     infoMember.innerText = `${simpson.info}`
//     let photoMember = document.createElement('img')
//     photoMember.setAttribute('src', `${simpson.photo}`);
//     div.append(generalTitle, ageMember, infoMember, photoMember)
//
// }


//--------------------------------------------------------------------------------------------------------------------------------------------


// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами Приклад структири знаходиться у файлі example.png

// for (const item of coursesArray) {
//     let divInfo = document.createElement('div');
//     document.body.appendChild(divInfo)
//     divInfo.classList.add('divStyle')
//
//
//     for (const value in item) {
//         let div = document.createElement("div")
//         divInfo.appendChild(div)
//     }
//
//     let info = divInfo.querySelectorAll('div')
//         info[0].innerHTML = `${item.title}`
//         info[1].innerHTML = `${item.monthDuration}`
//         info[2].innerHTML = `${item.hourDuration}`
//
//         let ul = document.createElement('ul')
//         info[3].appendChild(ul)
//          for (const ulElement of item.modules) {
//              let li = document.createElement('li')
//              ul.appendChild(li)
//              li.innerHTML = `${ulElement}`
//          }
// }
//     let divClass = document.getElementsByClassName('divStyle')
// for (const item of divClass) {
//
//     titleObj = item.querySelector('div:nth-child(1)')
//     titleObj.classList.add('titleObj')
//
//     monthDuration = item.querySelector('div:nth-child(2)')
//     monthDuration.classList.add('monthDuration')
//
//     hourDuration = item.querySelector('div:nth-child(3)')
//     hourDuration.classList.add('hourDuration')
//
//     modules = item.querySelector('div:nth-child(4)')
//     modules.classList.add('modules')
//
// }


//--------------------------------------------------------------------------------------------------------------------------------------------


// - створити блок,
//   - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let div = document.createElement('div')
// div.classList.add('wrap', 'collapse', 'alpha', 'beta')
// document.body.appendChild(div)
// let newDiv = div.cloneNode(true)
// document.body.appendChild(newDiv)

//--------------------------------------------------------------------------------------------------------------------------------------------


// - Є масив:
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до
// блоку .menu Завдання робити через цикли.


// let arr = ['Main', 'Products', 'About us', 'Contacts'];
//
// for (const item of arr) {
// let ul = document.getElementsByClassName('menu')[0]
//     let li = document.createElement('li')
//     ul.append(li)
//     li.innerHTML = item
//
// }


//--------------------------------------------------------------------------------------------------------------------------------------------



// - Є масив


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (const item of coursesAndDurationArray) {
//     let div = document.createElement('div')
//     div.innerHTML = ` ${item.title}  ${item.monthDuration}`
//     document.body.append(div)
// }



// --------------------------------------------------------------------------------------------------------------------------------------------


// - Є масив


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з
// title  елементу, та <p class='description'> з monthDuration елементу. Завдання робити через цикли.


// for (const item of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//     document.body.appendChild(div)
//
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//
//     let p = document.createElement("p");
//     p.classList.add('description')
//
//     h1.innerHTML = `${item.title}`
//     p.innerHTML = `${item.monthDuration}`
//     div.append(h1, p);
//
//
// }

// --------------------------------------------------------------------------------------------------------------------------------------------


// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку
// зникав елемент з id="text".


// let div = document.createElement('div');
// document.body.appendChild(div);
// div.setAttribute('id', 'text')
//
// let button = document.createElement('button');
// document.body.appendChild(button);
// button.classList.add('button')
//
// let but = document.querySelector('.button');
// but.onclick = function () {
//     let divText = document.querySelector('#text');
//     divText.style.display = 'none';
// };

// --------------------------------------------------------------------------------------------------------------------------------------------


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


// let inputElement = document.createElement('input');
//         inputElement.setAttribute('type','number')
//         inputElement.classList.add('input');
//
// let buttonElement = document.createElement('button');
//         buttonElement.classList.add('buttonInput')
//         document.body.append(inputElement, buttonElement)
//
// let button = document.querySelector('.buttonInput');
//         let headingElement = document.createElement('h5');
// button.onclick = function (e) {
//     let text =  inputElement.value
//     if(text < 18 && text > 0){
//         headingElement.innerText = 'You must be 18 years old'
//     }else if(text >= 18){
//         headingElement.innerText = 'You can watches this video'
//     }else(
//         headingElement.innerText = 'Are you joking?'
//     )
//     document.body.appendChild(headingElement)
// };





//
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
//

//------Ідею взяв з Саши

// let inputElement = document.createElement('input');
// inputElement.classList.add('input');
// inputElement.setAttribute('type', 'number')
//
// let inputElement2 = document.createElement('input');
// inputElement2.classList.add('input');
// inputElement2.setAttribute('type', 'number')
//
// let inputElement3 = document.createElement('input');
// inputElement3.classList.add('input');
// inputElement3.setAttribute('type', 'text')
//
// let button = document.createElement('button');
// button.classList.add('buttonLastTask')
// document.body.append(inputElement, inputElement2, inputElement3, button)
//
//
// button.onclick = function (e) {
//     let firstInput = inputElement.value;
//     let secondInput = inputElement2.value;
//     let thirdInputTX = inputElement3.value;
//
//     function generatorColumn(first, second, third) {
//         let generalTable = document.createElement('table')
//         generalTable.style.border = `1px solid`
//         document.body.appendChild(generalTable)
//
//         for (let i = 0; i < first; i++) {
//             let elementColumn = document.createElement('tr')
//             generalTable.appendChild(elementColumn)
//
//             for (let j = 0; j < second; j++) {
//                 let elementRaw = document.createElement('td');
//                 elementColumn.appendChild(elementRaw)
//                 elementRaw.innerText = `${third}`
//                 elementRaw.style.border = `1px solid`
//             }
//         }
//     }
//
//     generatorColumn(firstInput, secondInput, thirdInputTX);
// };

//-----Пробував сам щось начаклувати)  (так собі)

// let inputElement = document.createElement('input');
// inputElement.classList.add('input');
// inputElement.setAttribute('type', 'number')
//
// let inputElement2 = document.createElement('input');
// inputElement2.classList.add('input');
// inputElement2.setAttribute('type', 'number')
//
// let inputElement3 = document.createElement('input');
// inputElement3.classList.add('input');
// inputElement3.setAttribute('type', 'text')
//
// let button = document.createElement('button');
// button.classList.add('buttonLastTask')
// document.body.append(inputElement, inputElement2, inputElement3, button)
//
// button.onclick = function (e) {
//     let firstInput = Number(inputElement.value)
//     let secondInput = Number(inputElement2.value)
//     let thirdInput = inputElement3.value
//     inputs(firstInput,secondInput,thirdInput)
//     function inputs(first,second){
//         for (let i = 0; i < first; i++) {
//         let generalDiv = document.createElement('div')
//             generalDiv.classList.add('generalDiv')
//             document.body.appendChild(generalDiv)
//         }
//             let gnDiv = document.querySelectorAll('.generalDiv')
//             for (let i = 0; i < gnDiv.length; i++) {
//                 const div = gnDiv[i];
//                 for (let j = 0; j < second; j++) {
//                     let insideDiv = document.createElement('div')
//                     insideDiv.classList.add('insideDiv')
//                     div.appendChild(insideDiv)
//                 }
//             }
//             let divSome = document.querySelectorAll('.generalDiv');
//             for (const divSomeElement of divSome) {
//                 let insideDiv = divSomeElement.querySelectorAll('.insideDiv')
//                 for (const insideDivElement of insideDiv) {
//                     insideDivElement.innerHTML = `${thirdInput}`
//
//                 }
//
//             }
//
//     }
// };














