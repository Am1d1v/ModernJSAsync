

const btnGetPost = document.querySelector('.btn-get-post');
const btnAddPost = document.querySelector('.btn-add-post');
const container = document.querySelector('.container');

btnGetPost.addEventListener("click",() => {
    getPosts((response) => {
        //console.log(response);
        const fragment = document.createDocumentFragment();
        response.forEach((post) => {
            const card = cardTemplate(post)
            fragment.appendChild(card);
            //console.log(cardBody);
        })
        container.appendChild(fragment);
    });
    
})

btnAddPost.addEventListener("click",(e) => {
    const newPost = {
        title: 'TitleName',
        body: 'BodyContent',
        userid: 1
    }

    createPost(newPost, (response) => {
        const card = cardTemplate(response)
        container.insertAdjacentElement("afterbegin", card);
    })
});

function createPost(body, cb){
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
    xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText)
        cb(response);
    });

    xhr.setRequestHeader("Content-type", "application/json");

    xhr.addEventListener("error", () => {
        console.error('Error');
    })

    xhr.send(JSON.stringify(body));
}

function getPosts(cb){ 
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText)
        cb(response);
    });

    xhr.addEventListener("error", () => {
        console.error('Error');
    })

xhr.send();
}

function cardTemplate(post){
    const card = document.createElement('div');
    card.classList.add('card');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = post.title;
    const article = document.createElement('p');
    article.classList.add('card-text');
    article.textContent = post.body;
    cardBody.appendChild(title);
    cardBody.appendChild(article);
    card.appendChild(cardBody);
    return card;
}

