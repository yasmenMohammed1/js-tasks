

function login() {
    let userName = document.querySelector("input[name=username]").value;
    localStorage.setItem("username",userName);
    document.body.append(document.createElement(`welcome ${userName}`))
}

