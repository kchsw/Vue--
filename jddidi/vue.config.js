const bodyparser = require('body-parser')
const userpoor = require('./src/api/userpoor.js')
let Token

module.exports = {
  devServer: {
    before(app){
      
      app.use(bodyparser.urlencoded({extende:true}))
      app.use(bodyparser.json())
      
      //注册接口
      app.post('/api/regsiter', function(req, res){
        // let result = JSON.stringify(req.body)
        let result = req.body
        const { username, password } = result
        if(userpoor.some(v => v.username == username)){
          res.json({
            success: false,
            message: '用户名已存在'
          })
        }else{
          res.json({
            success: true,
            message: '注册成功'
          })
        }
      })  

        //登陆接口
        let tokenkey = 'kchsw'
        app.post('/api/login', function(req, res){
          let result = req.body
          const { username, password } = result
          // if(username == 'emili' && password == '123456' || username == 'chars' && password =='123456'){
          if(userpoor.some(v => v.username == username && v.password == password)){
            var sendDate = new Date().getTime()+60*60*1000
            Token = `${tokenkey}-${username}-${sendDate}`
            res.json({
              code: 0,
              message: '登陆成功',
              // token: `${tokenkey}-${username}-${sendDate}`
              token: Token
            })
          }else{
            res.json({
              code: 1,
              message: '账号或密码错误'
            })
          }
        })
        
        app.get('/api/test', (req, res) => {
          res.json({
            success: true,
            message: '收到测试'
          })
        })

        app.get('/api/banner', (req, res) => {
          res.json({
            items: [
              {
                url: '#',
                image: 'http://imgs.aixifan.com/block_1554354603635-xoMsEiv98t?imageView2/1/w/508/h/260/q/100'
              },
              {
                url: '#',
                image: 'http://imgs.aixifan.com/block_1554308783010-QA68i9Gm4y?imageView2/1/w/508/h/260/q/100'
              },
              {
                url: '#',
                image: 'http://imgs.aixifan.com/block_1554271486246-zZVrOSTjNL?imageView2/1/w/508/h/260/q/100'
              }
            ]
          })
        })
        app.get('/api/class', (req, res) => {
          res.json({
            lists: [
              [
                {
                  url: '#',
                  image: 'http://imgs.aixifan.com/cms/2018-08-16/1534387743663.jpg?imageView2/1/w/50/h/50',
                  label: '吐槽'
                },
                {
                  url: '#',
                  image: 'http://imgs.aixifan.com/cms/2018-11-07/1541563114114.png?imageView2/1/w/50/h/50',
                  label: '饮食'
                },
                {
                  url: '#',
                  image: 'http://imgs.aixifan.com/cms/2017-12-07/1512619959968.jpg?imageView2/1/w/50/h/50',
                  label: '手动'
                },
                {
                  url: '#',
                  image: 'http://imgs.aixifan.com/cms/2017-12-05/1512446821506.jpg?imageView2/1/w/50/h/50',
                  label: '悲伤'
                },
                {
                  url: '#',
                  image: 'http://imgs.aixifan.com/cms/2018-06-14/1528969318150.png?imageView2/1/w/50/h/50',
                  label: '安康'
                },
                
              ],
              [
                {
                  url: '#',
                  image: 'http://imgs.aixifan.com/cms/2018-06-14/1528969318150.png?imageView2/1/w/50/h/50',
                  label: '圆通'
                },
                {
                  url: '#',
                  image: 'http://imgs.aixifan.com/cms/2017-12-05/1512446747846.jpg?imageView2/1/w/50/h/50',
                  label: '水水'
                },
                {
                  url: '#',
                  image: 'http://imgs.aixifan.com/cms/2017-12-05/1512446747846.jpg?imageView2/1/w/50/h/50',
                  label: '传递'
                },
              ]
            ]
          })
        }) 

        app.get('/api/classify', (req, res) => {
          switch(req.query.type){
            case "0":
            res.json({
              data: [
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                  image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label:'雪梨手机'
                },
                {
                  image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label:'荣耀'
                },
                {
                  image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                  label:'华为'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
              ]
            })
            break
            case "1":
            res.json({
              data: [
                {
                  image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label:'雪梨手机'
                },
                {
                  image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label:'雪梨手机'
                },
                {
                  image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label:'雪梨手机'
                },
                {
                  image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label:'雪梨手机'
                },
                {
                  image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label:'雪梨手机'
                },
                {
                  image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label:'雪梨手机'
                },
                {
                  image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label:'雪梨手机'
                },
                {
                  image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label:'雪梨手机'
                },
                {
                  image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label:'雪梨手机'
                },
                {
                  image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label:'雪梨手机'
                },
                {
                  image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label:'雪梨手机'
                },
                {
                  image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label:'雪梨手机'
                },
                {
                  image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label:'雪梨手机'
                },
                {
                  image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label:'雪梨手机'
                },
              ]
            })
            break
            case "2":
            res.json({
              data: [
                {
                  image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label:'荣耀'
                },
                {
                  image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label:'荣耀'
                },
                {
                  image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label:'荣耀'
                },
                {
                  image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label:'荣耀'
                },
                {
                  image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label:'荣耀'
                },
                {
                  image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label:'荣耀'
                },
                {
                  image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label:'荣耀'
                },
                {
                  image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label:'荣耀'
                },
                {
                  image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label:'荣耀'
                },
                {
                  image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label:'荣耀'
                },
                {
                  image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label:'荣耀'
                },
                {
                  image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label:'荣耀'
                },
              ]
            })
            break
            case "3":
            res.json({
              data: [
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
                {
                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                    label:'小米'
                },
              ]
            })
            break
            case "4":
            res.json({
              data: [
                {
                  image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                  label:'华为'
                },
                {
                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label:'华为'
                },
                {
                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label:'华为'
                },
                {
                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label:'华为'
                },
                {
                  image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                  label:'华为'
                },
                {
                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label:'华为'
                },
                {
                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label:'华为'
                },
                {
                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label:'华为'
                },
                {
                  image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                  label:'华为'
                },
                {
                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label:'华为'
                },
                {
                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label:'华为'
                },
                {
                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                    label:'华为'
                },
              ]
            })
            break
          }
        })
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
