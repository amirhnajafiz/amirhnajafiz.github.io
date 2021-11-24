// Importing the data
import data from "../../assets/data.js";

console.log("200 OK\n" + JSON.stringify(data));

function display_bio() {
    let temp = document.createElement("div");

    Object.keys(data).forEach(key => {
        let inner = document.createElement("div");
        inner.classList.add("p-3");
        inner.classList.add("my-2");
        inner.classList.add("bg-dark");
        inner.classList.add("rounded");
        inner.classList.add("text-light");
        inner.innerText = key + ": " + data[key];
        temp.appendChild(inner);
    });

    document.getElementById("data").appendChild(temp);
}


let url = document.URL.split("/");

if (url[url.length - 1] == "projects.html") {
    display_bio();
}