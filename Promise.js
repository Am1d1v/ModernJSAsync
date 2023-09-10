

/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve(Math.random())
    }, 1000);
})
console.log(promise);
promise.then(info => {
            console.log(info)
            return info})   
       .then(info1 => console.log(info1))
       .catch(error => console.log(error))
*/

/*
fetch('https://jsonplaceholder.typicode.com/posts')
//console.log(fetch('https://jsonplaceholder.typicode.com/posts'));
.then(response => {
    //console.log(response.json());
    return response.json()
})
.then(postsData => {
    console.log(postsData);
    return postsData
})
.catch(error => {
    console.error(error);
})
*/

/*
function getPost(id){
    return new Promise((resolve, reject) =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(post => resolve(post))
        .catch(error => reject(error))
    });
}

getPost(1)
    .then(post => console.log(post));
*/

/*
function getPost2(id){
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
}

getPost2(2)
    .then(post => console.log(post))
    .catch(error => console.log(error));

getPost2(3)
    .then(post => console.log(post))
    .catch(error => console.log(error));    
    */

async function getPost(id){

    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

   // throw new Error('Error');

    const data = await response.json();
    return data;
}

getPost(1)
    .then(data => console.log(data))
    .catch(error => console.log(error));




















