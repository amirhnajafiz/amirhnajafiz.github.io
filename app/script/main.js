// global variables
// routes is a map that binds the address to a page in pages directory.
const ROUTES = {
    "/home": "pages/home.html",
    "/blogs": "pages/blogs.html",
    "/books": "pages/books.html",
    "/contact": "pages/contact.html",
    "/404": "pages/404.html"
};

// Components scripts
// Each section blongs to a page.html, which contains its needed scripts.
function homeScript() {
    const textElement = document.getElementById('animated-text');
    const originalText = textElement.innerText.split(''); // Split the text into characters
    const believeRange = [2, 8];  // Characters "believe"
    const seawolvesRange = [17, originalText.length];  // Characters "seawolves"

    let believeIndex = believeRange[0];
    let seawolvesIndex = seawolvesRange[0];

    // A function to incrementally update the HTML content with colored characters
    function updateTextContent() {
      const updatedText = originalText.map((char, i) => {
        if (i < believeIndex && i >= believeRange[0]) {
          return `<span class="red">${char}</span>`;
        } else if (i < seawolvesIndex && i >= seawolvesRange[0]) {
          return `<span class="dark-blue">${char}</span>`;
        } else {
          return char; // Keep unchanged characters as is
        }
      }).join('');

      textElement.innerHTML = updatedText;
    }

    function animateText() {
      // Animate "believe" to red
      if (believeIndex <= believeRange[1]) {
        believeIndex++;
        updateTextContent();
      } else if (seawolvesIndex <= seawolvesRange[1]) {
        // Animate "seawolves" to dark blue
        seawolvesIndex++;
        updateTextContent();
      }
    }

    setInterval(animateText, 300);  // Adjust speed as needed
}

// global used functions
// render: this function is used to render a page based on its input
function render(page) {
    // Get content element
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

                return addr;
            })
            .then(handler => {
                if (handler == "home") {
                    homeScript();
                }
            })
            .catch(error => {
                console.error('Error loading page:', error);
                content.innerHTML = '<p>Page could not be loaded.</p>';
                content.style.opacity = 1;
            });
    }, 300); // Adjust the delay for smoother transitions
}

// routing: handle routes by checking the location path.
function routing() {
    // first we take the pathname out of the window location
    let path = this.window.location.pathname;
    if (path == "" || path == "/") {
        path = "/home";
    }

    // default page is 404.html
    let page = "/404";

    // then we check the input pathand compare it to our routes
    // entiries
    for (const [key, value] of Object.entries(ROUTES)) {
        if (key == path) {
            page = value;
        }
    }

    render(page);
}

// Event listeners
// window url changes
window.addEventListener("popstate", function (_) {
    routing(path);
})
