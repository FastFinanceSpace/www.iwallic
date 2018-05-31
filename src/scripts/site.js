import * as $ from 'jquery';
import '../styles/global.scss';
import '../styles/index.scss';

$(document).ready(function() {
  if (window.location.href.indexOf('en') >= 0) {
    $('.dropbtn span').text('English');
  } else {
    $('.dropbtn span').text('中文简体');
  }
  $('.dropbtn').click(function() {
    $('.dropdown-content').fadeIn('normal');
  }) 
  $('body').click(function(e) {
    e = e || window.event;
    var obj = e.target || e.srcElement;
    if($(obj).closest(".dropbtn").length <=0){ // If the clicked area has no id comment, it will hide the explain
      $('.dropdown-content').fadeOut('normal');  
    }
  })
  $('.btn-ios').on('click', function() {
    if (window.location.href.indexOf('en') >= 0) {
      alert('Go to the official channel to get test qualification and other information.');
    } else {
      alert('去官方渠道获取测试资格等消息。');
    }
  })
  $('.btn-android').on('click', function() {
    $.getJSON('../assets/config/version.json', function(data) {
      window.location.href = data.android;
    });
  })
});
