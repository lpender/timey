### global log ###

'use strict'

define [
  'timey', 'jquery', 'mustache'
  ], (Timey, $, Mustache) ->

  console.log(Mustache)

  ###*
   * [Timey description]
   * @param {[type]} startDate
   * @param {[type]} endDate
  ###
  Timey = (startDate, endDate) ->
    @init startDate, endDate
    return this

  Timey:: =

    init: (startDate, endDate) ->
      @week = ['Su', 'Mo','Tu','We','Th','Fr', 'Sa']
      @month = [0,1,2,3]
      console.log startDate, endDate
      return

    draw: (selector) -> 
      @$container = $(selector)

      $calendar = $(@$container.find('.timey-cal'))

      $.get '../mst/day.mst', (template) =>
        log template

        @month.forEach =>
          @week.forEach (n) ->
            $day = Mustache.render(template, {name: n});
            $calendar.append $day



      return 

  Timey