let select = document.getElementById('select');

async function getDepartments() {
    let response=await  fetch("https://node-monge-iti-project.herokuapp.com/departments");
    let data =await response.json();
  
    for(let department of data)
    {
        let option = document.createElement("option");
        option.innerHTML = department.Name;
        option.setAttribute("value", department._id);
        select.append(option);
        console.log(department._id,department.Name);
    }
}

getDepartments();

let depratmentId;
function selectFun(event) {
    depratmentId = event.target.value; 
}

async function addStudent() {
    
    let studentName=document.querySelector("input[name=name]").value;
    
    let response=await  fetch("https://node-monge-iti-project.herokuapp.com/students",{
        method:"post",
        body:JSON.stringify({name: studentName, department: depratmentId}),
        headers:{"Content-Type":"application/json"}
    });
    let data =await response.json();
    window.location.replace('student.html');
    console.log(data);

}