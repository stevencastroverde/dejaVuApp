(function () {

  angular.module('app')
    .service('apiService', function ($http){
    let apiUrl = '/api/dream';
     return {
       getAll: function () {
            return $http.get(apiUrl)
        },
        getDreamById: function (dreamId) {
         return  $http.get(`${apiUrl}/selected/${dreamId}`)
        },
        createDream: function (dream) {
         return $http.post(apiUrl, post)

        },
        searchDream: function(term) {
          return $http.get(`${apiUrl}/${term}` );

        }



    };



  })
})();
