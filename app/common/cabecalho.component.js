(function () {
   app.component('cabecalho', {
        controllerAs: 'vm',
        controller: function ($location) {

            var vm = this;

            vm.redirectToLogin = function () {
                $location.path('/login');
            };

            vm.redirectToRegister = function () {
                $location.path('/register');
            }

        },
        templateUrl: 'templates/cabecalho.html'
    });
})();