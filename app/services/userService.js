(function () {

    app.factory('userService',['$http', '$q', userService]);

    function  userService($http, $q) {

        // var srv = {};

        /*srv.getAll = getAll;
        srv.getById = getById;
        srv.getByUserName = getByUserName;
        srv.create = create;
        src.update = update;
        src.remove = remove;*/

        return{
            getAll: getAll,
        };

        function getAll() {
            return $http.get('data/userAccount.json')
                .then(sendResponseData)
                .catch(sendGetUserlError);
        }

        /*function getById(id) {
            return $http.get().then(handleSuccess, handleError('Erro ao obter por id!'));
        }

        function getByUserName(userName) {
            return $http.get('/api/users/' + userName).then(handleSuccess, handleError('Erro ao obter por nome de usuário!'));
        }*/

        /*function create(user) {
            return $http.post('/api/users/' + user).then(handleSuccess, handleError('Erro ao criar usuário!'));
        }

        function update(user) {
            return $http.put('/api/users' + user.id, user).then(handleSuccess, handleError('Erro ao atualizar usuário!'));
        }

        function remove(id) {
            return $http.delete('/api/users/' + id).then(handleSuccess, handleError('Erro ao obter por id!'));
        }*/

        /*function handleSuccess(response) {
            return response.data;
        }

        function handleError(error) {
            return function () {
                return {success: false, message: error};
            };
        }*/

        function sendResponseData(response) {

            return response.data;

        }

        function sendGetUserlError(response) {

            return $q.reject('Erro ao obter usuários(s). (HTTP status: ' + response.status + ')');
        }
    }
})();