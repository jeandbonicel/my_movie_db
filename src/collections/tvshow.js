var Collection = require( 'std/Collection' );
var Tvshow = require( 'models/tvshow' );



module.exports = Collection.extend( {
  	
  	url: function() {
    	return 'https://api.themoviedb.org/3/tv/';
  	},

    model: Tvshow

} );
