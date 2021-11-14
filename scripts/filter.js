const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
	searchCategory(e);
});

function searchCategory(e) {
	e.preventDefault();

	let input = form.search.value.trim();

	// data.filter(collection => {
	// 	const filteredData = collection.category === "Mountain";
	// 	form.reset(); 
	// 	form.innerHTML += data; 
	// 	data = filteredData;
	// });
	// reset form 
}
