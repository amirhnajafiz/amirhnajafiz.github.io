const components = [
    {
        id: "home-component",
        color: "rgba(2, 193, 248, 0.2)"
    },
    {
        id: "bio-component",
        color: "rgba(11, 103, 0, 0.2)"
    },
    {
        id: "tech-component",
        color: "rgba(255, 212, 45, 0.2)"
    }
];
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

    const v = document.getElementsByClassName("context-body-box").item(0)

    components.forEach((c) => {
        const obj = document.getElementById(c.id)
        if (c.id === selected) {
            v.style.background = c.color
            obj.classList.remove(disappear)
            obj.classList.add(appear)
        } else {
            obj.classList.remove(appear)
            obj.classList.add(disappear)
        }
    });
}