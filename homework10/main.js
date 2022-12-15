fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {

        let ul = document.createElement('ul');
        document.body.appendChild(ul)

        for (const user of users) {

            let li = document.createElement('li');
            li.style.fontSize = `20px`
            let a = document.createElement('a');

            li.innerText = `${user.id} ${user.name}`
            a.innerText = ` link to the user`
            a.href = `user-details.html?id=${user.id}`

            li.appendChild(a)
            ul.appendChild(li)

        }
    })