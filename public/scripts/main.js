let tweetButton = document.querySelector(".twitter-share-button");
let bar0 = document.getElementById("bar0").innerText;
let bar1 = document.getElementById("bar1").innerText;
let bar2 = document.getElementById("bar2").innerText;
let bar3 = document.getElementById("bar3").innerText;
let tweetLyrics = bar0 + ", " + bar1 + ", " + bar2 + ", " + bar3;
tweetButton.setAttribute("href", "https://twitter.com/intent/tweet?text="+ tweetLyrics);

function copy(){
  let elm = document.querySelector(".bars");
  // for Internet Explorer
  if(document.body.createTextRange) {
    let range = document.body.createTextRange();
    range.moveToElementText(elm);
    range.select();
    document.execCommand("Copy");
    alert("Copied lyrics to clipboard!");
  }
  else if(window.getSelection) {
    // other browsers
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(elm);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
    alert("Copied lyrics to clipboard!");
  }
}
