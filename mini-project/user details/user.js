let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(userDescription => {

        let contain = document.createElement('div');
        contain.classList.add('gn-contain')

        let containerDiv = document.createElement('div');
        containerDiv.classList.add('container')

        let wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add('wrapperDiv')
        containerDiv.appendChild(wrapperDiv)

        let wrapperInsideElements = document.createElement('div')
        wrapperInsideElements.classList.add('inside-wrap')
        wrapperDiv.appendChild(wrapperInsideElements)

        let divForPosts = document.createElement('div');
        divForPosts.classList.add('posts')
        wrapperDiv.appendChild(divForPosts)

        let postsButton = document.createElement('button');
        postsButton.classList.add('posts-button')
        divForPosts.appendChild(postsButton)
        postsButton.innerHTML = `click on me`

        contain.appendChild(containerDiv)
        document.body.appendChild(contain)



        for (const userinfo in userDescription) {
            let keys = userDescription[userinfo]
            if(typeof keys !== "object"){
                let div = document.createElement('div');
                div.classList.add('user-info')
                div.innerHTML = `${userinfo}: ${keys}`
                wrapperInsideElements.appendChild(div)
            }else{
                let objDiv = document.createElement('div');
                objDiv.classList.add('user-father-obj')
                objDiv.innerHTML = `${userinfo}:`
                wrapperInsideElements.appendChild(objDiv)

                for (const key in keys) {
                    let valueKey = keys[key]
                    if(typeof valueKey !== "object"){
                        let div = document.createElement('div');
                        div.innerHTML = `${key}: ${valueKey}`
                        objDiv.append(div)
                    }else{
                        let objDivChildren = document.createElement('div');
                            objDivChildren.classList.add('user-children-obj')
                            objDivChildren.innerHTML = `${key}:`
                            objDiv.appendChild(objDivChildren)
                        for (const valueKeyKey in valueKey) {
                            let value = valueKey[valueKeyKey]
                            let div = document.createElement('div');
                            div.innerHTML = `${valueKeyKey}: ${value}`
                            objDivChildren.append(div)
                        }
                    }
                }
            }
        }

        postsButton.onclick = function (){
            let urlPosts = new URL(location.href);
            let id = urlPosts.searchParams.get('id');
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(posts => {
                    let divPost = document.createElement('div');
                    divPost.classList.add('post')
                    divForPosts.appendChild(divPost)

                    for (const post of posts) {
                        let divElementPost = document.createElement('div');
                            divElementPost.classList.add('post-element')
                            divElementPost.innerHTML = `${post.title}`
                        let a = document.createElement('a');
                            a.href = `../post details/post-details.html?postID=${post.id}&userID=${id}`
                        let linkButton = document.createElement('button');
                            a.appendChild(linkButton)
                            linkButton.innerHTML = `info`
                            linkButton.classList.add('link-button-post')
                            divPost.appendChild(divElementPost)
                            divElementPost.appendChild(a)
            postsButton.disabled = "true"
                    }
                })
        }

    });
