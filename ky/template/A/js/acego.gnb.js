
function gnb(param, obj, btn, wrap, dur, meth) {
    var param = $(param);
    var btn = param.find(btn);
    var obj = param.find(obj);
    var wrap = $(wrap);
    var data = false;
    var elem;
    var targetHeight = [];
    var targetHeightResult;
    var heightResult = btn.outerHeight(true);


    function gnb_height() {
        $.each(obj, function (idx) {
            targetHeight[idx] = $(this).parent().find(".item").outerHeight(true) + 80;
        });
        //targetHeightResult = Math.max.apply(null,targetHeight)+80;
    }


    function _open() {
        btn.parent().find(".item").removeAttr("style");

        btn.not(elem).removeClass("current").eq(elem).addClass("current");
        obj.not(elem).hide().css({display: "none", opacity: 0});
        gnb_height();
        obj.eq(elem).show().stop().animate({display: "block", opacity: 1}, {duration: 300, easing: 'swing'});
        param.stop(true, false).animate({"height": targetHeight[elem]}, {duration: 300, easing: 'swing'});
        param.addClass("open");

        $("#top_layout").addClass("on");
        $("body").addClass("topon");
    }


    function _close() {
        btn.removeClass("current");
        obj.css({display: "none", opacity: 0});
        param.stop(true, false).animate({"height": heightResult}, {duration: 300, easing: 'swing'});
        param.removeClass("open");
        $("#top_layout").removeClass("on");
        $("body").removeClass("topon");
    }


    btn.on('mouseover focusin', function () {
        elem = $(this).parent().index();
        _open();

    });


    obj.item = obj.find(".depth2_ul");
    obj.btn = obj.find(".depth2_ul>li>a");


    //2st
    obj.item.on("mouseenter focus", function () {
        $(this).siblings().removeClass('on').find('*.on').removeClass('on');
        $(this).addClass("on");
    });


    obj.btn.on("mouseenter focus", function () {
        var t = $(this);
        obj.btn.removeClass("on");
        t.addClass("on");
        $(".depth3_ul").hide();
        t.next().show();
        t.find(".depth3_ul").show().addClass('open');


        if (t.next().is(".depth3_ul")) {
            var th3Height = t.next().outerHeight(true) + btn.outerHeight(true);

            if (th3Height < param.outerHeight()) {

                param.stop(true, false).animate({"height": targetHeight[elem]}, {duration: 300, easing: 'swing'});

            } else {
                param.stop(true, false).animate({"height": th3Height}, {duration: 300, easing: 'swing'});
                return false;
            }
            t.parent().parent().height(t.next().innerHeight());
            return false;
        } else {
            param.stop(true, false).animate({"height": targetHeight[elem]}, {duration: 300, easing: 'swing'});
        }
    });


    /*
    obj.btn.on("mouseleave",function(){
        $(this).removeClass("on");
        $(this).find(".depth3_ul").hide().removeClass('open');

    });
*/

    obj.btn.next('.depth3_ul').on("mouseenter focus", function () {
        $(this).addClass("open");
        $(this).prev('a').addClass("on");
    });


    obj.btn.next('.depth3_ul').on("mouseleave", function () {
        $(this).removeClass("open");
        $(this).prev('a').removeClass("on");
    });


    obj.find("a").last().on("focusout", function () {
        _close();
        btn.removeClass("current");
        param.removeClass("open");
        wrap.removeClass("on");
    });


    wrap.on("mouseleave", function () {
        _close();
    });


}

function gnb_open() {
    var param = $('#mobile-menu');
    var str = location.href;
    var n = 0;
    var dur = 300;
    var meth = "easeOutExpo";


    param.find(".depth2_ul").hide();
    param.find(".depth1_ul > .n1 .depth2_ul").show();
    param.find(".depth1_ul > .n1 > a").addClass("ov");

    param.find("a").on("click", function (event) {
        if (param.is(":animated") && param.find(":animated").size()) {
            return false;
        }
    });

    function hideMenu() {
        param.find('.collapse').hide().removeClass('ov');
    }

    param.find(".depth1_ul>li>a").on("click", function (event) {
        n = $(this).parent().index();
        if ($(this).next().attr("class").match("depth2_ul")) {
            if ($(this).next().css("display") == "none") {
                param.find(".depth1_ul>li>a").not(n).removeClass("ov").next().stop(true, true).delay(150).slideUp(150);
                param.find(".depth1_ul>li>a").eq(n).addClass("ov").next().stop(true, true).slideDown(150);
            }
        }
        event.preventDefault();
    });

    param.find(".depth2_ul>li>a").on("click", function (event) {
        var t = $(this);

        if (t.next().attr("class").match("depth3_ul")) {
            if (t.next().css("display") != "block") {
                t.addClass("ov");
                t.next().slideDown(150);
            } else {
                t.removeClass("ov");
                t.next().slideUp(150);
            }

            event.preventDefault();
        }
    });

    $(window).on('resize', function () {
        $('.mobile-close').click();
        $('#gnb_layout').removeAttr('style');
    });

}

$("#mobile-menu .depth3_ul").prev().addClass("dep");

