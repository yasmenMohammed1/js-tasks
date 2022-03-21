(async function() {
   
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
  
    // get posts data
    response = await fetch( "https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();
  
    // get comments data
    response = await fetch("https://jsonplaceholder.typicode.com/comments");
    let comments = await response.json();
  
    const table = document.createElement("table");
    let tr = document.createElement("tr");
  
    // NOTE: create table columns
    for (const key in users[0]) {
      let td = document.createElement("td");
     if(key=='name'||key=='username'||key=='email'||key=='company'||key=='address')
         { td.innerText = key;
          tr.append(td);}
          
      }
    
  
    let td = document.createElement("td");
    td.innerText = "posts";
    tr.append(td);
  
    table.append(tr);
  
    // NOTE: create table records
    for (const user of users) {
      tr = document.createElement("tr");
      for (const key in user) {
        const td = document.createElement("td");
        switch (key) {
            case "name":
          case "username":
          case "email":
            td.innerText = user[key];
            tr.append(td);
            break;
          case "company":
            td.innerText = user[key].name;
            tr.append(td);
            break;
          case "address":
            td.innerText = `lat: ${user[key].geo.lat} ,, lang: ${user[key].geo.lat} `;
            tr.append(td);
            break;
        }
      }
  
      td = document.createElement("td");
      const ul = document.createElement("ul");
      td.append(ul);
      tr.append(td);
  
      for (const post of posts) {
        if (post.userId === user.id) {
          const li = document.createElement("li");
          const postComments = comments.filter(
            (comment) => comment.postId === post.id

          );            console.log(comments)

          li.innerText = `${post.title} || ${postComments.length}`;
          ul.append(li);
        }
      }
  
      table.append(tr);
    }
  
    table.append(tr);
    document.body.append(table);
  })()
  
  