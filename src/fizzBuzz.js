export function fizzBuzz(begin, end) {
    let result = [];

    for (let i = begin; i <= end; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result.push("FizzBuzz");
                   
        } else if (i % 3 == 0) {
            result.push("Fizz");
        } else if (i % 5 == 0) {
            result.push("Buzz");
        } else {
            result.push(i)
        }   
    } 
    return result   
}

