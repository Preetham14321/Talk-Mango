const transfer = document.getElementById("btn-Translate");
const txtinput = document.getElementById("txt-input");

// transfer.addEventListener("click", function () {
//   console.log("Translated");
// });
function callback() {
  //   console.log("clicked");
  console.log("Input", txtinput.value);
}

transfer.addEventListener("click", callback);
