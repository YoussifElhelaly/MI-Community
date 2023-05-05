let PostOptionBTN = document.getElementById("PostOptionBTN")
let postOptionMenu = document.getElementById("postOptionMenu")
let lovePost = document.getElementById("lovePost")
let savePost = document.getElementById("savePost")
let lovePostParent = document.getElementById("lovePostParent")
let commentPostParent = document.getElementById("commentPostParent")
let commentSection = document.getElementById("commentSection")
let savePostParent = document.getElementById("savePostParent")

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

