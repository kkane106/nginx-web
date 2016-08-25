var app = angular.module('webHome');

var homeController = function() {
  var vm = this;

  vm.message = "hello world";
};

app.component('homeComponent',{
  templateUrl : 'ng/home.component.html',
  controller : homeController
})