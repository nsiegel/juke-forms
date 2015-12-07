app.factory('PlaylistFactory', function ($http) {
  var playlistFactory = {};
	playlistFactory.create = function (data) {
    console.log(data);
		return $http.post('/api/playlists', data)
		.then(function (response) {
      console.log(response.data);
			return response.data;
		});
	};

  return playlistFactory;

});
