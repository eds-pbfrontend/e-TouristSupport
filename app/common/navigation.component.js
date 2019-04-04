(function () {
    'use strict';

    angular.module('myApp').component('navigation', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
        },
        templateUrl: 'templates/navigation.html'
    });
})();