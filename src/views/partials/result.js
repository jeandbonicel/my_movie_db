var View = require( 'std/View' );
var $ = require( 'jquery' );
var _ = require( 'lodash' );
var Template = require( 'templates/partials/result.html' );
var Backbone = require( 'backbone' );


module.exports = View.extend( {

	events: {
		"click .item a" : "onSelectItem"
	},

    template: function () {
        return _.template( Template({
        	query: this.options.query
        }) );
    },

    constructor: function () {

        View.prototype.constructor.apply( this, arguments );
    },

    initialize: function () {
        View.prototype.initialize.apply( this, arguments );

        this.image_path = "https://image.tmdb.org/t/p/w45_and_h45_bestv2";

        //clear the result during this initialize
        this.$el.find("#list").empty();

        this.buildResult(this.options.data)
    },

    buildResult: function(data) {
    	
    	var page = data.page;
    	var results = data.results
    	var list = this.$el.find("#list");
    	_.each(results, function(item) {
    		list.append(this.buildItem(item));
    		console.log(item)
    	}.bind(this))
    },

    buildItem: function(item) {

    	if(item.media_type === 'movie') {
    		var avatar = this.image_path + item.poster_path;
    		var title = item.title;
    		var media_type = 'Movie';
    	} 

    	else if(item.media_type === 'tv') {
    		var avatar = this.image_path + item.poster_path;
    		var title = item.name;
    		var media_type = 'TV Show';
    	}

    	else if(item.media_type === 'person') {
    		var avatar = this.image_path + item.profile_path;
    		var title = item.name;
    		var media_type = 'Person';
    	}

    	return html = '<li class="item">' +
    					'<a data-type="' + item.media_type + '" data-id="' + item.id + '" href="/'+ item.media_type + '?id=' + item.id + '">' +
    						'<img src="' + avatar + '"/>' +
    						'<span class="title">' + title +'</span>' +
    						'<span class="type '+item.media_type+'">' + media_type + '</span>' +
    					'</a>'
    				'</li>'; 
    },

    onSelectItem: function(e) {
    	console.log(e);
    	var element = $(e.currentTarget);
    	console.log(e.currentTarget);

    	if(element.data('type') === 'movie') {
    		this.trigger('movie', {
    			id: element.data('id')
    		})
    	}

    	else if(element.data('type') === 'person') {
    		this.trigger('person', {
    			id: element.data('id')
    		})
    	}

    	else if(element.data('type') === 'tv') {
			this.trigger('tvshow', {
    			id: element.data('id')
    		})
    	}
    }
} );
