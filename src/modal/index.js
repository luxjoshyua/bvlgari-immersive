// WHAT IS THIS
let modalButton = document.querySelector('.modal-hero');
let modalOverlay = document.querySelector('.modal-wrapper');
let modalClose = document.querySelector('.modal-button-container');
if(modalButton){
  modalButton.addEventListener('click', function(){
    if(modalOverlay){
      document.body.classList.toggle('modal-open');
    }
  });
}
if(modalClose){
  modalClose.addEventListener('click', function(){
    document.body.classList.toggle('modal-open');
  });
}
// [ESC] key press
document.body.addEventListener('keydown', function(e) {
  if(e.key === "Escape") {
    if(document.body.classList.contains('modal-open')){
      document.body.classList.toggle('modal-open');
    }
  }
});