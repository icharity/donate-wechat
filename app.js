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
                description: '朋友，还在为如何处理你满桌的旧书和满柜的旧衣服而烦恼吗？' +
                '那么，请交给我们吧！我们会给它们一个完美的归宿。',
                picurl: 'http://weixin.phodal.com/i_want_donate.jpeg',
                url: 'http://nx2.phodal.com/create'
            }])
    } else if (message.Content === '我需要') {
        res.reply([
            {
                title: '我需要',
                description: '朋友，还在为如何处理你满桌的旧书和满柜的旧衣服而烦恼吗？' +
                '那么，请交给我们吧！我们会给它们一个完美的归宿。',
                picurl: 'http://weixin.phodal.com/avatar.jpg',
                url: 'http://nx2.phodal.com/create'
            }])
    } else if (message.Content === '已捐赠') {
        res.reply([
            {
                title: '已捐赠',
                description: '朋友，让我们来看看身边的活雷锋吧！',
                picurl: 'http://weixin.phodal.com/already_donated.jpeg',
                url: 'http://nx2.phodal.com/view'
            }])
    } else if (message.Content === '已捐赠') {
        res.reply([
            {
                title: '谁需要',
                description: '朋友，还在为无处奉献爱心而烦恼吗？' +
                '那么，请交给我们吧！这里有真正需要帮助的人。',
                picurl: 'http://weixin.phodal.com/search_needs.jpeg',
                url: 'http://nx2.phodal.com/search-needs'
            }])
    } else {
        res.reply([
            {
                title: '我要捐',
                description: '朋友，还在为如何处理你满桌的旧书和满柜的旧衣服而烦恼吗？' +
                '那么，请交给我们吧！我们会给它们一个完美的归宿。',
                picurl: 'http://weixin.phodal.com/i_want_donate.jpeg',
                url: 'http://nx2.phodal.com/create'
            },
            {
                title: '我需要',
                description: '朋友，还在为发现需要捐赠的地区而无处寻求帮助而烦恼吗？' +
                '那么，请交给我们吧！我们会帮他们找到一大波热心人。',
                picurl: 'http://weixin.phodal.com/i_need_donation.jpeg',
                url: 'http://nx2.phodal.com/need'
            },
            {
                title: '已捐赠',
                description: '朋友，让我们来看看身边的活雷锋吧！',
                picurl: 'http://weixin.phodal.com/already_donated.jpeg',
                url: 'http://nx2.phodal.com/view'
            },
            {
                title: '谁需要',
                description: '朋友，还在为无处奉献爱心而烦恼吗？' +
                '那么，请交给我们吧！这里有真正需要帮助的人。',
                picurl: 'http://weixin.phodal.com/search_needs.jpeg',
                url: 'http://nx2.phodal.com/search-needs'
            }
        ]);
    }
}));

app.listen(3080, function () {
    console.log("http server run on http://localhost:3080");
});
