  (function() {
    'use strict';


  angular.module('app')
    .component('pageThree', {
        controller: pageThreeController,
        templateUrl: 'pageThree/pageThree.html'





    })


function pageThreeController(apiService, $stateParams, $state) {
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
