(function() {
  'use strict';
angular.module('app')
    .component('homeSearch', {
        controller: homeController,
        templateUrl: 'home/home.html'





    })


function homeController(apiService, $stateParams, $state, $rootScope, $scope) {
    const vm = this
    vm.$onInit = function() {

    }

  vm.searchTheDamnThing = function () {
    console.log(vm.searchTerm);
    // $state.go('pageOne',{
    //   term : vm.searchTerm
    // })
  }





}
}());
