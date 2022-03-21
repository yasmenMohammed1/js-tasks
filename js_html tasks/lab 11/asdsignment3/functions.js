let showBtn=$('button[class=show]')
console.log(showBtn)
let hidden=$('div[class=hidden]')
console.log(hidden );
$(showBtn).on('click',function(){
$(hidden).css('display','inline-block')})
$(showBtn).on('mouseout',function(){
    $(hidden).css('display','none')

})
;