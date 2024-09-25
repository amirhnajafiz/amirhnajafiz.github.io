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

// main scripts
// load page is used to redirect between routes
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
