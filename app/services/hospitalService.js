(function () {

    app.factory('hospitalService', function ($q, $http, constants){

        return{
            getAll: getAll,
        };

        function getAll() {

            return $http.get(constants.URI_API_BASE + '1%3D1&outFields=NOME,ENDERECO,BAIRRO,TELEFONE,EMAIL,HORARIO_SEMANA,HORARIO_SABADO,TIPO_UNIDADE&outSR=4326&f=json')
                .then(sendResponseData)
                .catch(sendGetHospitalError);
        }

        function sendResponseData(response) {

            return response.data;

        }

        function sendGetHospitalError(response) {

            return $q.reject('Erro ao obter hospital(s). (HTTP status: ' + response.status + ')');
        }
    });
})();