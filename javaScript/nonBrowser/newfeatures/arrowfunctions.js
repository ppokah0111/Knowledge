let add = function (a, b) {
  console.log(a + b);
};
add(4, 5);

//rewrite the function
let addArrow = (a, b) => console.log(a + b);

addArrow(13, 4);

let hello = () => console.log("Hello world! \n");
hello();

let square = (n) => n * n;
console.log(square(4));


let d = (a,b,c) => console.log(`${a+b+c}`)
d(4,3,5)
