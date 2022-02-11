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
