(function () {

    app.service('mapService', function (){

        var mapService = this;

        mapService.criaMapa = criaMapa;

        mapService.redimensionaMapa = redimensionaMapa;

        mapService.carregaMarcadorUsuario = carregaMarcadorUsuario;

        mapService.carregaMarcadores = carregaMarcadores;

        mapService.centraliza = centraliza;

        function criaMapa() {
            return new google.maps.Map(
                document.getElementById('mapa'),
                {zoom: 17}
            );
        }

        function carregaMarcadorUsuario(map, infoWindow) {
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function (position) {
                    posicaoUsuario = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                   marcadorUsuario = new google.maps.Marker({position: posicaoUsuario, map: map});
                    map.setCenter(posicaoUsuario);
                   marcadorUsuario.addListener('click', function () {
                       infoWindow.open(map, marcadorUsuario);
                   });
                });
            }
        }

        function carregaMarcadores(posicoes, map){

            var marcadores = posicoes.map(function (localizacao) {
                return new google.maps.Marker({
                    position: localizacao,
                    label: 'h'
                });
            });
            var grupoMarcadores = new MarkerClusterer(map, marcadores,
                {imagePath: '/app/img/mapa'});
        }

        function redimensionaMapa(mapa){
            google.maps.event.addDomListener(window, 'resize', function () {
                var center = mapa.getCenter();
                google.maps.event.trigger(mapa,'resize');
                mapa.setCenter(center);
            });
        }

        function centraliza(map, ponto) {
            map.setCenter(ponto);
        }
    });
})();