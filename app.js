var arr =[5,4,3,2,1]

console.log(arr);

console.log(arr[0],arr[4],);

arr.reverse

console.log(arr);

arr = arr.map(function(elem){
    elem *= elem;
    return elem
});

console.log(arr);

arr = arr.map( Math.sqrt);
console.log(arr);


arr= arr.join("|");

console.log(arr);


arr = arr.split("|")
console.log(arr);

// arr= arr.push("6");
// console.log(arr);


console.log(arr.toString());

var elimine = arr.pop();
console.log(arr, elimine);

arr.splice( 1, 1, "10", "20");
console.log(arr);

arr = arr.splice(0,2)
console.log(arr);
