import * as $ from 'jquery';
import '../styles/global.scss';
import '../styles/index.scss';

$(document).ready(function() {
  if (window.location.href.indexOf('en') >= 0) {
    $('.dropbtn span').text('English');
  } else {
    $('.dropbtn span').text('中文');
  }
  $('.dropbtn').click(function() {
    $('.dropdown-content').fadeIn('normal');
  }) 
  $('body').click(function(e) {
    e = e || window.event;
    var obj = e.target || e.srcElement;
    if($(obj).closest(".dropbtn").length <=0){//点击的区域如果没有id为explain的标签，就将explain收起隐藏
      $('.dropdown-content').fadeOut('normal');  
    }
  })
});
