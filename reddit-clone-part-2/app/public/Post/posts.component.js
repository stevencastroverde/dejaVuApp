(function () {
  angular.module('app')
.component('postList', {
  controller: postController,
templateUrl: "Post/_posts.html"
});


function postController (databaseService) {
  const vm = this;

  vm.$onInit = function () {
    databaseService.getAll()
      .then((response) =>  {
        vm.posts = response.data})
  }
  vm.addComment = function(p) {
    databaseService.createComment(p.id, p.newComment)
    .then(() => databaseService.getAll())
      .then((response) => vm.posts = response.data)
    }
  vm.addVote = function (postId) {
    databaseService.addVote(postId)
      .then(() => databaseService.getAll())
        .then((response) => vm.posts = response.data)
  }
  vm.deleteVote = function (postId) {
    databaseService.deleteVote(postId)
      .then(() => databaseService.getAll())
        .then((response) => vm.posts = response.data)
  }

};






}());