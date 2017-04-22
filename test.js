$(function () {



 chrome.storage.local.get(null,function(config){

  var domain = window.location.host;

  if (!config.switch) {
    return;
  }

  setTimeout(function(){
     //csdn
  if (domain.indexOf('csdn') != -1) {
  $(".J_adv").remove();
  $("#side").hide();
  $(".ad_class").remove();
  $(".blog-ass-articl").remove();
  $("#com-quick-reply").remove();
  $("#main").css("width","100%");  
  }
  //男人团
  if (domain.indexOf('nh87') != -1) {
  $('#jx_left').parent().remove();
  $('#__jx_div').remove();
  $('.box_ad').remove();
  }

 if (domain.indexOf('sis001') != -1) {

  $('#header').remove();
  $('#ad_text').remove();
 }

  if (domain.indexOf('tube8') != -1) {
  $('.video_column_left').css({'width':'100%'});
  $('#playerContainer').css({'width':'90%'});
  $('.player_flv_wrapper').css({'width':'100%','height':'550px'});
  $('.video_box').css({'width':'24%'});
  $(".video_column_right").remove();
  $("#pb_block").remove(); 
  $(".ad9b23e3").remove();
  $(".e6eef7ee").remove();
  $("#foot-text").remove();
  $("#footer-wrapper").remove();
  $('.footer-push').remove();
  $('.footer-stripe-wrapper-grey').remove();
 }


  },300);
 


  });
})
