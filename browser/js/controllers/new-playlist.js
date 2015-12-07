app.controller('PlaylistCtrl', function ($scope, PlaylistFactory) {
	$scope.playListName = function (name) {
	PlaylistFactory.create(name).then(function (data) {
		$scope.reset();
	});
  }
  $scope.reset = function () {
  	$scope.playlist.name = '';
  	$scope.formName.inputName.$setPristine();
  	}
});
