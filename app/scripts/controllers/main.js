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
.controller('UserCtrl',function($http,$scope,$route, $routeParams){
  console.log("jhgjhghjghj");
  $scope.userdisplaydata=[];
  var param=$routeParams.by;
 // console.log(param);
 
 $http.get('https://hacker-news.firebaseio.com/v0/user/' +param +'.json').then(function(response){
  $scope.userdata=response.data;
  //console.log( $scope.userdata);
 // $scope.userdisplaydata.push($scope.userdata); 
})
  $scope.showmonth=function(timestamp){
    var date = new Date(timestamp * 1000);
    var dateObject = date.getFullYear() +'/'+ ('0' + (date.getMonth() + 1)).slice(-2) +'/'+ ('0' + date.getDate()).slice(-2);
    var datec = new Date();
   // var currnetmonth=datec.getMonth();
  //  var createdmonth=(date.getMonth() + 1);
   // var totalmonth=currnetmonth-createdmonth;
   // console.log(totalmonth);
   // console.log(currnetmonth);
   // console.log(createdmonth);
    return dateObject;
  }
})
.controller('ContactCtrl',function($scope,$http, $rootScope,userData){
  $scope.dataarray=[];
 $scope.limit=11;
 $scope.loadMore = function() {
  $scope.increamented = $scope.limit + 11;
  $scope.limit = $scope.increamented > $scope.datatodisplay.length ? $scope.datatodisplay.length : $scope.increamented;
}
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
      $scope.geturl=function(url){

      }
      $scope.clickCounter=function(){
        localStorage.clickcount = Number(localStorage.clickcount)+1;
        console.log( localStorage.clickcount);
      }
      $scope.displaydata=function(){
      //  console.log("kjhkjhjk");
        $http.get('https://hacker-news.firebaseio.com/v0/newstories.json').then(function(response){
                        $scope.temp=response.data;
                       // console.log($scope.temp);
                       $scope.nextdatafromid( $scope.temp);
                    })
                  
                 }
   $scope.time=function(s)
   {
    return new Date(s * 1e3).toISOString().slice(-13, -5);
   }
     $scope.nextdatafromid=function(item_id){
       // console.log(item_id);
        //$scope.newArr = {};
        //console.log(item_id.length);
       $scope.i=0;
        $scope.datatodisplay=[];
        for(  $scope.i=0;  $scope.i<=item_id.length;  $scope.i++){
          $http.get('https://hacker-news.firebaseio.com/v0/item/' + item_id[  $scope.i]+ '.json').then(function(response){
            $scope.mydata=response.data;
           // console.log($scope.mydata);
           //$scope.mydata1=response.data.by;
         //  $scope.dataarray.push( $scope.mydata1);
          
          $scope.datatodisplay.push($scope.mydata);
        })
       
        }   
     //  userData.userDataDisplay( $scope.dataarray);
        /*for(var x = 0; x < $scope.datatodisplay.length; x++){
          $scope.datatodisplay[x] = JSON.parse($scope.datatodisplay[x]);
        }*/
        // service to get data 
        //$scope.dssdf= userData.userDataDisplay( $scope.dataarray);
     //console.log( $scope.dssdf)  
       // console.log( $scope.dataarray)    
      //  console.log( $scope.datahta);
      }
    $scope.showpath=function(path)
    {
      window.open(path, '_blank');
    }
     //console.log(  $rootScope.usernameall);
      $scope.displayUser=function(username){
     
            $http.get('https://hacker-news.firebaseio.com/v0/user/' +username +'.json').then(function(response){
            $scope.userdata=response.data;
            console.log( $scope.userdata);
        })
      }
})
 
 