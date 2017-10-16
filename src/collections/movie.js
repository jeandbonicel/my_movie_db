var Collection = require( 'std/Collection' );
var Movie = require( 'models/movie' );



module.exports = Collection.extend( {

  	url: function() {
    	return 'https://api.themoviedb.org/3/movie';
  	},

    model: Movie

} );
