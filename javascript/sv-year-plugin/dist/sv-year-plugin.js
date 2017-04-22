/* 
 * SV Year Plugin.
 * 
 * Author: Fabricio Paulo
 * 
 * Copyright (c) 2017 Fabricio Paulo
 * Released under the MIT license
 */
/* global define */

(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else {
        factory(jQuery);
    }
}(function($) {
    $.extend($.fn, {
        svYear: function(param) {
            if (typeof param === "undefined") {
                for (var i = new Date().getFullYear(); i >= 1900; i--) {
                    $(this).append($("<option />").val(i).html(i))
                }
            } else {
                if (typeof param === "string" || typeof param === "number") {
                    for (var i = parseInt(param); i >= 1900; i--) {
                        $(this).append($("<option />").val(i).html(i))
                    }
                } else {
                    if (typeof param === "object") {
                        for (var i = parseInt(param.max); i >= parseInt(param.min); i--) {
                            $(this).append($("<option />").val(i).html(i))
                        }
                    }
                }
            }
        },
        svMonth: function() {
            $(this).append($("<option />").val(1).html("Janeiro"));
            $(this).append($("<option />").val(2).html("Fevereiro"));
            $(this).append($("<option />").val(3).html("Março"));
            $(this).append($("<option />").val(4).html("Abril"));
            $(this).append($("<option />").val(5).html("Maio"));
            $(this).append($("<option />").val(6).html("Junho"));
            $(this).append($("<option />").val(7).html("Julho"));
            $(this).append($("<option />").val(8).html("Agosto"));
            $(this).append($("<option />").val(9).html("Setembro"));
            $(this).append($("<option />").val(10).html("Outubro"));
            $(this).append($("<option />").val(11).html("Novembro"));
            $(this).append($("<option />").val(12).html("Dezembro"))
        }
    });
}));