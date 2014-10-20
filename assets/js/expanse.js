$(document).ready(function(){
    
  // establish vars
  var $window = $(this);
  var $header = $('header');
  var $bg = $('.bg');
  var $spinner = $('.spinner');
  var $bio = $('.bio');  
  var $avatar = $('.user-avatar');
  var $hover = $('.user-avatar-hover');
  var isHome = (!$('body').hasClass('short-header'))? true : false;  

  // adjust top position of bio hover on homepage
  if(isHome)
    $hover.css({ top: '-'+parseInt($hover.height()+70)+'px' }); 
  
  // add cover photo after whole page loads
  $(window).load(function(){    
      if(isHome)
      {
          $bg.css({ backgroundImage: "url('"+cover+"')" }).addClass('fade');
          $spinner.fadeOut(2000);
      }
      else 
      {
        $bg.css({ backgroundImage: "url('"+cover+"')" });
        $spinner.hide();
      }
  });
  
  // show box on hover
  $avatar.hoverIntent(function(){
    console.log('hovering on avatar');
    $bio.addClass('doHover');
  }, function(){
    $bio.removeClass('doHover');
  });
  
  // keep showing box if hover on box
  $hover.hoverIntent(function(){
    if(!$bio.hasClass('doHover'))
      $bio.addClass('doHover');
  }, function(){
    if($bio.hasClass('doHover'))
      $bio.removeClass('doHover');
  });
  
  // fade out $bg on scroll down
  var blurHeight = $header.height();
  var scrollFlag = false;
  $window.on('scroll', function(e){
      var scrollTop = $window.scrollTop(); 
      if(!scrollFlag) {
          scrollFlag = true;
      } 
      if(scrollTop < blurHeight) 
      {
          var _alpha = (100-(scrollTop/blurHeight)*100)/100;
          if(_alpha > 1) { _alpha = 1 }
          if(_alpha < 0) { _alpha = 0 }
          $bg.css({ opacity: _alpha });
      }
  });  
    
});