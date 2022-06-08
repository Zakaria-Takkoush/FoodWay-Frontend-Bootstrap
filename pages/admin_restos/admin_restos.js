var resto_page = document.getElementById("restos_page")
var users_page = document.getElementById("users_page")
var reviews_page = document.getElementById("reviews_page")
var logo = document.getElementsByClassName("header")[0]

logo.addEventListener("click", function () {
    document.location = '../landing_page/landing_page.html';
})

resto_page.addEventListener("click", function () {
    document.location = '../admin_restos/admin_restos.html';
})

users_page.addEventListener("click", function () {
    document.location = '../admin_users/admin_users.html';
})

reviews_page.addEventListener("click", function () {
    document.location = '../admin_reviews/admin_reviews.html';
})

let add_resto = document.getElementById("create");
let edit = document.getElementById("edit");
let delete_resto = document.getElementById("delete");
let all_restaurants;
// params: resto_name,phone_number,city_id,desc,cat

let resto_name = document.getElementById("resto_name").value
let phone_number = document.getElementById("phone_number").value
let city_id = document.getElementById("city").value
let cat_id = document.getElementById("cate").value
let desc = document.getElementById("description").value

add_resto.addEventListener("click", function (event) {
    event.preventDefault()


    //Fetch Function - Add Restaurant

    let data = new FormData();
    data.append('resto_name', resto_name);
    data.append('phone_number', phone_number);
    data.append('description', desc);
    data.append('cat_id', cat_id);
    data.append('city_id', city_id);
    
    fetch('http://127.0.0.1:8000/api/add_resto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json()) 
    .then(data => 
        { console.log(data)}
    )
    .catch(err => console.log(err))


//     //Axios Function - Post

//     let data = new FormData();
//     data.append('resto_name', resto_name);
//     data.append('phone_number', phone_number);
//     data.append('description', desc);
//     data.append('cat_id', cat_id);
//     data.append('city_id', city_id);
//     axios({
//         method: 'post',
//         url: 'http://localhost/FoodWay-Backend/add_resto.php',
//         data: data,
//     })
//         .then(function (response) {
//             let result = response.data;
//             console.log(result);
//         }
//         )

})


// This api call is for to get all restaurants in the database and add them into the table of the admin
// axios({
//     method: 'get',
//     url: 'http://localhost/FoodWay-Backend/restaurants.php',
// })
//     .then(function (response) {

//         let restaurants = response.data;
//         all_restaurants = restaurants;
//         console.log(restaurants);
//         // Adding every resto in the database as the below div 
//         for (let i = 0; i < restaurants.length; i++) {
//             let table = '';
//             for (let i = 0; i < restaurants.length; i++) {
//                 table += `
//                 <tr>
//                 <td>${restaurants[i].resto_id}</td>
//                 <td>${restaurants[i].resto_name}</td>
//                 <td>${restaurants[i].phone_number}</td>
//                 <td>${restaurants[i].cat_id}</td>
//                 <td>${restaurants[i].city_id}</td>
//                 <td>${restaurants[i].description}</td>   
//                 <td class="edit" onclick="editResto(${restaurants[i].resto_id})" id="edit" ><i class="fa-solid fa-pen-to-square"></i></td>
//                 <td onclick="deleteResto(${restaurants[i].resto_id})" class="delete" id="delete"><i class="fa-solid fa-xmark"></i></td>
//                 </tr>`;
//             }
//             document.getElementById("tbody").innerHTML = table;
//             edit.addEventListener("click", function () {
//                 resto_name.value = "restaurants[idd].resto_name";
//                 phone_number.value = "restaurants[idd].phone_number";
//                 city_id.value = "restaurants[idd].city_id";
//                 cat_id.value = "restaurants[idd].cat_id";
//                 desc.value = "restaurants[idd].description";
//             })
//         }

//     }
//     )

// On click on the delete button of the resto, the resto will be deleted from the database using the delete resto api
// delete_resto.addEventListener("click", deleteResto());

// function deleteResto(resto_id) {
//     let data = new FormData();
//     data.append('id', resto_id);
//     axios({
//         method: 'post',
//         url: 'http://localhost/FoodWay-Backend/delete_resto.php',
//         data: data,
//     })
//         .then(function (response) {
//             let result = response.data;
//             console.log(result);
//         }
//         )
// }


// Get restaurants using fetch
let table = '';
fetch('http://127.0.0.1:8000/api/restaurants', {
  method: 'GET',
})
.then(response => response.json())
.then(data => {
  console.log(data.restos);
    let restos = data.restos
  for (let i = 0; i < restos.length; i++) {
    table += `
    <tr>
    <td>${restos[i].resto_id}</td>
    <td>${restos[i].resto_name}</td>
    <td>${restos[i].phone_number}</td>
    <td>${restos[i].cat_id}</td>
    <td>${restos[i].city_id}</td>
    <td>${restos[i].description}</td>   
    <td class="edit" onclick="editResto(${restos[i].resto_id})" id="edit" ><i class="fa-solid fa-pen-to-square"></i></td>
    <td onclick="deleteResto(${restos[i].resto_id})" class="delete" id="delete"><i class="fa-solid fa-xmark"></i></td>
    </tr>`;
}
document.getElementById("tbody").innerHTML = table;

  })
.catch((error) => {
  console.error('Error:', error);
});
