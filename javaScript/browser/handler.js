function handle_change() {
  let value = document.getElementById("username").value;
  //console.log(value)
  document.getElementById("sample").innerHTML = `u enter ${value}`;
}
