
var Vue = require("component_modules/vue.js");
var service = require("main/service.js");
var datetime = require('components/filter/datetime.js');

module.exports = Vue.component("c-list", {
    template: __inline('list.html'),
    data : function(){
        return {
            'cates' : [],
            'articles' : []
        }
    },
    watch : {
        cate : function(){
            console.log("cate change",this.cate);
            var cates = this.cates;
            for (var i = 0; i < cates.length; i++) {
                cates[i]['active'] = this.cate == cates[i]['id'];
            };
            this.getArticleList(this.type,this.cate);
        },
        type: function(){
            console.log("type change ", this.type);
            this.getCateList(this.type,this.cate);
        },
        search: function(){
            console.log("search article by :" + this.search);
            this.searchArticles(this.search);
        }
    },
    filters : {
        datetime : datetime
    },
    methods: {
        /*获取分类列表*/
        getCateList : function(type,cate){
            var cateList = {
                'hot' : [{
                    'id' : 'now',
                    'name' : '当前热门'
                },
                {
                    'id' : 'weekly',
                    'name' : '七日热门'
                },
                {
                    'id' : 'mouthly',
                    'name' : '三十日热门'
                }],

                'notes' : [{
                    'id' : 'all',
                    'name' : '全部'
                },
                {
                    'id' : '13',
                    'name' : '市集'
                },
                {
                    'id' : '14',
                    'name' : '生活家'
                },
                {
                    'id' : '15',
                    'name' : '世间事'
                }]
            };

            var list  = cateList[type] || [];
            for (var i = 0; i < list.length; i++) {
                list[i]['active'] = list[i]['id'] == cate;
            };      
            this.cates = list;
        },

        /*获取某个分类下的文章列表*/
        getArticleList: function (type,cate) {
            var self = this;
            service.getArticleList(type,cate,function(articles){
                self.$data.articles = articles;
            })
        },

        /*搜索文章列表*/
        searchArticles: function(keyword){
            var self = this;
            service.searchArticles(keyword,function(articles){
                self.$data.articles = articles;
            })
        }
    }
});