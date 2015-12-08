app.config(function ($stateProvider) {
	$stateProvider.state('playlist', {
		url: '/playlist/:playistId',
		templateUrl: '/templates/playlist.html',
		controller: 'PlaylistCtrl',
    resolve: {
			thePlaylist: function (PlaylistFactory, $stateParams) {
        console.log($stateParams);
				return PlaylistFactory.fetchById($stateParams.playlistId);
			}
		}
	});
});
