// element.classList.add()
// element.classList.remove()
// element.classList.toggle()
// element.classList.contains()
// element.classList.replace()

const title = document.querySelector(".title")
const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerText == "Add") {
            title.classList.add("active")
            title.innerText = "active class is added"
        }
        if (e.target.innerText == "Remove") {
            title.classList.remove("active")
            title.innerText = "active class is removed"
        }
        if (e.target.innerText == "Toggle") {
            title.classList.toggle("active")
            if (title.classList.contains("active")) {
                title.innerText = "active class is added"
            } else {
                title.innerText = "active class is removed"
            }
        }
        if (e.target.innerText == "contains") {
            if (title.classList.contains("active")) {
                title.innerText = "yes, active class is founded"
            } else {
                title.innerText = "sorry! active class is not founded"
            }
        }
        if (e.target.innerText == "replace") {
            if (title.classList.contains("active")) {
                title.innerText = "active class is replaced"
            } else {
                title.innerText = "active class is not founded"
            }
        }
    })
})
