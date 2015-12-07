app.controller('PlaylistCtrl', function ($scope, PlaylistFactory) {
	$scope.playListName = function (name) {
    PlaylistFactory.create(name);
  };
});
