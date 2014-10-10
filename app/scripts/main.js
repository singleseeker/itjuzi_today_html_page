$(function(){

	$('#show_all_comment').on('shown.bs.modal', function () {
	    $('.modal-content').scrollTop(0);
	    $('body').css({overflow: 'hidden'}); 
	}).on('hidden.bs.modal', function () {
	    $('body').css({overflow: ''}); 
	});

});