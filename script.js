const formSubmit = document.getElementById("formSubmit");

formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputum = document.querySelector("input");
    let ul = document.getElementById("ul");
    let li = document.createElement("li");
    li.textContent = inputum.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

    deleteBtn.addEventListener("click", () => {
        ul.removeChild(li)
    })
    li.appendChild(deleteBtn)

    ul.appendChild(li)
    inputum.value = "";
})