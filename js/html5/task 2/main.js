let topsection = document.getElementById("top");
let botsection = document.getElementById("bot");

allimages = document.images;

for (let i = 0; i < allimages.length; i++) {
    allimages[i].addEventListener("dragstart", startdrag);
    allimages[i].addEventListener("dragend", enddrag);
}
botsection.addEventListener("drop", dropped);
botsection.addEventListener("dragover", overdrag);
botsection.addEventListener("dragenter", enterdrag);
topsection.addEventListener("dragleave", leavedrag);




function startdrag(e) {
e.dataTransfer.setData("myimg", e.target.outerHTML);
}
function enddrag(e) {
  console.log(botsection.childNodes.length , allimages.length)
e.preventDefault();
e.target.style.display = "none";
}
function dropped(e) {
     botsection.innerHTML += e.dataTransfer.getData("myimg");
}
function overdrag(e) {
e.preventDefault();
}
function leavedrag(e) {
e.preventDefault();
}
function enterdrag(e) {
e.preventDefault();
}