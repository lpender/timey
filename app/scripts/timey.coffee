'use strict'

define [
  'jquery', 'mustache'
  ], ($, Mustache) ->

  ###*
   * [Timey description]
   * @param {selector, $element, element} container
   * @param {[type]} startDate
   * @param {[type]} endDate
  ###
  Timey = (startDate, endDate) ->
    @init startDate, endDate
    return this

  Timey:: =
    elements: {},

    init: (startDate, endDate) ->
      @startDate = startDate
      @endDate = endDate

      @dates = []

      @week = ['Su', 'Mo','Tu','We','Th','Fr', 'Sa']
      @numWeeks = [0, 1, 2, 3]

      return this

    addDate : (date) ->
      @dates.push date
      return true

    draw: (container) ->
      @$container = $(container)

      $.get '../mst/calendar.mst', (calendarHtml) =>
        @$container.append Mustache.render(calendarHtml)

        $calendar = @$container.find('.timey-cal') #@getElement 'calendar'
        $.get '../mst/day.mst', (template) =>
          @numWeeks.forEach =>
            @week.forEach (n) ->
              $day = Mustache.render(template, {name: n})
              $calendar.append $day

          @$container.trigger('timey:draw-complete')
          @attach()

    getElement: (component) ->
      @elements[component] || @elements[component] = @$container.find(@elConfigs[component])

    elConfigs: 
      calendar: '.timey-cal',
      day : '.timey-day'

    attach: () ->
      @getElement('day').on 'click', ()->
        $(this).toggleClass('flipped')

  Timey
