// Sections and variable  created by US :)
const gallery = document.querySelector(".image-galleries");
const copyPopup = document.querySelector(".copy-container");
const downloadPopup = document.querySelector(".download-container");
const galleryBtn = document.querySelector(".gallery-btn button");
const galleryImages = document.querySelector(".gallery-images");
//
let savedImage = [];

// Event listerners
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
// galleryBtn.addEventListener("click", viewGallery);

// functions
function saveToGallery(e) {
    if(e.target.tagName === "A"){
        //popup animation
        const popup = downloadPopup.children[0];
        downloadPopup.classList.add("active")
        popup.classList.add("active");
        // galley to save
        // const thisImage = e.target.getAttribute("href");
        // const img = document.createElement("img");
        // img.src = thisImage;
        // savedImage.push(img);
    }    
}
 // map through the array
savedImage.forEach(image => {
    let html = '';
    html = `
        <img class="image-1 image" src="${image.currentSrc}" alt="">
    `;
    galleryImages.innerHTML += html;
});
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