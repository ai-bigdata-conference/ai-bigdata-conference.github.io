function updateMailString() {
  var mailString;
  var selectect;

  $.each($("input[class='.sev_check']:checked"), function(){
    selectect = $(this).val();
});

    mailString = '?subject=' + encodeURIComponent($('#name').val())
        + '&body=' + 
        "name: " + encodeURIComponent($('#name').val())+
        "\n email: " + $('#email').val() +
        "\n institution: " +  encodeURIComponent($('#institution').val()) +
        "\n phoneNumber: " +  encodeURIComponent($('#phone_number').val()) ;
        //+ "\n Paper presentation: " + selectect;
    $('#contactForm').attr('action',  'mailto:ana.duarte.correia@gmail.com​' + mailString);
}

(function($) {

  "use strict";

  $(window).on('load', function() {

  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* ==========================================================================
       countdown timer
       ========================================================================== */
     jQuery('#clock').countdown('2019/12/05',function(event){
      var $this=jQuery(this).html(event.strftime(''
      +'<div class="time-entry days"><span>%-D</span> Days</div> '
      +'<div class="time-entry hours"><span>%H</span> Hours</div> '
      +'<div class="time-entry minutes"><span>%M</span> Minutes</div> '
      +'<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
      });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });
    wow.init();

    /* Nivo Lightbox
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    // one page navigation
    $('.navbar-nav').onePageNav({
            currentClass: 'active'
    });

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

  });

}(jQuery));

var selected;

$(function () {
  $('.sev_check').change(function(e) {
      e.preventDefault();
      $('.sev_check').not(this).prop('checked', false);
      $(this).prop('checked', true);
      
      //updateMailString();
  });
});

$(function () {
  $('.sev_check').click(function(e) {
    $('.sev_check').not(this).prop('checked', false);
    //updateMailString();
  });
});



function loadEvents() {

  
  $( "#name" ).focusout(function() { updateMailString(); });
  $( "#email" ).focusout(function() { updateMailString(); });
  $( "#institution" ).focusout(function() { updateMailString(); });
  $( "#phone_number" ).focusout(function() { updateMailString(); });
}

$(document).ready(function() {
  $('#form-submit').click(function() {
    updateMailString();
    $('#form-submit').submit();
  });
});
