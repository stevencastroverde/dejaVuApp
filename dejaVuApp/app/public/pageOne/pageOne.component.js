
    angular.module('app')
      .component('pageOne', {
        controller: pageOneController,
        templateUrl: 'pageOne/pageOne.html'





    })


function pageOneController(apiService, $stateParams, $state) {
    const vm = this

    vm.$onInit = function() {
      apiService.searchDream($stateParams.term)
        .then((response) => {

          vm.dream = response.data
          console.log(vm.dream);
        })
    }







}
