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