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
    if (message.FromUserName === 'diaosi') {
        res.reply('hehe');
    } else if (message.FromUserName === 'text') {
        res.reply({
            content: 'text object',
            type: 'text'
        });
    } else if (message.FromUserName === 'hehe') {
        res.reply({
            type: "music",
            content: {
                title: "来段音乐吧",
                description: "一无所有",
                musicUrl: "http://mp3.com/xx.mp3",
                hqMusicUrl: "http://mp3.com/xx.mp3",
                thumbMediaId: "thisThumbMediaId"
            }
        });
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
