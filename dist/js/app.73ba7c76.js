(function(e){function t(t){for(var a,r,o=t[0],l=t[1],i=t[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},c=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var d=l;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"11b4":function(e,t,s){"use strict";var a=s("b49b"),n=s.n(a);n.a},"56d7":function(e,t,s){"use strict";s.r(t);s("0616"),s("31d1"),s("38a6"),s("5da6");var a=s("0261"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},c=[],r=(s("5c0b"),s("5511")),o={},l=Object(r["a"])(o,n,c,!1,null,null,null),i=l.exports,d=s("c478"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"box-card"},[s("el-row",{staticClass:"card-body",attrs:{gutter:60}},[s("el-col",{staticClass:"card-operate",attrs:{span:12}},[s("div",[s("div",{staticClass:"func-title"},[e._v(" 服务器配置 状态: "+e._s(e._f("rStatus")(e.instance.readyState))+" ")]),s("el-input",{attrs:{clearable:"",placeholder:"wss://echo.websocket.org?a=b"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey?e.autoWsConnect(t):null}},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}},[s("template",{slot:"prepend"},[e._v("服务地址")]),s("el-button",{style:{color:e.connected?"#f56c6c":"#67c23a"},attrs:{slot:"append"},on:{click:e.autoWsConnect},slot:"append"},[e._v(e._s(e.connected?"关闭连接":"开启连接")+" ")])],2)],1),s("div",{staticClass:"divider divider-dashed"}),s("div",{staticClass:"pts"},[s("div",{staticClass:"func-title"},[e._v(" 发包设置 "),s("el-popover",{attrs:{placement:"bottom-start",width:"400",trigger:"hover"}},[s("div",[s("span",{staticClass:"prl"},[e._v("发送历史")]),e.msgHistory.length?s("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(t){e.msgHistory=[]}}},[e._v("清空历史 ")]):e._e()],1),s("ul",e._l(e.msgHistory,(function(t){return s("li",{key:t,staticClass:"history-msg",attrs:{title:t},on:{click:function(s){e.content=t}}},[e._v(e._s(t))])})),0),s("i",{staticClass:"el-icon-time history-trigger",attrs:{slot:"reference",title:"发送历史"},slot:"reference"})])],1),s("el-input",{attrs:{placeholder:"请输入内容",type:"textarea",clearable:"",rows:10},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey?e.sendData(t):null}},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),s("el-checkbox",{staticClass:"mtm",attrs:{disabled:!e.connected},model:{value:e.sendClean,callback:function(t){e.sendClean=t},expression:"sendClean"}},[e._v("发包清空输入 ")])],1),s("div",[s("el-button",{staticClass:"mtl",staticStyle:{width:"100%"},attrs:{disabled:!e.connected,type:"primary"},on:{click:e.sendData}},[e._v("发送(ctrl+enter) ")])],1),s("div",{staticClass:"card-text mtl"},[s("div",[s("el-input",{attrs:{placeholder:"请输入定时时间",clearable:""},model:{value:e.heartBeatSecond,callback:function(t){e.heartBeatSecond=t},expression:"heartBeatSecond"}},[s("template",{slot:"prepend"},[s("span",{staticClass:"prm"},[e._v("每隔?秒发送内容")])]),s("el-button",{style:{color:!!e.connected&&(e.autoSend?"#f56c6c":"#67c23a")},attrs:{slot:"append",disabled:!e.connected},on:{click:e.autoHeartBeat},slot:"append"},[e._v(" "+e._s(e.autoSend?"停止发送":"开始发送")+" ")])],2),s("el-input",{staticClass:"mts",attrs:{type:"textarea",rows:"5",placeholder:"请输入定时发送的内容"},model:{value:e.heartBeatContent,callback:function(t){e.heartBeatContent=t},expression:"heartBeatContent"}})],1)])]),s("el-col",{staticClass:"card-console",attrs:{span:12}},[s("div",[s("span",{staticClass:"func-title"},[e._v("消息记录")]),s("el-button",{staticClass:"ml25",attrs:{size:"medium",type:"primary",plain:""},on:{click:e.cleanMessage}},[e._v("清空消息 ")])],1),s("div",{staticClass:"divider divider-dashed"}),s("div",[s("span",{staticClass:"func-title mr20"},[e._v("功能区")]),s("el-checkbox",{staticClass:"ml25 mtm",model:{value:e.recvClean,callback:function(t){e.recvClean=t},expression:"recvClean"}},[e._v("收包清空记录 ")]),s("el-checkbox",{staticClass:"mtm",model:{value:e.recvDecode,callback:function(t){e.recvDecode=t},expression:"recvDecode"}},[e._v("收包JSON解码 ")]),s("el-checkbox",{staticClass:"mtm",model:{value:e.recvPause,callback:function(t){e.recvPause=t},expression:"recvPause"}},[e._v("暂停接收")])],1),s("div",{staticClass:"divider divider-dashed"}),s("div",{staticClass:"message-box"},e._l(e.messageData,(function(t,a){return s("div",{key:a,staticClass:"mb-4",class:{"text-left":t.direction,"text-left":!t.direction}},[s("strong",[s("span",{class:{"text-success":t.direction,"text-primary":!t.direction}},[e._v(" "+e._s(t.direction?"发送":"收到")+"消息")]),e._v(" "+e._s(t.time)+" ")]),e.recvDecode?e._e():s("div",{staticClass:"monospace"},[e._v(e._s(t.content))]),e.recvDecode?s("div",{staticClass:"monospace",domProps:{innerHTML:e._s(JSON.format(t.content))}}):e._e()])})),0)])],1)],1)},f=[],b=(s("4617"),s("0c37"),s("4019")),p=s("6bf2"),j=s.n(p),v=(s("5b4a"),s("377c"),s("9c5e"),s("06d4"),s("c486")),m=s.n(v);JSON.format=function(e,t){try{JSON.parse(e)}catch(o){return e}var s="",a=0,n="  ";t=t||{},t.newlineBeforeColon=!0===t.newlineBeforeColon,t.spaceAfterColon=!1!==t.spaceAfterColon,"string"!==typeof e?e=JSON.stringify(e):(e=JSON.parse(e),e=JSON.stringify(e));var c=/([{}])/g;e=e.replace(c,"\r\n$1\r\n"),c=/([[]])/g,e=e.replace(c,"\r\n$1\r\n"),c=/(,)/g,e=e.replace(c,"$1\r\n"),c=/(\r\n\r\n)/g,e=e.replace(c,"\r\n"),c=/\r\n,/g,e=e.replace(c,","),t.newlineBeforeColon||(c=/:\r\n\{/g,e=e.replace(c,":{"),c=/:\r\n\[/g,e=e.replace(c,":[")),t.spaceAfterColon&&(c=/:/g,e=e.replace(c,":")),e.split("\r\n").forEach((function(e){var t=0,c=0,r="";for(e.match(/\{$/)||e.match(/\[$/)?c=1:e.match(/\}/)||e.match(/\]/)?0!==a&&(a-=1):c=0,t=0;t<a;t++)r+=n;s+=r+e+"\r\n",a+=c}));var r='<pre><code class="json">'+s+"</code></pre>";return void 0!==m.a&&(r='<pre><code class="json">'+m.a.highlightAuto(s).value+"</code></pre>"),r};var h={data:function(){return{consoleData:[],messageData:[],instance:WebSocket,address:"wss://echo.websocket.org",content:"",heartBeatSecond:1,heartBeatContent:"",autoSend:!1,autoTimer:void 0,sendClean:!1,recvClean:!1,recvDecode:!0,connected:!1,recvPause:!1,msgHistory:[]}},created:function(){this.canUseH5WebSocket();var e=localStorage.getItem("address");"string"===typeof e&&(this.address=e),window.onerror=function(e){console.warn(e)}},filters:{rStatus:function(e){switch(e){case void 0:return"尚未创建";case 0:return"尚未开启";case 1:return"连接成功";case 2:return"正在关闭";case 3:return"连接关闭"}}},methods:{autoWsConnect:function(){try{if(!1===this.connected){localStorage.setItem("address",this.address);var e=new WebSocket(this.address),t=this;e.onopen=function(e){console.warn(e),t.connected=!0;var s=t.instance.url.replace("ws://","").replace("wss://","");s="/"===s.substring(s.length-1)?s.substring(0,s.length-1):s,t.writeAlert("success","OPENED => "+s)},e.onclose=function(e){console.warn(e),t.autoSend=!1,clearInterval(t.autoTimer),t.connected=!1,t.writeAlert("danger","CLOSED => "+t.closeCode(e.code))},e.onerror=function(e){console.warn(e),t.writeConsole("danger","发生错误 请打开浏览器控制台查看")},e.onmessage=function(e){if(console.warn(e),!t.recvPause){var s=e.data;t.recvClean&&(t.messageData=[]),t.writeNews(0,s)}},this.instance=e}else this.instance.close(1e3,"Active closure of the user")}catch(s){console.warn(s),this.writeAlert("danger","创建 WebSocket 对象失败 请检查服务器地址")}},autoHeartBeat:function(){var e=this;!0===e.autoSend?(e.autoSend=!1,clearInterval(e.autoTimer)):(e.autoSend=!0,e.autoTimer=setInterval((function(){e.writeConsole("info","循环发送: "+e.heartBeatContent),e.sendData(e.heartBeatContent)}),1e3*e.heartBeatSecond))},writeConsole:function(e,t){var s=this;this.consoleData.push({content:t,type:e,time:j()().format("HH:mm:ss")}),this.$nextTick((function(){s.scrollOver(document.getElementById("console-box"))}))},writeNews:function(e,t,s){var a=this;"function"===typeof s&&(t=s(t)),this.messageData.push({direction:e,content:t,time:j()().format("HH:mm:ss")}),this.$nextTick((function(){a.recvClean||a.scrollOver(document.getElementById("message-box"))}))},writeAlert:function(e,t){this.$message({showClose:!0,message:t,type:e}),this.writeConsole(e,t)},canUseH5WebSocket:function(){"WebSocket"in window?this.writeAlert("success","初始化完成"):this.writeAlert("danger","当前浏览器不支持 H5 WebSocket 请更换浏览器")},closeCode:function(e){var t={1e3:"1000 CLOSE_NORMAL",1001:"1001 CLOSE_GOING_AWAY",1002:"1002 CLOSE_PROTOCOL_ERROR",1003:"1003 CLOSE_UNSUPPORTED",1004:"1004 CLOSE_RETAIN",1005:"1005 CLOSE_NO_STATUS",1006:"1006 CLOSE_ABNORMAL",1007:"1007 UNSUPPORTED_DATA",1008:"1008 POLICY_VIOLATION",1009:"1009 CLOSE_TOO_LARGE",1010:"1010 MISSING_EXTENSION",1011:"1011 INTERNAL_ERROR",1012:"1012 SERVICE_RESTART",1013:"1013 TRY_AGAIN_LATER",1014:"1014 CLOSE_RETAIN",1015:"1015 TLS_HANDSHAKE"},s=t[e];return void 0===s&&(s="0000 UNKNOWN_ERROR 未知错误"),s},sendData:function(e){var t=this,s=e;"object"===Object(b["a"])(s)&&(s=t.content);try{t.msgHistory.unshift(s),t.instance.send(s),t.writeNews(1,s),t.sendClean&&"object"===Object(b["a"])(e)&&(t.content="")}catch(a){throw t.writeAlert("danger","消息发送失败 原因请查看控制台"),a}},scrollOver:function(e){e&&(e.scrollTop=e.scrollHeight)},cleanMessage:function(){this.messageData=[]}}},g=h,y=(s("11b4"),Object(r["a"])(g,u,f,!1,null,"6c113d0e",null)),C=y.exports;a["default"].use(d["a"]);var k=[{path:"/",name:"home",component:C}],_=new d["a"]({routes:k}),w=_,O=s("08c1");a["default"].use(O["a"]);var S=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}}),x=s("2ca7"),E=s.n(x);s("46c6");a["default"].use(E.a),a["default"].config.productionTip=!1,new a["default"]({router:w,store:S,render:function(e){return e(i)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var a=s("b9cb"),n=s.n(a);n.a},"77d2":function(e,t,s){var a={"./af":"fbac","./af.js":"fbac","./ar":"f96f","./ar-dz":"e63c","./ar-dz.js":"e63c","./ar-kw":"b7bd","./ar-kw.js":"b7bd","./ar-ly":"968f","./ar-ly.js":"968f","./ar-ma":"9f9d","./ar-ma.js":"9f9d","./ar-sa":"aea5","./ar-sa.js":"aea5","./ar-tn":"d44b","./ar-tn.js":"d44b","./ar.js":"f96f","./az":"c7ed","./az.js":"c7ed","./be":"5a28","./be.js":"5a28","./bg":"1251","./bg.js":"1251","./bm":"2809","./bm.js":"2809","./bn":"b4fc","./bn.js":"b4fc","./bo":"5484","./bo.js":"5484","./br":"5adc","./br.js":"5adc","./bs":"ac10","./bs.js":"ac10","./ca":"e381","./ca.js":"e381","./cs":"aef2","./cs.js":"aef2","./cv":"6566","./cv.js":"6566","./cy":"1390","./cy.js":"1390","./da":"1ece","./da.js":"1ece","./de":"5f10","./de-at":"09c4","./de-at.js":"09c4","./de-ch":"89a2","./de-ch.js":"89a2","./de.js":"5f10","./dv":"e662","./dv.js":"e662","./el":"196b","./el.js":"196b","./en-SG":"0a32","./en-SG.js":"0a32","./en-au":"94ed","./en-au.js":"94ed","./en-ca":"2806","./en-ca.js":"2806","./en-gb":"b0dd","./en-gb.js":"b0dd","./en-ie":"7a6e","./en-ie.js":"7a6e","./en-il":"1f0f","./en-il.js":"1f0f","./en-nz":"1606","./en-nz.js":"1606","./eo":"f214","./eo.js":"f214","./es":"7d58","./es-do":"737b","./es-do.js":"737b","./es-us":"a894","./es-us.js":"a894","./es.js":"7d58","./et":"a888","./et.js":"a888","./eu":"1357","./eu.js":"1357","./fa":"0a48","./fa.js":"0a48","./fi":"c2b1","./fi.js":"c2b1","./fo":"52c4","./fo.js":"52c4","./fr":"04e6","./fr-ca":"6ad1","./fr-ca.js":"6ad1","./fr-ch":"b12f","./fr-ch.js":"b12f","./fr.js":"04e6","./fy":"ad13","./fy.js":"ad13","./ga":"369e","./ga.js":"369e","./gd":"22de","./gd.js":"22de","./gl":"f808","./gl.js":"f808","./gom-latn":"50d5","./gom-latn.js":"50d5","./gu":"e67a","./gu.js":"e67a","./he":"037c","./he.js":"037c","./hi":"3d53","./hi.js":"3d53","./hr":"678b","./hr.js":"678b","./hu":"1783","./hu.js":"1783","./hy-am":"2873","./hy-am.js":"2873","./id":"de99","./id.js":"de99","./is":"6aa2","./is.js":"6aa2","./it":"1f93","./it-ch":"2db9","./it-ch.js":"2db9","./it.js":"1f93","./ja":"6bf8","./ja.js":"6bf8","./jv":"6e55","./jv.js":"6e55","./ka":"e65f","./ka.js":"e65f","./kk":"7167","./kk.js":"7167","./km":"4668","./km.js":"4668","./kn":"e3d2","./kn.js":"e3d2","./ko":"b058","./ko.js":"b058","./ku":"017e","./ku.js":"017e","./ky":"b2bd","./ky.js":"b2bd","./lb":"e50c","./lb.js":"e50c","./lo":"ca14","./lo.js":"ca14","./lt":"3e84","./lt.js":"3e84","./lv":"ce1d","./lv.js":"ce1d","./me":"9d38","./me.js":"9d38","./mi":"3e2e","./mi.js":"3e2e","./mk":"d532","./mk.js":"d532","./ml":"db61","./ml.js":"db61","./mn":"7493","./mn.js":"7493","./mr":"52d8","./mr.js":"52d8","./ms":"b559","./ms-my":"7462","./ms-my.js":"7462","./ms.js":"b559","./mt":"c055","./mt.js":"c055","./my":"49e0","./my.js":"49e0","./nb":"eb1c","./nb.js":"eb1c","./ne":"0acb","./ne.js":"0acb","./nl":"7497","./nl-be":"3114","./nl-be.js":"3114","./nl.js":"7497","./nn":"9a9c","./nn.js":"9a9c","./pa-in":"c595","./pa-in.js":"c595","./pl":"801c","./pl.js":"801c","./pt":"5b08","./pt-br":"155f","./pt-br.js":"155f","./pt.js":"5b08","./ro":"05fc","./ro.js":"05fc","./ru":"90b3","./ru.js":"90b3","./sd":"99bf","./sd.js":"99bf","./se":"20d6","./se.js":"20d6","./si":"7c0b","./si.js":"7c0b","./sk":"90fc","./sk.js":"90fc","./sl":"871b","./sl.js":"871b","./sq":"b045","./sq.js":"b045","./sr":"ac81","./sr-cyrl":"a2d0","./sr-cyrl.js":"a2d0","./sr.js":"ac81","./ss":"b093","./ss.js":"b093","./sv":"12e5","./sv.js":"12e5","./sw":"38a0","./sw.js":"38a0","./ta":"a462","./ta.js":"a462","./te":"18cb","./te.js":"18cb","./tet":"0c11","./tet.js":"0c11","./tg":"d707","./tg.js":"d707","./th":"883f","./th.js":"883f","./tl-ph":"6cc0","./tl-ph.js":"6cc0","./tlh":"ab53","./tlh.js":"ab53","./tr":"e523","./tr.js":"e523","./tzl":"b192","./tzl.js":"b192","./tzm":"5604","./tzm-latn":"9f95","./tzm-latn.js":"9f95","./tzm.js":"5604","./ug-cn":"9f4f","./ug-cn.js":"9f4f","./uk":"8bd6","./uk.js":"8bd6","./ur":"9a78","./ur.js":"9a78","./uz":"4d4c","./uz-latn":"da73","./uz-latn.js":"da73","./uz.js":"4d4c","./vi":"b766","./vi.js":"b766","./x-pseudo":"2a69","./x-pseudo.js":"2a69","./yo":"fd2e","./yo.js":"fd2e","./zh-cn":"35d0","./zh-cn.js":"35d0","./zh-hk":"7b45","./zh-hk.js":"7b45","./zh-tw":"fa66","./zh-tw.js":"fa66"};function n(e){var t=c(e);return s(t)}function c(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=c,e.exports=n,n.id="77d2"},b49b:function(e,t,s){},b9cb:function(e,t,s){}});
//# sourceMappingURL=app.73ba7c76.js.map