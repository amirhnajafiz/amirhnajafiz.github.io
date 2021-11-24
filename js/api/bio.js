function display_bio(data) {
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

export default display_bio;