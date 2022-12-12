// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

//   {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//          street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//         lng: '-37.3159'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//          name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }


// function Constructor(id,name,username,email,street,suite,city,zipcode,lat,lng,phone,website,nameCompany,catchPhrase,bs) {
//         this.info1 = {
//             id: id,
//             name: name,
//             username: username,
//             email: email,
//             address: {
//                 street: street,
//                 suite: suite,
//                 city: city,
//                 zipcode: zipcode,
//                 geo: {
//                     lat: lat,
//                     lng: lng,
//                 }
//             }
//         }
//         this.info2 = {
//             phone: phone,
//             website: website,
//             company: {
//                 nameCompany: nameCompany,
//                 catchPhrase: catchPhrase,
//                 bs: bs
//             }
//         }
// }
//
// let user = new Constructor(3,'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '-37.3159', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets')
// console.log(user)


//-----------------------------------------------------------------------------------------------------


//      -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]


// function Constructor(nameTag, action, titleAtt1, actionAtt1, titleAtt2, actionAtt2) {
//     this.nameTag = nameTag
//     this.action = action
//     this.attrs = [
//         {
//             titleAtt1: titleAtt1,
//             actionAtt1: actionAtt1
//         },
//         {
//             titleAtt2: titleAtt2,
//             actionAtt2: actionAtt2
//         }
//     ]
//
// }
// let tagA = new Constructor('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания' +
//     ' ссылок...', 'accesskey', 'Активация ссылки с помощью комбинации клавиш.', 'href', 'Задает адрес документа, на который следует перейти.');
// console.log(tagA)




