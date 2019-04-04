/*
(function () {
    app.component('login',{
        bindings:{
            inputEmail: '<',
            inputPassword: '<',
            signIn: '&'
        },
        templateUrl: 'templates/login.html',
        controller: loginCtrl,
        controllerAs: '$ctrl',
    });

    function loginCtrl(authService){

        var ctrl = this;
        ctrl.userData = {};

        ctrl.signIn = function($scope) {
            var email = $scope.inputEmail;

            console.log(email);
        }
    }
})();*/
(function () {
    app.component('login', {
        controllerAs: 'vm',
        controller: function (authService) {

            var vm = this;
            vm.user = {};
            vm.isLogged = false;

            vm.signIn = function (user) {

                var userName = user.inputEmail;
                var password = user.inputPassword;

                authService.login(userName, password);

            }
        },
        templateUrl: 'templates/login.html'
    });
})();