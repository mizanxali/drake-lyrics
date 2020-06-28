let tweetButton = document.querySelector(".twitter-share-button");
let bar0 = document.getElementById("bar0").innerText;
let bar1 = document.getElementById("bar1").innerText;
let bar2 = document.getElementById("bar2").innerText;
let bar3 = document.getElementById("bar3").innerText;
let theLyrics = bar0 + ", " + bar1 + ", " + bar2 + ", " + bar3;
tweetButton.setAttribute("href", "https://twitter.com/intent/tweet?text="+ theLyrics);

let root = document.documentElement;
const bggifs = ["url(../gif0.gif)", "url(../gif2.gif)", "url(../gif7.gif)"];
let c = 1;
setInterval(function(){
  root.style.setProperty('--bggif', bggifs[c]);
  c++;
  if(c==bggifs.length){
    c=0;
  }
}, 5000);

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
