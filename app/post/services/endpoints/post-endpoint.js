module.exports = [
    '$resource',
    '$rootScope',
    'Util',
function(
    $resource,
    $rootScope,
    Util
) {

    var PostEndpoint = $resource(Util.apiUrl('/posts/:id/:extra'), {
        id: '@id'
    }, {
        query: {
            method: 'GET',
            isArray: false,
            transformResponse: function(data /*, header*/) {
                return angular.fromJson(data);
            }
        },
        update: {
            method: 'PUT'
        },
        options: {
            method: 'OPTIONS'
        }
    });

    $rootScope.$on('event:authentication:logout:succeeded', function() {
        PostEndpoint.query();
    });

    return PostEndpoint;

}];
