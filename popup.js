// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var outUrl;
// first get the windowid
chrome.windows.getCurrent(function(window) {
    // then get the current active tab in that window
    chrome.tabs.query({
        active: true,
        windowId: window.id
    }, function (tabs) {
        var tab = tabs[0];

        $.get(tab.url, function( data ) {
            console.log(data);
            var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
            while (SCRIPT_REGEX.test(data)) {
                data = data.replace(SCRIPT_REGEX, "");
            }
            var htmlCode = document.write(data)
            console.log(htmlCode)
        });

        //document.write(tab.url);
        document.write("Icon made by Pixel perfect from www.flaticon.com")
    });
});
