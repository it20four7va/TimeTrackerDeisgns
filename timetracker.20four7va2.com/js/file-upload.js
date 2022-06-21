$(document).ready(function() {
	 
	// ------------  File upload BEGIN ------------
	$('.file__input--file').on('change',function(event){
		var files = event.target.files;
		for (var i = 0; i < files.length; i++) {
			var file = files[i];

			$("<div class='col-xl-2'><div class='file__value'><div class='file__value--text'>" + file.name + "</div><div class='file__value--remove' data-id='" + file.name + "' ></div></div></div>").insertAfter('#file__input');
		
		}	
	});
	
	//Click to remove item
	$('body').on('click', '.file__value', function () {
		$(this).parent().remove();
	});
	// ------------ File upload END ------------ 
	
	
	
});