// var btnTranslate = document.querySelector("#btn-translate");
// var textInput = document.querySelector("#input-text");
// var textOutput = document.querySelector("#output-text");

// var url = "https://api.funtranslations.com/translate/dothraki.json";

// function getTranslationUrl(text) {
//   return url + "?" + "text=" + text;
// }

// function clickHandler() {
//   var inputText = textInput.value;

//   fetch(getTranslationUrl(inputText))
//     .then((response) => response.json())
//     .then((json) => {
//       var translatedText = json.contents.translated;
//       textOutput.innerText = translatedText;
//     });
// }

// btnTranslate.addEventListener("click", clickHandler);

const textInput = document.querySelector("#input-text");
const textOutput = document.querySelector("#output-text");

document.querySelector("#btn-translate").addEventListener("click", function () {
  fetch(
    "https://api.funtranslations.com/translate/dothraki.json?text=" +
      textInput.value
  )
    .then((response) => response.json())
    .then(
      (json) =>
        (document.querySelector("#output-text").innerText =
          json.contents.translated)
    )
    .catch(
      (error) => console.log("Error!", error)
      //   alert("Something went wrong with server")
    );
});
