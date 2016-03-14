(function() {
  var countTest = 0;
  var app = angular.module('leaderboard', ['ngMaterial']);
  app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('dark')
  

  })
  app.controller('leaderboardController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
    $http.get('https://apis.trainheroic.com/public/leaderboard/468425')
      .then(function(data) {
        //console.log(data)
        $scope.people = []
        $scope.currentIndex = 0;
        var apiData = data.data.results

        for (var i = 0; i < apiData.length; i++) {

          var person = {
            rank: apiData[i].rank,
            avgRank: apiData[i].avgRank,
            profileImg: apiData[i].profileImg,
            profileUrl: apiData[i].profileUrl,
            firstName: apiData[i].userFirstName,
            lastName: apiData[i].userLastName
          }


          $scope.people.push(person)

        }

        $scope.showPeople = []
        $scope.interval = 4
        $scope.tracker = 0
        $interval(function() {
          if ($scope.interval <= $scope.people.length) {
            console.log($scope.showPeople);
            $scope.interval += 4
            $scope.tracker += 4
          } else {
            $scope.interval = 4
            $scope.tracker = 0
          }
        }, 5000)
      })
  }])
})()
