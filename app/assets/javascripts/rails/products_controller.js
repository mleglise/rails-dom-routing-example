(function(window,undefined){
  "use strict";
  window.RAILS.controllers.products = {

    init: function() {
      console.log('Products are stupid.');
    }, // end controller-wide action

    index: function() {
      console.log('But here is a list of them anyway.');
    }, // end controller-wide action

    show: function() {
      console.log('But this one is cool.');
    } // end action

  }; // end controller

})(window);
