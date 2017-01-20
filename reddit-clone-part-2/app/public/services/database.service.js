(function () {

angular.module('app')
  .service('databaseService', function ($http){
    let apiUrl = '/api/posts';
     return {
        getAll: function () {
            return $http.get(apiUrl)
        },
        getPostById: function (postId) {
         return  $http.get(`${apiUrl}/${postId}`)
       },
       createComment: function (postId, commentBody){
         return $http.post(`${apiUrl}/${postId}/comments`, commentBody )
       },
       createPost: function (post) {
         return $http.post(apiUrl, post)

       }




    };



  })
})();
