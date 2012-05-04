// IMPORTANT: This file should be loaded last in the DOM, after all
// page-specific controllers and libraries.
// 
// The page-specific triggering algorithm is heavily inspired by:
// http://www.viget.com/inspire/extending-paul-irishs-comprehensive-dom-ready-execution/

(function(window,undefined){
  "use strict";
  
  // ====================================================================
  // UTIL is kept local to this file so it doesn't polute the global namespace.
  var UTIL = {};
  
  // Trigger the specified controller action function.
  UTIL.exec = function( controller, action ){
    var ns = window.RAILS.controllers,
        action = ( action === undefined ) ? "init" : action;
    
    if ( controller !== "" && ns[controller] && typeof ns[controller][action] == "function" ) {
      console.group('RAILS.controllers.%s.%s()', controller, action);
      ns[controller][action]();
      console.groupEnd();
    } else {
      console.log('RAILS.controllers.%s.%s NOT FOUND', controller, action);
    }
  };
  
  // Trigger all 3 actions for the current page.
  UTIL.init = function(){
    UTIL.exec( "common" );
    UTIL.exec( RAILS.currentPage.controller );
    UTIL.exec( RAILS.currentPage.controller, RAILS.currentPage.action );
  };

  // Call init on page load, using jQuery's way if available, or fallback
  // to native DOM events.
  if( !!window.jQuery ){
    window.jQuery( window.document ).ready( UTIL.init() );
  } else {
    var timeout = window.setTimeout(function(){ UTIL.init() },2000);
    window.onload = function(){
      clearTimeout(timeout);
      UTIL.init();
    };
  }
  
})(window);
