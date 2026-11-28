function number() {
    return 20;
}
console.log(number());

function text() {
    return "Hallo";
}
console.log(text());

function vraag() {
    return true;
}
console.log(vraag());

function printText() {
    console.log(`Dit is een tekst`);
}
console.log(printText());

function firstNumber() {
        return 5;
}
console.log(firstNumber());

function secondNumber() {
        return 9;
}
console.log(secondNumber());

function sumOfNumbers(firstNumber, secondNumber) {
     sumOfNumbers = firstNumber + secondNumber;
}
Console.log(firstNumber + secondNumber);
Console.log(sumOfNumbers());

const sumOfNumbersArrow = (firstNumber, secondNumber) => {
    console.log(firstNumber + secondNumber);
};

const double = number => number * 2

function multiply(number, factor = 2) {
    return number * factor;
}
console.log(multiply(5, 10));

