var View = require( 'std/View' );
var $ = require( 'jquery' );

var Template = require( 'templates/partials/content.html' );

var Movie = require( 'collections/movie' );
var Person = require( 'collections/person' );
var Tvshow = require( 'collections/tvshow' );

var MovieView = require( 'views/partials/movie' );
var PersonView = require( 'views/partials/person' );
var TvshowView = require( 'views/partials/tvshow' );

module.exports = View.extend( {

    template: function () {
        return _.template( Template() );
    },

    constructor: function () {

        View.prototype.constructor.apply( this, arguments );
    },

    initialize: function (options) {
        View.prototype.initialize.apply( this, arguments );

        this.result = null;

        if(options.type === 'movie') {
       		this.collection = new Movie;
        } else if(options.type === 'tv') {
        	this.collection = new Tvshow;
        } else if(options.type === 'person') {
        	this.collection = new Person;
        }

        this.collection.add({
        	item_id: options.id
        },{
        	silent:true
        });

        this.collection.models[0].fetch().then(function(data){
        	if(options.type === 'movie') {
	       		this.view = new MovieView( {
                	el: this.$('#content-result'),
                	data: data
            	});
	        } else if(options.type === 'tv') {
	        	this.view = new TvshowView( {
                	el: this.$('#content-result'),
                	data: data
            	});
	        } else if(options.type === 'person') {
	        	this.view = new PersonView( {
                	el: this.$('#content-result'),
                	data: data
            	});
	        }
        }.bind(this))

    }
} );
