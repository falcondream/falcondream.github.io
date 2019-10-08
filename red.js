
/////////////////////////////////////////////////////

//					web·唐明明 			           //

/////////////////////////////////////////////////////


$(document).ready(function() {
	if (window.DeviceMotionEvent){
		var speed = 25;
		var audio = document.getElementById("shakemusic");
		var openAudio = document.getElementById("openmusic");
		var num = Math.random()*100;
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
	
						if(num>0&&num<=12)
						{
							$('.text_award').text("恭喜你，获得let's try定制钥匙扣一个");
						}
						else if(num>15&&num<=18)
						{
							$('.text_award').text("恭喜你，获得无线蓝牙耳机一副");
						}
						else if(num>25&&num<30)
						{
							$('.text_award').text("恭喜你,获得有线耳机一副");
						}else if(num>30&&num<80)
						{
							$('.text_award').text("恭喜你,获得100元电脑优惠卷，请截图保存好兑换码："+parseInt(Math.random()*100000000));
						}
						$('.red-tc').css('display', 'block');
					}, 1500);
				};
				lastX = x;
				lastY = y;
			},false);
	};
	$()
});





