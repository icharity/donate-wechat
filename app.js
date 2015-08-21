var express = require('express');
var wechat = require('wechat');
var config = {
  token: 'xuntaphodal',
  appid: 'appid',
  encodingAESKey: 'H8mMJW8Oz6SedEY3OiY0kQU8PTa1PDbKJN4hZEGEovR'
};

var app = exports.app = express();
app.use(express.query());
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
        title: '你来我家接我吧',
        description: '这是女神与高富帅之间的对话',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
      }
    ]);
  }
}));

app.listen(3080, function () {
    console.log("http server run on http://localhost:8899");
  });
