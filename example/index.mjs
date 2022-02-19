import fs from 'fs';
import strdm from 'strdm';
import { WxSign } from 'wsign';

const wxsign = new WxSign({
  key: 'ilq4i3rXe70rz3j4hrpjMKI3jqCDpr0q',
  agent: {
    key: fs.readFileSync('/srv/ssl/wxsign/apiclient_key.pem'),
    cert: fs.readFileSync('/srv/ssl/wxsign/apiclient_cert.pem'),
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

wxsign.setData('workwx_sign', wpay.generateSign());
wxsign.setData('agentid', 3010046);
wxsign.setData('remark', 'RedBag');
wxsign.setData('wishing', 'RedBag');

console.log(wxsign.generateSignXML('sign'))
