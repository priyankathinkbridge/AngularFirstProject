'use strict';

/**
 * @ngdoc function
 * @name newangularprojectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newangularprojectApp
 */
/*angular.module('newangularprojectApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });*/
angular.module('newangularprojectApp')
.controller('MainCtrl',function($scope, localStorageService){
  var storageType = localStorageService.getStorageType();
  console.log(storageType);
  if(localStorageService.isSupported) {
    //...
  }
})
.controller('AboutCtrl',function($scope,$http){
  /*$scope.displaydata=function(){
    console.log("kjhkjhjk");
    $http.get('http://api.jsonbin.io/b/5bd0494dadf9f5652a645c8d').then(function(response){
                    $scope.temp=response;
                    console.log($scope.temp);
                })
  }    */
})
.controller('ContactCtrl',function($scope,$http){
    /*$scope.addTOLocal=function(){
      var storageType = localStorageService.getStorageType();
      console.log(storageType);
      var first=localStorage.name='hghjghg';
      console.log(first);
      var second=localStorage.getItem(name);
      console.log(second);
    
    }*/
   
   /* $scope.addTOLocal = function() {

      // Check for LocalStorage support.
     if (localStorage) {
    
        // Add an event listener for form submissions
          // Save the name in localStorage.
          var tmp =localStorage.setItem('name', $scope.name);
          console.log(tmp);
      }
    }
    $scope.getFromLocal=function(){
      // Retrieve the users name.
      var name = localStorage.getItem('name');
     
      if (name != "undefined" || name != "null") {
        document.getElementById('welcomeMessage').innerHTML = "Hello " + name + "!";
      } else
        document.getElementById('welcomeMessage').innerHTML = "Hello!";     
    }*/
    $scope.data1=[];
     $scope.save = function() {
      localStorage.message = $scope.name;
      console.log("Save Successfully");
                }

     $scope.load = function() {
        $scope.data =localStorage.message;
       console.log("your Name"+"  "+$scope.data);
      }
      $scope.clickCounter=function(){
        localStorage.clickcount = Number(localStorage.clickcount)+1;
        console.log( localStorage.clickcount);
      }
      $scope.displaydata=function(){
        console.log("kjhkjhjk");
        $http.get('https://hacker-news.firebaseio.com/v0/newstories.json').then(function(response){
                        $scope.temp=response.data;
                       // console.log($scope.temp);
                       $scope.nextdatafromid(response.data);
                    })
                 }
      $scope.dataarray={};
     $scope.nextdatafromid=function(item_id){
       // console.log(item_id);
       //$scope.newArr = {};
        //console.log(item_id.length);
        //$scope.i=0;
        //$scope.datatodisplay=[];
        //for($scope.i;$scope.i<=10;$scope.i++){
          $http.get('https://hacker-news.firebaseio.com/v0/item/' + item_id+ '.json').then(function(response){
            $scope.mydata=response.data;
           console.log($scope.mydata);
           // $scope.dataarray= $scope.mydata;
        })
        //}   
      }
})
 
 