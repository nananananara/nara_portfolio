

function drawLine(){
  var winWidth = $(window).width();
  var pc = {
    'whiteLine' : $('.contbox .svg1 .line1'),
    'whiteFrom' : '-3960px',
    'whiteTo' : '-2025px',
  }
  var tablet = {
    'whiteLine' : $('.contbox .svg2 .line2'),
    'whiteFrom' : '-3345px',
    'whiteTo' : '-1650px',
  }
  var mob = {
    'whiteLine' : $('.contbox .svg3 .line3'),
    'whiteFrom' : '-2800px',
    'whiteTo' : '-1320px',
  }

  var mobb = {
    'heartLine' : $('.contbox .svg4 .line4'),
    'heartFrom' : '-1800px',
  }
  
  var offset;
  if (winWidth > 1319 ) {
    var whiteRemove = new Waypoint.Inview({
      element: $('.cont2'),
      offset: 0,
      exited: function(direction) {
        if (direction == 'up'){
          $('.cont2 ul li').removeClass('on');
          TweenMax.fromTo(pc.whiteLine,0,{'stroke-dashoffset': pc.whiteTo},{'stroke-dashoffset':pc.whiteFrom, ease:Linear.easeNone, force3D:true});
        }
      }
    });

    var whiteLineTop = new Waypoint.Inview({
      element: $('.cont2 .videobox'),
      offset: 0,
      enter: function(direction) {
        if (direction == 'down'){
          if (pc.whiteLine.css('stroke-dashoffset') <= pc.whiteFrom ){
            $('.cont2 ul li').addClass('on');
            TweenMax.fromTo(pc.whiteLine,2,{'stroke-dashoffset': pc.whiteFrom},{'stroke-dashoffset':pc.whiteTo, ease:Linear.easeNone, force3D:true});
          }
        }
      }
    });
    var whiteLineBtm = new Waypoint.Inview({
      element: $('.cont3 .moveslide'),
      offset: 0,
      enter: function(direction) {
        if (direction == 'down'){
          TweenMax.fromTo(pc.whiteLine,2,{'stroke-dashoffset':pc.whiteTo},{'stroke-dashoffset': 0, ease:Linear.easeNone, force3D:true});
        }
      }

    });


  }
  else if( winWidth < 1320 && winWidth >1023 ){
    var whiteRemove = new Waypoint.Inview({
      element: $('.cont2'),
      offset: 0,
      exited: function(direction) {
        if (direction == 'up'){
          $('.cont2 ul li').removeClass('on');
          TweenMax.fromTo(tablet.whiteLine,0,{'stroke-dashoffset': tablet.whiteTo},{'stroke-dashoffset':tablet.whiteFrom, ease:Linear.easeNone, force3D:true});
        }
      }
    });

    var whiteLineTop = new Waypoint.Inview({
      element: $('.cont2 .videobox'),
      offset: 0,
      enter: function(direction) {
        if (direction == 'down'){
          if (tablet.whiteLine.css('stroke-dashoffset') <= tablet.whiteFrom ){
            $('.cont2 ul li').addClass('on');
            TweenMax.fromTo(tablet.whiteLine,2,{'stroke-dashoffset': tablet.whiteFrom},{'stroke-dashoffset':tablet.whiteTo, ease:Linear.easeNone, force3D:true});
          }
        }
      }
    });
    var whiteLineBtm = new Waypoint.Inview({
      element: $('.cont3 .moveslide'),
      offset: 0,
      enter: function(direction) {
        if (direction == 'down'){
          TweenMax.fromTo(tablet.whiteLine,2,{'stroke-dashoffset':tablet.whiteTo},{'stroke-dashoffset': 0, ease:Linear.easeNone, force3D:true});
        }
      }

    });
  }
  else if( winWidth < 1024 && winWidth >767 ){
    var whiteRemove = new Waypoint.Inview({
      element: $('.cont2'),
      offset: 0,
      exited: function(direction) {
        if (direction == 'up'){
          $('.cont2 ul li').removeClass('on');
          TweenMax.fromTo(mob.whiteLine,0,{'stroke-dashoffset': mob.whiteTo},{'stroke-dashoffset':mob.whiteFrom, ease:Linear.easeNone, force3D:true});
        }
      }
    });

    var whiteLineTop = new Waypoint.Inview({
      element: $('.cont2 .videobox'),
      offset: 0,
      enter: function(direction) {
        if (direction == 'down'){
          if (mob.whiteLine.css('stroke-dashoffset') <= mob.whiteFrom ){
            $('.cont2 ul li').addClass('on');
            TweenMax.fromTo(mob.whiteLine,2,{'stroke-dashoffset': mob.whiteFrom},{'stroke-dashoffset':mob.whiteTo, ease:Linear.easeNone, force3D:true});
          }
        }
      }
    });
    var whiteLineBtm = new Waypoint.Inview({
      element: $('.cont3 .moveslide'),
      offset: 0,
      enter: function(direction) {
        if (direction == 'down'){
          TweenMax.fromTo(mob.whiteLine,2,{'stroke-dashoffset':mob.whiteTo},{'stroke-dashoffset': 0, ease:Linear.easeNone, force3D:true});
        }
      }

    });
  }
  else {
    var heartLine = new Waypoint.Inview({
      element: $('.cont2 ul'),
      offset: 0,
      enter: function(direction) {
        if (direction == 'down'){

          TweenMax.fromTo($(mobb.heartLine),2.5,{'stroke-dashoffset':mobb.heartFrom},{'stroke-dashoffset':0, ease:Power0.easeOut, force3D:true});
          $('.cont2 ul li').addClass('on');

        }
      },
      exited: function(direction) {
        if (direction == 'up') {
          
          TweenMax.fromTo($(mobb.heartLine),2.5,{'stroke-dashoffset':mobb.heartFrom},{'stroke-dashoffset':0, ease:Power0.easeOut, force3D:true});
          $('.cont2 ul li').addClass('on');
          $('.svg4').addClass('svgon');
        }
      },
    });


  }


}