document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const gameLinks = document.querySelectorAll('.game-links a');

    searchInput.addEventListener('keyup', function(event) {
        const query = searchInput.value.toLowerCase();

        gameLinks.forEach(function(link) {
            const gameTitle = link.querySelector('img').alt.toLowerCase();
            if (gameTitle.includes(query)) {
                link.style.display = 'inline-block';
            } else {
                link.style.display = 'none';
            }
        });
    });

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission if inside a form
            // Trigger the keyup event to perform the search
            const eventKeyup = new Event('keyup');
            searchInput.dispatchEvent(eventKeyup);
        }
    });
});
