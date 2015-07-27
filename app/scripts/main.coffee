# global window
'use strict'

require.config paths:
  jquery: '../../bower_components/jquery/dist/jquery'
  mustache: '../../bower_components/mustache/mustache'

require [
  'timey'
  'jquery'
  'signage'
], (Timey, $, Signage) ->
  myTimey = new Timey(Date('May 1, 2013 0:00'), Date('May 31, 2013 0:00'))

  $(window).on 'timey:draw-complete', () ->
    new Signage()
    return

  myTimey.draw '.timey'

  window.myTimey = myTimey

  return
