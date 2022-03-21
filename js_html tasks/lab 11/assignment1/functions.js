let theSelectors=$('div');
console.log(theSelectors)
// makeColor(div){

// } 


    $('div').on('click',function(event){
        let newElement=  document.createElement("span")
        newElement.innerText='This is a div '

           console.log(this)
           let color= $(this).css("background-color")
           console.log(color)
            theColorStatment=document.createElement("span")
            theColorStatment.innerText= `${color}`
            $(theColorStatment).css('color',color)
            document.body.append(newElement)

            document.body.append(theColorStatment)
            $('div').on('mouseout',function(){
                console.log(newElement)
                $(newElement).css('display','none')
                $(theColorStatment).hide()
            })
       })


