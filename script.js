AOS.init({
    duration:1300,
});
let menuIcon=document.getElementById("menu-icon")
let navUl=document.getElementById("nav-ul")
let navMobile=document.getElementById("nav-mobile")


menuIcon.addEventListener("click",function(){
navMobile.classList.toggle("show")
})

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});
let preloader=document.getElementById("preloader");
function myfunction(){
    preloader.style.display="none"
}