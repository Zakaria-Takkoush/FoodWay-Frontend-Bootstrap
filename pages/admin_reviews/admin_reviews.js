var resto_page = document.getElementById("restos_page")
var users_page = document.getElementById("users_page")
var reviews_page = document.getElementById("reviews_page")
var logo = document.getElementsByClassName("header")[0]

logo.addEventListener("click", function(){
    document.location='../landing_page/landing_page.html';
})

resto_page.addEventListener("click", function(){
    document.location='../admin_restos/admin_restos.html';
})

users_page.addEventListener("click", function(){
    document.location='../admin_users/admin_users.html';
})

reviews_page.addEventListener("click", function(){
    document.location='../admin_reviews/admin_reviews.html';
})
