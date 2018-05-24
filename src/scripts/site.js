import '../styles/global.scss';
import '../styles/index.scss';
import * as $ from 'jquery';

$(document).ready(function() {
  if (window.location.href.indexOf('tw') >= 0) {
    $('.dropbtn span').text('中文');
  } else {
    $('.dropbtn span').text('English');
  }
  $('.dropbtn').click(function() {
    $('.dropdown-content').show();
  }) 
  $('body').click(function(e) {
    e = e || window.event;
    var obj =e.target || e.srcElement;
    if($(obj).closest(".dropbtn").length <=0){//点击的区域如果没有id为explain的标签，就将explain收起隐藏
      $('.dropdown-content').hide();  
    }
  })
  $('.lang-zh').click(function() {
    window.location.href = '/tw/index.html';
  })
  $('.lang-en').click(function() {
    window.location.href = '/en/index.html';
  })
});
