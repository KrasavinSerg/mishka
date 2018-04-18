var order_btn = document.querySelector (".best-goods__button-order");
var popup = document.querySelector(".modal");


order_btn.addEventListener("click", function (evt){
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
