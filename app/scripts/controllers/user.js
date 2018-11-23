angular.module('newangularprojectApp')
.controller('UserCtrl',function($http,$scope,$route, $routeParams){
    var param=$routeParams.by;   
   $http.get('https://hacker-news.firebaseio.com/v0/user/' +param +'.json').then(function(response){
    $scope.userdata=response.data;
  })
    $scope.showmonth=function(timestamp){
      var date = new Date(timestamp * 1000);
      var dateObject = date.getFullYear() +'/'+ ('0' + (date.getMonth() + 1)).slice(-2) +'/'+ ('0' + date.getDate()).slice(-2);
      var datec = new Date();
      return dateObject;
    }
  })