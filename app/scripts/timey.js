
/* global log */

(function() {
  'use strict';
  define(['timey', 'jquery', 'mustache'], function(Timey, $, Mustache) {
    console.log(Mustache);

    /**
     * [Timey description]
     * @param {[type]} startDate
     * @param {[type]} endDate
     */
    Timey = function(startDate, endDate) {
      this.init(startDate, endDate);
      return this;
    };
    Timey.prototype = {
      init: function(startDate, endDate) {
        this.week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        this.month = [0, 1, 2, 3];
        console.log(startDate, endDate);
      },
      draw: function(selector) {
        var $calendar;
        this.$container = $(selector);
        $calendar = $(this.$container.find('.timey-cal'));
        $.get('../mst/day.mst', (function(_this) {
          return function(template) {
            log(template);
            return _this.month.forEach(function() {
              return _this.week.forEach(function(n) {
                var $day;
                $day = Mustache.render(template, {
                  name: n
                });
                return $calendar.append($day);
              });
            });
          };
        })(this));
      }
    };
    return Timey;
  });

}).call(this);
