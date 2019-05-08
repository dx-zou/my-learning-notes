function fn() {
    // a = 100
    console.log(a)
}

try {
    fn()
} catch(error) {
    // statements
    // console.log(error);
    if (error instanceof ReferenceError) {
        console.log(`引入错误`)
    }
}