// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.innerHTML = `${user.id} ${user.name}`
            div.classList.add('generalDiv')
            let button = document.createElement('button');
            button.classList.add('button')
            div.appendChild(button)
            document.body.appendChild(div)

            button.onclick = function (e){
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
                    .then(response => response.json())
                    .then(user => {
                            function foo(user){
                                let target = document.querySelector('.target');
                                for (const userKey in user) {
                                    let objKey = user[userKey]
                                    if(typeof objKey === "object"){
                                        let div = document.createElement('div');
                                        div.innerHTML = `${userKey}:`
                                        div.style.color = 'red'
                                        target.appendChild(div)
                                        foo(objKey)
                                    }else {
                                        let div = document.createElement('div');
                                        div.innerHTML = `<b>${userKey}</b> ${objKey}`
                                        target.appendChild(div)
                                    }
                                }
                            }
                            foo(user)
                    })
            }


        }
    })


