var Model = require( 'std/Model' );

module.exports = Model.extend( {

    defaults: {
        api_key: 'd272326e467344029e68e3c4ff0b4059',
        language:'en-US',
        item_id: null
    },

    url: function() {

        var root = 'https://api.themoviedb.org/3/person/' + this.get('item_id');
        var queries = '?api_key=' + this.get('api_key') + '&language=' + this.get('language');
        var url = root + queries;

        return url;
    },

    getName: function () {
        return 'Person';
    }

} );