
$(function() {

	// Фиксирование состояние рекомендованной карточки тарифного плана
	$(".tarrifs-item").hover( function(){
		$(".tarrifs-item").eq(0).removeClass('recommend');	
	});

	$(".tarrifs-item").mouseleave(function(){
		$(".tarrifs-item").eq(0).addClass('recommend');
	});


	$('.card-header').click(function() {
		if ($(this).hasClass('opened')) {
			$(this).removeClass('opened');
		} else {
			$('.card-header').removeClass('opened');
			$(this).addClass('opened');
		}
		
	});

	$('.my-tooltip').tooltip();

	function adjustCollapseView(){
		var desktopView = $(document).width();
		if(desktopView >= "768"){
			$(".footer-list-title").attr("data-toggle","");
			$(".footer-list").removeClass('collapse');
		}else{
			$(".footer-list-title").attr("data-toggle","collapse");
			$(".footer-list").addClass('collapse');
		}
	}

	$(function(){
		adjustCollapseView();
		$(window).on("resize", function(){
			adjustCollapseView();
		});
	});

	function setEqualHeight(columns){
	var tallestcolumn = 0;
	columns.each(function(){
		currentHeight = $(this).height();
		if(currentHeight > tallestcolumn){
			tallestcolumn = currentHeight;
		}
	});
	columns.height(tallestcolumn);
	}
	$(document).ready(function() {
	setEqualHeight($(".endorsment-post"));
	});


	
	$(".error").hide();
	$('.restrict-str').keypress(function(key) { if(key.charCode < 48 || key.charCode > 57) return false; });
	$("#password-confirm").change(function() {
		$(".error").hide();
		var valueX = $("#password").val();
		var valueY = $("#password-confirm").val();
		if (valueX != valueY) {
			$(".error").show();
		}
	});
	

});