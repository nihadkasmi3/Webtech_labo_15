let numbers = [1, 2 , 4 , 5];

function sum(numbers){
    console.log(numbers);

    let total = 0;

for (let index = 0; index < numbers.length; index++) {
    total = total + numbers[index];
}
return total;

}
let result = sum(numbers);
console.log(result);

