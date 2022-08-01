const components = ["home-component", "bio-component", "tech-component"];
const buttons = ["bt-1", "bt-2", "bt-3"]
const disappear = "disappear";
const appear = "appear"
const select_btn = "selected-btn"

function updateBtn(bid) {
    buttons.forEach((id) => {
        const obj = document.getElementById(id)
        if (id === bid) {
            obj.classList.add(select_btn)
        } else {
            obj.classList.remove(select_btn)
        }
    })
}

function show(selected, btn) {
    updateBtn(btn);

    components.forEach((id) => {
        const obj = document.getElementById(id)
        if (id === selected) {
            obj.classList.remove(disappear)
            obj.classList.add(appear)
        } else {
            obj.classList.remove(appear)
            obj.classList.add(disappear)
        }
    });
}