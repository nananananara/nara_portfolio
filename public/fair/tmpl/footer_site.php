	<? if(!$is_Main) { ?>

			</div> <!-- contents_wrap end -->
		</div>	<!-- body_wrap layout end -->
	</div>	<!-- body_layout end -->
	<? } ?>
	<!-- content  -->
    <footer id="foot_layout">
        <!-- 푸터틀 시작 -->
        <div class="layout">
            <div class="footlogo">금산군</div>
            <div class="footer-info">
                <ul class="clearfix">
                    <li><a href="/gsfestival/html/sub09/0902.html" target="_blank" title="새창">개인정보취급방침</a></li>
                </ul>
            </div>
            <div class="copyright">
                <address><span>(32733) 충청남도 금산군 금산읍 군청길 13</span><span>Tel. 041-750-2114</span><span> Fax. 041-751-6889</span></address>
                <p class="copy">COPYRIGHT(C) 2020 BY GEUMSAN COUNTY ALL RIGHTS RESERVED</p>
            </div>


        </div>
        <!-- 푸터틀 끝 -->
    </footer>
<? if($is_Main) { ?>
<?
    if( file_exists( DOC_DIR. "/site/common/main/".SITE_SKIN."/js/main.js" ) ) {
        echo '<script src="/common/main/'.SITE_SKIN.'/js/main.js"></script>';
    }
?>
<script src="/<?=SITE_DVS_CD?>/js/main.js"></script>
<? } ?>
</body>
</html>
