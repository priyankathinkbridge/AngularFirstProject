var app=angular.module('newangularprojectApp')
app.factory('userData',function(){
    var usernameall=[];
    return{
        userDataDisplay:function(username){
        
              usernameall.push(username);
              return usernameall;
        },
        getData:function()
        {
            return usernameall;
        }
    }
  })