$(function(){

	'use strict';
	
	$('#show_all_comment').on('shown.bs.modal', function () {
		$('.modal-content').scrollTop(0);
		$('body').css({overflow: 'hidden'});
	}).on('hidden.bs.modal', function () {
		$('body').css({overflow: ''});
	});

	$(document).on('click', '.comment', function () {
		
		var itemId = $(this).attr('item-id');
		var request = $.ajax({
			url: 'ajax_item.html',
			type: 'GET',
			data: { id : itemId },
			dataType: 'html'
		});

		request.done(function( msg ) {
			// get number of like
			$('#show_all_comment').html(msg);
		});

	});

	// click like button
	$(document).on('click', '.like', function(){
		var base = $(this);

		var itemId = base.attr('item-id');
		var request = $.ajax({
			url: 'ajax_item.html',
			type: 'GET',
			data: { id : itemId },
			dataType: 'html'
		});
		 
		request.done(function( msg ) {
			// get number of like
			msg = 8;

			base.find('span').addClass('liked');
			base.find('strong').text(msg);
		});

		return false;
	});

});