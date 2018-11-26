angular.module('newangularprojectApp')
.controller('CommentCtrl',function($http,$scope,$route, $routeParams){
    var param=$routeParams.id;   
   $http.get(' https://hacker-news.firebaseio.com/v0/item/' +param +'.json').then(function(response){
    $scope.commentdata=response.data;
    console.log($scope.commentdata);
  })
  })
 