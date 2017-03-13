(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Tabbed'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.Tabbed = factory();
  }
}(this, function() {

  function Tabbed(el) {
    var tabContent, tabButton, tabId
    tabContent = document.querySelector(el).querySelectorAll('div')
    tabButton = document.querySelector(el).childNodes[1].querySelectorAll('a')

    for (var i = 1; i < tabContent.length; i++) {
      tabContent[i].classList.add('hide')
    }
    for (var i = 0; i < tabButton.length; i++) {
      tabButton[0].classList.add('active')
      tabButton[i].addEventListener('click', function(e) {
        e.preventDefault();
        for (var i = 0; i < tabButton.length; i++) {
          tabButton[i].classList.remove('active')
        }
        this.classList.add('active')
        for (var i = 0; i < tabContent.length; i++) {
          tabContent[i].classList.add('hide')
        }
        tabId = this.getAttribute('href')
        document.querySelector(tabId).classList.remove('hide')
      })
    }
  }
  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return Tabbed
}));
