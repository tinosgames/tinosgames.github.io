function performSearch() {
    var query = document.getElementById("search-input").value;
    if (query) {
        // Redirect to Google search with the query
        window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
    }
}

document.getElementById("search-input").addEventListener("keyup", function (event) {
    // Trigger search when Enter key is pressed
    if (event.key === "Enter") {
        performSearch();
    }
});
