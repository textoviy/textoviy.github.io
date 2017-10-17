var openf = document.querySelector(".feedback");
var link = document.querySelector(".contacts-form-btn");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function(event) {
  event.preventDeafult();
  overlay.classList.add("modal-overlay-open");
} );
