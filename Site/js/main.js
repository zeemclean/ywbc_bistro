$(document).ready(function() {

	
	$('.drink_tab').on('click', function(event) {
		event.preventDefault();

		var menuId = $(this).attr('href');
		 $('#food').slideUp('slow', function(){
			$('#drink').slideToggle('slow');
		 });

	});
		$('.food_tab').on('click', function(event) {
		event.preventDefault();

		var menuId = $(this).attr('href');
		 $('#drink').slideUp('slow', function(){
			$('#food').slideToggle('slow');
		 });

	});


	$('.desktop-anchor').on('click', function(event) {
		event.preventDefault();

		var contentId = $($(this).attr('href'));

		var otherSection = $('.content-section').not(contentId);

		if (otherSection.is(':visible')) {
			otherSection.hide(function() {
				contentId.show(); 	
			});
		} else {
			contentId.show();
		}
	});	

// adding custom animations to the content-sections as they are shown or hidden 
// 		if (otherSection.is(':visible')) {

			
// 				otherSection.addClass('hiding', function() {
// 					contentId.show().addClass('showing', function() {
// 						otherSection.hide().removeClass('hiding showing');
// 					});
// 				});	

			
// 		} else {
// 			contentId.show().addClass('showing', function(){
// 				otherSection.removeClass('hiding showing');
// 			});
// 		}
// 	});	 




/* three tabs that show one content row and hide all the others 
what i have to work with :
			the rows : #home, #menu, #about all '.content-section'
			three tab links with hrefs #home, #menu and #about all .content-anchor.
			so for each achor I want it to hide all '.content-section's
			and show what in its href.
*/
	 
	$('.content-anchor').on('click', function(event) {

		event.preventDefault();


		var contentId = $($(this).attr('href'));

		var otherSection = $('.content-section').not(contentId);
// if statement: if not contentId (this) and if visible, slide up.
 		
 		if (otherSection.is(':visible')) {
			otherSection.slideUp('slow', function() {
				contentId.slideDown('slow'); 	
			});
			
		} else {
			contentId.slideDown('slow');
		}
		 
	}); 



  

});





