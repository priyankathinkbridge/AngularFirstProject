angular.module('newangularprojectApp')
.controller('UserCtrl',function($http,$scope,$route, $routeParams){
    var param=$routeParams.by;   
   $http.get('https://hacker-news.firebaseio.com/v0/user/' +param +'.json').then(function(response){
    $scope.userdata=response.data;
  })
  })