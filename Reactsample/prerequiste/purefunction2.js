var obj = { color: "red", size: 10 }
    //This is a pure function because it is
function changeColor(object, color) {
    //Object.assign takes three parameters; 
    //1. empty object {}, 2. the object to copy, and 3. the properties to change in the object.
    let result = Object.assign({}, object, {
        color: color
    })
    return result
}
console.log(JSON.stringify(obj))

console.log(JSON.stringify(changeColor(obj, "yellow")))
console.log(JSON.stringify(obj))