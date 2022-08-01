$(document).ready(function(){
	$('.shelf').slick({
		infinite: true,
		centerMode: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,



	});

	$('.shelf').slick('slickGoTo', 2);

	TweenLite.to('#statement', 3, {text:'Type here to add your content', ease:Linear.easeNone})

	$('#statement').keyup(function() {
		var length = $(this).val().length;
		if (length <= 16){
			$('#chars').text('one line');
			$('#statement').attr('rows', '1');
		} else {
			$('#chars').text('two lines');
			$('#statement').attr('rows', '2');
		};
	});
});