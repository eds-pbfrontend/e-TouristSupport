(function () {
    app.component('hospital',{
            templateUrl: 'templates/hospitais.html',
            controller: hospitalCtrl,
            controllerAs: '$ctrl',
        });

        function hospitalCtrl(hospitalService){
            var ctrl = this;

            ctrl.begin = 0;

            ctrl.atualizarLista = function(mais) {
                (mais)?ctrl.begin += 5:ctrl.begin -= 5;
            };

            function carregaHospitais() {
                hospitalService.getAll().then(function (response) {
                    ctrl.hospitais = response;
                });
            }
            /*ctrl.$onInit = function(){
                hospitalService.getAll()
                    .then(function (hopitais) {
                        ctrl.hospitais = hopitais;
                    });
            };*/

            var ponto = {lat:-22.9076495, lng: -43.2559242 };
            var infowindow = new google.maps.InfoWindow({
                content: `<h5>Hospital</h5>`
            });
            var mapa = new google.maps.Map(
                document.getElementById('mapa'),
                {zoom: 12, center: ponto}
            );
            var marcador = new google.maps.Marker({position: ponto, map: mapa});

            marcador.addListener('click', function () {
                infowindow.open(mapa,marcador);
            });

           google.maps.event.addDomListener(window, 'resize', function () {
                var center = mapa.getCenter();
                google.maps.event.trigger(mapa,'resize');
                mapa.setCenter(center);
            });

            carregaHospitais();

        }
})();