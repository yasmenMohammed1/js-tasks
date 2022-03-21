async function addDepartment() {
    let departmentName=document.querySelector("input[name=name]").value;
    let departmentID=document.querySelector("input[name=id]").value;
    
    // validate ids 
    let response=await  fetch("https://node-monge-iti-project.herokuapp.com/departments");
    let data =await response.json();
    
    let deptId = data.filter(item => item._id == departmentID);
    if(deptId.length > 0 ) {
        // show validation message
        document.getElementById('errorOfReapeted').style.display = 'inline-block';

    } else if(departmentName==""){
        document.getElementById('errorOfEmpty').style.display = 'inline-block';
    }else {
        document.getElementById('errorOfReapeted').style.display = 'none';
        document.getElementById('errorOfEmpty').style.display = 'none';

        let response=await  fetch("https://node-monge-iti-project.herokuapp.com/departments",{
            method:"post",
            body:JSON.stringify({name: departmentName, id: Number(departmentID)}),
            headers:{"Content-Type":"application/json"}
        });
        let data =await response.json();
         window.location.replace('departments.html');
        console.log(data);
    }


}


