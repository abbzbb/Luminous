/*******************************

脚本功能：指尖时光+解锁VIP
下载地址：https://is.gd/L1FnmW
软件版本：6.3.70
脚本作者：彭于晏💞
更新时间：2023-8-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************


[rewrite_local]

^http[s]?:\/\/(integral2|w|mix2|api)\.dasyibalang\.com\/v2\/User url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/dasyibalang.js

[mitm] 

hostname = integral2.dasyibalang.com,w.dasyibalang.com,mix2.dasyibalang.com,api.dasyibalang.com

*******************************/


var body = JSON.parse($response.body);

body.data.VIP = 1;

$done({ body: JSON.stringify(body) });











































































// Adding a dummy sgmodule commit(29)
// Adding a dummy plugin commit(27)
// Adding a dummy stoverride commit(24)
