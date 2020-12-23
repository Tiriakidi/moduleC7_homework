import { fizzBuzz } from "../fizzBuzz.js";

describe("test for FizzBuzz function", () => {
    const begin = 1;
    const end = 15;

    it("should calculate Fizz and Buzz", () => {
        expect(fizzBuzz(begin, end)).toEqual([1, 2, 'Fizz', 4,'Buzz','Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
    })
});