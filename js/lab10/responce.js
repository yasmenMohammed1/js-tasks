


let cdTables=document.createElement('table')
document.body.append(cdTables);
let cdArr=[]

    let  ajaxObject=new XMLHttpRequest();
    

     ajaxObject.open("get","https://node-monge-iti-project.herokuapp.com/cataloges")
     ajaxObject.send();

     ajaxObject.onerror=function(error){
          console.log(error);
     }
    ajaxObject.onreadystatechange=function(){
         if(this.readyState==4)
         {
             if(this.status==200)
             {
                   console.log( this.response);
                                      parser=new DOMParser();
                          xmlData= parser.parseFromString(this.response,"text/xml");
                          let catalogTags=xmlData.querySelectorAll("CD");
                          for (let i = 0; i < catalogTags.length; i++) {
                              let newTr=document.createElement('tr')

                              cdTables.append(newTr);
                            //   newTr.style.border="10,solid,black"

                              console.log(catalogTags[i])
                               let title=catalogTags[i].querySelector("TITLE").textContent

                               let newtd=document.createElement('td');
                               newtd.innerText=title
                               newTr.append(newtd)                           
                            let artist=catalogTags[i].querySelector("ARTIST").textContent
                            newtd=document.createElement('td');
                            newtd.innerText=artist
                            newTr.append(newtd)    
                               let country=catalogTags[i].querySelector("COUNTRY").textContent
                              newtd=document.createElement('td');
                               newtd.innerText=country
                               newTr.append(newtd)    
                               let company=catalogTags[i].querySelector("COMPANY").textContent
                           newtd=document.createElement('td');
                               newtd.innerText=company
                               newTr.append(newtd)    
                               let price=catalogTags[i].querySelector("PRICE").textContent
                               newtd=document.createElement('td');
                               newtd.innerText=price
                               newTr.append(newtd)   
                               if(price>10){
newTr.style.backgroundColor='red'
                               }
                               else{
                                   newTr.style.backgroundColor="pink"
                               }
                              newtd=document.createElement('td');
                               newtd.innerText=price
                               newTr.append(newtd)    
                               let year=catalogTags[i].querySelector("YEAR").textContent
                               newtd=document.createElement('td');
                               newtd.innerText=year
                               newTr.append(newtd)    


console.log(title)

                          }
             }

         }
    }
  
// function newTd(value,tr){
// let newtd=document.createElement('td');
// newtd.innerText=value
// tr.append(newTd)
// }