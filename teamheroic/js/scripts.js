(function() {
var countTest=0;
var app = angular.module('leaderboard', ['ngMaterial']);
  app.run(function($timeout){
    $timeout(function(){
      console.log("timeout is working");
    },3000)
  });
    app.controller('leaderboardController', ['$scope', '$http', '$interval', function($scope, $http, $interval){
      $http.get('https://apis.trainheroic.com/public/leaderboard/468425')
        .then(function(data){
          //console.log(data)
          $scope.people = []
          $scope.currentIndex = 0;
          var apiData = data.data.results

          for(var i = 0; i < apiData.length; i++){

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
          $scope.interval = 5
          $scope.tracker = 0
          $interval(function (){
            if( $scope.interval <= $scope.people.length){
              console.log($scope.showPeople);
              $scope.interval += 5
              $scope.tracker += 5
            } else {
              $scope.interval = 5
              $scope.tracker = 0
            }
          }, 3000)


          // $scope.b =[];
          // while($scope.people.length) {
          //     $scope.b.push( $scope.people.splice(0,5) );
          // }
          // console.log( $scope.b )
          // console.log( $scope.people )

        })


    }])
})()
