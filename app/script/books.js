// global books object
let template = `
<div style="display: grid; grid-template-columns: 20% 80%;">
    <img width="200px" src="{{image}}" alt="book-picture" style="box-shadow: 0 0 2px black" />
    <div class="px-4">
        <div class="h5" style="text-align: justify;">
            {{title}}
        </div>
        <div style="display: flex; flex-direction: column;">
            <small>Edition: {{edition}}</small>
            <small>Author: {{author}}</small>
            <p style="text-align: justify;" class="py-2">
                {{summary}}
            </p>
        </div>
    </div>
</div>
`;

const books = [
  {
    title:
      "Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems",
    edition: "1st",
    author: "Martin Kleppmann",
    summary:
      "Data is at the center of many challenges in system design today. Difficult issues need to be figured out, such as scalability, consistency, reliability, efficiency, and maintainability. In addition, we have an overwhelming variety of tools, including relational databases, NoSQL datastores, stream or batch processors, and message brokers.",
    image: "https://m.media-amazon.com/images/I/91YfNb49PLL._SY425_.jpg",
  },
  {
    title:
      "Kubernetes in Action",
    edition: "1st",
    author: "Marko Luksa",
    summary:
      "Kubernetes in Action is a comprehensive guide to effectively developing and running applications in a Kubernetes environment. Before diving into Kubernetes, the book gives an overview of container technologies like Docker, including how to build containers, so that even readers who haven't used these technologies before can get up and running.",
    image: "https://m.media-amazon.com/images/I/61TSq2O88ZL._SY466_.jpg",
  },
];

// global rendering functions
function renderBooks() {
  let holder = document.getElementById("books-holder");

  books.forEach((book) => {
    let element = template;

    element = element.replace("{{title}}", book.title);
    element = element.replace("{{summary}}", book.summary);
    element = element.replace("{{author}}", book.author);
    element = element.replace("{{edition}}", book.edition);
    element = element.replace("{{image}}", book.image);

    let hl = document.createElement("div");
    hl.classList.add("mb-5")
    hl.innerHTML = element;

    holder.appendChild(hl);
  });
}
