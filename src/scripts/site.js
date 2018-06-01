import * as $ from 'jquery';
import '../styles/global.scss';
import '../styles/index.scss';

$(document).ready(function() {
  // article height
  var articleHeight = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;
  $("article").css("height", articleHeight);
  $(window).on("resize",function(){
    articleHeight = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;
    $("article").css("height", articleHeight);
  });

  // toggle language
  if (window.location.href.indexOf('en') >= 0) {
    $('.dropbtn span').text('English');
  } else {
    $('.dropbtn span').text('中文简体');
  }
  $('.dropbtn').click(function() {
    $('.dropdown-content').fadeIn('normal');
  }) 

  // toggle language dropcontent
  $('body').click(function(e) {
    e = e || window.event;
    var obj = e.target || e.srcElement;
    if($(obj).closest(".dropbtn").length <=0){ // If the clicked area has no id comment, it will hide the explain
      $('.dropdown-content').fadeOut('normal');  
    }
  })

  // android download
  $('.btn-android').on('click', function() {
    $.getJSON('../assets/config/app.json', function(data) {
      window.location.href = data.version.android;
    });
  });

  // open test
  var title = '';
  if (window.location.href.indexOf('en') >= 0) {
    title = 'Go to the official channel to get test qualification and other information.';
  } else {
    title = '去官方渠道获取测试资格等消息。';
  }
  $(".download-tip").click(function(e) {
    if (window.location.href.indexOf('en') >= 0) {
      if ($('.download-tip').text() === 'iOS download') {
        $('.download-tip').text('Ask iWallic team for testing');
      } else {
        $('.download-tip').text('iOS download');
      }
    } else {
      if ($('.download-tip').text() === 'iOS 下载') {
        $('.download-tip').text('联系官方参与公测');
      } else {
        $('.download-tip').text('iOS 下载');
      }
    }
  });
});
