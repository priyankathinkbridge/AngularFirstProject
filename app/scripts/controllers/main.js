'use strict';

/**
 * @ngdoc function
 * @name newangularprojectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newangularprojectApp
 */

angular.module('newangularprojectApp')
.controller('MainCtrl',function($scope, localStorageService){
  var storageType = localStorageService.getStorageType();
  console.log(storageType);
  if(localStorageService.isSupported) {
    //...
  }
})
.controller('AboutCtrl',function($scope,$http){
})

.controller('ContactCtrl',function($scope,$http, $rootScope,userData){
 $scope.limit=11;
 $scope.loadMore = function() {
var increamented = $scope.limit + 11;
  $scope.limit = increamented > $scope.datatodisplay.length ? $scope.datatodisplay.length : increamented;
}
    
      $scope.displaydata=function(){
        $http.get('https://hacker-news.firebaseio.com/v0/newstories.json').then(function(response){
                        $scope.userIdArray=response.data;
                       $scope.nextdatafromid( $scope.userIdArray);
                    })
                  
                 }
     $scope.nextdatafromid=function(item_id){;
       var i=0;
        $scope.datatodisplay=[];
        for(  i=0; i<=item_id.length; i++){
          $http.get('https://hacker-news.firebaseio.com/v0/item/' + item_id[i]+ '.json').then(function(response){
            var userdatafromid=response.data;    
          $scope.datatodisplay.push(userdatafromid);
        })
        }   
      }
    $scope.showpath=function(path)
    {
      window.open(path, '_blank');
    }
      $scope.displayUser=function(username){
     
            $http.get('https://hacker-news.firebaseio.com/v0/user/' +username +'.json').then(function(response){
            $scope.userdata=response.data;
            console.log( $scope.userdata);
        })
      }
})
 