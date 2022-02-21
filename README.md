# WXSIGN

Generate wechat / wework pay signture

- The library uses [strdm🔍](https://www.npmjs.com/package/strdm) to generate random strings of a specified length

## How to installtion?

```sh
  # yarn
  yarn add wsign -S --registry=https://registry.npmjs.org/

  # npm
  npm i wsign -S --registry=https://registry.npmjs.org/
```

## How to use?

### CommonJS

```javascript
const WxSign = require('wsign');

const wxsign = new WxSign({
  key: 'ilq4i3rXe70rz3j4hrpjMKI3jqCDpr0q',
  agent: {
    key: '/srv/ssl/wxsign/apiclient_key.pem', // or Enter the contents of the apiclient_key.pem file
    cert: '/srv/ssl/wxsign/apiclient_cert.pem', // or Enter the contents of the apiclient_cert.pem file
  }
});

const mchid = '1111111';
const nonce_str = WxSign.generateString(32);
const partner_trade_no = wxsign.generateOrder(32);
const openid = 'ilq4i3rXe70rz3j4hrpjMKI3jqCDpr0q';

// 根据微信/企业微信支付文档填写参数
// Fill in the parameters according to the WeChat / WeWork payment document
wxsign.setParams({
  amount: 100,
  check_name: 'NO_CHECK',
  desc: '活动奖金',
  mch_appid,
  mchid,
  nonce_str,
  openid,
  partner_trade_no,
});

wxsign.setData('workwx_sign', wpay.generateSign());
wxsign.setData('agentid', 3010046);
wxsign.setData('remark', 'RedBag');
wxsign.setData('wishing', 'RedBag');

console.log(wxsign.generateSignXML('sign'))

// 也可以这样写
// can also be used like this
wxsign
  .setParams({
    act_name: 'RedBag',
    mch_billno,
    mch_id,
    nonce_str,
    re_openid,
    total_amount: 100,
    wxappid,
  })
  .setData('workwx_sign', wxsign.generateSign())
  .setData('agentid', 3010046)
  .setData('remark', 'RedBag')
  .setData('wishing', 'RedBag');

wxsign
  .setData('workwx_sign', wxsign.generateSign())
  .setData('agentid', 3010046)
  .setData('remark', 'RedBag')
  .setData('wishing', 'RedBag');
```

### ESM

```javascript
import WxSign from 'wsign';

const wxsign = new WxSign({
  key: 'ilq4i3rXe70rz3j4hrpjMKI3jqCDpr0q',
  agent: {
    key: '/srv/ssl/wxsign/apiclient_key.pem', // or Enter the contents of the apiclient_key.pem file
    cert: '/srv/ssl/wxsign/apiclient_cert.pem', // or Enter the contents of the apiclient_cert.pem file
  }
});

const mchid = '1111111';
const nonce_str = WxSign.generateString(32);
const partner_trade_no = wxsign.generateOrder(32);
const openid = 'ilq4i3rXe70rz3j4hrpjMKI3jqCDpr0q';

// 根据微信/企业微信支付文档填写参数
// Fill in the parameters according to the WeChat / WeWork payment document
wxsign.setParams({
  amount: 100,
  check_name: 'NO_CHECK',
  desc: '活动奖金',
  mch_appid,
  mchid,
  nonce_str,
  openid,
  partner_trade_no,
});

wxsign.setData('workwx_sign', wpay.generateSign());
wxsign.setData('agentid', 3010046);
wxsign.setData('remark', 'RedBag');
wxsign.setData('wishing', 'RedBag');

console.log(wxsign.generateSignXML('sign'));

// 也可以这样写
// can also be used like this
wxsign
  .setParams({
    act_name: 'RedBag',
    mch_billno,
    mch_id,
    nonce_str,
    re_openid,
    total_amount: 100,
    wxappid,
  })
  .setData('workwx_sign', wxsign.generateSign())
  .setData('agentid', 3010046)
  .setData('remark', 'RedBag')
  .setData('wishing', 'RedBag');

wxsign
  .setData('workwx_sign', wxsign.generateSign())
  .setData('agentid', 3010046)
  .setData('remark', 'RedBag')
  .setData('wishing', 'RedBag');
```

