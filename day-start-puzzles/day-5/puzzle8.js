let a = [1, 2, 3, 4, 5];

console.log(a);
console.log(a.length);

a[10] = 10;

console.log(a);
console.log(a.length);

a[7] = 7;

console.log(a);
console.log(a.length);

a.map((item, index) => {
  console.log(index, item);
});

console.log(a[6]);