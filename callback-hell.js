function func1(callback) {
    func2((err, data1) => {
        if (err) {
            return callback(err);
        }
        func3(data1, (err, data2) => {
            if (err) {
                return callback(err);
            }
            func4(data2, (err, data3) => {
                if (err) {
                    return callback(err);
                }
                func5(data3, (err, data4) => {
                    if (err) {
                        return callback(err);
                    }
                    func6(data4, (err, data5) => {
                        if (err) {
                            return callback(err);
                        }
                        callback(null, data5);
                    })
                })
            })
        })
    })
}

func1((error, body) => {
    console.log(error);
    console.log(body);
})