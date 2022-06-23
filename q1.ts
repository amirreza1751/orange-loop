function check_multiples(number: number):string{
    switch(true){
        case number % 3 === 0 && number % 5 === 0:
            return "FooBar"
        case number % 3 === 0:
            return "Foo"
        case number % 5 === 0:
            return "Bar"
        default:
            return number.toString()
    }
}

for (let i = 0; i < 100; i++){
    console.log(check_multiples(i))
}