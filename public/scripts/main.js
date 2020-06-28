let tweetButton = document.querySelector(".twitter-share-button");
let bar0 = document.getElementById("bar0").innerText;
let bar1 = document.getElementById("bar1").innerText;
let bar2 = document.getElementById("bar2").innerText;
let bar3 = document.getElementById("bar3").innerText;
let theLyrics = bar0 + ", " + bar1 + ", " + bar2 + ", " + bar3;
tweetButton.setAttribute("href", "https://twitter.com/intent/tweet?text="+ theLyrics);

let root = document.documentElement;
setInterval(function(){
  if(document.getElementById('gif0').checked) {
    root.style.setProperty('--bggif', "url(https://media.giphy.com/media/LlFOVCul3pz6SiBzB5/giphy.gif)");
  }else if(document.getElementById('gif2').checked) {
    root.style.setProperty('--bggif', "url(https://media.giphy.com/media/l41lIsOThQpma23wA/giphy.gif)");
  }else if(document.getElementById('gif7').checked) {
    root.style.setProperty('--bggif', "url(https://media.giphy.com/media/3o85xKWHrNvXqAvWMM/giphy.gif)");
  }
}, 10);

function copy() {
    let dummy = document.createElement("textarea");
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    dummy.value = theLyrics;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("Copied lyrics!");
}
