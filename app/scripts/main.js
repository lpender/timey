(function() {
  'use strict';
  require.config({
    paths: {
      jquery: '../../bower_components/jquery/dist/jquery',
      mustache: '../../bower_components/mustache/mustache'
    }
  });

  require(['timey', 'jquery', 'signage'], function(Timey, $, Signage) {
    var myTimey;
    myTimey = new Timey(Date('May 1, 2013 0:00'), Date('May 31, 2013 0:00'));
    $(window).on('timey:draw-complete', function() {
      new Signage();
    });
    myTimey.draw('.timey');
    window.myTimey = myTimey;
  });

}).call(this);
