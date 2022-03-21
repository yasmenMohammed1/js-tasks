let basicSelector=window.document.getElementsByTagName('img');
console.log(basicSelector);
let queries=window.document.querySelectorAll('img');
console.log(queries);
let options=document.querySelectorAll('select[name=City]');
console.log(options);
let tds=document.querySelectorAll('table')[1].querySelectorAll('td');
console.log(tds);
let classes=document.querySelectorAll(' .fontBlue.bGrey');
console.log(classes);
setInterval(()=>{document.title=new Date().toLocaleString('en-US', options);
},100);

let counter=1;
let theChangedImg=document.querySelector('img');
console.log(theChangedImg)

let stopBtn=document.querySelector('button[type=submit]');
console.log(stopBtn);


 


let imageing=setInterval(()=>

 {  

      theChangedImg.src=`images//`+ counter +`.jpg`
      if(counter>7){
          counter=1
      }
      counter++

},1000)
console.log(counter)


stopBtn.addEventListener("click",()=>{
theChangedImg.src=`images//`+ counter +`.jpg`
clearInterval(imageing)
})


