(function() {
  'use strict';

angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']
  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

  $stateProvider
    .state({
      name: 'home',
      url: '/',
      component:'homeSearch',
    })
    .state ({
      name: 'pageOne',
      url:'youhaveneverseenthis/:term',
      component:'pageOne',

})
.state ({
  name: 'pageTwo',
  url:'pleaseDoNotLieYouHaveNeverSeenThis/:term',
  component:'pageTwo'
})
.state ({
  name: 'pageThree',
  url:'OkYouMighHAveSeenThis/:term',
  component:'pageThree'
})


   }

})();
