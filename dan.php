<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wx3535700c9793a7f9", "0e7e2ef647d4070cce1656bab6cd3846");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="UTF-8">
	
	<link rel="stylesheet" type="text/css" href="css/dan.css">
		<meta name = "viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
		<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js "></script>
		<script data-main = "app.js" type="text/javascript" src = "js/require.js"></script>
		<script type="text/javascript" src="modules/home/baiduTemplate.js"></script>
</head>
<body>
	<div id="boss">
		<div class="index_"></div>
		<div class="order_"></div>
		<div class="bucar_"></div>
		<div class="super_"></div>
	</div>
	

<ul class="bot">
	<li>
		<a href="#index"><span>首页</span></a>
	</li>
	<li>
		<a href="#supermarket"><span>闪送超市</span></a>
	</li>
	<li>
		<a href="#buycar"><span>购物车<span class="num"></span></span></a>
	</li>
	<li>
		<a href="#mine"><span>我的</span></a>
	</li>
</ul>
</body>
<script type="text/javascript">
  wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
     jsApiList: [
        'checkJsApi',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ]
  });
</script>
</html>