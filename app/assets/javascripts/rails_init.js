// This file sets up the basic object literals for the application.

(function(window,undefined){
  "use strict";
  
  var body = window.document.body,
      RAILS = window.RAILS = window.RAILS || {}; // public RAILS object
  
  // ====================================================================
  // Set up the global RAILS object with common elements
  RAILS.controllers = {};
  RAILS.currentPage = {
    controller: body.getAttribute( "data-controller" ),
    action: body.getAttribute( "data-action" )
  };
  RAILS.currentPage.path = RAILS.currentPage.controller + "/" + RAILS.currentPage.action;
  
  console.log('Initializing JavaScript stack for %o', RAILS.currentPage.path);
  
})(window);
