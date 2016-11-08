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

    tabContent.forEach(function(el, i) {
      if (i > 0) {
        el.classList.add('hide')
      }
    })
    tabButton.forEach(function(el, i) {
      if (i == 0) {
        el.classList.add('active')
      }
      el.addEventListener('click', function(e) {
        e.preventDefault();
        tabButton.forEach(function(el) {
          el.classList.remove('active')
        })
        this.classList.add('active')
        tabContent.forEach(function(el) {
          el.classList.add('hide')
        })
        tabId = this.getAttribute('href')
        document.querySelector(tabId).classList.remove('hide')
      })
    })
  }
  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return Tabbed
}));
