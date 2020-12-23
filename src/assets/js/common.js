//= require common/script.js


/* Execution of functions */

ready(() => {
  /* Exports */

  //= require common/script.js
  //= require header/script.js

  swipersInit();

  window.onresize = () => {
    headerScript.headerTeleport();
  }
})