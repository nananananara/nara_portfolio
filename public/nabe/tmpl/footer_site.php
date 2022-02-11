	<? if(!$is_Main) { ?>
	
				<!-- <div id="charge">
					<div class="inner">
						<span><b>콘텐츠담당</b> : <?=$ThisMenuOwner?></span>
					</div>
				</div> -->
				 <?php		// 컨텐츠 담당자 표시 
					include_once $_SERVER["DOCUMENT_ROOT"]."/_module/charge/list_new.php";
				 ?>
				
			</div> <!-- contents_wrap end -->
		</div>	<!-- body_wrap layout end -->
	</div>	<!-- body_layout end -->
	<? } ?>
	<!-- content  -->


	<footer id="foot_layout">
        <!-- 푸터틀 시작 -->
                <div class="layout">
                        <div class="foot_left">
                                <img src="/kr/img/common/logo_yu.png" alt="유성구">
                        </div><!-- //foot_left -->    

                        <div class="foot_right">
                                <address><em>(우 34139) 대전광역시 유성구 대학로 211 (어은동)</em> <span>전화번호 : 042-611-2123</span>  <span>팩스 : 042-611-2116</span></address>
                                <p class="copy">COPYRIGHT(C) Daejeon yuseong-gu. all right reserved</p>

                                
                        </div><!-- //foot_right -->    
                	
                	<!--  오픈 후 숨김 처리 -->
                </div>
        <!-- 푸터틀 끝 -->
	</footer>
<script src="/<?=SITE_DVS_CD?>/js/acego.gnb.js"></script>
<script src="/<?=SITE_DVS_CD?>/js/acego.snb.js"></script>
<script>
$(function(){
    var param = "#gnb_layout",
        obj = ".depth2_ul",
        btn = ".depth1_ul>li",
        wrap = "#gnb_layout",
        dur = 300,
        meth = "easeOutCubic";
    gnb(param,obj,btn,wrap,dur,meth);
    gnb_open();
}());

$(".clickOpen > a").on("click",function(){
    $(this).parent().addClass("on");  
});
$(".clickOpen a.clickClose").on("click",function(){
    $(this).parents(".clickOpen").removeClass("on");
});

$(".clickOpen > button").on("click",function(){
    $(this).parent().addClass("on");  
});
$(".clickOpen button.clickClose").on("click",function(){
    $(this).parents(".clickOpen").removeClass("on");
});

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

</body>
</html>
