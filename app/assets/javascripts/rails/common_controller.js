// Application-wide code to be executed on DOMReady
(function(window,undefined){
  "use strict";
  window.RAILS.controllers.common = {
    init: function() {
      
      console.log('I do things on EVERY page!')
    } // end application-wide action
  }; // end controller

})(window);
