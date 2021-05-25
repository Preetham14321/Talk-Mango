const transfer = document.getElementById("btn-Translate");
const txtinput = document.getElementById("txt-input");
const output = document.getElementById("output");

var serverurl = "https://api.funtranslations.com/translate/minion.json";

function getTranslateUrl(text) {
  return serverurl + "?" + "text=" + text;
}
function errorHandler(error) {
  console.log("error occured", error);
  alert("Server is Down Please try Again Later");
}

function clickHandler() {
  var inputTxt = txtinput.value;
  fetch(getTranslateUrl(inputTxt))
    .then((response) => response.json())
    .then((json) => {
      var translatedTxt = json.contents.translated;
      output.textContent = translatedTxt;
    })

    .catch(errorHandler);
}

transfer.addEventListener("click", clickHandler);
