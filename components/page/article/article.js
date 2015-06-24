var Vue = require('component_modules/vue.js');
var service = require("main/service.js");
var marked = require("component_modules/marked.js");

module.exports = Vue.extend({
    inherit: true, //集成父元素所有属性
    template: __inline('article.html'),
    data: function(){
        return {
            'article' : {
                'content' : ''
            }
        }
    },
    compiled : function(){
        this.getArticleDetail(this.article_id);
    },
    methods : {
        getArticleDetail : function(id){
            var self = this;
            var article = service.getArticleDetail(id,function(article){
                self.$data.article = article;
            })
        }
    },
    filters: {
        marked: marked
    }
});