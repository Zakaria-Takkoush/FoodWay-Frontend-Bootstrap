// variabes
var resto_page = document.getElementById("restos_page")
var users_page = document.getElementById("users_page")
var reviews_page = document.getElementById("reviews_page")
var logo = document.getElementsByClassName("header")[0]

// on click on logo go to the landing page
logo.addEventListener("click", function(){
    document.location='../landing_page/landing_page.html';
})
// on click on resto page go to the resto admin page
resto_page.addEventListener("click", function(){
    document.location='../admin_restos/admin_restos.html';
})
// on click on users page go to the users admin page
users_page.addEventListener("click", function(){
    document.location='../admin_users/admin_users.html';
})
// on click on reviews page go to the reviews admin page
reviews_page.addEventListener("click", function(){
    document.location='../admin_reviews/admin_reviews.html';
})




// Api Call to get all users from the database

let table = ""; // body table containing users

// let data = new FormData();
// axios({
//   method: "get",
//   url: "http://localhost/FoodWay-Backend/get_users.php",
//   //        data: data,
// }).then(function (response) {
//   users = response.data;
//   console.log(response.data);
//   //   console.log(response.data[0].first_name)
//   //   console.log(response.data[1].user_id)

//   // loop through users object array to grab data

//   for (let i = 0; i < users.length; i++) {
//     const id = users[i].user_id;
//     const f_name = users[i].first_name;
//     const l_name = users[i].last_name;
//     const gender = users[i].gender;
//     const email = users[i].email;
//     const password = users[i].password;
//     const phone_number = users[i].phone_number;
//     const city_id = users[i].city_id;
//     const image = users[i].image;
//     const is_admin = users[i].is_admin;


//     //Apend each new user to the users table

//     table += `
//         <tr>
//         <td>${id}</td>
//         <td>${f_name + " " + l_name}</td>
//         <td>${email}</td>
//         <td>${gender}</td>
//         <td>${city_id}</td>
//         </tr>`;
//     }
//     document.getElementById("tbody").innerHTML += table;
//   }
// );

// Get users using fetch
fetch('http://127.0.0.1:8000/api/users', {
  method: 'GET',
})
.then(response => response.json())
.then(data => {
  console.log(data);
  let users = data.users
  for (let i = 0; i < users.length; i++) {
       table += `
        <tr>
        <td>${users[i].user_id}</td>
        <td>${users[i].first_name + " " + users[i].last_name}</td>
        <td>${users[i].email}</td>
        <td>${users[i].gender}</td>
        <td>${users[i].city_id}</td>
        </tr>`;
    }
    document.getElementById("tbody").innerHTML += table;
  })
.catch((error) => {
  console.error('Error:', error);
});

