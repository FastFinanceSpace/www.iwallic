import * as $ from 'jquery';
import '../styles/global.scss';
import '../styles/index.scss';

$(document).ready(function() {
  // article height
  var articleHeight = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;
  var articleWidth = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth;
  articleHeight -= 42;
  if ($('.left-img').css('display') === 'block') {
    articleHeight = articleHeight > 665 ? articleHeight : 665;
  } else {
    articleHeight = articleHeight > 665 ? articleHeight : 500;
  }
  $("article").css("height", articleHeight);
  if (articleWidth > 930) {
    $(".download").hide();
    $(".pc-download").show();
  } else {
    $(".download").show();
    $(".pc-download").hide();
  }

  $(window).on("resize",function(){
    articleHeight = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;
    articleWidth = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth;
    articleHeight -= 42;
    if ($('.left-img').css('display') === 'block') {
      articleHeight = articleHeight > 665 ? articleHeight : 665;
    } else {
      articleHeight = articleHeight > 700 ? articleHeight : 500;
    }
    $("article").css("height", articleHeight);
    if (articleWidth > 930) {
      $(".download").hide();
      $(".pc-download").show();
    } else {
      $(".download").show();
      $(".pc-download").hide();
    }
  });

  // toggle language
  if (window.location.href.indexOf('en') >= 0) {
    $('.dropbtn span').text('English');
  } else {
    $('.dropbtn span').text('中文简体');
  }
  $('.dropbtn').on('click', function() {
    $('.dropdown-content').fadeIn('normal');
  }) 
  $('.dropbtn').on('touchstart', function() {
    $('.dropdown-content').fadeIn('normal');
  }) 

  // toggle language dropcontent
  $('body').on('click', function(e) {
    e = e || window.event;
    var obj = e.target || e.srcElement;
    if($(obj).closest(".dropbtn").length <=0){ // If the clicked area has no id comment, it will hide the explain
      $('.dropdown-content').fadeOut('normal');  
    }
  })
  $('body').on('touchend', function(e) {
    e = e || window.event;
    var obj = e.target || e.srcElement;
    if($(obj).closest(".dropbtn").length <=0){ // If the clicked area has no id comment, it will hide the explain
      $('.dropdown-content').fadeOut('normal');  
    }
  })

  // android download
  $('.btn-android').on('click', function() {
    if (is_weixn()) {
      var winHeight = $(window).height();
      $(".weixin-tip").css("height", winHeight);
      if (window.location.href.indexOf('en') >= 0) {
        $(".weixin-tip img").attr("src", "../assets/guide-en.png");
      }
      $(".weixin-tip").fadeIn();
    } else {
      $.getJSON('../assets/config/app.json', function(data) {
        window.location.href = data.version_android.url;
      });
    }
  });

  $('.weixin-tip button').on('click', function() {
    $(".weixin-tip").fadeOut();
  })

  // is wechat browser
  function is_weixn(){    
    var ua = navigator.userAgent.toLowerCase();    
    if(ua.match(/MicroMessenger/i)=="micromessenger") {    
        return true;    
    } else {    
        return false;    
    }    
} 
});
