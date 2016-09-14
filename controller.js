var app = angular.module('app',[]);

app.controller('trainCtrl',function($scope,$http){
  
    var refresh = function() {
        $http.get('/abc').success(function(data) {
            $scope.trains = data;
        });
    };

    setInterval(function() {
        refresh();
        console.log('getting refreshed');
    }, 5000);
});