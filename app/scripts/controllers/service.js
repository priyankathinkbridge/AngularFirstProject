var app=angular.module('newangularprojectApp')
app.factory('getuseridarray',function($http){
  
    return{
        async:function(){
            return  $http.get('https://hacker-news.firebaseio.com/v0/newstories.json').then(function(response){
                return response
            })
        }
    }
  })