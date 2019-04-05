(function () {
    app.component('hospital',{
        templateUrl: 'templates/hospitais.html',
        controller: hospitalCtrl,
        controllerAs: '$ctrl',
    });

    function hospitalCtrl(hospitalService, mapService){

        var ctrl = this;

        ctrl.begin = 0;

        ctrl.hospitais = [];

        var infowindow = new google.maps.InfoWindow({
            content: `<h5>Hospital</h5>`
        });

        ctrl.atualizarLista = function(mais) {
            (mais)?ctrl.begin += 5:ctrl.begin -= 5;
        };

        ctrl.centralizaPonto = function(ponto){
            mapService.centraliza(ctrl.mapa,ponto);
        };

        ctrl.$onInit = function(){

            ctrl.mapa = mapService.criaMapa();

            mapService.redimensionaMapa(ctrl.mapa);

            mapService.carregaMarcadorUsuario(ctrl.mapa, infowindow);

            hospitalService.getAll().then(function (response) {
                ctrl.hospitais = response.features;
                posicoes = ctrl.hospitais.map(function (item) {
                    return {
                        lat: item.geometry.y,
                        lng: item.geometry.x
                    };
                });
                mapService.carregaMarcadores(posicoes, ctrl.mapa);
            });
        };
    }
})();