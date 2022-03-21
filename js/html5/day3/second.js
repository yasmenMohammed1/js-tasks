class SecondClock{
constructor(cb,interval){
this.cb=cb;
this.interval=interval;
}
 start(){
     let current=1;
   
 interval=setInterval(()=>{
    if(current>60){
        current=1
    }
   this.cb(current++)
  
        
},1000)
    
};
 reset(){
     clearInterval(interval)
  this.cb(0);
     
 }
} 



let seconds;
let interval;
      const obj=new SecondClock(cb,interval);

         
let secondsSban=document.querySelector('span[class=second]')
let startBtn=document.querySelector('button[class=start]')
let resetBtn=document.querySelector('button[class=reset]')
function cb(newCurrent) {

    secondsSban.innerHTML=newCurrent;
   
              } 
console.log(startBtn)
startBtn.addEventListener('click',function(){
    obj.start();
})
resetBtn.addEventListener('click',function(){   
    obj.reset();
})
