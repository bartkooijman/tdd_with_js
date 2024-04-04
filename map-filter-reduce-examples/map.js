const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    const plusOne = numbers[i] + 1;
    console.log(plusOne);
}

// for each
numbers.forEach((number) => {
    const plusOne = number + 1;
    console.log(plusOne);
});

// for of
for (const number of numbers) {
  const plusOne = number + 1;
  console.log(plusOne);
}

//for in
for (const index in numbers) {
  const plusOne = numbers[index] + 1;
  console.log(plusOne);
}

// map
const plusOne = numbers.map((number) => {
    const plusOne = number + 1;
    console.log(plusOne);
    return number + 1;
});

//filter
const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});
console.log(evenNumbers);

//reduce
const sum = numbers.reduce((acc, number) => {
    return acc + number;
}, 0);
console.log(sum);

const strings = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
strings.sort(() => Math.random() - 0.5).reduce


