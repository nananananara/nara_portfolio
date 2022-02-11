
(function() {
if ( OS_ANDROID || OS_IOS ) return;
if ( idvUserinfo.MSIE && parseInt( idvUserinfo.MSIE ) < 9 ) {
    document.write( '<link type="text/css" rel="stylesheet" href="/pcms/common/font/font_notosanskr-eot.css"/>' );
} else {
    document.write( '<link type="text/css" rel="stylesheet" href="/pcms/common/font/font_notosanskr.css"/>' );
}
})();
