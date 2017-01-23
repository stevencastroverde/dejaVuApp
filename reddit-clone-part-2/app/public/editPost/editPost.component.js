angular.module('app')
    .component('editPost', {
        controller: editPostController,
        templateUrl: 'editPost/editPost.html'





    })


function editPostController(databaseService, $stateParams, $state) {
    const vm = this

    vm.$onInit = function() {
        const postId = $stateParams.id
        databaseService.getPostById(postId)
            .then((response) => {
                vm.editPost = response.data

            })
    }
    vm.changePost =  function () {
      databaseService.patchPost(vm.editPost)
        .then(() => $state.go('home'))

    }






}
