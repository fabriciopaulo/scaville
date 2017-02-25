/* 
 * DOM Observer Plugin.
 * 
 * Author: Fabricio Paulo
 * 
 * Copyright (c) 2017 Fabricio Paulo
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else {
        factory(jQuery);
    }
}(function($) {

    $.extend($.fn, {
        anyChange: function(callback) {
            $(this).change(function(){
                callback();
            });
            $(this).bind('DOMSubtreeModified',function(){
                callback();
            });
        },
        domChange: function(callback) {
            $(this).bind('DOMSubtreeModified',function(){
                callback();
            });
        },
    });
    
}));


