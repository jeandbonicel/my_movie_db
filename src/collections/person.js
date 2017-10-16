var Collection = require( 'std/Collection' );
var Person = require( 'models/person' );



module.exports = Collection.extend( {
  	
  	url: function() {
    	return 'https://api.themoviedb.org/3/person/';
  	},

    model: Person

} );
