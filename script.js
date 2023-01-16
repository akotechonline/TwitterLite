const links= document.querySelector(".links");
document.querySelectorAll(".btn-icon").forEach((btnIcon)=> {
    btnIcon.addEventListener("click", function () {
    links.classList.toggle("showLink")})
})        

