var Model = require( 'std/Model' );

module.exports = Model.extend( {

    defaults: {
        api_key: 'd272326e467344029e68e3c4ff0b4059',
        language:'en-US',
        query: null,
        page:1
    },

    url: function() {

        var root = 'https://api.themoviedb.org/3/search/multi';
        var queries = '?api_key=' + this.get('api_key') + '&language=' + this.get('language');
        var url = root + queries;

        return url;
    },


    validate: function(attributes){
        if (!attributes.query){
            return 'search need a query to run';
        }
    },

    getName: function () {
        return 'Search';
    }

} );