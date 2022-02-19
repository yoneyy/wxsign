/*
 * @Author: Yoney Y (YuTianyuan)
 * @Date: 2022-02-19 18:52:12
 * @Last Modified by: YoneyY (YuTianyuan)
 * @Last Modified time: 2022-02-19 20:41:03
 */

import fs from 'fs';
import https from 'https';
import crypto from 'crypto';
import { strdm } from 'strdm';

export interface StateType {
  key: string;
  secret?: string;
  params?: ParamsType;
  agent?: {
    key: string | Buffer;
    cert: string | Buffer;
  }
}

export type ParamsType = Record<string, string | number | boolean | Record<string, unknown> | Array<unknown>>;


/** 兼容微信/企业微信支付参数加密使用 */
export class WxSign {

  state: StateType;

  /**
   * 兼容微信/企业微信支付参数加密使用
   * @param state
   */
  constructor(state: StateType) {
    if (state.params) throw new Error('`params` field must be passed in through the `setParams` function');
    this.state = state;
  }

  /**
   * generate only order
   * @param num
   * @returns
   */
  generateOrder(num: number): string {
    if (num < 6) throw new Error('The length of num cannot be less than 6');
    const d = new Date();
    const dl = [
      d.getFullYear(),
      d.getMonth() + 1,
      d.getDate(),
      d.getHours(),
      d.getMinutes(),
      d.getSeconds()
    ];
    const dt = dl.map(item => `${item}`?.[1] ? '0' + item : item).join('');
    const order = dt + strdm(num - dt.length, { strings: false });
    return order;
  }

  /**
   * generate sign
   * @param type
   * @returns
   */
  generateSign(type: 'workwx_sign' | 'sign' = 'workwx_sign'): string {
    const { params = {} } = this.state;
    const stringSignTemp = Reflect
      .ownKeys(params)
      .sort()
      .map((item) => (`${<string>item}=${params[<string>item]}`)).join('&');

    const result = crypto
      .createHash('md5')
      .update(
        type === 'sign'
          ? stringSignTemp
          + '&key='
          + this.state.key
          : stringSignTemp
          + '&secret='
          + this.state.secret,
        'utf8'
      )
      .digest('hex')
      .toUpperCase();

    return result;
  }

  /**
   * generate sign XML
   * @param field
   * @returns
   */
  generateSignXML(field: string): string {
    const { params = {} } = this.state;
    params[field] = this.generateSign('sign');
    const xmlStr = `<xml>${Reflect.ownKeys(params).map((item) => `<${<string>item}>${params[<string>item]}</${<string>item}>`).join('')}</xml>`;
    return xmlStr;
  }

  /**
   * generate agent
   * @returns
   */
  generateAgent(): https.Agent {
    if (!this.state.agent) throw new Error('Please pass in `agent` when instantiating')
    const { key, cert } = this.state.agent;

    return new https.Agent({
      key: fs.existsSync(key) ? fs.readFileSync(key) : key,
      cert: fs.existsSync(cert) ? fs.readFileSync(cert) : cert
    });
  }

  /**
   * setData
   * @param key
   * @param value
   * @returns
   */
  setData(key: string, value: ParamsType): WxSign {
    if (key == null) throw new Error('`key` param must be required');
    if (value == null) throw new Error('`value` param must be required');
    if (typeof key !== 'string') throw new Error('`key` param must be string type');
    if (!this.state.params) this.state.params = {};
    this.state.params[key] = value;
    return this;
  }

  /**
   * setParams
   * @param params
   * @returns
   */
  setParams(params: ParamsType = {}) {
    this.state.params = params;
    return this;
  }

}