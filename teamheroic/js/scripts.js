(function() {
  var countTest = 0;
  var app = angular.module('leaderboard', ['ngMaterial', 'ngAnimate']);
  app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('dark')


  })
  app.controller('leaderboardController', ['$scope', '$http', '$interval', '$timeout', function($scope, $http, $interval, $timeout) {
    $http.get('https://apis.trainheroic.com/public/leaderboard/468425')
      .then(function(data) {
        console.log(data)
        $scope.people = []
        $scope.currentIndex = 0;
        var apiData = data.data.results
        $scope.testTitle = data.data.tests[0].title
        $scope.instructions = data.data.tests[0].testInstructions

        for (var i = 0; i < apiData.length; i++) {

          var person = {
            rank: apiData[i].rank,
            avgRank: apiData[i].avgRank,
            profileImg: apiData[i].profileImg,
            profileUrl: apiData[i].profileUrl,
            firstName: apiData[i].userFirstName,
            lastName: apiData[i].userLastName,
            rx: apiData[i].tests[0]
          }
          $scope.people.push(person)
        }

        $scope.showPeople = []
        $scope.interval = 4
        $scope.tracker = 0

        $interval(function() {
          $scope.transition = true
          $timeout(function() {
            if ($scope.interval <= $scope.people.length) {
              $scope.interval += 4
              $scope.tracker += 4
            } else {
              $scope.interval = 4
              $scope.tracker = 0
            }
            $scope.transition = false
          }, 500);

        }, 7000)
      })
  }])
})()
