var View = require( 'std/View' );
var $ = require( 'jquery' );

var Template = require( 'templates/partials/seeAll.html' );
var Search = require( 'Collections/Search' );

module.exports = View.extend( {

    template: function (data) {
        return _.template( Template({data}) );
    },

    constructor: function () {
        View.prototype.constructor.apply( this, arguments );
    },

    initialize: function (options) {
        View.prototype.initialize.apply( this, arguments );

        //init
        this.resultView = null;
        this.page = options.page || 1;
        this.totalPage = options.page || 1;
        this.query = options.query || '';
        this.previousVisibility = 'visible';
        this.nextVisibility = 'visible';
        this.image_path = "https://image.tmdb.org/t/p/w320";

        //create a collections of Search
        this.SearchCollection = new Search;
    
        //create Search Model, ready to be fetched
        this.SearchCollection.create();
        this.searchModel = this.SearchCollection.models[0];

        this.searchModel.fetch({
            data:{
                page: options.page,
                query: options.query
            }
        }).then(function(data){

            this.page = data.page;
            this.totalPage = data.total_pages;
            this.previousPage = this.page -1;
            this.nextPage = this.page + 1;

            if(this.page === 1) {
                this.previousVisibility = 'hidden';
            }

            if(this.page === this.totalPage) {
                this.nextVisibility = 'hidden';
            }

            this.render();

            var list = this.$el.find("#list-see-all ul");
            _.each(data.results, function(item) {
                list.append(this.buildItem(item));
                console.log(item)
            }.bind(this))

        }.bind(this)).catch(function(){
            console.log('result not found')
        })
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
                            '<div class="legend-card"><span class="title">' + title +'</span>' +
                            '<span class="type '+item.media_type+'">' + media_type + '</span></div>' +
                        '</a>'
                    '</li>'; 
    },

    render: function() {
        this.$el.html( this.template({
            previousPage: this.previousPage,
            nextPage: this.nextPage,
            previousVisibility: this.previousVisibility,
            nextVisibility: this.nextVisibility,
            query: this.options.query
        }) );
        return this;
    }
} );
