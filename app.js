var express = require('express');
var path = require('path');
var wechat = require('wechat');
var config = {
    token: 'xuntaphodal',
    appid: 'appid',
    encodingAESKey: 'H8mMJW8Oz6SedEY3OiY0kQU8PTa1PDbKJN4hZEGEovR'
};

var app = exports.app = express();
app.use(express.query());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/weixin', wechat(config, function (req, res, next) {
    var message = req.weixin;
    console.log(message);
    if (message.Content === '我要捐') {
res.reply([
            {
                title: '我要捐',
                description: '我要捐',
                picurl: 'http://weixin.phodal.com/avatar.jpg',
                url: 'http://nx2.phodal.com/create'
            }])
    } else {
        res.reply([
            {
                title: '我要捐',
                description: '我要捐',
                picurl: 'http://weixin.phodal.com/avatar.jpg',
                url: 'http://nx2.phodal.com/create'
            },
            {
                title: '我需要',
                description: '我需要',
                picurl: 'http://weixin.phodal.com/avatar.jpg',
                url: 'http://nx2.phodal.com/need'
            },
            {
                title: '已捐赠',
                description: '已捐赠',
                picurl: 'http://weixin.phodal.com/avatar.jpg',
                url: 'http://nx2.phodal.com/search-needs'
            },
            {
                title: '搜索',
                description: '搜索',
                picurl: 'http://weixin.phodal.com/avatar.jpg',
                url: 'http://nx2.phodal.com/search-needs'
            }
        ]);
    }
}));

app.listen(3080, function () {
    console.log("http server run on http://localhost:3080");
});
