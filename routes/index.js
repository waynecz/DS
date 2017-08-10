const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  const title = "道生-首页";
  res.renderPage('index', {
    title
  });
});

router.get('/intro', function (req, res, next) {
  const title = "道生-公司介绍";
  res.renderPage('intro', {
    title
  });
});

router.get('/team', function (req, res, next) {
  const title = "道生-团队介绍";
  res.renderPage('team', {
    title
  });
});

router.get('/projects', function (req, res, next) {
  const title = "道生-项目介绍";
  res.renderPage('projects', {
    title
  });
});

router.get('/articles', function (req, res, next) {
  const title = "道生-文章分享";
  const articles = {
    p1: [
      {
        id: 1,
        title: '区域连小学堂1',
        date: '2017年3月4号',
        summary: '全球热门的区域连是啥玩意儿？真的可以改变社会？'
      },
      {
        id: 1,
        title: '区域连小学堂2',
        date: '2017年3月4号',
        summary: '全球热门的区域连是啥玩意儿？真的可以改变社会？'
      }
    ],
    p2: [
      {
        id: 1,
        title: '区域连小学堂3',
        date: '2017年3月4号',
        summary: '全球热门的区域连是啥玩意儿？真的可以改变社会？'
      }
    ]
  };

  res.renderPage('articles', {
    title,
    articles
  });
});

router.get('/article/:type/:id', function (req, res, next) {
  const title = "道生-文章";
  const article = {
    id: 1,
    title: '区域连小学堂',
    date: '2017年3月4号',
    summary: '全球热门的区域连是啥玩意儿？真的可以改变社会？',
    content: '<p>测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</p><p><img src="/imgs/banner.png"></p><p>测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容</p>'
  }


  res.renderPage('article', {
    title,
    article,
    type: req.params.type
  });
});

module.exports = router;
