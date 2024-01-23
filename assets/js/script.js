// Add this code to your existing script.js or create a new one
document.addEventListener('DOMContentLoaded', function () {
    // Fetch the README.md content
    fetch('readme.md')
        .then(response => response.text())
        .then(markdown => {
            // Convert markdown to HTML and set it to the right column
            document.querySelector('.right-column').innerHTML = marked(markdown);
        });
});
