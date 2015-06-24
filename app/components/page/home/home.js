var Vue = require('component_modules/vue.js');



module.exports = Vue.extend({
    inherit: true, //集成父元素所有属性
    template: __inline('home.html')
});