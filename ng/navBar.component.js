var app = angular.module('webHome');

var navController = function() {
  var vm = this;
};

app.component('navBar',{
  templateUrl : 'ng/navBar.component.html',
  controller : navController
})