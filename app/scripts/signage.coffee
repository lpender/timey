'use strict'

define ['jquery'], ($) ->
  ()->
    $('[data-signage]').each (index, el) ->
      
      # log('chill');
      $el = $(el)
      if $el.css('position') isnt 'fixed' and $el.css('position') isnt 'absolute'
        
        # $el.wrap('<div class='signage-wrapper'></div>');
        $signage = undefined
        $el.addClass 'signage-wrapper'
        $signage = $('<div class=\'signage\'>' + $el.data('signage') + '</div>')
        $el.append $signage
        return console.log('Signage initted: ' + el)
      console.error 'Signage failed: ' + el

