<?php

class WxPayConfig
{
    const APPID = '';//微信小程序ID
    const MCHID = '';//微信小程序支付商户号
    const KEY = '';//微信小程序支付密码
    const APPSECRET = '';//微信小程序秘钥
    const NOTIFY_URL = 'https://www.xxx.com/index.php/Api/Wxpay/notify';
	const SSLCERT_PATH = '../cert/apiclient_cert.pem';
	const SSLKEY_PATH = '../cert/apiclient_key.pem';
	const CURL_PROXY_HOST = "0.0.0.0";
	const CURL_PROXY_PORT = 0;
	const REPORT_LEVENL = 1;
}
