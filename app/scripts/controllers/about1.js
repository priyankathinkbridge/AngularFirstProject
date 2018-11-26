angular.module('newangularprojectApp')
.controller('AboutCtrl',function($scope,getuserdetailservice,getuseridarrayservice){
  var countid;
    var getidarray=function(){
      getuseridarrayservice.getid().then(function(responce){
        $scope.userids=responce.data;
        var countidarray=[];
      for(countid=0;countid<11;countid++){
        countidarray.push( $scope.userids[countid]);
      }
      $scope.getuserfromid( countidarray);
      })
      
    }
    $scope.temp=[]
    $scope.getuserfromid=function(userid){
        getuserdetailservice.getuserdatabyid(userid,$scope.temp);
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
        // $scope.getuserfromid( countidarray);
      }
      for(var anothercountid=countid;anothercountid<limit;anothercountid++){
        nextueridarray.push($scope.userids[anothercountid]);
        countid++;
      }
      $scope.getuserfromid(nextueridarray );
  }
    getidarray();
    $scope.timeshow=function(someDate)
    {
     var date = new Date(someDate* 1000);
     var dateObject=date.getDate()+1;
     var dateText = moment(dateObject).from(new Date());
     return dateText;
    }
   
  })