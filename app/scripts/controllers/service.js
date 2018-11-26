var app=angular.module('newangularprojectApp')
app.factory('getuseridarrayservice',function($http){
    return{
        getid:function(){
            return  $http.get('https://hacker-news.firebaseio.com/v0/newstories.json').then(function(response){
                return response;
            })
        }
    }
  })
  app.factory('getuserdetailservice',function($http){
        return{
            getuserdatabyid:function(userid,arr){
                // var datatodisplay=[];
                var useridarray;
                userid.forEach(element => {
                    $http.get('https://hacker-news.firebaseio.com/v0/item/' + element+ '.json').then(function(response){
                        useridarray=response.data;    
                        arr.push(useridarray);
                        })
                });
                // return datatodisplay;
            }
        }
  })