function slideru() {
  var wrapper = document.querySelector('.slideru-wrapper');
  var images = document.querySelectorAll('.slideru-wrapper img');
  var width = images[0].width;
  var count = images.length;
  var currentIndex = 0;
  setInterval(function() {
    currentIndex = (currentIndex + 1) % count;
    wrapper.style.transform = 'translateX(-' + width * currentIndex + 'px)';
  }, 1500);
}
slideru();