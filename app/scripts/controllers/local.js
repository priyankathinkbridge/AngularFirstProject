

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
    }
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
      }*/
      angular.module('newangularprojectApp')
      .controller('LoginCtrl',function($scope){
          $scope.
      })