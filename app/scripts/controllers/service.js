var app=angular.module('newangularprojectApp')
app.factory('getuseridarrayservice',function($http){
  
    return{
        getid:function(){
            return  $http.get('https://hacker-news.firebaseio.com/v0/newstories.json').then(function(response){
                return response
            })
        }
    }
  })
  app.factory('getuserdetailservice',function($http){
        return{
            getuserdatabyid:function(userid){
                var datatodisplay=[];
                var useridarray;
                for(  i=0; i<=11; i++){
                $http.get('https://hacker-news.firebaseio.com/v0/item/' + userid[i]+ '.json').then(function(response){
                useridarray=response.data;    
                datatodisplay.push(useridarray);
                })
                }  
                return datatodisplay;
            }
        }
  })