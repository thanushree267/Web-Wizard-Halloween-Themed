// search.js

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchBox = document.getElementById('search-box');

    searchButton.addEventListener('click', performSearch);
    searchBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const query = searchBox.value.toLowerCase();
        if (query) {
            alert(`Searching for: ${query}`);
            // You can integrate actual search logic here.
            // For example, redirect to a search results page or filter items on the page.
            window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
        } else {
            alert('Please enter a search query.');
        }
    }
});
