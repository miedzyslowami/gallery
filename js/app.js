document.addEventListener("DOMContentLoaded", function(event) {
//page loaded
const gallery = document.querySelectorAll('.gallery_item');

function toggleOpen(){
  this.classList.toggle('open');
  gallery.forEach((gallery_item) => {
    if(gallery_item !==this){
      gallery_item.classList.remove('open');
    }
  });
}

function toggleActive(e){
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}

gallery.forEach((gallery_item) => gallery_item.addEventListener('click',toggleOpen));
gallery.forEach((gallery_item) => gallery_item.addEventListener('transitionend',toggleActive));
});
