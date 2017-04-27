// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(e) {
  chrome.tabs.executeScript(null,
      {file:"popup_execute.js"});
  window.close();
}

// document.addEventListener('DOMContentLoaded', function () {
//  $('.switch').each(function(){
//   $(this).click(click)
//  })
// });
 //第一打开popup时
 chrome.storage.local.get(null, function(config) {
    adSwitch = config.switch;
    if (adSwitch) {
        $('#openRmAd').addClass('active');
        $('#closeRmAd').removeClass('active');
      }else{
        $('#closeRmAd').addClass('active');
        $('#openRmAd').removeClass('active');
      }
   });
//点击时
document.addEventListener('DOMContentLoaded', function () {
 $('.switch').each(function(){
  $(this).click(function(){
   
   var adSwitch = this.id == 'openRmAd' ? true :false;
   
    chrome.storage.local.set({'switch': adSwitch}, function() {

      if (adSwitch) {
        $('#openRmAd').addClass('active');
        $('#closeRmAd').removeClass('active');
      }else{
        $('#closeRmAd').addClass('active');
        $('#openRmAd').removeClass('active');
      }
      window.close();
   });
  
  });

 });
});