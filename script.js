AOS.init({
    duration:1300,
});
let menuIcon=document.getElementById("menu-icon")
let navUl=document.getElementById("nav-ul")
let navMobile=document.getElementById("nav-mobile")

menuIcon.addEventListener("click",function(){
console.log("button clicked")
navMobile.classList.toggle("show")
})


