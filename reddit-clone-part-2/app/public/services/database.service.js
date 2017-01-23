(function () {

angular.module('app')
  .service('databaseService', function ($http){
    let apiUrl = '/api/posts';
     return {

       allPosts: [],

        getAll: function () {
            return $http.get(apiUrl)
        },
        getPostById: function (postId) {
         return  $http.get(`${apiUrl}/${postId}`)
        },
        patchPost: function (post) {
          return $http.patch(`${apiUrl}/${post.id}`, post)
        },
        createComment: function (postId, commentBody){
         return $http.post(`${apiUrl}/${postId}/comments`, commentBody )
        },
        createPost: function (post) {
         return $http.post(apiUrl, post)

        },
        addVote: function (postId) {
          return $http.post(`${apiUrl}/${postId}/votes`)
        },
        deleteVote: function (postId) {
          return $http.delete(`${apiUrl}/${postId}/votes`)
        }




    };



  })
})();
