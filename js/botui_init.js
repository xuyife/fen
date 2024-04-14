function botui_init() {
  var botui = new BotUI("hello-akilar");
  botui.message.add({
    delay: 800,
    content: "Hi, 欢迎光临小飞博客2号站😊"
  }).then(function () {
    botui.message.add({
      delay: 1100,
      content: "我是站长Xuyifei😄"
    }).then(function () {
      botui.message.add({
        delay: 1100,
        content: "你也可以叫我Xyf😋"
      }).then(function () {
        botui.action.button({
          delay: 1600,
          action: [{
            text: "我想知道更多关于小飞博客的故事!😃",
            value: "sure"
          }, {
            text: "好的，就这样吧，拜拜！🙄",
            value: "skip"
          }]
        }).then(function (a) {
          "sure" == a.value && sure();
          "skip" == a.value && end()
        })
      })
    })
  });
  var sure = function () {
    botui.message.add({
      delay: 600,
      content: "🎉🎉🎉🎉🎉🎉"
    }).then(function () {
      secondpart()
    })
  },
    end = function () {
      botui.message.add({
        delay: 600,
        content: "w(ﾟДﾟ)w 不要走！再看看嘛！"
      })
    },
    secondpart = function () {
      botui.message.add({
        delay: 5000,
        content: "首先呢，很感谢您肯在这里驻足片刻❤️。小飞博客是一个个人性质的博客，我会在这里发表各种各样的内容。"
      }).then(function () {
        botui.message.add({
          delay: 5000,
          content: "小飞博客的名字就来源于我的名字"
        }).then(function () {
          botui.message.add({
            delay: 5000,
            content: "分类也有一点我的恶趣味在。👀"
          }).then(function () {
            botui.message.add({
              delay: 4000,
              content: "我个人最推荐的是太妃糖版块哦，这里可都是我引以为豪的作品呢💝！马卡龙酌情观看吧，长篇连载对我来说是个挑战，很可能断更。👻"
            }).then(function () {
              botui.action.button({
                delay: 1100,
                action: [{
                  text: "为什么叫小飞博客2号呢呢？🤔",
                  value: "why-mashiro"
                }]
              }).then(function (a) {
                thirdpart()
              })
            })
          })
        })
      })
    },
    thirdpart = function () {
      botui.message.add({
        delay: 1e3,
        content: "诶？小飞来源于我的名字😏"
      }).then(function () {
        botui.action.button({
          delay: 1500,
          action: [{
            text: "那么你的网名是什么",
            value: "why-cat"
          }]
        }).then(function (a) {
          fourthpart()
        })
      })
    },
    fourthpart = function () {
      botui.message.add({
        delay: 3000,
        content: "就是我的名字全拼啦😘——Xuyifei"
      }).then(function () {
        botui.action.button({
          delay: 1500,
          action: [{
            text: "方便透露一下真名吗？👀",
            value: "why-domain"
          }]
        }).then(function (a) {
          fifthpart()
        })
      })
    },
    fifthpart = function () {
      botui.message.add({
        delay: 5000,
        content: "emmmm,虽然飞得慢但也能飞起来🤨"
      }).then(function () {
        botui.message.add({
          delay: 3000,
          content: "只是一介无名小卒而已^_^"
        })
      })
    }
}