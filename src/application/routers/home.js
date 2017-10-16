var Router = require( 'application/routers/base/main' );
var HomeView = require( 'views/pages/Home' );

module.exports = Router.extend( {

    routes: _.extend( {}, Router.prototype.routes, {
        '': 'home',
        'movie(/:id)': 'home',
        'tv(/:id)': 'home',
        'person(/:id)': 'home',
        'see?page=:page&query=:query': 'see'
    } ),

    home: function (param, query) {
    	var data = {};
    	if(query) {
    		data['id'] = query.split('=')[1];
    		data['type'] = window.location.pathname.substring(1);
    	}

        this._createOrResetPage( HomeView, data );
    },

    see: function (page, query) {
    	data = {
    		see: true,
    		page: page || 1,
    		query: query || ''
    	}
        this._createOrResetPage( HomeView, data );
    }

} );
