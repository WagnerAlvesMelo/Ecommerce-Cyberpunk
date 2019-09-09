$(function() {

    var inWrap = $('#inner-wrapper');
  
    $('.slide').first().before($('.slide').last());
    $('.prev').on('click', function() {
  
      inWrap.animate({left: '0%'}, 400, function(){
  
        inWrap.css('left', '-100%');
  
        $('.slide').first().before($('.slide').last());
  
      });
  
  
    });
  
  
  
    $('.next').on('click', function() {
  
      inWrap.animate({left: '-200%'}, 400, function(){
  
        inWrap.css('left', '-100%');
  
        $('.slide').last().after($('.slide').first());
  
      });
  
  
    });
  
  
  });