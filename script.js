jQuery('document').ready(function(){
	jQuery('input').on('keyup',function(){
		var value1, value2, value3;
		value1=jQuery('#val1').val();
		value2=jQuery('#val2').val();
		value1=Number(value1);
		value2=Number(value2);
		jQuery('#rezultat').val(value3);
	})
})