var Collection = require( 'std/Collection' );
var Search = require( 'models/search' );



module.exports = Collection.extend( {
    model: Search,

    url: 'https://api.themoviedb.org/3/search/multi'

} );
