/**
 * Created by omar on 1/31/17.
 */
var source = $('#handlebarsTemp').html();
var template = Handlebars.compile(source);
//var menu = JSON.parse(document.getElementById('menuJSON').textContent);
var menu = Object;

$.getJSON('_assets/content/menuV5.json',function(data){
	//console.log('success');
	//todo remove console.log statements
	menu = data;

	var html = template(menu);
	$('.orderOnline').html(html);
});


/*$.getJSON('../menu.json', function(json){
	console.log(json);
});*/

