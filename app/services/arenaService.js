(function () {

    app.factory('arenaService', ['$q', '$http', 'constants', arenaService]);

    function arenaService($q, $http, constants) {

        return{
            getAll: getAll,
        };

        function getAll() {

            return $http.get(constants.URI_API_BASE + '...')
                .then(sendResponseData)
                .catch(sendGetArenaError)
        }

        function sendResponseData(response) {

            return response.data;

        }

        function sendGetArenaError(response) {

            return $q.reject('Erro ao obter arena(s). (HTTP status: ' + response.status + ')');
        }
    }
})();