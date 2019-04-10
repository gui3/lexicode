
window.onload = function () {
  document.getElementById("loadInput").onkeyup = function (k) {
    document.getElementById("loadMax").innerHTML = (parseInt(
        document.getElementById("loadInput").value,
        16) + 5000).toString(16);
    console.log(k);
    if (k.keyCode == 13) { // Enter
      document.getElementById("loadButton").click();
    }
  };
  document.getElementById("loadButton").onclick = function loadEmoji () {
    let min = document.getElementById("loadInput").value,
    max = document.getElementById("loadMax").textContent;

    let list = _loadList(min, max);

    let emojiString = "";
    list.forEach( (v) => { // k=code v=details
      emojiString += _charDiv(v);
    });

    document.querySelector("#display").innerHTML = emojiString;
  };
};
