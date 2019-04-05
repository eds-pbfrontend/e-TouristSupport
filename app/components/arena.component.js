(function () {
    app.component('arena',{
        templateUrl: 'templates/arenas.html',
        controller: arenaCtrl,
        controllerAs: '$ctrl',
    });

    function arenaCtrl(arenaService, mapService){

        var ctrl = this;

        ctrl.begin = 0;

        ctrl.arenas = [];

        var infowindow = new google.maps.InfoWindow({
            content: `<h5>Arenas Esportivas</h5>`
        });

        ctrl.atualizarLista = function(mais) {
            (mais)?ctrl.begin += 5:ctrl.begin -= 5;
        };

        ctrl.$onInit = function(){
            return arenaService.getAll().then(function (data) {
                return data;
            });
        };

        ctrl.arenas = ctrl.$onInit();

        var mapa = mapService.criaMapa();

        mapService.redimensionaMapa(mapa);

        mapService.carregaMarcadorUsuario(mapa, infowindow);

        /*{function carregaMarcadorUsuario() {
              if(navigator.geolocation){
                  navigator.geolocation.getCurrentPosition(function (position) {
                      posicaoUsuario = {
                          lat: position.coords.latitude,
                          lng: position.coords.longitude
                      };
                      ctrl.marcadorUsuario = new google.maps.Marker({position: posicaoUsuario, map: mapa});
                      mapa.setCenter(posicaoUsuario);
                      ctrl.marcadorUsuario.addListener('click', function () {
                          infowindow.open(mapa, ctrl.marcadorUsuario);
                      });
                  });
              }
          }

          /*google.maps.event.addDomListener(window, 'resize', function () {
              var center = mapa.getCenter();
              google.maps.event.trigger(mapa,'resize');
              mapa.setCenter(center);
          });}*/
    }
})();