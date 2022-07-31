// Importing the data
import data from "../../assets/data.js";
import display_bio from "./api/bio.js";

console.log("200 OK\n" + JSON.stringify(data));

let url = document.URL.split("/");

if (url[url.length - 1] === "projects.html") {
    display_bio(data);
}
