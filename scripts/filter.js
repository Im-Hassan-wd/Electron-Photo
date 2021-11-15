const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const input = form.search.value.trim();
	searchCategory(input);
	form.reset();
});

function searchCategory(input) {
	const filtered = data.filter(collection => collection.category === input.toLowerCase());
	
	filtered.forEach(filter => {
		let html =``;
        html = `
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
        gallery.innerHTML += html;
	})
}
