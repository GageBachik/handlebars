$(document).on('ready', function() {


	var templateSourch = $('#my-template').html();
	console.log('templateSourch', templateSourch);

	var myTemplate = Handlebars.compile(templateSourch);
	console.log('myTemplate', myTemplate);

	var context = {
		title: 'Using Handlebars!',
		message: 'This is a message from javascript'
	};

	var output = myTemplate(context);
	console.log('output', output);

	$('body').append(output);

	var context2 = {
		title: 'this is from 2',
		message: 'Hello, world from template2'
	}

	$('body').append(myTemplate(context2));

	var games = [
	{title: 'Braid', platform: 'all'},
	{title: 'Halflife', platform: 'pc'},
	{title: 'System Shick 2', platform: 'pc'}
	];

	var gameItemSource = $('#item-template').html();
	var gameItemTemplate = Handlebars.compile(gameItemSource);

	for (var i = 0; i < games.length; i++) {
		$('#games-list').append(gameItemTemplate(games[i]));
	};

	var gameHelperSource = $('#helper-template').html();
	var gameHelperTemplate = Handlebars.compile(gameHelperSource);

	$('#games-list-helper').append( gameHelperTemplate({games: games}));

});