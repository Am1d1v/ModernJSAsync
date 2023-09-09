

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






