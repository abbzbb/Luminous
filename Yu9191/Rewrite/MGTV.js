/* 
芒果TV 2024.7.16
脚本仅供学习和个人使用，不得用于商业目的或其他非法用途
可以直接使用Walala的净化广告以及包含会员数据的脚本
https://raw.githubusercontent.com/RuCu6/QuanX/main/Rewrites/Cube/cnftp.snippet
感谢@RuCu6
[rewrite_local]
^http[s]?:\/\/mobile\.api\.mgtv\.com\/v[0-9]\/(playlist|video\/album|video\/relative|video\/list).*$ url script-request-header https://raw.githubusercontent.com/axtyet/Luminous/main/Yu9191/Rewrite/mgtv1.js
https://mobile-stream.api.mgtv.com/v1/video/source? url script-request-header https://raw.githubusercontent.com/axtyet/Luminous/main/Yu9191/Rewrite/MGTV.js
https://nuc.api.mgtv.com/GetUserInfo url script-response-body https://raw.githubusercontent.com/axtyet/Luminous/main/Yu9191/Rewrite/mgtv.js
https://mobile-stream.api.mgtv.com/v1/video/source url script-response-body https://raw.githubusercontent.com/axtyet/Luminous/main/Yu9191/Rewrite/mgtv.js
#港区
^https://mobile.api.mgtv.com/v8/video/getSource url script-request-header https://raw.githubusercontent.com/axtyet/Luminous/main/Yu9191/Rewrite/MGTV.js
#播放页开通提示移除
http://vip.bz.mgtv.com/client/dynamic_entry url reject

[mitm] 
hostname = *.mgtv.com

*/











var _0xodu='jsjiami.com.v7';var _0x1333a6=_0x2ece;(function(_0xeb2467,_0x2037ba,_0x3bd634,_0x462eb5,_0x16d67a,_0x5e3cec,_0x4da739){return _0xeb2467=_0xeb2467>>0x1,_0x5e3cec='hs',_0x4da739='hs',function(_0x277545,_0x5f25bc,_0xd5fa8,_0x555ca4,_0x507214){var _0x57afe9=_0x2ece;_0x555ca4='tfi',_0x5e3cec=_0x555ca4+_0x5e3cec,_0x507214='up',_0x4da739+=_0x507214,_0x5e3cec=_0xd5fa8(_0x5e3cec),_0x4da739=_0xd5fa8(_0x4da739),_0xd5fa8=0x0;var _0x56acec=_0x277545();while(!![]&&--_0x462eb5+_0x5f25bc){try{_0x555ca4=-parseInt(_0x57afe9(0x1ce,'NV&4'))/0x1+-parseInt(_0x57afe9(0x131,'HJ4t'))/0x2*(parseInt(_0x57afe9(0x1c2,'^vJg'))/0x3)+parseInt(_0x57afe9(0x1d6,'im(8'))/0x4*(parseInt(_0x57afe9(0x1eb,'4!aC'))/0x5)+parseInt(_0x57afe9(0x16e,'e5wP'))/0x6*(parseInt(_0x57afe9(0x17b,'t6R9'))/0x7)+-parseInt(_0x57afe9(0x1a8,'HJ4t'))/0x8+-parseInt(_0x57afe9(0x1e2,'Ky2V'))/0x9*(parseInt(_0x57afe9(0x1e6,'k3*5'))/0xa)+parseInt(_0x57afe9(0x1e3,'HJ4t'))/0xb*(parseInt(_0x57afe9(0x135,'MaXr'))/0xc);}catch(_0x1af75e){_0x555ca4=_0xd5fa8;}finally{_0x507214=_0x56acec[_0x5e3cec]();if(_0xeb2467<=_0x462eb5)_0xd5fa8?_0x16d67a?_0x555ca4=_0x507214:_0x16d67a=_0x507214:_0xd5fa8=_0x507214;else{if(_0xd5fa8==_0x16d67a['replace'](/[rGTFqeHRuSQVtLdMJO=]/g,'')){if(_0x555ca4===_0x5f25bc){_0x56acec['un'+_0x5e3cec](_0x507214);break;}_0x56acec[_0x4da739](_0x507214);}}}}}(_0x3bd634,_0x2037ba,function(_0x35ea6f,_0x3fb54b,_0x191b91,_0x1d63a7,_0x405be9,_0x5d2658,_0x3dd107){return _0x3fb54b='\x73\x70\x6c\x69\x74',_0x35ea6f=arguments[0x0],_0x35ea6f=_0x35ea6f[_0x3fb54b](''),_0x191b91='\x72\x65\x76\x65\x72\x73\x65',_0x35ea6f=_0x35ea6f[_0x191b91]('\x76'),_0x1d63a7='\x6a\x6f\x69\x6e',(0x17915e,_0x35ea6f[_0x1d63a7](''));});}(0x178,0xcc3e7,_0x56d3,0xbe),_0x56d3)&&(_0xodu=_0x56d3);function _0x2ece(_0xabbcb1,_0x181fbe){var _0x14ee2c=_0x56d3();return _0x2ece=function(_0x4ba3a4,_0x4f6504){_0x4ba3a4=_0x4ba3a4-0x122;var _0x386cef=_0x14ee2c[_0x4ba3a4];if(_0x2ece['sOPezp']===undefined){var _0x33c0ed=function(_0x1c7310){var _0x56d3bd='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2ece1f='',_0x5672e6='',_0x26d0f8=_0x2ece1f+_0x33c0ed;for(var _0x5bcc92=0x0,_0xfb3d74,_0x1b6f62,_0x310600=0x0;_0x1b6f62=_0x1c7310['charAt'](_0x310600++);~_0x1b6f62&&(_0xfb3d74=_0x5bcc92%0x4?_0xfb3d74*0x40+_0x1b6f62:_0x1b6f62,_0x5bcc92++%0x4)?_0x2ece1f+=_0x26d0f8['charCodeAt'](_0x310600+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0xfb3d74>>(-0x2*_0x5bcc92&0x6)):_0x5bcc92:0x0){_0x1b6f62=_0x56d3bd['indexOf'](_0x1b6f62);}for(var _0x2b93da=0x0,_0x5e9108=_0x2ece1f['length'];_0x2b93da<_0x5e9108;_0x2b93da++){_0x5672e6+='%'+('00'+_0x2ece1f['charCodeAt'](_0x2b93da)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5672e6);};var _0x20aba5=function(_0x51e783,_0x429f8e){var _0x25d57d=[],_0x203c1f=0x0,_0x572994,_0x21538d='';_0x51e783=_0x33c0ed(_0x51e783);var _0x345a0e;for(_0x345a0e=0x0;_0x345a0e<0x100;_0x345a0e++){_0x25d57d[_0x345a0e]=_0x345a0e;}for(_0x345a0e=0x0;_0x345a0e<0x100;_0x345a0e++){_0x203c1f=(_0x203c1f+_0x25d57d[_0x345a0e]+_0x429f8e['charCodeAt'](_0x345a0e%_0x429f8e['length']))%0x100,_0x572994=_0x25d57d[_0x345a0e],_0x25d57d[_0x345a0e]=_0x25d57d[_0x203c1f],_0x25d57d[_0x203c1f]=_0x572994;}_0x345a0e=0x0,_0x203c1f=0x0;for(var _0x2f249b=0x0;_0x2f249b<_0x51e783['length'];_0x2f249b++){_0x345a0e=(_0x345a0e+0x1)%0x100,_0x203c1f=(_0x203c1f+_0x25d57d[_0x345a0e])%0x100,_0x572994=_0x25d57d[_0x345a0e],_0x25d57d[_0x345a0e]=_0x25d57d[_0x203c1f],_0x25d57d[_0x203c1f]=_0x572994,_0x21538d+=String['fromCharCode'](_0x51e783['charCodeAt'](_0x2f249b)^_0x25d57d[(_0x25d57d[_0x345a0e]+_0x25d57d[_0x203c1f])%0x100]);}return _0x21538d;};_0x2ece['OmjiPM']=_0x20aba5,_0xabbcb1=arguments,_0x2ece['sOPezp']=!![];}var _0x21077c=_0x14ee2c[0x0],_0x48a491=_0x4ba3a4+_0x21077c,_0x2ee1bd=_0xabbcb1[_0x48a491];if(!_0x2ee1bd){if(_0x2ece['tKoucC']===undefined){var _0x4e9952=function(_0x2757ff){this['DVYSrh']=_0x2757ff,this['cIRzWp']=[0x1,0x0,0x0],this['CuxBRl']=function(){return'newState';},this['oEEJnB']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['QoeFLY']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4e9952['prototype']['uEyfeZ']=function(){var _0x2c3e44=new RegExp(this['oEEJnB']+this['QoeFLY']),_0x65ee44=_0x2c3e44['test'](this['CuxBRl']['toString']())?--this['cIRzWp'][0x1]:--this['cIRzWp'][0x0];return this['ErdvUB'](_0x65ee44);},_0x4e9952['prototype']['ErdvUB']=function(_0x6455d0){if(!Boolean(~_0x6455d0))return _0x6455d0;return this['UJuOUd'](this['DVYSrh']);},_0x4e9952['prototype']['UJuOUd']=function(_0x18d03c){for(var _0x5aee44=0x0,_0x30e2d3=this['cIRzWp']['length'];_0x5aee44<_0x30e2d3;_0x5aee44++){this['cIRzWp']['push'](Math['round'](Math['random']())),_0x30e2d3=this['cIRzWp']['length'];}return _0x18d03c(this['cIRzWp'][0x0]);},new _0x4e9952(_0x2ece)['uEyfeZ'](),_0x2ece['tKoucC']=!![];}_0x386cef=_0x2ece['OmjiPM'](_0x386cef,_0x4f6504),_0xabbcb1[_0x48a491]=_0x386cef;}else _0x386cef=_0x2ee1bd;return _0x386cef;},_0x2ece(_0xabbcb1,_0x181fbe);}var _0x253f02=(function(){var _0x2c696f=_0x2ece,_0x3ea125={'rkpsR':function(_0x49d8b3){return _0x49d8b3();},'bwrZT':function(_0xa5806,_0x4f26a1){return _0xa5806!==_0x4f26a1;},'rJVjP':_0x2c696f(0x15c,')Ty9'),'wZHPR':_0x2c696f(0x16f,'ofAp')},_0x289c11=!![];return function(_0x214177,_0x4f0f5a){var _0x1ace5f=_0x2c696f,_0x1ff2ff={'RQQJv':function(_0x3165e1){var _0x12025e=_0x2ece;return _0x3ea125[_0x12025e(0x148,'j$lf')](_0x3165e1);}};if(_0x3ea125[_0x1ace5f(0x172,'nGba')](_0x3ea125[_0x1ace5f(0x19d,'OL9I')],_0x3ea125[_0x1ace5f(0x13c,'EBV8')])){var _0x1797cf=_0x289c11?function(){var _0x2822a7=_0x1ace5f;if(_0x4f0f5a){var _0x129233=_0x4f0f5a[_0x2822a7(0x1ac,'k3*5')](_0x214177,arguments);return _0x4f0f5a=null,_0x129233;}}:function(){};return _0x289c11=![],_0x1797cf;}else{var _0x325076=function(){while(!![]){}};return _0x1ff2ff[_0x1ace5f(0x190,'Nf81')](_0x325076);}};}()),_0x1501d6=_0x253f02(this,function(){var _0x3212da=_0x2ece,_0x27ab29={'jcaOQ':_0x3212da(0x145,'mGJI')};return _0x1501d6[_0x3212da(0x16d,'YqM^')]()[_0x3212da(0x1b9,'*g(W')](_0x27ab29[_0x3212da(0x181,'bz]L')])[_0x3212da(0x19c,'AbgY')]()[_0x3212da(0x151,'mGJI')](_0x1501d6)[_0x3212da(0x1ca,'k3*5')](_0x27ab29[_0x3212da(0x1ae,'t6R9')]);});_0x1501d6();var _0x5435c0=(function(){var _0x14d8c7=_0x2ece,_0x35b9d2={'JfiQB':function(_0x5271e1,_0x58bd31){return _0x5271e1!==_0x58bd31;},'DCjFK':_0x14d8c7(0x1cc,'NV&4'),'ArFUe':function(_0x1268b8,_0x5c661b){return _0x1268b8!==_0x5c661b;},'YgKLs':_0x14d8c7(0x1e9,'C9pV'),'xwgbK':_0x14d8c7(0x1b4,'HJ4t')},_0x430739=!![];return function(_0x12dacf,_0x322786){var _0x40610f=_0x14d8c7,_0x2a1f46={'hHAcO':function(_0x35b8be,_0x53dade){var _0x5e1e80=_0x2ece;return _0x35b9d2[_0x5e1e80(0x146,'C9pV')](_0x35b8be,_0x53dade);},'euWuI':_0x35b9d2[_0x40610f(0x138,'ouSJ')]};if(_0x35b9d2[_0x40610f(0x196,'[9%%')](_0x35b9d2[_0x40610f(0x126,'AT1[')],_0x35b9d2[_0x40610f(0x184,'QxR&')])){var _0x1af70f=_0x430739?function(){var _0xbab625=_0x40610f;if(_0x322786){if(_0x2a1f46[_0xbab625(0x14a,'ObbP')](_0x2a1f46[_0xbab625(0x1a3,'NHh4')],_0x2a1f46[_0xbab625(0x141,'ObbP')])){var _0x1b6812=_0x22de2c[_0xbab625(0x1a1,'[%s1')](_0xfe84a8,arguments);return _0x3088ec=null,_0x1b6812;}else{var _0x111fac=_0x322786[_0xbab625(0x1dd,'HJ4t')](_0x12dacf,arguments);return _0x322786=null,_0x111fac;}}}:function(){};return _0x430739=![],_0x1af70f;}else{if(_0x3f0016){var _0x46cca0=_0x9af1de[_0x40610f(0x123,'NrWz')](_0x16ee6f,arguments);return _0x57403b=null,_0x46cca0;}}};}());(function(){var _0x4b83fb=_0x2ece,_0x3eaa05={'RPBzW':_0x4b83fb(0x1b5,'EBDL'),'OfVWj':_0x4b83fb(0x155,'e5wP'),'LSVZt':function(_0xac7f08,_0x589dff){return _0xac7f08(_0x589dff);},'rAtMX':_0x4b83fb(0x17a,'t6R9'),'qMEtW':function(_0x24ed0a,_0x9f2676){return _0x24ed0a+_0x9f2676;},'MvCAM':_0x4b83fb(0x1b8,'j$lf'),'vGggf':_0x4b83fb(0x163,'[FIM'),'jMTjl':function(_0x1453be,_0x2b9103){return _0x1453be(_0x2b9103);},'Isehb':function(_0x2980df,_0x3913c1){return _0x2980df!==_0x3913c1;},'KMUPf':_0x4b83fb(0x1ab,'NrWz'),'ICEjx':function(_0x3d9028){return _0x3d9028();},'BVRea':function(_0x5dc798,_0x928291,_0x4c27dd){return _0x5dc798(_0x928291,_0x4c27dd);}};_0x3eaa05[_0x4b83fb(0x1d1,'a)0F')](_0x5435c0,this,function(){var _0x356c31=_0x4b83fb,_0x1b5333=new RegExp(_0x3eaa05[_0x356c31(0x1e8,'QxR&')]),_0x2ba355=new RegExp(_0x3eaa05[_0x356c31(0x1b3,')Ty9')],'i'),_0x4b3549=_0x3eaa05[_0x356c31(0x15a,'[9%%')](_0xaa9e2f,_0x3eaa05[_0x356c31(0x18d,'#ynM')]);if(!_0x1b5333[_0x356c31(0x1ba,'@kl7')](_0x3eaa05[_0x356c31(0x171,'YqM^')](_0x4b3549,_0x3eaa05[_0x356c31(0x124,'a)0F')]))||!_0x2ba355[_0x356c31(0x1d8,'NrWz')](_0x3eaa05[_0x356c31(0x1a4,'cu3y')](_0x4b3549,_0x3eaa05[_0x356c31(0x1a2,'K#uY')])))_0x3eaa05[_0x356c31(0x1b6,'jCf3')](_0x4b3549,'0');else{if(_0x3eaa05[_0x356c31(0x18f,'MaXr')](_0x3eaa05[_0x356c31(0x12d,'*g(W')],_0x3eaa05[_0x356c31(0x1c5,'EBV8')])){var _0x324fd6=_0x3f2d67?function(){var _0x533b81=_0x356c31;if(_0x62da66){var _0x5779e7=_0xfacfc4[_0x533b81(0x1bd,'nGba')](_0xc213ac,arguments);return _0x45f1c1=null,_0x5779e7;}}:function(){};return _0x1ef3e4=![],_0x324fd6;}else _0x3eaa05[_0x356c31(0x13a,'e5wP')](_0xaa9e2f);}})();}());var _0x51a6cd=(function(){var _0x31f777=_0x2ece,_0x4a5f31={'uyNEp':function(_0x140dff,_0x263f28){return _0x140dff!==_0x263f28;},'gymBd':_0x31f777(0x192,'QxR&')},_0xaed851=!![];return function(_0x156160,_0x325967){var _0x1510cb=_0x31f777;if(_0x4a5f31[_0x1510cb(0x179,'j$lf')](_0x4a5f31[_0x1510cb(0x199,'YqM^')],_0x4a5f31[_0x1510cb(0x176,'cu3y')]))debugger;else{var _0x11c8fc=_0xaed851?function(){var _0x31ec12=_0x1510cb;if(_0x325967){var _0x284ad9=_0x325967[_0x31ec12(0x1e5,'NV&4')](_0x156160,arguments);return _0x325967=null,_0x284ad9;}}:function(){};return _0xaed851=![],_0x11c8fc;}};}()),_0x205b9a=_0x51a6cd(this,function(){var _0x3462f9=_0x2ece,_0x4fe514={'QlwDl':function(_0x45948b,_0x272363){return _0x45948b(_0x272363);},'EhZde':function(_0x421bae,_0x3c9dad){return _0x421bae!==_0x3c9dad;},'XUxtu':_0x3462f9(0x16c,'(mV#'),'OvbUd':function(_0x4de3c4,_0x1de8e2){return _0x4de3c4===_0x1de8e2;},'mEPFI':_0x3462f9(0x167,'Izyj'),'RFYWA':function(_0x13c955,_0x578cff){return _0x13c955===_0x578cff;},'yPqrM':_0x3462f9(0x1d9,'k3*5'),'GCOqe':function(_0x248f1e,_0x545de0){return _0x248f1e===_0x545de0;},'kTGMB':_0x3462f9(0x193,'a)0F'),'VxYfY':_0x3462f9(0x1a6,'[%s1'),'ibwFc':_0x3462f9(0x134,'*g(W'),'cKkkN':_0x3462f9(0x1d5,'EBDL'),'lJnea':_0x3462f9(0x1be,'QxR&'),'kRHIN':_0x3462f9(0x14b,'j$lf'),'NCFxP':_0x3462f9(0x197,'I5zA'),'ObZIx':function(_0x32be5f,_0x16bb53){return _0x32be5f<_0x16bb53;},'jKJIA':function(_0x49f158,_0x20d79f){return _0x49f158===_0x20d79f;},'zpOFD':_0x3462f9(0x152,'[%s1'),'RJJSz':_0x3462f9(0x1d7,'FK@Z')},_0x2cea10=_0x4fe514[_0x3462f9(0x17c,'^vJg')](typeof window,_0x4fe514[_0x3462f9(0x14f,'NHh4')])?window:_0x4fe514[_0x3462f9(0x177,'EBDL')](typeof process,_0x4fe514[_0x3462f9(0x166,'mGJI')])&&_0x4fe514[_0x3462f9(0x12b,'jCf3')](typeof require,_0x4fe514[_0x3462f9(0x1a0,'$i47')])&&_0x4fe514[_0x3462f9(0x1d4,'@kl7')](typeof global,_0x4fe514[_0x3462f9(0x128,'AbgY')])?global:this,_0x4d3c8b=_0x2cea10[_0x3462f9(0x1bb,'NrWz')]=_0x2cea10[_0x3462f9(0x149,'NV&4')]||{},_0x3ff455=[_0x4fe514[_0x3462f9(0x13f,'MaXr')],_0x4fe514[_0x3462f9(0x18a,'j$lf')],_0x4fe514[_0x3462f9(0x1c7,'4!aC')],_0x4fe514[_0x3462f9(0x18c,'j$lf')],_0x4fe514[_0x3462f9(0x15f,'K#uY')],_0x4fe514[_0x3462f9(0x18e,'*g(W')],_0x4fe514[_0x3462f9(0x15d,'jCf3')]];for(var _0x5405e8=0x0;_0x4fe514[_0x3462f9(0x187,'QxR&')](_0x5405e8,_0x3ff455[_0x3462f9(0x162,'jCf3')]);_0x5405e8++){if(_0x4fe514[_0x3462f9(0x189,'MaXr')](_0x4fe514[_0x3462f9(0x19b,'cu3y')],_0x4fe514[_0x3462f9(0x194,'AbgY')])){var _0x46f2de=_0x4fe514[_0x3462f9(0x156,'Ie6&')][_0x3462f9(0x140,'im(8')]('|'),_0x490bee=0x0;while(!![]){switch(_0x46f2de[_0x490bee++]){case'0':_0x4d3c8b[_0x2a3e9d]=_0x117061;continue;case'1':_0x117061[_0x3462f9(0x159,'QxR&')]=_0x20e33f[_0x3462f9(0x1a9,'OL9I')][_0x3462f9(0x1e0,'MaXr')](_0x20e33f);continue;case'2':var _0x2a3e9d=_0x3ff455[_0x5405e8];continue;case'3':var _0x20e33f=_0x4d3c8b[_0x2a3e9d]||_0x117061;continue;case'4':_0x117061[_0x3462f9(0x129,'jCf3')]=_0x51a6cd[_0x3462f9(0x160,'jCf3')](_0x51a6cd);continue;case'5':var _0x117061=_0x51a6cd[_0x3462f9(0x142,'[9JK')][_0x3462f9(0x137,'QxR&')][_0x3462f9(0x182,'Nf81')](_0x51a6cd);continue;}break;}}else{if(_0x4351f8)return _0x73bcf4;else _0x4fe514[_0x3462f9(0x139,'$i47')](_0x31e1e5,0x0);}}});_0x205b9a();var _0x1bacc3=$request[_0x1333a6(0x169,'cu3y')][_0x1333a6(0x19f,'Ky2V')](/^(https:\/\/mobile.*\.api\.mgtv\.com\/v\d\/video\/.+ource.+)(&ticket=\w{32})(.*)/,_0x1333a6(0x188,'Izyj'))[_0x1333a6(0x157,'ofAp')](/^(https:\/\/mobile\.api\.mgtv\.com\/v8\/video\/getSource.+)(&ticket=\w{32})(.*)/,_0x1333a6(0x1a5,'jCf3'));function _0x56d3(){var _0x22733a=(function(){return[_0xodu,'etLjrSsRGVjFiOamqLiTH.rcOouMmVQ.Oqvd7RHJ==','WRFcPSkRWRBdQG','ds1RWQqbj0hcPW','W7maw8kfWOW','igGmuCoP','W43dM8kNASox','WO/dNCoFW797','WPFdMCoAW6X+','WRqmnSkpWQe','WQpdT8o3W6m','W5BdGCkBuSoc','WQ3dU8o3W6bFna','WPBcQmoWWP1q','lHBdMZVcJW','iCoKWO1bnq','hLmQAs4','W4GPyY1Rnq','s8k5WQpdMqFcLeu','W4BcUSkD','gmohWOXBea','W5/dMhbzFa','qmo5WOFcJ8ohWRCGbmki','CSoxymoJW5ldJ8oAW5q','lGddOa/cRCopzq','pdC3lSku','W4BcUCkqWRz6','D8o1DSoJW7C','thxcOSkwpq','nNemsSoD','W4pdQSk2W5ZcGa','W4tcSu9XCG','W5tcSCkCWOze','gM8pDSox','x8ooWRRcQmok','WP/cN8oOWPOb','ttNcSeS','hgxdRq5jW4OZW6jcptizW4O','pgZcOt4B','W6ddLSkbEmoHW6tdNSo1','dv7cIdmO','k051xb8','gGhdIGxcHq','W78VW5yKWQe','WOpcImkgWRK','WOddQJSNmSkIl3/dQ8ouW7xcR8kR','atvFWRi4','zSkPWO4OW5y','e27dQW1jW4S2W5bmcbCpW40','nIbIWPKl','WOn6lZXHiJmPW4KsahhcGmkRrmonWO88o8kxid3cQ8o5WQNcImo3W7/cNSoFhCkApqRcUSkom8odW7ldTXSWlSkl','WOhcK27dQ8kC','WRZcNSo/WRKO','gMfbtba','WONcRConWRq/','drhdUZdcVa','EmkIW5ffW4O','WQlcQ0hdISk/','WRpcSmk5WPFdIq','dSkyWPBdKWpcSM0Rv8oiW4q','oY56WPO2','fqpdQW','iqmFW4tdQG','WOBcGmopWQOP','W74Hs8kkWP0','W7hdGujBta','kSoaW41aW70zcmkM','yCobxSovW4q','CSoDqmoJ'].concat((function(){return['W4NcUmk+WOjK','lXWdW7BdNgVdK2G','z8k6WOalW58','FIj7aNu','W7P7hh7cNCoTW4y','bmkTWPpdQca','W6ddI8k3vti','WQ4bp8knWQy','W5ldMx8tWOW','W4lcHCk0WRb3','W6xcR8k/W7ncp8kpWRhdR8kDWOnwiCkYFafPf8obmmkOk8oEWP7dVqCNWRVcQ2lcUSoes8o3W4xcHfjMW6xcLbhcOCoYW44','W7BdMSk1vW','gNGtwW','s2bCeHtcIaD2WRVdVxvTWPC','yCkFWOuvW73dRSotW5K','W6JdMSklW67cJq','arddHMvj','WRxdUSkmmG8','sCkCW5PkW6K','tJtcUhaR','WPZcICotWQPU','WRxcI8knWOZdNG','dIhdJJFcIq','W4KfwCkAWOa','W4NdHCk5tmo/','hXuCzwm','m2WdqmohW5PfvGFdNeDrASoMWPVcRG','WQVdK8onW61h','kSkiWONdKaO','WONcJSohWRyF','ymkvW7H+W6CF','qSoUW5WS','jaFdU1X3uae','WRNdKmoiW6vs','t3lcOmkGea','hdPBWRudoKBcR0y','ntBdQrXG','D8k3WRqmW7K','pmkWW6/dRSoY','sZxdIM1gCXldKKmpWOODWQa','q8kBW4KCvg13rtddN8kes1u','WRJcKSkUWO3dSW','W6bizCkdBa','WQD9WOzCW4JcKSkgpmk6WQpcTCoXta','bSkjWOukW5K','b8koWRBdRWu','W4JdVsfuW4S','WQFdR8kDlbuU','W4ldOxjrxq','WQpcJ8o2xGq','W6O3EhRcMa','W7/dHmkYhvWnWRi6W6L1W6Om','W7X7h2y','eX8Cvv4','oZRdNI5t','W7tdKSkcxJ4','gsxdOr7cKc7dN8oTW7VcIColW5FdJSoKuCks','CCoiW6aPWP0','mgSFtmob','WPn2oGJdQmoGxCoFWO3cGcK','WPRdLhrcWPRdTfruWRihqW','mW3dPLS','WRldV8kspqiVCSkG','C8onW44IWRC','aXqBW5xdHG','WPiKFw7cR8oYAW','gciztf0','zSojW6CzWPS','WOhcV8osWPq4'].concat((function(){return['WONcSuRdHG','EJ4Eo0/dN8k7oHXpWOS','WRKSxspdICk8WPvSeqNcR8oKW4u','sgmDuMddQN1F','buaUAH8','WQZcH8o0rbC','W63cUSkOeG8OxmkP','W6tcVCkAWO5h','kXj6WQOK','WQxcPSk/FXO','ymoJW6WZWOW','v8oAW4CKW5erWQeVW5y','psLPWPqs','jHJdPunH','nbRdJWP/','q8oFq8ouW7C','WOddQ23cT8o7','CYnuh2qg','nJyaW4tdPW','WP7dGCoPW7vekmklWOVdHa','rbLTkNy','WPpdMmoaW5bQ','bmohWPHlaJyTEIW','wmk9W4XCW6i','WPVcHmoGEYO','nmkiWOBdVWq','W7BdH1frr8o1','sZuCDLFdV0O','omo/WQ5naa','p01Uttu','ESkEW79J','W5ZdOrBcKmoUWRpcQSodW6xdOvdcVmkr','W5RcImkZmmk1WQFcMCkKsmoLW6RdVSo5WPhcOY4RWOmmzSoBcCoEW5OqWRldPSomWQ9cW6tcP3ZcHa','ctbxWQqCoLBcSe0','oWP1W6JcRa','lmkrWPxdNGe','uqFdPcBcVW','W6H0xCkGsa','W5XFEmkdwa','nLqps8oh','sf3dUdL2ecpcSa','WOdcJgpdR8kF','W5mZzfhcQa','fmoCWQTBlq','W5lcT2rLC8oIBeNdUCoCW4a','W6pcHCkaWQTX','tCkZWP8xW4S','wZ5sauX3WPDBvsJcGSkS','WPFcPmk+yZa','W6/dVLznuW','WPJcJCowWQWJ','WQ7cMmoQwWfvWRG','gCoHWR1nkW','WP7cH8oeWRmu','W4FdT8k1WObpW6ulBtG','jCk0WRFdTrS','cmkmWOpdQdC','W6/dUvasWRa','WRJdR8ksoqiU','ehKuxbmSW4KrcM7dMW','W6xdJCk3FIy','WOpcPCo/WPKi','W7pdOMjnEa','rg/dVwFdP8k3amkLsx9JW5ZdSxG7yqpdRCkcW4DJW4VdKYxdTmocWPCNW7vVWPD9W4xcKa','g8ktW6ddMSo9','bHWGg8kWv8kq'];}()));}()));}());_0x56d3=function(){return _0x22733a;};return _0x56d3();};(function(){var _0x2889d3=_0x1333a6,_0x52c38c={'gUgjb':function(_0x1a3410,_0x399dcf){return _0x1a3410!==_0x399dcf;},'PbtIW':_0x2889d3(0x12c,'ObbP'),'bcExr':function(_0x4f68c7,_0x401ddd){return _0x4f68c7===_0x401ddd;},'VGCkU':_0x2889d3(0x127,'dhtJ'),'LZeWR':function(_0x38cb76,_0x3eccdd){return _0x38cb76===_0x3eccdd;},'bGbmv':_0x2889d3(0x17d,')Ty9'),'TjeQa':function(_0x436cb4,_0x244ae3){return _0x436cb4===_0x244ae3;}},_0x29c733=_0x52c38c[_0x2889d3(0x1c9,'FK@Z')](typeof window,_0x52c38c[_0x2889d3(0x161,')Ty9')])?window:_0x52c38c[_0x2889d3(0x19e,'dhtJ')](typeof process,_0x52c38c[_0x2889d3(0x158,'Nf81')])&&_0x52c38c[_0x2889d3(0x1bf,'a)0F')](typeof require,_0x52c38c[_0x2889d3(0x1c0,'OL9I')])&&_0x52c38c[_0x2889d3(0x1b0,'Nf81')](typeof global,_0x52c38c[_0x2889d3(0x15e,'jCf3')])?global:this;_0x29c733[_0x2889d3(0x191,'$i47')](_0xaa9e2f,0x7d0);}()),$done({'url':_0x1bacc3});function _0xaa9e2f(_0x27cdde){var _0x5215e6=_0x1333a6,_0x16d8b1={'JtpBD':_0x5215e6(0x1d3,'#ynM'),'qqAJm':_0x5215e6(0x136,')Ty9'),'uiEgu':function(_0x1409ef,_0x14af1b){return _0x1409ef(_0x14af1b);},'VsdSD':_0x5215e6(0x1a7,'mGJI'),'vVTEx':function(_0x11186c,_0x28c7bb){return _0x11186c+_0x28c7bb;},'iCYFy':_0x5215e6(0x173,'EBDL'),'VhCkt':function(_0x4be64b,_0x332058){return _0x4be64b+_0x332058;},'xNQby':_0x5215e6(0x16a,'ObbP'),'PMqoQ':function(_0x4f710c){return _0x4f710c();},'CqmsB':function(_0x2364b6,_0x31c578,_0xea551e){return _0x2364b6(_0x31c578,_0xea551e);},'uqarZ':function(_0x314b62,_0x2bd6b0){return _0x314b62!==_0x2bd6b0;},'bEYWd':_0x5215e6(0x132,'ObbP'),'WukJg':function(_0x3b84a9,_0x26c61a){return _0x3b84a9===_0x26c61a;},'XIUov':_0x5215e6(0x130,'I5zA'),'tZsiV':function(_0x96e6b8,_0x1efe1b){return _0x96e6b8/_0x1efe1b;},'Iudei':_0x5215e6(0x150,'k3*5'),'sYXIY':function(_0x1545e9,_0x77e65f){return _0x1545e9%_0x77e65f;},'jMuuz':_0x5215e6(0x1da,'@kl7'),'XgKWh':function(_0x12770a,_0x6c2ea2){return _0x12770a!==_0x6c2ea2;},'DkQDa':function(_0x27e61d,_0x2f37dc){return _0x27e61d+_0x2f37dc;},'zsTuh':function(_0x5777be,_0x230d98){return _0x5777be/_0x230d98;},'eQExa':function(_0x1bea7c,_0x57579b){return _0x1bea7c===_0x57579b;},'EgpCW':function(_0x53d1fd,_0x19dbb2){return _0x53d1fd%_0x19dbb2;},'cOSBJ':function(_0x1f9e21,_0x5541c5){return _0x1f9e21===_0x5541c5;},'ZlCFm':_0x5215e6(0x195,'j$lf'),'XCIvD':_0x5215e6(0x1df,'j$lf'),'cMbht':function(_0x5de7a9,_0x48a3b7){return _0x5de7a9(_0x48a3b7);}};function _0xe98cb9(_0x5d5f66){var _0xdb8c5e=_0x5215e6;if(_0x16d8b1[_0xdb8c5e(0x14e,'$i47')](_0x16d8b1[_0xdb8c5e(0x17f,']qEM')],_0x16d8b1[_0xdb8c5e(0x174,']hPx')]))while(!![]){}else{if(_0x16d8b1[_0xdb8c5e(0x1e7,'cu3y')](typeof _0x5d5f66,_0x16d8b1[_0xdb8c5e(0x14d,'$i47')])){var _0x24874e=function(){while(!![]){}};return _0x16d8b1[_0xdb8c5e(0x165,'ObbP')](_0x24874e);}else{if(_0x16d8b1[_0xdb8c5e(0x170,'cu3y')](_0x16d8b1[_0xdb8c5e(0x1e4,'mGJI')]('',_0x16d8b1[_0xdb8c5e(0x17e,'^vJg')](_0x5d5f66,_0x5d5f66))[_0x16d8b1[_0xdb8c5e(0x12f,'$i47')]],0x1)||_0x16d8b1[_0xdb8c5e(0x1b7,'$i47')](_0x16d8b1[_0xdb8c5e(0x185,'OL9I')](_0x5d5f66,0x14),0x0)){if(_0x16d8b1[_0xdb8c5e(0x15b,'EBDL')](_0x16d8b1[_0xdb8c5e(0x1d0,'HJ4t')],_0x16d8b1[_0xdb8c5e(0x147,'I5zA')])){var _0x13123c={'vQAuQ':_0x16d8b1[_0xdb8c5e(0x1cd,'im(8')],'jYYBk':_0x16d8b1[_0xdb8c5e(0x1b1,'#ynM')],'ZkSaU':function(_0x5c9b8d,_0x2680b3){var _0x48a167=_0xdb8c5e;return _0x16d8b1[_0x48a167(0x1c1,'Ie6&')](_0x5c9b8d,_0x2680b3);},'YsFPL':_0x16d8b1[_0xdb8c5e(0x12e,'NV&4')],'GRQit':function(_0x132713,_0x2a2db6){var _0x58b2a0=_0xdb8c5e;return _0x16d8b1[_0x58b2a0(0x1b2,'[9%%')](_0x132713,_0x2a2db6);},'vFBFN':_0x16d8b1[_0xdb8c5e(0x153,'j$lf')],'QFTFk':function(_0xdbc584,_0x15216b){var _0x5978e5=_0xdb8c5e;return _0x16d8b1[_0x5978e5(0x1ea,'@kl7')](_0xdbc584,_0x15216b);},'SjmGk':_0x16d8b1[_0xdb8c5e(0x1bc,'jCf3')],'XXSPq':function(_0x3292bb,_0x4ff744){var _0x45a3b3=_0xdb8c5e;return _0x16d8b1[_0x45a3b3(0x175,'[9JK')](_0x3292bb,_0x4ff744);},'PBHAc':function(_0x3998a2){var _0x59e93b=_0xdb8c5e;return _0x16d8b1[_0x59e93b(0x143,'cu3y')](_0x3998a2);}};_0x16d8b1[_0xdb8c5e(0x13b,'EBV8')](_0x2390da,this,function(){var _0x18f66c=_0xdb8c5e,_0x5f2363=new _0x546dce(_0x13123c[_0x18f66c(0x154,'I5zA')]),_0x3de536=new _0x3bc935(_0x13123c[_0x18f66c(0x178,'(mV#')],'i'),_0xb24457=_0x13123c[_0x18f66c(0x16b,'I5zA')](_0x4d5250,_0x13123c[_0x18f66c(0x1c4,'Nf81')]);!_0x5f2363[_0x18f66c(0x19a,'YqM^')](_0x13123c[_0x18f66c(0x1cb,'I5zA')](_0xb24457,_0x13123c[_0x18f66c(0x133,']qEM')]))||!_0x3de536[_0x18f66c(0x1cf,'Ky2V')](_0x13123c[_0x18f66c(0x164,'#ynM')](_0xb24457,_0x13123c[_0x18f66c(0x18b,']qEM')]))?_0x13123c[_0x18f66c(0x12a,'dhtJ')](_0xb24457,'0'):_0x13123c[_0x18f66c(0x1de,'@kl7')](_0x475ac6);})();}else debugger;}else debugger;}_0x16d8b1[_0xdb8c5e(0x1d2,'[%s1')](_0xe98cb9,++_0x5d5f66);}}try{if(_0x27cdde)return _0xe98cb9;else{if(_0x16d8b1[_0x5215e6(0x1af,'[FIM')](_0x16d8b1[_0x5215e6(0x1ad,'*g(W')],_0x16d8b1[_0x5215e6(0x144,'OL9I')])){if(_0x16d8b1[_0x5215e6(0x1db,'AbgY')](_0x16d8b1[_0x5215e6(0x122,'QxR&')]('',_0x16d8b1[_0x5215e6(0x1c8,'$i47')](_0x6f5107,_0x5834cd))[_0x16d8b1[_0x5215e6(0x1aa,']hPx')]],0x1)||_0x16d8b1[_0x5215e6(0x180,'#ynM')](_0x16d8b1[_0x5215e6(0x125,'YqM^')](_0x1cfd2c,0x14),0x0))debugger;else debugger;}else _0x16d8b1[_0x5215e6(0x13d,'EBDL')](_0xe98cb9,0x0);}}catch(_0x34a7c0){}}var version_ = 'jsjiami.com.v7';