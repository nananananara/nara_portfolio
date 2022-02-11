<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8"/>
<meta http-equiv="X-UA-compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no"/>
<meta name="viewport" content="user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,width=device-width">
<meta name="author" content="<?=SITE_TITLE?>"><!-- 작성자//메인은 사이트네임,서브는 각 컨텐츠 담당자  -->
<meta name="keywords" content="<?=SITE_TITLE?>"><!-- 키워드 //SEO검색 관련으로 인하여 삽입 // 각 컨텐츠 별로 추가 또는 컨텐츠타이틀 게시판view는 게시글 제목 -->
<meta name="description" content="<?=SITE_TITLE?> 홈페이지입니다."><!--  상세설명 -->
<meta name="copyright" content="COPYRIGHT(C) 2020 BY GEUMSAN COUNTY ALL RIGHTS RESERVED">
<meta property="og:type" content="website">
<meta property="og:title" content="<?=SITE_TITLE?>">
<meta property="og:image" content="/common/img/logo.png">
<meta property="og:description" content="<?=SITE_TITLE?> 홈페이지입니다.">
<title>금산군 <?=$title_tag?></title>
<link rel="shortcut icon" type="image/x-icon" href="/fair/img/common/favicon.ico">
<link rel="apple-touch-icon-precomposed" href="/fair/img/common/favicon_152.png">
<link rel="stylesheet" href="/pcms/common/css/common.css" />
<link rel="stylesheet" href="/pcms/common/pluigs/bootstrap/bootstrap.min.css" />
<link rel="stylesheet" href="/pcms/common/font/font-awesome.css" />
<link rel="stylesheet" href="/pcms/common/font/font_notosanskr.css" />
<link rel="stylesheet" href="/pcms/common/font/font_scoredream.css" />
<link rel="stylesheet" href="/pcms/common/css/acego.ui.min.css" />
<link rel="stylesheet" href="/pcms/common/css/ir-icon.css" />
<link rel="stylesheet" href="/<?=SITE_DVS_CD?>/css/acego.header.css" />
<link rel="stylesheet" href="/<?=SITE_DVS_CD?>/css/acego.footer.css" />
<link rel="stylesheet" href="/<?=SITE_DVS_CD?>/css/acego.tmpl.css">
<? if(!$is_Main) { ?>
<link rel="stylesheet" href="/pcms/common/css/program.css" />
<link rel="stylesheet" href="/pcms/common/css/board.min.css" />
<? } ?>
<? if($is_Main) { ?>
<script src="/pcms/common/js/scroll/common-scroll.js"></script>
<link rel="stylesheet" href="/pcms/common/font/font_jejuMyeongjo.css" />
<link rel="stylesheet" href="/<?=SITE_DVS_CD?>/css/main.css" />
<? } ?>


<? if($is_Prog && $PROG_CODE == "bbs" ) { // 게시판용 css ?>
<!--     <link rel="stylesheet" href="/prog/bbs/css/style.css" type="text/css" /> -->
    <link rel="stylesheet" href="/prog/bbs/skin/<?=$CONF_BBS_SKIN?>/css/style.css" type="text/css" />
    <?if( $CONF_BBS_TYPE_CSS && file_exists( DOC_DIR. "/_prog/bbs/css/".$CONF_BBS_TYPE."/".$CONF_BBS_TYPE_CSS ) ) { // 타입에 지정된 css 파일이 있으면 삽입한다. 경로는 /_prog/bbs/css/게시판타입/지정한css파일명  ?>
    <link rel="stylesheet" href="/prog/bbs/css/<?=$CONF_BBS_TYPE?>/<?=$CONF_BBS_TYPE_CSS?>" type="text/css" />
    <?}?>
<? } ?>
<? if ( file_exists( DOC_DIR. "/_prog/".$PROG_CODE."/css/style.css") ) {			// 프로그램별 style.css 파일 있으면 추가 ?>
		<link rel="stylesheet" href="/prog/<?=$PROG_CODE?>/css/style.css" type="text/css" />
<?}?>
<? if(!$is_Main) { ?>
<link rel="stylesheet" href="/common/css/skin.css" />
<link rel="stylesheet" href="/<?=SITE_DVS_CD?>/css/content.css" />
<link rel="stylesheet" href="/<?=SITE_DVS_CD?>/css/prog.css" />
<? } ?>
<!-- basic script -->
<script src="/pcms/common/pluigs/jQuery/jquery-3.3.1.min.js"></script>
<script src="/pcms/common/pluigs/jQuery/jquery-migrate-1.4.1.min.js"></script>
<script src="/pcms/common/pluigs/jQueryUI/jquery-ui.min.js"></script>
<script src="/pcms/common/pluigs/bootstrap/bootstrap.min.js"></script>
<script src="/pcms/common/js/acego.common.js"></script>
<script src="/common/js/common.js"></script> <!-- common js -->
<script src="/common/js/sns_sharer.js"></script><!-- sharer link -->
<script src="/<?=SITE_DVS_CD?>/js/TweenMax.min.js"></script>
<script src="/<?=SITE_DVS_CD?>/js/common.js"></script>
<? if(!$is_Main) { ?>
<script src="/pcms/common/pluigs/print/jQuery.print.min.js"></script>
<script>
$(function(){
    $("[data-print=print]").on('click', function() {
        $("#txt").print({
            globalStyles : true,
            mediaPrint : false,
            iframe : true,
            noPrintSelector : ".avoid-this",
            deferred: $.Deferred().done(function() { console.log('Printing done', arguments); })
        });
     });
});
</script>
<? } ?>
<!--[if lt IE 9]>
<script src="/pcms/common/pluigs/html5/html5shiv.min.js"></script>
<![endif]-->
<?
//구글 리캡차 관련
if( true === defined("CAPTCHA_YN") && CAPTCHA_YN == "Y"){?>
<script src='https://www.google.com/recaptcha/api.js'></script>
<?}?>
</head>
<body class="grid-system <?if(!$is_Main) echo "sub_".$ThisMenuCode;?>">
<div class="cursor cursor--large"></div>
<div id="touchArea" style="display: none;"></div>
<div id="shadow_device"></div>
<!-- 스킵네비케이션시작 -->
<div id="skipnavi">
	<? if(!$is_Main) { ?>
	<a href="#txt">본문 바로가기</a>
	<a href="#snb">사이드메뉴 바로가기</a>
	<a href="#gnb_layout">대메뉴 바로가기</a>
	<?}else{?>
	<a href="#gnb_layout">대메뉴 바로가기</a>
	<? } ?>
</div>
<!-- 스킵네비케이션끝 -->
<header id="top_layout">
    <div class="layout top_wrap">
        <h1 class="logo_wrap" id="logo"><a href="/<?=SITE_DVS_CD?>/">제 21회 인삼교역전 蔘蔘 장터</a></h1>
        <ul class="utile_wrap">
            <li><a href="/<?=SITE_DVS_CD?>/">Home</a></li>
            <li><a href="http://www.geumsan.go.kr/intro.html" target="_blank" title="새창">금산군청</a></li>
            <li class="box pc">
                <a id="btnAllmenu" href="<?=URL_SITEMAP?>">전체메뉴<span></span><span></span><span></span></a>
            </li>
             <li class="box mo">
                <button type="button" class="btn-allmenu " data-toggle="modal" data-target="#mobile-menu">전체메뉴<span></span><span></span><span></span></button>
            </li>
        </ul>
    </div>
    <!-- gnb_layout :s -->
    <div id="gnb_layout">
        <div id="gnb">
        	<!-- 공통메뉴틀 시작 -->
        	<div class="gnb_wrap layout">
            	<!-- 메뉴 시작 -->
    			<?=TopMenuView($TopMenus);?>
                <!-- 메뉴 끝 -->
            </div>
            <span class="line"></span>
        	<!-- 공통메뉴틀 끝 -->
    	</div>
    </div>
    <!-- 모바일 메뉴 -->
	<div class="modal fade" id="mobile-menu" role="dialog" aria-hidden="true">
		<div class="modal-dialog" role="document">
            <div class="mo_top_untill">
                <ul class="utile_wrap">
                    <li class="n1"><a href="<?=URL_SITEMAP?>">사이트맵</a></li>
                    <li class="n2"><a href="/<?=SITE_DVS_CD?>/">HOME</a></li>
                    <li class="n3"><a href="http://www.geumsan.go.kr/intro.html" target="_blank" title="새창">금산군청</a></li>
                </ul>
            </div>
	  		<div class="modal-content">
	    		<div class="modal-body accordion">
	    			<?=TopMenuView($TopMenus, $mobile);?>
					<button type="button" class="mobile-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">닫기</span></button>
				</div>
			</div>
		</div>
	</div>
	<!-- 모바일 메뉴 -->
    <script src="/<?=SITE_DVS_CD?>/js/acego.gnb.js"></script>
    <script>
    (function(){
        var param = "#gnb_layout",
                obj = ".depth2_ul",
                btn = ".depth1_ul>li",
                wrap = "#gnb_layout",
                dur = 300,
                meth = "easeOutCubic";
        gnb(param,obj,btn,wrap,dur,meth);
        gnb_open();
    }());
    </script>
<!-- gnb_layout :e -->
</header>
<div class="gnb_bg"></div>
	<? if(!$is_Main) { ?> 
		<!--비주얼영역 시작 -->
        <div id="svisual_layout" class="first">
            <div class="obj cloud cloud1"></div>
            <div class="obj cloud cloud2"></div>
            <div class="obj cloud cloud3"></div>
            <div class="obj obj1"></div>
            <div class="obj obj2"></div>
        	<div class="svisual_wrap">
        		<div class="sub__background sub01"></div>
            	<div class="subvisual-layout layout">
                	<strong class="subvisual-layout__title"><em><?=$SubTitleMenuName?></em></strong>
                    <p class="subvisual-layout__text">제 21회 인삼교역전 蔘蔘 장터</p>
                </div>
            </div>
        </div>
		<!--비주얼영역 끝 -->



		<div id="body_layout">
			<div class="body_wrap layout">


			<!-- simple left -->
			<aside id="lnb_layout" class="lnb_wrap">
				<div class="title_wrap lnb__title">
					<strong><?=$SubTitleMenuName?></strong>
				</div>
				<?=SubMenuView( $submenu_xml_file, $SITE_DVS_CD);?>
			</aside>
			<script src="/pcms/common/layout/roleA/js/acego.snb.js"></script>
			<!-- simple left -->

			<!-- 컨텐츠 -->
			<div id="contens" class="contents_wrap">
    			<div id="location" class="title_wrap">
    				<h2 class="page__title"><?=$ThisMenuName?></h2>
                    	<!-- 유틸 시작 -->
                    	<div class="utile_wrap">
                    		<!-- 로케이션 시작 -->
                    		<?
        						//dropbox or default
        						//echo NaviMenuView($submenu_xml_file, $TopMenus_All, $ThisMenuCode, 'dropbox');	//dropbox style
        						$navi_menu_str = NaviMenuView($submenu_xml_file, $TopMenus_All, $ThisMenuCode, 'default');
        						echo $navi_menu_str;
        					?>
                        	<!-- 로케이션 끝 -->
                        	<!-- 프린트 시작 -->
                            <ul class="print_wrap setting-box__group">
                                <li id="sns_layout" class="n1">
                                    <button data-target="ui-open">SNS공유</button>
                                    <div class="sns_wrap" data-id="ui-open">
                                        <button data-button="sns_share" data-service="facebook" data-title="페이스북 SNS공유">페이스북 SNS</button>
                                        <button data-button="sns_share" data-service="twitter" data-title="트위터 SNS공유">트위터 SNS</button>
                                        <button data-button="sns_share" data-service="kakaostory" data-title="카카오스토리 SNS공유">카카오스토리</button>
                                        <button data-target="ui-close">닫기</button>
                                    </div>
                                </li>
                                <li class="n2"><button onclick="CopyUrl(); return false;" title="복사하기" class="copy"><span class="tmpl_ir">복사하기</span></button></li>
                                <li class="n3" id="print"><button data-print="print">프린트</button></li>
                            </ul>
                        	<!-- 프린트 끝 -->
                        </div>
                        <!-- 유틸 끝 -->
				</div>

    		<?=TabMenuView($TabMenu, $ThisMenuCode,  $submenu_xml_file); // TAB메뉴 삽입 ( 4차메뉴 )?>

		<? } ?>
