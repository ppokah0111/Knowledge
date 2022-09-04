var obj = { color: "red", size: 10 }
    //This is a pure function because it is
function changeColor(object, color) {
    //Another way of achieving copy of object is by using spread operator
    let result = {...object,
        color: color
    }
    return result
}
console.log(JSON.stringify(obj))

console.log(JSON.stringify(changeColor(obj, "yellow")))
console.log(JSON.stringify(obj))