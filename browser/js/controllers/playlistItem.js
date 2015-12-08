app.controller('PlaylistItemCtrl', function ($scope, PlaylistFactory) {
  PlaylistFactory.fetchAll()
  .then(function(data){
    $scope.allPlaylists = data;
    console.log($scope.allPlaylists);
  });
});
