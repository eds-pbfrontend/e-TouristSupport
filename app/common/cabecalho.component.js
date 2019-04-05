(function () {
   app.component('cabecalho', {
        controllerAs: 'vm',
        controller: function ($location, $sessionStorage, authService) {

            var vm = this;
            vm.isLogged = $sessionStorage.isLogged;
            console.log(vm.isLogged);

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