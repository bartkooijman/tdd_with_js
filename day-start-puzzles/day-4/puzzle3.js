// // How to empty an array
var Uids = [1, 2, 3, 4];
newUids = Uids;
// what's the output?
Uids = [];
console.log(Uids);
console.log(newUids);
//what's the output?
Uids.length = 0;
console.log(Uids);
console.log(newUids);