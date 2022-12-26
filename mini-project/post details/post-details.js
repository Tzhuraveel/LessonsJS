let urlUser = new URL(location.href);
let idUser = urlUser.searchParams.get('userID');

let urlPost = new URL(location.href);
let idPost = urlPost.searchParams.get('postID')

fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/posts`)
    .then(response => response.json())
    .then(post => {
        let container = document.createElement('div');
        let wrapper = document.createElement('div');
            container.classList.add(`container`)
            wrapper.classList.add('wrapper-post')
            container.appendChild(wrapper)
            document.body.appendChild(container)

        for (const postElement of post) {
            if(postElement.id === +idPost){
                for (const key in postElement) {
                    let keyDiv = document.createElement('div');
                    keyDiv.innerHTML = `${key}: ${postElement[key]}`
                    wrapper.appendChild(keyDiv)
                }
            }
        }

        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`)
            .then(response => response.json())
            .then(comments => {
                let commentsWrapperDiv = document.createElement('div');
                commentsWrapperDiv.classList.add(`wrapper-comments`)
                container.appendChild(commentsWrapperDiv)
                for (const commentsObj of comments) {
                        let commentsDiv = document.createElement('div');
                        commentsDiv.classList.add('block-comments')
                        commentsWrapperDiv.appendChild(commentsDiv)
                    for (const commentsKey in commentsObj) {
                        let commentsInsideElements = document.createElement('div');
                        commentsInsideElements.classList.add('inside-elements')
                        commentsInsideElements.innerHTML = `${commentsKey}: ${commentsObj[commentsKey]}`
                        commentsDiv.appendChild(commentsInsideElements)
                    }
                }
            });
    });