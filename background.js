// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!

chrome.tabs.executeScript(tab.id, {file: "jquery.js"});
chrome.tabs.executeScript(tab.id, {file: "test.js"});
});

// // 监听发送请求
// chrome.webRequest.onBeforeRequest.addListener(
//   function(details) {
//     console.log(details);
//     //拦截到执行资源后，为资源进行重定向
//     //也就是是只要请求的资源匹配拦截规则，就转而执行returnjs.js
//     return {redirectUrl: chrome.extension.getURL("returnjs.js")};
//   },
//   {
//     //配置拦截匹配的url，数组里域名下的资源都将被拦截
//     urls: [
//         "*://*.baidu.com/*"
//     ],
//     //拦截的资源类型，在这里只拦截script脚本，也可以拦截image等其他静态资源
//     types: ["script"]
//   },
//   //要执行的操作，这里配置为阻断
//   ["blocking"]
// );
