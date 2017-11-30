// КОД ДЛЯ МЕНЮ

(function () {
  var menu = document.querySelector('.menu');
  var links = document.querySelectorAll('.menu__link');

  function toggleActiveLink (links, target) {
    links.forEach(function(link) {
      link.classList.remove('menu__link--active');
    });

    target.classList.add('menu__link--active');
  }

  menu.addEventListener('click', function(evt) {
    evt.preventDefault();

    var target = evt.target;

    if(this !== target) {
      toggleActiveLink(links, target);
      console.log('from menu.js: ', links);
    }
  });
}());



// var MENU_MODULE = (function() {
//   var value = 5;
//   console.log('from menu.js: ', value);
// }());
