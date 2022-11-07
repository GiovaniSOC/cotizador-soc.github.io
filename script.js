
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

//Seleccionar banco
const selectBtnBanco = document.querySelector(".select-btn-banco");
bancos = document.querySelectorAll(".bancos");

selectBtnBanco.addEventListener("click", () => {
selectBtnBanco.classList.toggle("open");
});

bancos.forEach(bancos => {
bancos.addEventListener("click", () => {
  bancos.classList.toggle("checkedB");

  let checkedB = document.querySelectorAll(".checkedB"),
      btnTextB = document.querySelector(".btn-textB");

      if(checkedB && checkedB.length > 0){
          btnTextB.innerText = `${checkedB.length} Seleccionado(s)`
      }else{
          btnTextB.innerText = "Seleccionados";
      }
});
})
//Selecciona todos
btn = document.getElementById('seleccionar-todos');
btn.addEventListener("click", () => {
    bancos.forEach(bancos => {
        bancos.classList.add("checked");

    let checkedB = document.querySelectorAll(".checked"),
        btnTextB = document.querySelector(".btn-textB");

        if(checkedB && checkedB.length > 0){
            btnTextB.innerText = `${checkedB.length} Seleccionado(s)`
        }else{
            btnTextB.innerText = "Seleccionados";
        }
    });
});