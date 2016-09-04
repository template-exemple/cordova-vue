// Initialize vue

// style
require('./App.less');

window.Vue = require('vue');

var App = new Vue({
    el: 'app',
    template: require('./App.tpl'),
    data: {
        title: 'Cordova - Vue Template',
    },
    created: function () {
        document.title = this.title;
    },
    watch: {
        title: function () {
            // only used when the title changes after page load
            document.title = this.title;
        }
    },
});
