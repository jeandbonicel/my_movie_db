var View = require( 'std/View' );
var Template = require( 'templates/layouts/page.html' );


var SearchView = require( 'views/partials/search' );
var ContentResultView = require( 'views/partials/content' );
SeeAllView = require( 'views/partials/seeAll' );

module.exports = View.extend( {

    template: function () {
        return _.template( Template( {
            title: 'My Movie DB'
        } ) );
    },

    constructor: function () {

        View.prototype.constructor.apply( this, arguments );
        
    },

    initialize: function (options) {

        View.prototype.initialize.apply( this, arguments );

        console.log(options)
        this.searchView = new SearchView({
            el: this.$( '#search' )
        });
        
        if(options.see) {
            this.contentView = new SeeAllView({
                el: this.$( '#content' ),
                page: options.page,
                query: options.query
            });
        } else {
            this.contentView = new ContentResultView({
                el: this.$( '#content' ),
                id: options.id,
                type: options.type
            });
        }

    }
} );
