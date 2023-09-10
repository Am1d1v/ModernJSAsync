

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

