

var Vue = require("component_modules/vue.js");

module.exports = Vue.component("c-footer", {
    className: 'footer',
    template: __inline('./footer.html'),
    ready: function(){
        var self = this;
    }
});