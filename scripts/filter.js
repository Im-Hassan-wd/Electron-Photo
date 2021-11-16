const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const input = form.search.value.trim();
	searchCategory(input);
	form.reset();
});

function searchCategory(input) {
	const filtered = data.filter(collection => collection.category === input.toLowerCase());
	if(filtered.length !== 0){
        filtered.forEach(filter => {
            let html =``;
            html += `
                <div class="image-gallery">
                    <div class="option">
                        <h3>${filter.name}</h3>
                        <a href="${filter.url}" download="pexel-pixar-${filter.id * 567}">Download</a>
                    </div>
                    <div class="gallery-overflow">
                        <img src="${filter.url}" alt="Mountain">
                    </div> 
                    <button style="background:${filter.color}" class="color">${filter.color}</button>
                </div>
            `;
            gallery.innerHTML = html;
        });
    } else if(filtered.length === 0) {
        data.forEach(electron => {
            let html =``;
            html = `
                <div class="image-gallery">
                    <div class="option">
                        <h3>${electron.name}</h3>
                        <a href="${electron.url}" download="pexel-pixar-${electron.id * 567}">Download</a>
                    </div>
                    <div class="gallery-overflow">
                        <img src="${electron.url}" alt="Mountain">
                    </div> 
                    <button style="background:${electron.color}" class="color">${electron.color}</button>
                </div>
            `;
            gallery.innerHTML += html;
        });
    }
}
