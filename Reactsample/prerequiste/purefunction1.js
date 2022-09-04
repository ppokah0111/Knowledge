var obj = { color: "red", size: 10 }
    //This is not a pure function because it is changing the color object in line #4. by passing parameters in line #8
function changeColor(object, color) {
    object.color = color
    return object
}
console.log(JSON.stringify(obj))
console.log(JSON.stringify(changeColor(obj, "yellow")))

console.log(JSON.stringify(obj))