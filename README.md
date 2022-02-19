# WXSIGN

Generate wechat / wework pay signture

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
const { WxSign } = require('wsign');

const wxsign = new WxSign({
    key: 'ilq4i3rXe70rz3j4hrpjMKI3jqCDpr0q',
    agent: {
        key: fs.readFileSync('/srv/ssl/wxpay/apiclient_key.pem'),
        cert: fs.readFileSync('/srv/ssl/wxpay/apiclient_cert.pem'),
    }
});

const mchid = '1111111';
const nonce_str = strdm(32);
const partner_trade_no = wxsign.generateOrder(32);
const openid = 'ilq4i3rXe70rz3j4hrpjMKI3jqCDpr0q';

wxsign.setParams({
    amount: 100,                 // 付款金额 单位：分
    check_name: 'NO_CHECK',      // NO_CHECK 不校验真实姓名 FORCE_CHECK 强校验真实姓名
    desc: '活动奖金',             // 描述 / 付款备注
    mch_appid,                   // 商户 appID
    mchid,                       // 商户ID
    nonce_str,                   // 随机字符串
    openid,                      // openID
    partner_trade_no,            // 订单号
});

wxsign.setData('workwx_sign', wxsign.generateSign());
wxsign.setData('agentid', 3010046);
wxsign.setData('remark', 'RedBag');
wxsign.setData('wishing', 'RedBag');

wxsign
    .setParams({
        act_name: 'RedBag',         // 项目名称
        mch_billno,                 // 订单号
        mch_id,                     // 商户ID
        nonce_str,                  // 随机字符串
        re_openid,                  // open ID
        total_amount: 100,          // 红包金额 最大200RMB 如超出需填写 scene_id 字段指定使用场景
        wxappid,                    // 企业微信ID
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
import { WxSign } from 'wsign';

const wxsign = new WxSign({
    key: 'ilq4i3rXe70rz3j4hrpjMKI3jqCDpr0q',
    agent: {
        key: fs.readFileSync('/srv/ssl/wxpay/apiclient_key.pem'),
        cert: fs.readFileSync('/srv/ssl/wxpay/apiclient_cert.pem'),
    }
});

const mchid = '1111111';
const nonce_str = strdm(32);
const partner_trade_no = wxsign.generateOrder(32);
const openid = 'ilq4i3rXe70rz3j4hrpjMKI3jqCDpr0q';

wxpay.setParams({
    amount: 100,                 // 付款金额 单位：分
    check_name: 'NO_CHECK',      // NO_CHECK 不校验真实姓名 FORCE_CHECK 强校验真实姓名
    desc: '活动奖金',             // 描述 / 付款备注
    mch_appid,                   // 商户 appID
    mchid,                       // 商户ID
    nonce_str,                   // 随机字符串
    openid,                      // openID
    partner_trade_no,            // 订单号
});

wxsign.setData('workwx_sign', wxsign.generateSign());
wxsign.setData('agentid', 3010046);
wxsign.setData('remark', 'RedBag');
wxsign.setData('wishing', 'RedBag');

wxsign
    .setParams({
        act_name: 'RedBag',         // 项目名称
        mch_billno,                 // 订单号
        mch_id,                     // 商户ID
        nonce_str,                  // 随机字符串
        re_openid,                  // open ID
        total_amount: 100,          // 红包金额 最大200RMB 如超出需填写 scene_id 字段指定使用场景
        wxappid,                    // 企业微信ID
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

