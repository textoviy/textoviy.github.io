//Код просто восхитителен (Нет)... Тут так пришлось написать, ибо новичек:)

// var link = document.querySelector(".main-header__button--white");
var linkTwo = document.querySelector(".main-header__button");
var linkThree = document.querySelector(".btn-blue");
var linkFour = document.querySelector(".choose-color__button");
var linkFive = document.querySelector(".choose-color__button--two");
var linkSix = document.querySelector(".choose-color__button--three");
var linkSeven = document.querySelector(".button");
var linkEight = document.querySelector(".button");
var overlay = document.querySelector(".modal-overlay");
var feedback = document.querySelector(".submit-your-application__form--modal");
var overlay_close = document.querySelector(".feedback-close");

//Animation

// link.addEventListener("click", function(event) {
//     event.preventDefault();
//     feedback.classList.add("modal-content-show");
// } );

//Open form
// link.addEventListener("click", function(event) {
//     event.preventDefault();
//     overlay.classList.add("modal-overlay-open");
// } );

linkTwo.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("modal-overlay-open");
} );

linkThree.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("modal-overlay-open");
} );

linkFour.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("modal-overlay-open");
} );

linkFive.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("modal-overlay-open");
} );

linkSix.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("modal-overlay-open");
} );

linkSeven.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("modal-overlay-open");
} );

linkEight.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("modal-overlay-open");
} );

//Close form

overlay_close.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.remove("modal-overlay-open");
} );

//close form key

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if(overlay.classList.contains("modal-overlay-open")) {
            overlay.classList.remove("modal-overlay-open")
        } //if(overlay.classList.contains("modal-overlay-open"))
    }
} );

//close form "click" modal-overlay

// overlay.addEventListener("click", function(event) {
//     event.preventDefault();
//     overlay.classList.remove("modal-overlay-open");
//   } );