const name_submit_btn = document.querySelector(".name_submit_btn")
const name_input = document.querySelector(".name_input");
const show_name = document.querySelector(".show_name")
const form = document.querySelector("form");

form.addEventListener("submit", (e) => e.preventDefault())
name_input.addEventListener("input", (e) => {
    const value = e.target.value;
    if (value.length > 5) {
        name_submit_btn.removeAttribute("disabled")
        name_submit_btn.addEventListener("click", () => {
            show_name.innerText = `Your name is ${value}`
            name_input.value = ""
            if (!show_name.hasAttribute("readonly")) {
                show_name.setAttribute("readonly", true)
            }
        })
    } else {
        name_submit_btn.setAttribute("disabled", true)
    }
})


const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
    const buttonParnt = btn.parentElement;
    buttonParnt.style.backgroundColor = "blue"
    btn.addEventListener("click", (e) => {
        const id = e.target.parentElement.dataset.id;
        console.log(id)
        if (id == 2) {
            buttonParnt.style.backgroundColor = "red"
        } else {
            buttonParnt.style.backgroundColor = "blue"
        }
    })
})
