// global books object
const books = [
    {
        "title": "Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems",
        "edition": "1st",
        "author": "Martin Kleppmann",
        "summary": "Data is at the center of many challenges in system design today. Difficult issues need to be figured out, such as scalability, consistency, reliability, efficiency, and maintainability. In addition, we have an overwhelming variety of tools, including relational databases, NoSQL datastores, stream or batch processors, and message brokers.",
        "tags": [
            "distributed systems",
            "systems design",
            "databases",
            "data models"
        ],
        "image": "https://m.media-amazon.com/images/I/91YfNb49PLL._SY425_.jpg",
        "link": "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321"
    }
]

// global rendering functions
function renderBooks() {
    let holder = document.getElementById("books-holder");

    books.forEach(book => {
        let element = document.createElement("div");

        let header = document.createElement("h3");
        header.innerHTML = book.title;
        element.appendChild(header);
    })
}
