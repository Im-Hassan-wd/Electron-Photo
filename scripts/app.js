// Sections and variable  created by US :)
const gallery = document.querySelector(".image-galleries");
const copyPopup = document.querySelector(".copy-container");
const downloadPopup = document.querySelector(".download-container");
const galleryBtn = document.querySelector(".gallery-btn button");
const galleryImages = document.querySelector(".gallery-images");
const search = document.querySelector("input[type='text']");
const input = document.querySelector(".input-popup input")
let category = ['creative...', 'interior...', 'mountain...'];
//

// Event listerners
// preventing other html file from unconditional err
const app = () => {
    // chnage search place holder dynamicaly
    setInterval(() => {
        let index = Math.floor(Math.random() * category.length);
        const placeholder = category[index];
        search.placeholder = placeholder;
    }, 5000);

    data.forEach(electron => {
        let html =``;
        html = `
            <div class="image-gallery" data-category="${electron.category}">
                <div class="option">
                    <h3>${electron.name}</h3>
                    <a href="${electron.url}" download="pexel-pixabay-${electron.id * 567}">Download</a>
                </div>
                <div class="gallery-overflow">
                    <img src="${electron.url}" alt="Mountain">
                </div> 
                <button style="background:${electron.color}" class="color">${electron.color}</button>
            </div>
        `;
        gallery.innerHTML += html;
    });
    input.addEventListener("submit", () => {

    });
    gallery.addEventListener("click", (e) => {
        saveToGallery(e);
        copyToClipboard(e)
    });
    copyPopup.addEventListener("transitionend", () => {
        const popup = copyPopup.children[0];
        copyPopup.classList.remove("active") ;
        popup.classList.remove("active") ;
    });
    downloadPopup.addEventListener("transitionend", () => {
        const popup = downloadPopup.children[0];
        downloadPopup.classList.remove("active") ;
        popup.classList.remove("active") ;
    });

    search.addEventListener("keyup", () => {
        const input = search.value.trim();
        filterCollection(input);
    });
}

if(document.body.classList.contains('app')){
    app();
}
if(document.body.classList.contains('gal')){
    displayLocalsInGallery();
}

function filterCollection(input) {
    if (input.length > 3) {
        Array.from(gallery.children)
            .filter(collection => !collection.getAttribute("data-category").includes(input))
            .forEach(collection => collection.classList.add("filtered"));

    } else {
        Array.from(gallery.children)
            .filter(collection => collection.getAttribute("data-category").includes(input))
            .forEach(collection => collection.classList.remove("filtered"));
    }
}
// functions
function saveToGallery(e) {
    if(e.target.tagName === "A"){
        //popup animation
        const popup = downloadPopup.children[0];
        downloadPopup.classList.add("active")
        popup.classList.add("active");
        // galley to save
        const thisImage = e.target.getAttribute("href");
        const img = document.createElement("img");
        img.src = thisImage;
        //add image to local storage
        saveLocalImage(img.src);
    }    
}
 // map through the array

function copyToClipboard(e) {
    if (e.target.classList.contains("color")){
        let hex = e.target.textContent;
        const text = document.createElement("textarea");
        text.value = hex;
        document.body.appendChild(text);
        //selection
        text.select();
        document.execCommand("copy");
        document.body.removeChild(text);
        //popup animation
        const popup = copyPopup.children[0];
        copyPopup.classList.add("active")
        popup.classList.add("active");
        
    }
}

function saveLocalImage(img){
    let images;

    if(localStorage.getItem("images") === null){
        images = [];
    } else {
        images = JSON.parse(localStorage.getItem("images"));
    }
    images.push(img);
    localStorage.setItem("images", JSON.stringify(images));
}

function displayLocalsInGallery(){
   let images;

    if(localStorage.getItem("images") === null){
        images = [];
    } else {
        images = JSON.parse(localStorage.getItem("images"));
    }

    document.body.querySelector(".downloads").innerText = images.length;

    images.forEach(function(img){
    //local storage elements
        //local div
        const localDiv = document.createElement("div");
        localDiv.classList.add("local-div");
        galleryImages.prepend(localDiv);

        //local image 
        const localImage = document.createElement("img");
        localImage.src = img;
        localDiv.append(localImage);

        //download button
        const downloadBtn = document.createElement("button");
        downloadBtn.classList.add("download-btn");
        localDiv.append(downloadBtn)

        //local download
        const download = document.createElement("img");
        download.src = "collection/download.svg";
        downloadBtn.append(download);
    });
}


