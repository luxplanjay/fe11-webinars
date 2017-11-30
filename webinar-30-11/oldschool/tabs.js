// КОД ДЛЯ ТАБОВ

(function() {
  var tabsNav = document.querySelector('.tabs-nav');
  var links = document.querySelectorAll('.tabs-nav__link');


  menu.addEventListener('click', function(evt) {
    evt.preventDefault();

    var target = evt.target;

    if(this !== target) {
      console.log('click on tabs-nav link');
      console.log('from tabs.js: ', links);
    }
  });
}());




