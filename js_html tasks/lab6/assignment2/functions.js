let divParent=document.querySelector("span");
let theOldTarget;
let newTarget;
divParent.addEventListener("click",function(event){
if(event.target.matches("div")){
    theOldTarget=event.target

    console.log(event.target.className)
   newTarget= event.target.cloneNode();
theOldTarget.style.pointerEvents = "none";
divParent.append(newTarget);
}
else{return 0}
})
 