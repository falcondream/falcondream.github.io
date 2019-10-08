
$(document).ready(function() {
	if (window.DeviceMotionEvent){
		var speed = 25;
		var audio = document.getElementById("shakemusic");
		var openAudio = document.getElementById("openmusic");
		var num = parseInt(Math.random()*100);
		var x = t = z = lastX = lastY = lastZ = 0;
		window.addEventListener('devicemotion',
			function () {
				var acceleration = event.accelerationIncludingGravity;
				x = acceleration.x;
				y = acceleration.y;
				if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {
					audio.play();
					$('.red-ss').addClass('wobble')
					setTimeout(function(){
						audio.pause();
						openAudio.play();
	
						if(num>0&&num<=5)
						{
							$('.text_award').text("恭喜你，获得let's try定制钥匙扣一个");
						}
						else if(num>9&&num<=18)
						{
							$('.text_award').text("恭喜你，获得玩偶玩具一个");
						}
						else if(num>25&&num<=28)
						{
							$('.text_award').text("恭喜你,获得有线耳机一副");
						}else if(num>35&&num<72)
						{
							var codeNum = parseInt(Math.random()*100000000);
							$('.text_award').text("恭喜你,获得100元电脑优惠卷，请截图保存好兑换码："+codeNum);
						}else if(num>75&&num<=84)
						{
							$('.text_award').text("恭喜你，获得小米巨能写中性笔一支");
						}
						var d = new Date();
						$('.text_award').text("对不起，不在活动时间内，活动时间:10月18日至10月19日");
						$('.red-tc').css('display', 'block');
					}, 1500);
				};
				lastX = x;
				lastY = y;
			},false);
	};
	$()
});





