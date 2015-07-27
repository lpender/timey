(function() {
  'use strict';
  define(['jquery', 'mustache'], function($, Mustache) {

    /**
     * [Timey description]
     * @param {selector, $element, element} container
     * @param {[type]} startDate
     * @param {[type]} endDate
     */
    var Timey;
    Timey = function(startDate, endDate) {
      this.init(startDate, endDate);
      return this;
    };
    Timey.prototype = {
      elements: {},
      init: function(startDate, endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.dates = [];
        this.week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        this.numWeeks = [0, 1, 2, 3];
        return this;
      },
      addDate: function(date) {
        this.dates.push(date);
        return true;
      },
      draw: function(container) {
        this.$container = $(container);
        return $.get('../mst/calendar.mst', (function(_this) {
          return function(calendarHtml) {
            var $calendar;
            _this.$container.append(Mustache.render(calendarHtml));
            $calendar = _this.$container.find('.timey-cal');
            return $.get('../mst/day.mst', function(template) {
              _this.numWeeks.forEach(function() {
                return _this.week.forEach(function(n) {
                  var $day;
                  $day = Mustache.render(template, {
                    name: n
                  });
                  return $calendar.append($day);
                });
              });
              _this.$container.trigger('timey:draw-complete');
              return _this.attach();
            });
          };
        })(this));
      },
      getElement: function(component) {
        return this.elements[component] || (this.elements[component] = this.$container.find(this.elConfigs[component]));
      },
      elConfigs: {
        calendar: '.timey-cal',
        day: '.timey-day'
      },
      attach: function() {
        return this.getElement('day').on('click', function() {
          return $(this).toggleClass('flipped');
        });
      }
    };
    return Timey;
  });

}).call(this);
