app.config(function ($stateProvider) {
	$stateProvider.state('playlist', {
		url: '/albums/:albumId',
		templateUrl: '/templates/playlist.html',
		controller: 'PlaylistCtrl'
	});
});
