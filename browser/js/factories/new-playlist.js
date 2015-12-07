app.factory('PlaylistFactory', function ($http) {
  var playlistFactory = {};
	playlistFactory.create = function (data) {
		return $http.post('/api/playlists', data)
		.then(function (response) {
			return response.data;
		});
	};

  return playlistFactory;

});
