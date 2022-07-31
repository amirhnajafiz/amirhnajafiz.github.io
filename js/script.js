const headerContext = ["h-1", "h-2", "h-3"];
const className = "h-selected"
const normalClass = "h-unselected"

function reset() {
    headerContext.forEach((id) => {
        document.getElementById(id).classList.remove(className);
        document.getElementById(id).classList.add(normalClass)
    })
}

let index = 0;
function updateHeader() {
    reset()

    let obj = document.getElementById(headerContext[index]);
    obj.classList.add(className)

    if (index === headerContext.length-1) {
        index = 0;
    } else {
        index++
    }

    setTimeout(updateHeader, 2000);
}

updateHeader();
