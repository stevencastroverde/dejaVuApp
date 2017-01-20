angular.module('app')
.component('newPost', {
  controller: function (databaseService) {
    const vm = this
    vm.createPost = function () {
      databaseService.createPost(vm.newPost)
        .then(() => databaseService.getAll())
          .then((response) => respone.data = vm.posts)

    }

  },
  templateUrl: "create/_newPost.html"

})
