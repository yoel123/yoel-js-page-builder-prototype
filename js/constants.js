const yconst =
{
	lightbox_sel:".lightbox_options",
	lightbox_b:".lightbox_body",
	lightbox_c:".lightbox_content",
	lightbox_close:".close_lightbox",
	content:".content",
	editable_block_class_name:"yeditble",
	editable_block:".yeditble",
	add_row_btn:".add_r",
	remove_row_btn:".yremove",
	move_up_row_btn:".ymove_up",
	move_down_row_btn:".ymove_down",
	get_html_btn:".get_h",
	set_html_btn:".set_h",
	export_zip_btn:".ysave_as",
	set_html_textarea_name:"set_h_textarea",
	set_html_textarea:".set_h_textarea",
	set_html_btn_submit_btn_name:"set_h_submit_btn_class",
	set_html_btn_submit_btn_class:".set_h_submit_btn_class",
	get_import_layout_btn:".yimport",
	get_import_layout_submit_btn_name:"yimport_lb",
	get_import_layout_submit_btn_class:".yimport_lb",
	import_layout_textarea_name:"import_layout",
	import_layout_textarea_class:".import_layout",
	get_export_layout_btn:".yexport",
	data:"none",
	data_src:"js/components.json",
	edit_mode:false
	
}

//////////stuff for save as zipss////////////

var yheader = `
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/box_model_helper.css">
 <link rel="stylesheet" type="text/css" href="css/style.css">
 <!-- materializecss -->
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <!--Import Google Icon Font-->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  

<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>


`;
var yfooter = `



<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!--materializecss Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script language="javascript" type="text/javascript" src="js/script.js"></script>
      
</body>
</html>

`;
var yscriptf = `
 ypreloader();
 $(document).ready(function(){
    $('.sidenav').sidenav();
     y_scroll_to(".ymenu li a")
  });
  
function y_scroll_to(selctor)
{
	   
	   
	   $(selctor).click(function() {
		scrollto_element = $(this).attr("href")
		console.log(scrollto_element)
        $('html, body').animate({
            scrollTop: $(scrollto_element).offset().top
        }, 500);
        return false;
    });
}

function ypreloader()
{
	$(window).on('load', function () {
	  var $preloader = $('.ypreload');
	  setTimeout(function(){
		  $preloader.fadeOut(1200);
	  }, 900);
	
	});
}//ypreloader
`;
var box_modelh = `
/*---------- SPACING ----------*/


/* Padding Zero */

.p0 {
	padding: 0!important
}


/* Padding Top */

.pt10 {
	padding-top: 10px!important
}

.pt15 {
	padding-top: 15px!important
}

.pt20 {
	padding-top: 20px!important
}

.pt30 {
	padding-top: 30px!important
}

.pt40 {
	padding-top: 40px!important
}

.pt50 {
	padding-top: 50px!important
}

.pt60 {
	padding-top: 60px!important
}

.pt70 {
	padding-top: 70px!important
}

.pt80 {
	padding-top: 80px!important
}

.pt90 {
	padding-top: 90px!important
}

.pt100 {
	padding-top: 100px!important
}

.pt110 {
	padding-top: 110px!important
}

.pt120 {
	padding-top: 120px!important
}

.pt130 {
	padding-top: 130px!important
}

.pt140 {
	padding-top: 140px!important
}


/* Padding Bottom */

.pb0 {
	padding-bottom: 0px!important
}

.pb10 {
	padding-bottom: 10px!important
}

.pb15 {
	padding-bottom: 15px!important
}

.pb20 {
	padding-bottom: 20px!important
}

.pb30 {
	padding-bottom: 30px!important
}

.pb40 {
	padding-bottom: 40px!important
}

.pb50 {
	padding-bottom: 50px!important
}

.pb60 {
	padding-bottom: 60px!important
}

.pb70 {
	padding-bottom: 70px!important
}

.pb80 {
	padding-bottom: 80px!important
}

.pb90 {
	padding-bottom: 90px!important
}

.pb100 {
	padding-bottom: 100px!important
}

.pb110 {
	padding-bottom: 110px!important
}

.pb120 {
	padding-bottom: 120px!important
}

.pb130 {
	padding-bottom: 130px!important
}

.pb140 {
	padding-bottom: 140px!important
}


/* Padding Left */

.pl0 {
	padding-left: 0px!important
}

.pl3 {
	padding-left: 3px!important
}

.pl5 {
	padding-left: 5px!important
}

.pl10 {
	padding-left: 10px!important
}

.pl20 {
	padding-left: 20px!important
}

.pl30 {
	padding-left: 30px !important;
}

.pl40 {
	padding-left: 40px !important;
}

.pl50 {
	padding-left: 50px !important;
}

.pl60 {
	padding-left: 60px !important;
}

.pl70 {
	padding-left: 70px !important;
}

.pl80 {
	padding-left: 80px !important;
}

.pl90 {
	padding-left: 90px !important;
}

.pl100 {
	padding-left: 100px !important;
}


/* Padding Right */

.pr0 {
	padding-right: 0px!important
}

.pr5 {
	padding-right: 5px!important
}

.pr10 {
	padding-right: 10px!important
}

.pr20 {
	padding-right: 20px!important
}

.pr30 {
	padding-right: 30px!important
}

.pr40 {
	padding-right: 40px !important;
}

.pr50 {
	padding-right: 50px !important;
}

.pr60 {
	padding-right: 60px !important;
}

.pr70 {
	padding-right: 70px !important;
}

.pr80 {
	padding-right: 80px !important;
}

.pr90 {
	padding-right: 90px !important;
}

.pr100 {
	padding-right: 100px !important;
}

.pr110 {
	padding-right: 110px !important;
}

.pr120 {
	padding-right: 120px !important;
}

@media (min-width:1200px) {
	.pl-lg-50 {
		padding-left: 50px;
	}
	.pl-lg-80 {
		padding-left: 80px;
	}
}

@media (min-width:992px) {
	.pt-md-50 {
		padding-top: 50px;
	}
}


/* Margin Auto */

.mr-auto {
	margin: auto;
	float: none !important;
	display: block !important;
}


/* Margin Top */

.mt0 {
	margin-top: 0!important
}

.mt5 {
	margin-top: 5px!important
}

.mt10 {
	margin-top: 10px!important
}

.mt20 {
	margin-top: 20px!important
}

.mt30 {
	margin-top: 30px!important
}

.mt40 {
	margin-top: 40px!important
}

.mt50 {
	margin-top: 50px!important
}

.mt60 {
	margin-top: 60px!important
}

.mt70 {
	margin-top: 70px!important
}

.mt80 {
	margin-top: 80px!important
}

.mt90 {
	margin-top: 90px!important
}

.mt100 {
	margin-top: 100px!important
}

.mt110 {
	margin-top: 110px!important
}

.mt120 {
	margin-top: 120px!important
}


/* Margin Bottom */

.mb0 {
	margin-bottom: 0!important
}

.mb5 {
	margin-bottom: 5px!important
}

.mb10 {
	margin-bottom: 10px!important
}

.mb15 {
	margin-bottom: 15px!important
}

.mb20 {
	margin-bottom: 20px!important
}

.mb30 {
	margin-bottom: 30px!important
}

.mb40 {
	margin-bottom: 40px !important
}

.mb50 {
	margin-bottom: 50px !important;
}

.mb60 {
	margin-bottom: 60px !important;
}

.mb70 {
	margin-bottom: 70px !important;
}

.mb80 {
	margin-bottom: 80px !important;
}

.mb90 {
	margin-bottom: 90px !important;
}

.mb100 {
	margin-bottom: 100px !important;
}

.mb110 {
	margin-bottom: 110px !important;
}

.mb120 {
	margin-bottom: 120px !important;
}


/* Margin Left */

.ml0 {
	margin-left: 0!important;
}

.ml15 {
	margin-left: 5px  !important;
}

.ml10 {
	margin-left: 10px  !important;
}

.ml20 {
	margin-left: 20px  !important;
}

.ml30 {
	margin-left: 30px  !important;
}

.ml40 {
	margin-left: 40px  !important;
}

.ml50 {
	margin-left: 50px  !important;
}

.ml60 {
	margin-left: 60px  !important;
}

.ml70 {
	margin-left: 70px  !important;
}

.ml80 {
	margin-left: 80px  !important;
}

.ml90 {
	margin-left: 90px  !important;
}

.ml100 {
	margin-left: 100px  !important;
}

.ml110 {
	margin-left: 110px  !important;
}


/* Margin Right */

.mr0 {
	margin-right: 0!important
}

.mr5 {
	margin-left: 5px!important
}

.mr10 {
	margin-right: 10px!important
}

.mr20 {
	margin-right: 20px!important
}

.mr30 {
	margin-right: 30px!important
}

.mr40 {
	margin-right: 40px!important
}

.mr50 {
	margin-right: 50px!important
}

.mr60 {
	margin-right: 60px!important
}

.mr70 {
	margin-right: 70px!important
}

.mr80 {
	margin-right: 80px!important
}

.mr90 {
	margin-right: 90px!important
}

.mr100 {
	margin-right: 100px  !important;
}

.mr110 {
	margin-right: 110px  !important;
}
`;
var ycss = `
.ylogo,.ylogo img{float:none !important;}
.wrapper
{
    width: 80% !important;
    margin: 0 auto;
    direction: rtl;
}

.btn
{
	margin-bottom:20px;
}



.tcenter
{
	text-align:center;
}

.ytitle_contentp
{
	width: 40%;
    margin: 0 auto;
}
.ytitle_left
{
	float: left;
    margin-top: 2px !important;
}

/*/ytext_img//*/
.ytxt_img
{
	height:200px;
	padding-top:10px;
}
.yp_padd
{
	padding-top: 30px;
}

.img88 
{
	width:80%;
}

/*/end ytext_img//*/


/*/lightbox//*/

.lightbox 
{
	position:fixed; /* keeps the lightbox window in the current viewport */
	top:0;
	left:0;
	width:100%;
	height:100%;
	background: rgba(0, 0, 0, 0.5);    /* 50% opaque black */  
	text-align:center;
}
.lightbox_body
{
	background:white;
	width:70%;
	margin:0 auto;
}

.close_lightbox
{
	width:100%;
	display: inline-block;
	margin:20px 0 20px 0;
}

.lightbox .yitem,.yremove,.btn
{
	margin:10px;
}

.lightbox_content textarea
{
	min-height:300px;
}


/*////////old gen////////*/

.billboarda .card-panel
{
	padding:64px 32px;
}

.jbrands img
{
	height: 88px;
    width: 100%;
}

.ylogo img
{
	float: none !important;
}

.jproductshowcase .main
{
	width: 100%;
}
/*////////end old gen////////*/

`;
