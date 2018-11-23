angular.module('newangularprojectApp')
.controller('AboutCtrl',function($scope,getuserdetailservice,getuseridarrayservice){
    console.log("jhgdshdshj");
    $scope.getidarray=function(){
      getuseridarrayservice.getid().then(function(responce){
        $scope.userids=responce.data;
      $scope.getuserfromid( $scope.userids);
      })
      
    }
    $scope.getuserfromid=function(userid){
        $scope.temp=getuserdetailservice.getuserdatabyid(userid);
        console.log($scope.temp);
    }
    $scope.getidarray();
  })