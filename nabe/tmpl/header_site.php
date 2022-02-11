<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8"/>
<meta http-equiv="X-UA-compatible" content="IE=edge">
<meta name="viewport" content="user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,width=device-width">
<meta name="author" content="제6회 온라인 청소년 축제 청소년 나B 온라인 한마당">
<meta name="keywords" content="제6회 온라인 청소년 축제 청소년 나B 온라인 한마당">
<meta name="description" content="제6회 온라인 청소년 축제 청소년 나B 온라인 한마당">
<meta name="copyright" content="(우 34139) 대전광역시 유성구대학고 211 (어은동)  ">
<meta property="og:type" content="website">
<meta property="og:title" content="<?=SITE_TITLE?>">
<meta property="og:image" content="/common/img/logo.png">
<meta property="og:description" content="제6회 온라인 청소년 축제 청소년 나B 온라인 한마당">
<title><?=$title_tag?></title>
<link rel="shortcut icon" type="image/x-icon" href="/pcms/common/images/favicon.ico">
<link rel="apple-touch-icon-precomposed" href="/pcms/common/images/favicon_152.png">
<link rel="stylesheet" href="/pcms/common/css/common.css" />
<link rel="stylesheet" href="/pcms/common/pluigs/bootstrap/bootstrap.min.css" />
<link rel="stylesheet" href="/pcms/common/font/font-awesome.css" />
<link rel="stylesheet" href="/pcms/common/css/acego.ui.min.css" />
<link rel="stylesheet" href="/pcms/common/css/ir-icon.css" />
<link rel="stylesheet" href="/<?=SITE_DVS_CD?>/css/acego.header.css">
<link rel="stylesheet" href="/<?=SITE_DVS_CD?>/css/acego.footer.css">

<? if(!$is_Main) { ?>
<link rel="stylesheet" href="/pcms/common/css/program.css" />
<link rel="stylesheet" href="/pcms/common/css/board.min.css" />
<link rel="stylesheet" href="/<?=SITE_DVS_CD?>/css/acego.tmpl.css">
<link rel="stylesheet" href="/<?=SITE_DVS_CD?>/css/content.css">
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

<? if($is_Main) { ?>
<script src="/pcms/common/pluigs/html5/html5shiv.min.js"></script>
<script src="/<?=SITE_DVS_CD?>/js/main.js"></script>
<link rel="stylesheet" href="/<?=SITE_DVS_CD?>/css/main.css" />
<? } ?>

<!-- basic script -->
<script src="/pcms/common/pluigs/jQuery/jquery-3.3.1.min.js"></script>
<script src="/pcms/common/pluigs/jQuery/jquery-migrate-1.4.1.min.js"></script>
<script src="/pcms/common/pluigs/jQueryUI/jquery-ui.min.js"></script>
<script src="/pcms/common/pluigs/bootstrap/bootstrap.min.js"></script>
<script src="/pcms/common/pluigs/print/jQuery.print.min.js"></script>
<script src="/pcms/common/js/acego.common.js"></script>
<script src="/common/js/common.js"></script> <!-- common js -->
<script type="text/javascript" src="/pcms/common/pluigs/WebFont/webfont.js"></script>
<script type="text/javascript">
WebFont.load({
    custom: {
        families: ['Noto Sans KR'],
        urls: ['/pcms/common/font/font_notosanskr.css']
    }
});
</script>
<!--[if lt IE 9]>
<![endif]-->
<?
//구글 리캡차 관련
if( true === defined("CAPTCHA_YN") && CAPTCHA_YN == "Y"){?>
<script src='https://www.google.com/recaptcha/api.js'></script>
<?}?>
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

</head>

<? if(!$is_Main) { ?>
<body class="grid-system sub sub_<?=$ThisMenuCode?>">

<?}else{?>
<body class="grid-system main">
<? } ?>

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
	<!-- gnb_layout :s --> 

	<div class="layout top_wrap">
		<h1 class="logo_wrap" id="logo"><a href="/<?=SITE_DVS_CD?>/"><?=SITE_TITLE?></a></h1>
		<ul class="utile_wrap">
			<? if(!$is_Main) { ?>
				<li class="box pc">
				<a id="btnAllmenu" href="<?=URL_SITEMAP?>"><span>전체메뉴</span></a>
				</li>
				<li class="box mo">
					<button type="button" class="btn-allmenu " data-toggle="modal" data-target="#mobile-menu"><span>전체메뉴</span></button>
				</li>
			<?}else{?>
				<li class="box">
					<button type="button" class="btn-allmenu " data-toggle="modal" data-target="#mobile-menu"><span>전체메뉴</span></button>
				</li>

			<? } ?>
			
		</ul>
	</div>

	<nav id="gnb_layout">
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
	</nav>
    <!-- 모바일 메뉴 -->
	<div class="modal fade" id="mobile-menu" role="dialog" aria-hidden="true">
		<div class="modal-dialog" role="document">
	  		<div class="modal-content">
	  			<div class="m_logo"><a href="/<?=SITE_DVS_CD?>/"><?=SITE_TITLE?></a></div>
	    		<div class="modal-body accordion">
	    			<?=TopMenuView($TopMenus, "Y");?>
					<button type="button" class="mobile-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">닫기</span></button>
				</div>
				<div class="m_event"><a href="/kr/html/sub03/0302.html">NOW EVENT 현재 진행 중인 이벤트</a></div>
			</div>
		</div>
	</div>
	 <!-- 모바일 메뉴 -->
	
	<!-- gnb_layout :e -->
</header>
<div class="gnb_bg"></div>
<hr>


	<? if(!$is_Main) {		?>		
		<!--비주얼영역 시작 -->
        <div id="svisual_layout">
        	<div class="event">
        		<a href="/kr/html/sub03/0302.html">
	        		<div class="obj obj1"></div>
	        		<div class="obj obj2"></div>
        		</a>
        	</div>
        	<div class="svisual_wrap">
        		<div class="sub__background"></div>
            	<div class="subvisual-layout layout">
            		<p class="subvisual-layout__text">진로직업체험박람회</p>
                	<strong class="subvisual-layout__title"><img src="/kr/img/common/sub_txt.png" alt="청소년 나Be 온라인 한마당"></strong>
                    
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
			<!-- simple left -->

			<!-- 컨텐츠 -->
			<div id="contens" class="contents_wrap">
    			<div id="location" class="title_wrap">
    				<h2 class="page__title"><?=$ThisMenuName?></h2>
                    	<!-- 유틸 시작 -->
                    	<div class="utile_wrap">
                    		<!-- 로케이션 시작 -->
                    		<?
        						//=== dropbox or default======//
        						//echo NaviMenuView($submenu_xml_file, $TopMenus_All, $ThisMenuCode, 'dropbox');	//dropbox style
        						$navi_menu_str = NaviMenuView($submenu_xml_file, $TopMenus_All, $ThisMenuCode, 'default');
        						echo $navi_menu_str;
        					?>
                        	<!-- 로케이션 끝 -->
                        	<!-- 프린트 시작 -->
                            <ul class="print_wrap setting-box__group">
                            	<li class="n1" ><button data-button="sns_share" data-service="facebook" data-title="페이스북 SNS공유">페이스북</button></li>
                            	<li class="n2" ><a href="#"><button data-button="sns_share" data-service="twitter" data-title="트위터 SNS공유">트위터</button></a></li>
                            	<li class="n3" id="print"><button data-print="print">프린트</button></li>
                            	                
                            </ul>
                        	<!-- 프린트 끝 -->
                        </div>
                        <!-- 유틸 끝 -->	
				</div>						

    		<?=TabMenuView($TabMenu, $ThisMenuCode,  $submenu_xml_file); // TAB메뉴 삽입 ( 4차메뉴 )?>

	<? } ?>
