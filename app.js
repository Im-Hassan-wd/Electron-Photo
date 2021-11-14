// Sections and variable  created by US :)
const gallery = document.querySelector(".image-galleries");
const copyPopup = document.querySelector(".copy-container");
const downloadPopup = document.querySelector(".download-container");
const galleryBtn = document.querySelector(".gallery-btn button");
const galleryImages = document.querySelector(".gallery-images");
//

// Event listerners
// preventing other html file from unconditional err
const app = () => {
    data.forEach(electron => {
        let html =``;
        html = `
            <div class="image-gallery">
                <div class="option">
                    <h3>${electron.name}</h3>
                    <a href="${electron.url}" download="electron-${electron.category}-${electron.id}">Download</a>
                </div>
                <div class="gallery-overflow">
                    <img src="${electron.url}" alt="Mountain">
                </div> 
                <button style="background:${electron.color}" class="color">${electron.color}</button>
            </div>
        `;
        gallery.innerHTML += html;
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
    // galleryBtn.addEventListener("click", viewGallery);
}

if(document.body.classList.contains('app')){
    app();
}
if(document.body.id === "gallery"){
    displayLocalsInGallery();
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
    images.forEach(function(img){
	//local storage elements

	//local div
	const localDiv = document.createElement("div");
	locaDiv.classlist.add("local-div");
	galleryImages.append(localDiv);

	//local image 
        const localImage = document.createElement("img");
        localImage.src = img;
        localDiv.append(localImage);

	//local download button
	const download = document.createElement("i");
	download.classList.add("download-btn fas fa-download");
	localDiv.append(download);
    });
}
