var View = require( 'std/View' );
var $ = require( 'jquery' );

var Template = require( 'templates/partials/person.html' );

module.exports = View.extend( {

    template: function (data) {
        return _.template( Template({data}) );
    },

    constructor: function () {
        View.prototype.constructor.apply( this, arguments );
    },

    initialize: function (options) {
        View.prototype.initialize.apply( this, arguments );
        this.render(options.data);
    },

    render: function(data) {
        this.$el.html( this.template(data) );
        return this;
    }
} );
