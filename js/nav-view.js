const components = ["home-component", "bio-component", "tech-component"];
const disappear = "disappear";
const appear = "appear"

function show(selected) {
    components.forEach((id) => {
        const obj = document.getElementById(id)
        if (id === selected) {
            obj.classList.remove(disappear)
            obj.classList.add(appear)
        } else {
            obj.classList.remove(appear)
            obj.classList.add(disappear)
        }
    })
}