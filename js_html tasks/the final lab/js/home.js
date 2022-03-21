let username = localStorage.getItem('username');
let h1 = document.querySelector('#welcome');
h1.innerHTML = 'welcome '+ username;
