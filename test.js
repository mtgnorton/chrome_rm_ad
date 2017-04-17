$(function () {

var domain = window.location.host;
//csdn
if (domain.indexOf('csdn')) {
$(".J_adv").remove();
$("#side").hide();
$(".ad_class").remove();
$(".blog-ass-articl").remove();
$("#com-quick-reply").remove();
$("#main").css("width","100%");  
}
//男人团
if (domain.indexOf('nh87')) {
$('#jx_left').parent().remove();
$('#__jx_div').remove();
$('.box_ad').remove();
}


})
