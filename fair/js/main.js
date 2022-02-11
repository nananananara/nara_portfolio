
//탭

function targetOpener(btn,option){
    var btn = $(btn);

    $(option.obj).hide().first().show();

    btn.bind("click",function(event){
        var t = $(this);
        href = t.attr("href").substr(1);


        if(t.children().is('img')){
            var btnIMG = btn.find('img');
            var thisIMG = t.children();
            var thisSRC = thisIMG.attr('src');
            thisSRC = thisSRC.substr(thisSRC.lastIndexOf('_')).split(".");

            if(thisSRC[0] != "_ov"){
                $.each(btnIMG,function(){
                    $(this).attr("src",$(this).attr('src').replace('_ov.'+thisSRC[1],'.'+thisSRC[1]));
                });
                thisIMG.attr("src",thisIMG.attr('src').replace('.'+thisSRC[1],'_ov.'+thisSRC[1]));
            }
        }

        if(option.lv == 0){
            if($("[id="+href+"]").css("display") == "none"){
                $("[id="+href+"]").show().css({'visibility':'visible'});
                t.addClass("ov");
            }else{
                $("[id="+href+"]").hide().css({'visibility':'hidden'});
                t.removeClass("ov");
            }
        }

        if(option.lv == 1){
            $(option.obj).hide().css({'visibility':'hidden'});
            $("[id="+href+"]").show().css({'visibility':'visible'});
            btn.removeClass("ov");
            t.addClass("ov");
        }
        event.preventDefault();
    });
}


//탭 시작
function tabObj(_target,_tabBtn,_tabCon,_active, _isAjax){
    _tabBtn.removeClass("on");
    if(_isAjax != true) _tabCon.removeClass("on");
    if(_active == undefined){
        _tabBtn.eq(0).addClass("on");
        if(_isAjax != true) _tabCon.eq(0).addClass("on");
    }
    _tabBtn.on("click",function(e){
        var _clickNum = $(this).parent().index()+1;
        _tabBtn.removeClass("on");
        $(this).addClass("on");
        if(_isAjax != true) {
            _tabCon.removeClass("on");
            $("#tab_"+_clickNum).addClass("on");
        }

        e.preventDefault();
    });
}
//탭 끝





$(function(){
    if ($(window).width() > 200) { 
        movCont(".cont3",1.1,500,200);
        movCont(".cont2",1.1,500,200);

    }
    $(window).resize(function(){
        if ($(window).width() > 200 ) { 
            movCont(".cont3",1.1,500,200);
            movCont(".cont2",1.1,500,200);

        }
    });
});
function movCont(con,dstart,speed,delay){
    var _target = $(con);
    var _dstart = dstart;
    var _speed = speed;
    var _delay = delay;
    var _winHeight = $(window).height();
    var _start = Math.floor(_target.offset().top-(_winHeight/_dstart));
    var _winScroll = $(window).scrollTop();
    var _resize;


     $(window).scroll(function(){
        _winHeight = $(window).height();
        _start = Math.floor(_target.offset().top-(_winHeight/_dstart));
        _winScroll = $(window).scrollTop();
        if ($(window).width() < 201  ) { 
      _target.stop();
      _target.removeAttr("style");
        }else{
          if(_winScroll < _start){
              
          }else if(_winScroll > _start){
              setTimeout(function(){
                  _target.addClass("active");
                 // _target.stop().animate({"opacity":"1","top":"0"},_speed,"easeOutBack");
              },_delay);
          }
      }
    });

    $(window).resize(function(){
    if ($(window).width() < 201  ) { 
      _target.stop();
      _target.removeAttr("style");
        }else{
      }
    });
   
}