let addButton=document.querySelector("input[type=button]");

let studentNameTextBox=document.querySelector("input[name=studentName]");
let studentGradeTextBox=document.querySelector("input[name=studentGrade]");
let selected=document.querySelectorAll("select")[1];
let sorting=document.querySelectorAll("select")[0];
console.log(selected.value)

let radioDepartments=document.querySelector("input[name=Department]:checked");
let studentsTable=document.createElement("table");
console.log(studentsTable.children[0])
document.body.append(studentsTable);
let students=[];


// studentsTable.addEventListener("click",function(event){
//     if(event.target.localName=="button")
//     {
//         event.target.parentElement.parentElement.remove();
//     }
// });//delegation

selected.addEventListener('change',function(){
   
    if (selected.value=="fail"){
Array.from(studentsTable.children).forEach(i=>{
    if(i.children[1].innerHTML>= 50){
        i.style.display="none";
        console.log(i)
    }
    else{i.style.display="block"}
})    }
if (selected.value=="success"){
    Array.from(studentsTable.children).forEach(i=>{
        if(i.children[1].innerHTML< 50){
            i.style.display="none";
            console.log(i)
        }
        else{i.style.display="block"}
    })    }
    if (selected.value=="all"){
        Array.from(studentsTable.children).forEach(i=>{
          {i.style.display="block"}
        })    }

})

function createTD(value)
{
    let tdObject=document.createElement("td");
    tdObject.innerText=value;//studentNameTextBox.value;
    return tdObject;
}
addButton.addEventListener("click",function(rrr){
let lower;
let upper;
    if(studentNameTextBox.value==""||students.includes(studentNameTextBox.value[0].toUpperCase() +studentNameTextBox.value.slice(1))
    ||students.includes(studentNameTextBox.value.toLowerCase() )|| studentGradeTextBox.value < 0 || studentGradeTextBox.value > 100){
        return false;

    }
    else{students.push(studentNameTextBox.value)}
    
    

   let department=document.querySelector("input[name=Department]:checked").value;

   //value;  one tr , 2 tds
    let trObject=document.createElement("tr");
    // if(department=="SD")  trObject.style.backgroundColor="pink";
    // else if (department=="OS") trObject.style.backgroundColor="green"
    // else trObject.style.backgroundColor="yellow"
    trObject.classList.add(department);
    
    //name
    students.push(lower,upper)
    let tdObject=createTD(studentNameTextBox.value);

   trObject.append(tdObject);

   //grade
   tdObject=createTD(studentGradeTextBox.value);

   trObject.append(tdObject);


    //delete
     deleteButton=document.createElement("button");
    deleteButton.innerText="DELETE";

    deleteButton.onclick=function(){
        // this-->   --? tr
        // trObject.remove();
        this.parentElement.parentElement.remove();
        
        // this.closest("tr").remove()
    }
    
    tdObject=document.createElement("td");
    tdObject.append(deleteButton)
    trObject.append(tdObject);

   studentsTable.append(trObject); 



});//add student recored
sorting.addEventListener("change", function () {
    const newArr = [...studentsTable.children];
    studentsTable.innerHTML = "";
  
    if (sorting.value === "nameSort") {
      newArr.sort((a, b) =>
        a.children[0].innerText < b.children[0].innerText ? 1 : -1
      );
      studentsTable.append(...newArr);
    } else {
      newArr.sort((a, b) => a.children[1].innerText - b.children[1].innerText);
      studentsTable.append(...newArr);
    }
  });
  