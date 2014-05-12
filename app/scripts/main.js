'use strict';
/* global window, log */

(function() {

  // usage: log('inside coolFunc',this,arguments);
  // http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
  window.log = function(){
    log.history = log.history || [];   // store logs to an array for reference
    log.history.push(arguments);
    if(window.console){
      console.log( Array.prototype.slice.call(arguments) );
    }
  };

  require.config({
    paths: {
      'jquery': '../../bower_components/jquery/dist/jquery',
      'mustache': '../../bower_components/mustache/mustache'
    }
  });

  //This function is called when scripts/helper/util.js is loaded.
  //If util.js calls define(), then this function is not fired until
  //util's dependencies have loaded, and the util argument will hold
  //the module value for "helper/util".
  // console.log('\'Allo \'Allo!');

  require(['timey', 'jquery'], function (Timey, $) {
    var myTimey = new Timey(Date('May 1, 2013 0:00'), Date('May 31, 2013 0:00'));
    myTimey.draw('.timey');

    $('[data-signage]').each(function (index, el) {
      log('chill');
      var $el = $(el);
      if ($el.css('position') !== 'fixed' && $el.css('position') !== 'absolute') {
        // $el.wrap('<div class="signage-wrapper"></div>');
        var $signage;
        
        $el.addClass('signage-wrapper');

        $signage = $('<div class="signage">' + $el.data('signage') + '</div>');
        $el.append($signage);


        return console.log('Signage initted: ' + el);
      }
      return console.error('Signage failed: ' + el);
    });

  });
})();