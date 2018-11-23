angular.module('newangularprojectApp')
.controller('AboutCtrl',function($scope,getuserdetailservice,getuseridarrayservice){
  var countid;
    $scope.getidarray=function(){
      getuseridarrayservice.getid().then(function(responce){
        $scope.userids=responce.data;
        var countidarray=[];
      for(countid=0;countid<11;countid++){
        countidarray.push( $scope.userids[countid]);
      }
      $scope.getuserfromid( countidarray);
      })
      
    }
    $scope.getuserfromid=function(userid){
        $scope.temp=getuserdetailservice.getuserdatabyid(userid);
    }
    $scope.loadmoredata=function(){
      var nextueridarray=[];
      var limit=countid;
      if(limit<=$scope.userids.length)
      {
        limit=limit+11;
      }
      else
      {
        $scope.getuserfromid( countidarray);
      }
      for(var anothercountid=countid;anothercountid<limit;anothercountid++){
        nextueridarray.push($scope.userids[anothercountid]);
      }
      $scope.getuserfromid(nextueridarray );
  }
    $scope.getidarray();
   
  })