funct1()
    .then(data1 => {
        return new Promise((resolve, reject) => {
            //TODO
            resolve(data2);
        });
    })
    .then(data2 => {
        return new Promise((resolve, reject) => {
            //TODO
            resolve(data3);
        });
    })
    .then(data3 => {
        return new Promise((resolve, reject) => {
            //TODO
            resolve(data4);
        });
    })
    .then(data4 => {
        return new Promise((resolve, reject) => {
            //TODO
            resolve(data5);
        });
    })
    .then(data5 => callback(error, data5))
    .catch(error => callback(error));


