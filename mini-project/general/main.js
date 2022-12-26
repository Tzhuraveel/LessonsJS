fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => {

        let cont = document.createElement('div');
        cont.classList.add('cont')
        let container = document.createElement('div');
        container.classList.add('container')
        cont.appendChild(container)
        document.body.appendChild(cont)

        for (const user of users) {

            let div = document.createElement('div');
            let h4 = document.createElement('h4');
            let button = document.createElement('button');
            let a = document.createElement('a');


            div.classList.add('general-div');
            h4.classList.add('h4');
            h4.innerHTML = `${user.id}) ${user.name}`
            button.classList.add('button');
            button.innerHTML = `click`
            a.href = `../user details/user-details.html?id=${user.id}`

            a.appendChild(button)
            container.appendChild(div)
            div.append(h4,a)

        }
    })




