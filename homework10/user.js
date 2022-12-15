let url = new URL(location.href);
let id = url.searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(userInfo => {
        function foo(user){
            for (const userKey in user) {
                let objKey = user[userKey]
                if(typeof objKey === "object"){
                    let div = document.createElement('div');
                    div.innerHTML = `${userKey}:`
                    div.style.color = 'red'
                    document.body.appendChild(div)
                    foo(objKey)
                }else {
                    let div = document.createElement('div');
                    div.innerHTML = `<b>${userKey}</b> ${objKey}`
                    document.body.appendChild(div)
                }
            }
        }
        foo(userInfo)
    });



//
// function foo(key) {

//     for (const keyKey in key) {
//         if (typeof key[keyKey] === "object") {
//             foo(key[keyKey])
//         }
//         let li = document.createElement('li');
//         li.innerText = `${key[keyKey]}`
//         ul.appendChild(li)
//
//     }
//
// }
//
// foo(keyIn)
//


