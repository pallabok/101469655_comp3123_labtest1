const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = { message: "delayed success!"}
            resolve(success);
        }, 500);
    });
};

 resolvedPromise().then(result => {
     console.log(result);
 });

 const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fail = { error: "delayed exception!"}
            reject(fail);
        }, 500);
    })
 };

 rejectedPromise().catch(error => {
     console.log(error);
 });