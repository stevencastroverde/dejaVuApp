(function() {
  'use strict';


  angular.module('app')
    .component('pageTwo', {
        controller: pageTwoController,
        templateUrl: 'pageTwo/pageTwo.html'





    })


function pageTwoController(apiService, $stateParams, $state) {
    const vm = this

    vm.$onInit = function() {
      apiService.searchDream($stateParams.term)
        .then((response) => {

          vm.dream = response.data
          console.log(vm.dream);
        })
    }







}
}());
