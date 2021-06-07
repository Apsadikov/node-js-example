async function func1() {
    let data1 = await funct1(2);
    let data2 = await funct2(2);
    let data3 = await funct3(2);
    funct4(2);
    let data5 = await funct5(2);
    return data5;
}

(async function () {
    try {
        let result = await func1();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})()