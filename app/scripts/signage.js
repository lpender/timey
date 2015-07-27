(function() {
  'use strict';
  define(['jquery'], function($) {
    return function() {
      return $('[data-signage]').each(function(index, el) {
        var $el, $signage;
        $el = $(el);
        if ($el.css('position') !== 'fixed' && $el.css('position') !== 'absolute') {
          $signage = void 0;
          $el.addClass('signage-wrapper');
          $signage = $('<div class=\'signage\'>' + $el.data('signage') + '</div>');
          $el.append($signage);
          return console.log('Signage initted: ' + el);
        }
        return console.error('Signage failed: ' + el);
      });
    };
  });

}).call(this);
