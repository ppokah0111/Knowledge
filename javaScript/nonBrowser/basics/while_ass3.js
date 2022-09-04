//print
var a = 5;
i = 1;

while (i <= a) {
  var line = " ";
  /*     
        Method 1
        for (j = 1; j <= i; j++) {
                    line += i // console.log(j + " ") //.repeat(j))
        } */

  //  Method 2
  j = 1;
  while (j <= i) {
    line += i;
    j++;
  }

  /* Method 3
    OR console.log(i + " ") //.repeat(i))
     */

  console.log(line);
  i++;
}
