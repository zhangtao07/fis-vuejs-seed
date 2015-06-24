//mock data
var articles = [{
    'wrap_img' : "/static/images/wrap_image_1.jpg",
    'avatar'   : '/static/images/avatar1.jpg',
    'author_id'  : '001',
    'article_id' : 'a10',
    'author'   : '小禾',
    'timestamp' : '1430035573188',
    'title'    : '遇见安然（十四）荷兰出差 白露（8）',
    'read'     : 334,
    'like'     : 34,
    'comment'  : 20
},{
    'wrap_img' : "/static/images/wrap_image_2.jpg",
    'avatar'   : '/static/images/avatar2.jpeg',
    'author_id'  : '002',
    'article_id' : 'a11',
    'author'   : 'caroline蕴',
    'timestamp' : '1435005573188',
    'title'    : '波兰独立之五：反俄的“普罗米修斯”计划',
    'read'     : 3314,
    'like'     : 324,
    'comment'  : 20
},{
    'wrap_img' : "/static/images/wrap_image_3.jpg",
    'avatar'   : '/static/images/avatar3.jpg',
    'author_id'  : '003',
    'article_id' : 'a13',
    'author'   : '小禾',
    'timestamp' : '1435035573188',
    'title'    : '遇见安然（十四）荷兰出差 白露（8）',
    'read'     : 334,
    'like'     : 34,
    'comment'  : 20
},{
    'avatar'   : '/static/images/avatar4.png',
    'author_id'  : '004',
    'article_id' : 'a14',
    'author'   : '洛洛莉ya',
    'timestamp' : '1435035573188',
    'title'    : '【租用时光】Graceland先森|教我如何提升鉴赏力',
    'read'     : 134,
    'like'     : 24,
    'comment'  : 2
},{
    'wrap_img' : "/static/images/wrap_image_4.jpg",
    'avatar'   : '/static/images/avatar5.jpg',
    'author_id'  : '005',
    'article_id' : 'a15',
    'author'   : '洛洛莉ya',
    'timestamp' : '1435025573188',
    'title'    : '我的寂寞芳邻（3）夜色中有多少不为人知的故事',
    'read'     : 134,
    'like'     : 24,
    'comment'  : 2
},{
    'wrap_img' : "/static/images/wrap_image_5.jpg",
    'avatar'   : '/static/images/avatar6.jpeg',
    'author_id'  : '006',
    'article_id' : 'a16',
    'author'   : '艾瑞克自留地 ',
    'timestamp' : '1435031573188',
    'title'    : '“职业刷客”自述套利全过程，无处不在，无根无解',
    'read'     : 34,
    'like'     : 124,
    'comment'  : 20
},{
    'avatar'   : '/static/images/avatar7.png',
    'author_id'  : '007',
    'article_id' : 'a17',
    'author'   : '洛洛莉ya',
    'timestamp' : '1435035573188',
    'title'    : '世界凭什么温柔待你？',
    'read'     : 40,
    'like'     : 24,
    'comment'  : 2
},{
    'avatar'   : '/static/images/avatar8.png',
    'author_id'  : '008',
    'article_id' : 'a18',
    'author'   : '霍真布鲁兹老爷 ',
    'timestamp' : '1435035573188',
    'title'    : '教练，我想打篮球-----我们都曾是三井寿',
    'read'     : 84,
    'like'     : 44,
    'comment'  : 9
},{
    'wrap_img' : "/static/images/wrap_image_6.jpg",
    'avatar'   : '/static/images/avatar9.png',
    'author_id'  : '009',
    'article_id' : 'a19',
    'author'   : '李陌359',
    'timestamp' : '1433035573188',
    'title'    : '不在场证明：真假女神（05）',
    'read'     : 134,
    'like'     : 24,
    'comment'  : 2
},{
    'wrap_img' : "/static/images/wrap_image_7.jpg",
    'avatar'   : '/static/images/avatar10.png',
    'author_id'  : '010',
    'article_id' : 'a20',
    'author'   : '微冷微冷 ',
    'timestamp' : '1435035573188',
    'title'    : '长大后我就成了你',
    'read'     : 2194,
    'like'     : 124,
    'comment'  : 5
}];

//just for mock
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

/**
 * get article list
 * @param  {[type]} cate [description]
 * @return {[type]}      [description]
 */
function getArticleList(type,cate,cb){
    //you should call ajax api to get data
    //$.ajax()
    
    //just for mock 
    articles = shuffleArray(articles);
    cb(shuffleArray(articles.slice(Math.round(Math.random()*5))));
       
}

/**
 * search articles by keyword
 * @param  {[type]}   keyword [description]
 * @param  {Function} cb      [description]
 * @return {[type]}           [description]
 */
function searchArticles(keyword,cb){

    //mock
    var _articles = [];
    for (var i = 0; i < articles.length; i++) {
        if(articles[i]['title'].indexOf(keyword) > -1){
            _articles.push(articles[i]);
        }
    };
    cb(_articles);
}

/**
 * get article detail by id
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
function getArticleDetail(id,cb){
    //mock
    var article = {};
    for (var i = 0; i < articles.length; i++) {
        if(articles[i]['article_id'] == id){
            article = articles[i];
            break;
        }
    };
    //markdown content
    article.content = '>引子 \n ## 标题1 \n ### 子标题1';
    cb(article);
}


module.exports = {
    getArticleList : getArticleList,
    searchArticles : searchArticles,
    getArticleDetail : getArticleDetail
}