
  const selectBtn = document.querySelector(".select-btn"),
  items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
selectBtn.classList.toggle("open");
});

items.forEach(item => {
item.addEventListener("click", () => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".checked"),
        btnText = document.querySelector(".btn-text");

        if(checked && checked.length > 0){
            btnText.innerText = `${checked.length} Seleccionado(s)`
        }else{
            btnText.innerText = "Seleccionados";
        }
});
})
//Selecciona todos
btn = document.getElementById('seleccionar-todos');
btn.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.add("checked");

    let checked = document.querySelectorAll(".checked"),
        btnText = document.querySelector(".btn-text");

        if(checked && checked.length > 0){
            btnText.innerText = `${checked.length} Seleccionado(s)`
        }else{
            btnText.innerText = "Seleccionados";
        }
    });
});
