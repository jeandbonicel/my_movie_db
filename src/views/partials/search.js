var View = require( 'std/View' );
var $ = require( 'jquery' );

var Template = require( 'templates/partials/search.html' );
var Search = require( 'Collections/Search' );


var Result = require( 'views/partials/result' );

module.exports = View.extend( {

    events: {
        'keyup #search-input': 'onKeyup'
    },

    template: function () {
        return _.template( Template() );
    },

    constructor: function () {

        View.prototype.constructor.apply( this, arguments );
    },

    initialize: function () {
        View.prototype.initialize.apply( this, arguments );

        this.resultView = null;
        //create a collections of Search
        this.SearchCollection = new Search;
    
        //create Search Model, ready to be fetched
        this.SearchCollection.create();
        this.searchModel = this.SearchCollection.models[0]



    },

    onKeyup: function ( e ) {
        var value = this.$( '#search-input').val();
        if(!value.length) {
            this.$('#result').empty()
        }
        //fetch the data
        this.searchModel.fetch({
            data:{
                query: value
            }
        }).then(function(data){

            //refresh result
      
            this.resultView = new Result( {
                el: this.$('#result'),
                data: data,
                query: value
            } );



            console.log(this.searchModel)
        }.bind(this)).catch(function(){
            console.log('result not found')
        })
    }


} );
