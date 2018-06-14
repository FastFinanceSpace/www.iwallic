import * as $ from 'jquery';
import '../styles/global.scss';
import '../styles/index.scss';

$(document).ready(function() {
  // article height
  var articleHeight = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;
  articleHeight -= 42;
  if ($('.left-img').css('display') === 'block') {
    articleHeight = articleHeight > 665 ? articleHeight : 665;
  } else {
    articleHeight = articleHeight > 665 ? articleHeight : 500;
  }
  $("article").css("height", articleHeight);
  $(window).on("resize",function(){
    articleHeight = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;
    articleHeight -= 42;
    if ($('.left-img').css('display') === 'block') {
      articleHeight = articleHeight > 665 ? articleHeight : 665;
    } else {
      articleHeight = articleHeight > 700 ? articleHeight : 500;
    }
    $("article").css("height", articleHeight);
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
      $(".weixin-tip").show();
    } else {
      $.getJSON('../assets/config/app.json', function(data) {
        window.location.href = data.version_android.url;
      });
    }
  });

  $('.weixin-tip button').on('click', function() {
    $(".weixin-tip").hide();
  })

  // open test
  var title = '';
  if (window.location.href.indexOf('en') >= 0) {
    title = 'Go to the official channel to get test qualification and other information.';
  } else {
    title = '去官方渠道获取测试资格等消息。';
  }
  $(".btn-ios").click(function(e) {
    if (window.location.href.indexOf('en') >= 0) {
      if ($('.download-tip').text() === 'iOS download') {
        $('.download-tip').text('You have not yet been qualified');
      } else {
        $('.download-tip').text('iOS download');
      }
    } else {
      if ($('.download-tip').text() === 'iOS 下载') {
        $('.download-tip').text('您尚未获得资格');
      } else {
        $('.download-tip').text('iOS 下载');
      }
    }
  });

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
