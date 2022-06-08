
let create_account = document.getElementById("sign_up_btn");

create_account.addEventListener("click", function(event) {
    event.preventDefault()

    // params: first_name, last_name, gender, email, password, phone_number, city_id

    const first_name = document.getElementById("fname").value 
    const last_name = document.getElementById("lname").value
    const gender = document.getElementById("gender").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const rep_password = document.getElementById("r_password").value
    const city_id = document.getElementById("city").value

    if (password !== rep_password) {
        alert("Passwords do not match!")
        return
    }

//     //Axios Function - Post

//     let data = new FormData();
//     data.append('first_name', first_name);
//     data.append('last_name', last_name);
//     data.append('gender', gender);
//     data.append('email', email);
//     data.append('password', password);
//     data.append('phone_number', '123');
//     data.append('city_id', city_id);
//     axios({
//         method: 'post',
//         url: 'http://localhost/FoodWay-Backend/signup.php',
//         data: data,
//     })
//     .then(function (response) {
//         let result = response.data;
//         let message = result.status;
//         if (message === "Account Created!") {
//             document.getElementsByClassName("signup_top")[0].textContent = "Account Created!"
//         }
//         document.getElementById("fname").value = "";
//         document.getElementById("lname").value = "";
//         document.getElementById("gender").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("password").value = "";
//         document.getElementById("r_password").value = "";
//         //const phone_number = document.getElementById("number").value
//         document.getElementById("city").value = "";
//         document.location = "index.html";
//         }
//     )

// })

// data to be sent to the POST request
    let user_data = {
        first_name: first_name,
        last_name: last_name,
        gender: gender,
        email: email,
        password: password,
        city_id: city_id
    }

    fetch('http://127.0.0.1:8000/api/signup', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user_data),
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err))

})

// // get the id of the user

// let sign_in = document.getElementById("signin");

// sign_in.addEventListener("click", function(event) {
//     event.preventDefault()

//     // get the values of email and password on login
//     const login_email = document.getElementById("logmail").value
//     const login_password = document.getElementById("logpass").value

//     let data = new FormData();
//     data.append('email', login_email);
//     data.append('password', login_password);
//     axios({
//     method: 'post',
//     url: 'http://localhost/FoodWay-Backend/login.php',
//     data: data,
//     })
//     .then(function (response) {
//         // console.log(response);
//         // console.log(response.data);
//         // console.log(response.data.user_id);
//         // console.log(response.data.response);
//         if (response.data.response === "Logged in") {   // if the user exists:
//             // let id = response.data.user_id
//             const id = localStorage.setItem("logged_id", response.data.user_id)     // save his id in local storage
//             document.location = "pages/landing_page/landing_page.html"; // direct the user to the landing page
//         }
//     }
//   )
// })