const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
	searchCategory(e);
});

function searchCategory(e) {
	e.preventDefault();

	let input = form.search.value.trim();

	filteredData = data.filter(collection => {
		collection.category === "Mountain";
	});
	data = filteredData;
	form.innerHTML += data; 
	// reset form 
	form.reset(); 
}
