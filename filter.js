const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
	searchCategory(e);
});

function searchCategory(e) {
	e.preventDefault();

	let input = form.search.value.trim();
	form.reset();

	filteredData = data.filter(collection => {
		collection.category === "Mountain";
	});
	data = filteredData;
}
