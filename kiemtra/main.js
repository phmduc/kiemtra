
$(document).ready(function(){

    $('#toggleOpen').on('click', function() {
        $('.dtHeader .m-menu .m-navlist').addClass('show');
        $('.dtHeader .m-menu .overlay').addClass('show');
        })
    $('#toggleClose').on('click', function() {
        $('.dtHeader .m-menu .m-navlist').removeClass('show');
        $('.dtHeader .m-menu .overlay').removeClass('show');
    })
    $('.dtHeader .m-menu .overlay').on('click', function() {
        $('.dtHeader .m-menu .m-navlist').removeClass('show');
        $('.dtHeader .m-menu .overlay').removeClass('show');
    })
 });