async function  getData  (){
    newTable=document.createElement('table')
let baseUrl='https://node-monge-iti-project.herokuapp.com'
let responce= await fetch(baseUrl+'/students');

let students=await responce.json()
// let baseUrl='https://node-monge-iti-project.herokuapp.com'
responce= await fetch(baseUrl+'/departments');

let departments=await responce.json()
console.log(departments)
console.log(students)
for (const student of students) {
let newTr= document.createElement('tr');
let tdName = document.createElement('td');

let tdDepartment = document.createElement('td');
let tddelete = document.createElement('td');
let deleteBtn=document.createElement('button');
deleteBtn.innerText = 'delete';
tddelete.append(deleteBtn)
tddelete.addEventListener('click', async function(event){
    console.log(student._id)
this.parentElement.remove();
 let response=await  fetch("https://node-monge-iti-project.herokuapp.com/students",{
                    method:"delete",
                    body:JSON.stringify({id:student._id}),
                    headers:{"Content-Type":"application/json"}
                });
})
let tdUpdate = document.createElement('td');

let updatebtn=document.createElement('button')
tdUpdate.append(updatebtn)
updatebtn.innerHTML = 'update';
let updateClick=tdUpdate.addEventListener('click',async function(){
    newTr.innerText=''

  let newDepartment;
  let tdSave = document.createElement('td');
let saveBtn=document.createElement('button');
saveBtn.innerHTML='save'
tdSave.append(saveBtn)
  let tdCancele = document.createElement('td');

let cancelBtn=document.createElement('button');
let newName = document.createElement("input");
newName.setAttribute("type", "text");
newName.setAttribute("value",tdName.innerText)
let newSelect=document.createElement('select')
for (const key of departments) {
    let newOption=document.createElement('option')
    newOption.value=key.Name;
    newOption.innerText=key.Name;
    console.log(key.Name)
    newSelect.append(newOption)

}

  
newTr.append(newName,newSelect,tdCancele,tdSave);


cancelBtn.innerHTML='cancel';
tdCancele.append(cancelBtn)


tdCancele.addEventListener("click",async function(){
    tdUpdate.innerHTML = 'update';
    tdName.textContent =student.Name;
    console.log(student.Name)
  tdDepartment.innerText=student.Department.Name

    newName.remove();
    tdSave.remove();
    tdCancele.remove();
    newSelect.remove();
    newTr.append(tdName,tdDepartment,tddelete,tdUpdate);


})
tdSave.addEventListener('click', async ()=> {
    let nameValue = newName.value; 
    let response=await  fetch("https://node-monge-iti-project.herokuapp.com/students",{
        method:"put",
        body:JSON.stringify({id:student._id,name:nameValue, department: newDepartment}),
        headers:{"Content-Type":"application/json"}
    });

    tdUpdate.innerHTML = 'update';
    tdName.innerHTML =  nameValue;
    let department = students.filter(item => item._id == newDepartment );
    tdDepartment.innerHTML = department[0].value;
    newName.remove();
    newSelect.remove();
    tdCancele.remove();
 })
 


    // replaceChild(oldElemnt,newElement);
})
tdDepartment.innerHTML = student?.Department?.Name
tdName.innerHTML = student.Name
    newTr.append(tdName);
newTr.append(tdDepartment);
newTr.append(tddelete);
newTr.append(tdUpdate);
newTable.append(newTr);
console.log(student.Name);


    }
    document.body.append(newTable)
}

getData()