/* 
 * SV Year Plugin.
 * 
 * Author: Fabricio Paulo
 * 
 * Copyright (c) 2017 Fabricio Paulo
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else {
        factory(jQuery);
    }
}(function ($) {

    $.extend($.fn, {
        svYear: function (param) {
            if (typeof param === 'undefined') {
                for (var i = new Date().getFullYear(); i >= 1900; i--)
                {
                    $(this).append($('<option />').val(i).html(i));
                }
            } else if (typeof param === 'string') {
                for (var i = parseInt(param); i >= 1900; i--) {
                    $(this).append($('<option />').val(i).html(i));
                }
            } else if (typeof param === 'object') {
                for (var i = parseInt(param.max); i >= parseInt(param.min); i--) {
                    $(this).append($('<option />').val(i).html(i));
                }
            }
        },
    });

}));


