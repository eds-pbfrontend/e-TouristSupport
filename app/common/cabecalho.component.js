(function () {
   app.component('cabecalho', {
        controllerAs: 'vm',
        controller: function ($location, authService) {

            var vm = this;

            vm.isLogged = window.sessionStorage.getItem('ngStorage-isLogged');

            vm.redirectToLogin = function () {
                $location.path('/login');
            };

            vm.redirectToRegister = function () {
                $location.path('/register');
            };

            vm.logOut = function () {
                authService.logOut();
            }

        },
        templateUrl: 'templates/cabecalho.html'
    });
})();