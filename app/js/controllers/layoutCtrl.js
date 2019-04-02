app.controller('layoutCtrl', ['$scope', function($scope) {
    $scope.templates =
        [{ name: 'layout_header.html', url: 'layout_header.html'},
            { name: 'layout_footer.html', url: 'layout_footer.html'}];
    $scope.template = $scope.templates[0];
}]);