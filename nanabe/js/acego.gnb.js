
function gnb(param,obj,btn,wrap,dur,meth){
	var param = $(param);
	var btn = param.find(btn);
	var obj = param.find(obj);
	var wrap = $(wrap);
	var data = false;
	var th2 = obj.find("> li");
	var new_h = 0;
	var elem = 0;
	
	
	
	function _open(){
		$.each(obj,function(){if(new_h < $(this).parent().outerHeight()) new_h = $(this).parent().outerHeight(); });	
		obj.height(new_h); 
	}
	
	_open();


	
	btn.on('mouseover focusin', function(){
		elem = $(this).parent().index();
		$(this).addClass('on').siblings().removeClass('on');
		param.addClass('open');
		param.css({"height":new_h + 174});

    	$("#top_layout").addClass("on");  
	});

	btn.on('mouseleave focusout', function(){
		btn.removeClass('on');
		param.removeClass('open');
		param.removeAttr("style");
	});


	param.on('mouseleave focusout', function(){
		param.removeClass('open');
		param.removeAttr("style");
    	$("#top_layout").removeClass("on");  
	});


	$.each(th2,function(k){
		$(this).addClass("no"+(k+1));
	});

}

function gnb_open(){
	var param = $('#mobile-menu');
	var str = location.href;
	var n = 0;
	var dur = 300; // 애니메이션 진행 속도
	var meth = "easeOutExpo"; // 애니메이션 진행 타입


	param.find(".item").hide();
	//param.find(".depth1_ul > .n1 .item").show();
	//param.find(".depth1_ul > .n1 > a").addClass("ov");

	param.find("a").on("click",function(event){
		if(param.is(":animated") && param.find(":animated").size()){ return false; }
	});

	function hideMenu() {
		param.find('.collapse').hide().removeClass('ov');
	}
	param.find(".depth1_ul>li>a").on("click",function(event){
		n = $(this).parent().index();
		if($(this).next().attr("class").match("item")){
			if($(this).next().find(" .depth2_ul").size() != 0 && $(this).next().find(" .depth2_ul>li").size() != 0){
				if($(this).next().css("display") == "none"){
					param.find(".depth1_ul>li>a").not(n).removeClass("ov").next().stop(true,true).delay(150).slideUp(150);
					param.find(".depth1_ul>li>a").eq(n).addClass("ov").next().stop(true,true).slideDown(150);
				}
				event.preventDefault();
			}
		}
	});

	param.find(".depth2_ul>li>a").on("click",function(event){
		var t = $(this);

		if(t.next().attr("class").match("depth3_ul")){
			if(t.next().css("display") != "block"){
				t.addClass("ov");
				t.next().slideDown(150);
			}else{
				t.removeClass("ov");
				t.next().slideUp(150);
			}

			event.preventDefault();
		}
	});

	$(window).on('resize', function () {
		$('.mobile-close').click();
	});
	
	//$("#mobile-menu .modal-dialog .modal-content .modal-body .depth1_ul > li > a.ov + .item").show();
	//$("#mobile-menu .modal-dialog .modal-content .modal-body .depth1_ul .depth2_ul > li > a.ov + ul").show();

}


(function() {
	var agent = navigator.userAgent.toLowerCase();
	if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
		$('html').attr("class","userMs");
	}else {
		$('html').attr("class","WebKit");
	}
})();
