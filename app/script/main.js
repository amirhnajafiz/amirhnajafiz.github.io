function loadPage(page) {
    const content = document.getElementById('content');

    // Add a fade-out effect
    content.style.opacity = 0;

    // Get the page route
    const addr = page.split("/")[1].replace(".html", "");
    localStorage.setItem("route", addr);

    setTimeout(() => {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                // Replace content and add a fade-in effect
                document.title = "amirhnajafiz - " + addr;
                content.innerHTML = data;
                content.style.opacity = 1;
            })
            .catch(error => {
                console.error('Error loading page:', error);
                content.innerHTML = '<p>Page could not be loaded.</p>';
                content.style.opacity = 1;
            });
    }, 300); // Adjust the delay for smoother transitions
}
