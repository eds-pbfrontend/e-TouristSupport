(function () {
    app.component('arena',{
        templateUrl: 'templates/arenas.html',
        controller: arenaCtrl,
        controllerAs: '$ctrl',
    });

    function arenaCtrl(arenaService){

        var ctrl = this;
        ctrl.arenas = [];

        ctrl.$onInit = function(){
            arenaService.getAll()
                .then(function (arenas) {
                    ctrl.arenas = arenas;
                });
        }
    }
})();