let moveLeft=$('button[name=slideMoveLeft]')
let moveRight=$('button[name=slideMoveRight]')

let slideUpBtn=$('button[name=slideUp]')
console.log(slideUpBtn)
let slideDownBtn=$('button[name=slideDown]')
console.log(slideDownBtn)
let slideToggleBtn=$('button[name=slideToggle]')
console.log(slideToggleBtn)
let blueDiv=$('div[class=blue]')
$(document).ready(function(){
    $(slideUpBtn).click(function(){
      $(blueDiv).slideUp("slow");
    });
    $(slideDownBtn).click(function(){
        $(blueDiv).slideDown("slow");
      });
      $(slideToggleBtn).click(function(){
        $(blueDiv).slideToggle();
      });
      $(moveRight).click(function(){
    console.log($(blueDiv).css('right'))
        $(blueDiv).animate({right: '250px',
     ' background-color':'green'})
    });
  
})
function nosabasbosa (){
for(let i=0;i<5 ;i++){
  console.log('hehe')
     console.log('nene')
}
}