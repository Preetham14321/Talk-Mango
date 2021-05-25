const transfer = document.getElementById("btn-Translate");
const txtinput = document.getElementById("txt-input");
const output = document.getElementById("output");

// transfer.addEventListener("click", function () {
//   console.log("Translated");
// });
function callback() {
  //   console.log("clicked");
  console.log("Input", txtinput.value);
  output.textContent = txtinput.value;
}

transfer.addEventListener("click", callback);
