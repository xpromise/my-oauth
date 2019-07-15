const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static('./public'));

app.get('/oauth/redirect', async (req, res) => {
  console.log(req.query); // { code: 'c04b55137ad41b2077bd' }

  // 获取到了授权码 code
  // 接着去请求令牌 token
  const tokenResponse = await axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token`,
    data: {
      client_id: 'ba6e49e04ddda1b425ed',  // 固定不变
      client_secret: 'a00d71816a3fdb62af99de658fb9a893426bc95d', // 固定不变，只在服务器保存，安全性更高
      code: req.query.code, // 上一步返回的code
    },
    headers: {
      accept: 'application/json'
    }
  });

  const token = tokenResponse.data.access_token;
  console.log(token);

  // 根据token请求用户数据
  const { data } = await axios({
    method: 'get',
    url: 'https://api.github.com/user',
    headers: {
      accept: 'application/json',
      Authorization: `token ${token}`
    }
  });

  console.log(data);

  // 将得到的用户数据返回到页面上~
  res.redirect(`/?name=${data.login}&avatar_url=${data.avatar_url}`);

});

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
});