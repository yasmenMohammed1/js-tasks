let openedWindow=open("small.html","small","width=400,height=400");
let int=setInterval(()=>{if(openedWindow.document.readyState=='complete'){
    openedWindow.scrollTo(900,900)
    let selected=openedWindow.document.querySelector("p");
console.log(selected);
selected.innerText="yasmeen";
document.body.appendChild(newDiv);
newDiv.appendChild(newContent);

    clearInterval(int);
}else{
    console.log("not yet")
}},100)
let checking=setInterval(() => {
    if(openedWindow.closed){
        openedWindow.open;
    }
    else{console.log("this is already opened")}
}, 4000);

let newDiv=openedWindow.document.createElement('div');
console.log(newDiv)
let newContent=openedWindow.document.createTextNode('the real yasmen')
