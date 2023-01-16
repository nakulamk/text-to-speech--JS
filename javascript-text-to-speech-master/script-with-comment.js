const palyButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const stopButton = document.getElementById("stop-button");
const textInput = document.getElementById("text");
const speedInput = document.getElementById("speed");

console.log(textInput.value);
palyButton.addEventListener("click", () => {
  playText(textInput.value);
});
pauseButton.addEventListener("click", pauseText);
stopButton.addEventListener("click", stopText);
//to make our computer speak we will use the api called speechSynthesis
function playText(text) {
  if (speechSynthesis.paused && speechSynthesis.speaking()) {
    return speechSynthesis.resume();
  }
  //in order to make speechSynthesis speak we need utterrance
  //that specifies how fast u speak what texture u speak
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = speedInput.value || 1;
  // we can modify the text input while speaking that is bad
  // we have one property ie
  utterance.addEventListener("end", () => {
    textInput.disabled = false;
  });
  textInput.disabled = true;
  speechSynthesis.speak(utterance);
}

function pauseText() {
  if (speechSynthesis.speaking) {
    speechSynthesis.pause();
  }
}

function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}

//  this as the comments for better understanding of the code
