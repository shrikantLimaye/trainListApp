var app = angular.module('app',[]);

//creating a controller to connect to the HTML page.
app.controller('trainCtrl',function($scope,$http){

  // Refresh function to refresh the window
    var refresh = function() {
      //$http method to get the data from the database to populate it on the browser
        $http.get('/abc').success(function(data) {
            $scope.trains = data;
        });
    };

    setInterval(function() { //setting an interval to refresh the browser to watch the update directly made in mongodb database.
        refresh();
        console.log('getting refreshed');
    }, 5000);
});
