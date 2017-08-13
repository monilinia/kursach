$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    allHide();

	$(".xxx").click(function (event) {//закрытие форм
		var id  = $(this).attr("href");
		$(id).fadeOut(500);
		$(id+" .cover").remove();
		$(".flipbook [href='"+id+"'] img").css({"filter":"sepia(0)"});
		//возвращаем постепено звук музыки
		if (id=="#popup4"){
			document.getElementsByTagName("object")[0].parentNode.removeChild(document.getElementsByTagName("object")[0]);
			music = document.getElementById("player");
			music.volume = 0;
			for(var i=0; i<3; i++){
				tmp = setTimeout("music.volume = (music.volume + 0.1).toFixed(1)",i*1000);
			}
		}
	});
});

function allHide(){
    for (i=1; i<6; i++){
        $("#popup"+i+"").hide();
    }
}
   //Функция отображения PopUp
   
    function PopUpShow1(event){
		$("<div class='cover'><img src='image/cover/cover1.jpg'/></div>").appendTo("#popup1");
		$("#popup1").fadeIn(10);
		$("#popup1 .zadanie").attr("id","z1");//задание исчезает
    }
	
	function PopUpShow2(event){
		$("<div class='cover'><img src='image/cover/cover2.jpg'/></div>").appendTo("#popup2");
		$("#popup2").fadeIn(10);
		$("#popup2 .zadanie").attr("id","z1");//задание исчезает
		roses();
    }
	
	function PopUpShow3(event){
		$("#popup3").fadeIn(1000);
    }

	function PopUpShow4(event){
		$("<div class='cover'><img src='image/cover/cover4.jpg'/></div>").appendTo("#popup4");
		$("#popup4").fadeIn(10);
		$("#popup4 .zadanie").attr("id","z1");//задание исчезает
		//добавление ролика на страницу.
		$("<object id='myId' width='700' height='700' type='application/x-shockwave-flash' data='image/gif_swf/rolik.swf'><param name='movie' value='image/gif_swf/rolik.swf'/><param name='classid' value='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' /> <param name='quality' value='high' /> 	<param name='scale' value='noborder' /> <param name='salign' value='t' /> <param name='wmode' value='opaque' /><</param><!--[if !IE]>-->	<object type='application/x-shockwave-flash' width='700' height='700' data='image/gif_swf/rolik.swf'>	<!--<![endif]-->	<param name='quality' value='high' /> 	<param name='scale' value='noborder' /> 	<param name='salign' value='t' /> <param name='wmode' value='opaque' /><div><h1>Для отображения анимации необходим плеер</h1><p><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a></p></div><!--[if !IE]>--></object><!--<![endif]--></object>").appendTo("#popup4 .popup-content");
		//выключаем постепено звук музыки, если она играет
		if(playing){
			music = document.getElementById("player");
			for(var i=0; i<music.volume*10; i++){
				if(music.volume >= 0.1){
					tmp = setTimeout("music.volume = (music.volume - 0.1).toFixed(1)",i*1000);
					
				}
			}
		} 
    }
	
	function PopUpShow5(event){
		$("<div class='cover'><img src='image/cover/cover5.jpg'/></div>").appendTo("#popup5");
		$("#popup5").fadeIn(10);
		$("#popup5 .zadanie").attr("id","z1");//задание исчезает
    }