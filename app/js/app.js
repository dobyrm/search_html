$(document).ready(function() {
	/*var arr = ['.cart', '.glyphicon-shopping-cart', '#test'];
	for (var i = 0; i < arr.length; i++) {
		$("body").find(arr[i]).css( "border", "1px solid red" );
	}*/

	//method bloce to conteiner
	function closeConteiner(){
		var contains = $( "p:contains('Lorems ipsums')" );
		$( contains.parent() ).css("border", "1px solid red");
	}

	//mathod replace url cart to product
	function closeBtnAddCart(){
		var nameProduct = $('.title').text();
		var action = $('form#product_configure_form').attr('action');
		if(action){
			var arr = action.split('/');
			var newAction = [];
			for (var i = 0; i < arr.length; i++) {
				if(arr[i] == 'cart'){
					break;
				}
				newAction.push(arr[i]);
			}

			newAction = newAction.join('/');
			replaceAction = nameProduct.toLowerCase();
			replaceAction = replaceAction.replace(' ','-');

			action = newAction + '/' +replaceAction + '.html';

			div = $('form#product_configure_form').attr('action', action);
			$("form#product_configure_form").css("border", "1px solid red");
		}
	}
});