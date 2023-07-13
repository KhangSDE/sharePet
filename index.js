// Öffne Canvas
const openPost = document.querySelector(".creating-post-container");
const feedSection = document.querySelector("section");
const startScreen = document.querySelector(".start-screen");

function openCreatePost() {
    openPost.classList.toggle("show");
    startScreen.style.visibility = "hidden"

}
// Caption erstellen
const captionInput = document.getElementById("caption-input");

captionInput.addEventListener("keyup", (e)=> {
    if(e.keyCode === 13) {
        console.log(captionInput.value);
        captionInput.blur()
    }
    
})
// Beitrag erstellen
const captionText = document.querySelector(".caption-container p");
const postImage = document.querySelector(".image-container img");
const createPostImage = document.querySelector(".creating-post-container .image-container img");
const container = document.querySelector(".container");

// IMAGE SRC
const fileInput = document.getElementById("inputFile");
let uploadedImage = "";

fileInput.addEventListener("change", function(){
    
    const reader = new FileReader();
    reader.addEventListener("load", ()=> {
        uploadedImage = reader.result;
        createPostImage.src= uploadedImage;
    })

    reader.readAsDataURL(this.files[0])
}) 
    

function createPost() {

    let containerMarkup = `<section>
    <div class="post-container">
        <div class="image-container">
            <img src="${createPostImage.src}">
        </div>
        
        <div class="caption-container">
            <p>${captionInput.value}</p>
        </div>
        


        <div class="features-container">
            <button class="like-button"><img class="image-like" src="images/heart (1).png"></button>
            <button class="save-button"><img src="images/save-instagram.png"></button>
            <button class="share-button"><img src="images/upload (1).png"></button>
        </div>

        <div class="comment-section">
            <div class="comment-area">
            </div>
            <input  class="commentInput" type="text" placeholder="kommentiere etwas">

        </div>

        <div class="delete-container">
        <button onclick="deletePost()" class="delete-button">
            <img src="images/delete.png">
        </button
    
    </div>
    </div>
    </section>`

    openPost.classList.remove("show");
    container.classList.add("show")
    captionInput.value = "";
    createPostImage.src="https://img.freepik.com/premium-vector/cute-shiba-inu-dog-cartoon-icon_42750-300.jpg?w=2000";
    container.insertAdjacentHTML("afterbegin", containerMarkup);


    saveButtonPost()
    comments()



}




// LIKE BUTTON

container.addEventListener("click", function(event) {
    if (event.target.classList.contains("image-like")) {
        event.target.classList.toggle("active");
    }
    
        if(event.target.classList.contains("active")) {
            console.log("is liked")
        }
    
}); 






// SAVE BUTTON
function saveButtonPost() {
    const saveButton = document.querySelectorAll(".save-button img");
    let saveButtonActive = false;

    for(let i = 0; i < saveButton.length; i++) {
        saveButton[i].addEventListener("click", ()=> {

            if(!saveButtonActive) {
                saveButton[i].src = "images/save-instagram (1).png";
                saveButtonActive = true;
            }
            else {
                saveButton[i].src = "images/save-instagram.png";
                saveButtonActive = false;
            }
        })
    }
}

// KOMMENTARE
function comments() {
    const commentInput = document.querySelectorAll(".commentInput");
    const commentArea = document.querySelectorAll(".comment-area");

    for(let i = 0; i< commentInput.length; i++)  {
        commentInput[i].addEventListener("keyup", (e)=> {
            if(e.keyCode === 13 && commentInput[i].value !== "") {
                const comment = document.createElement("p");
                comment.classList.add("text");
                comment.textContent = commentInput[i].value;
                commentArea[i].appendChild(comment);
                commentInput[i].value = "";
            }
        })
    } 
}

let deletePost = () => {
    const element = document.querySelector("section");
    const feedContainer = document.querySelector(".container")
    element.parentNode.removeChild(element);
    
     if(feedContainer.children.length === 0) {
        startScreen.style.visibility = "visible"
    }
}



let likeActive = false;

let likedPost = () => {
     const like = document.querySelectorAll(".image-like");
     const element = document.querySelectorAll("section");
    
    if(likeActive === false) {
        likeActive = true
        for(let i = 0; i < like.length; i++) {
            if(like[i].classList.contains("active")) {
                like[i].style.visibility = "visible";
                
            } else {
                element[i].style.display = "none"
            }
        } 
    
    } else {
        
        likeActive = false;
        for(let i = 0; i < like.length; i++) {
            if(like[i].classList.contains("active")) {
                like[i].style.visibility = "visible";
                
            } else {
                element[i].style.display = "block"
            }
        } 
    }
    
}



