


let studentTable=document.createElement('table')
document.body.append(studentTable);


let addButton=document.querySelector("input[type=button]");
let studentNameTextBox=document.querySelector("input[name=studentName]");
let studentGradeTextBox=document.querySelector("input[name=studentGrade]");
let selected=document.querySelectorAll("select")[1];
let sorting=document.querySelectorAll("select")[0];
console.log(selected.value)

let radioDepartments=document.querySelector("input[name=Department]:checked");
console.log(radioDepartments)
addButton.addEventListener("click",function(){
    let creatNew=function (value){ 

      
        let newTd=document.createElement("td")
                newTd.innerText=(`${value}`)
            newTr.append(newTd);
        }
    let newTr=window.document.createElement("tr")
studentTable.append(newTr)
    let obj=new Student(
               
              studentNameTextBox.value,
            
              studentGradeTextBox.value,
              radioDepartments.value
            )
            if(obj.grade<0||obj.grade>100||isNaN(obj.grade)){
                window.document.querySelector('#gradeError').style.visibility="visible"
                return;
            }
            
            console.log(obj.fullName)
        creatNew(obj.fullName);
            creatNew(obj.department);
            creatNew(obj.grade)
           
})

//students class
//******************************************************************************
function Student(fullName,grade,department)
{
  
   this.fullName=fullName[0].toUpperCase()+fullName.slice(1)
   this.grade=grade;
    this.department=department;
   
   
    console.log(this.fullName)

   
   

}

