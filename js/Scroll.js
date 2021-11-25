$(document).ready(function(){
	$(".nav-link").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		
	});
	$('body,html').animate({scrollTop: top}, 1500);
		$("#start").on("click","a", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();
	
			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),
	
			//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(id).offset().top;
			
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 200);
		});
});

$(document).ready(function(){
    $("#start").click(function(){
      $(".work").animate({
        height: 'toggle'
      });
    });
  });

