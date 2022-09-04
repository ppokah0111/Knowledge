var a = 5
for (var i = 1; i <= a; i++) {
    var line = " "
    for (j = 1; j <= i; j++) {
        line += i + " "// console.log(j + " ") //.repeat(j))
    }
    console.log(line)
}