let table = document.getElementById('table');

async function getDepartments() {
    let response=await  fetch("https://node-monge-iti-project.herokuapp.com/departments");
    let data =await response.json();
    for(let department of data)
    {
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdID = document.createElement('td');

        tdName.innerHTML = department.Name;
        tdID.innerHTML = department._id;

        tr.append(tdID);
        tr.append(tdName);

        table.append(tr);
    }   
}

getDepartments();