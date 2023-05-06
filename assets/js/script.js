let PostOptionBTN = document.getElementById("PostOptionBTN")
let postOptionMenu = document.getElementById("postOptionMenu")
let lovePost = document.getElementById("lovePost")
let savePost = document.getElementById("savePost")
let notifi = document.getElementById("notifi")
let lovePostParent = document.getElementById("lovePostParent")
let commentPostParent = document.getElementById("commentPostParent")
let commentSection = document.getElementById("commentSection")
let savePostParent = document.getElementById("savePostParent")
let notifictionWrapper = document.getElementById("notifictionWrapper")
let special = document.getElementById("special")
let SearchNav = document.getElementById("SearchNav")

PostOptionBTN.addEventListener("click", () => {
    postOptionMenu.classList.toggle("active")
})

lovePostParent.addEventListener("click", () => {
    lovePostParent.classList.toggle("active")
    lovePost.classList.toggle("fa-solid")
})

savePostParent.addEventListener("click", () => {
    savePostParent.classList.toggle("active")
    savePost.classList.toggle("fa-solid")
})

commentPostParent.addEventListener("click", () => {
    commentPostParent.classList.toggle("active")
    commentSection.classList.toggle("active")
})


notifi.addEventListener("click", () => {
    notifi.classList.toggle("active")
})

addEventListener("click", (e) => {
    console.log(e.target)
})

special.addEventListener("mouseenter", () => {
    SearchNav.style.transform = 'translateX(0px)'
})

special.addEventListener("mouseleave", () => {
    SearchNav.style.transform = 'translateX(-60px)'
})