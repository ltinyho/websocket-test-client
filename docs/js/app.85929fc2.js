(function(e){function t(t){for(var a,r,o=t[0],i=t[1],l=t[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],a=!0,o=1;o<s.length;o++){var i=s[o];0!==n[i]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},c=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=i;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},1689:function(e,t,s){},3576:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("a133"),s("ed0d"),s("f09c"),s("e117");var a=s("0261"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},c=[],r=(s("5c0b"),s("9ca4")),o={},i=Object(r["a"])(o,n,c,!1,null,null,null),l=i.exports,d=s("3f11"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"box-card"},[s("el-row",{staticClass:"card-body",attrs:{gutter:60}},[s("el-col",{staticClass:"card-operate",attrs:{span:12}},[s("div",[s("div",{staticClass:"func-title"},[e._v(" 服务器配置 状态: "+e._s(e._f("rStatus")(e.instance.readyState))+" ")]),s("el-input",{attrs:{clearable:"",placeholder:"wss://echo.websocket.org?a=b"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey?e.autoWsConnect(t):null}},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}},[s("template",{slot:"prepend"},[e._v("服务地址")]),s("el-button",{style:{color:e.connected?"#f56c6c":"#67c23a"},attrs:{slot:"append"},on:{click:e.autoWsConnect},slot:"append"},[e._v(e._s(e.connected?"关闭连接":"开启连接")+" ")])],2)],1),s("div",{staticClass:"divider divider-dashed"}),s("div",{staticClass:"pts"},[s("div",{staticClass:"func-title"},[e._v(" 发包设置 "),s("el-popover",{attrs:{placement:"bottom-start",width:"400",trigger:"hover"}},[s("div",[s("span",{staticClass:"prl"},[e._v("发送历史")]),e.msgHistory.length?s("el-button",{attrs:{type:"warning",size:"mini",plain:""},on:{click:function(t){e.msgHistory=[]}}},[e._v("清空历史 ")]):e._e()],1),s("ul",{staticClass:"history-list"},e._l(e.msgHistory,(function(t,a){return s("li",{key:t+a,staticClass:"history-msg",attrs:{title:t},on:{click:function(s){return e.setHistoryMsg(t)}}},[e._v(" "+e._s(t)+" "),s("el-button",{attrs:{type:"primary",plain:"",size:"mini"}},[e._v("resend")])],1)})),0),s("i",{staticClass:"el-icon-time history-trigger",attrs:{slot:"reference",title:"发送历史"},slot:"reference"})])],1),s("el-input",{attrs:{placeholder:"请输入内容",type:"textarea",clearable:"",rows:10},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey?e.manualSend(t):null}},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),s("el-checkbox",{staticClass:"mtm",attrs:{disabled:!e.connected},model:{value:e.sendClean,callback:function(t){e.sendClean=t},expression:"sendClean"}},[e._v("发包清空输入 ")])],1),s("div",[s("el-button",{staticClass:"mtl",staticStyle:{width:"100%"},attrs:{disabled:!e.connected,type:"primary"},on:{click:e.manualSend}},[e._v("发送(ctrl+enter) ")])],1),s("div",{staticClass:"card-text mtl"},[s("div",[s("el-input",{attrs:{placeholder:"请输入定时时间",clearable:""},model:{value:e.heartBeatSecond,callback:function(t){e.heartBeatSecond=t},expression:"heartBeatSecond"}},[s("template",{slot:"prepend"},[s("span",{staticClass:"prm"},[e._v("每隔?秒发送内容")])]),s("el-button",{style:{color:!!e.connected&&(e.autoSend?"#f56c6c":"#67c23a")},attrs:{slot:"append",disabled:!e.connected},on:{click:e.autoHeartBeat},slot:"append"},[e._v(" "+e._s(e.autoSend?"停止发送":"开始发送")+" ")])],2),s("el-input",{staticClass:"mts",attrs:{type:"textarea",rows:"5",placeholder:"请输入定时发送的内容"},model:{value:e.heartBeatContent,callback:function(t){e.heartBeatContent=t},expression:"heartBeatContent"}})],1)])]),s("el-col",{staticClass:"card-console",attrs:{span:12}},[s("div",[s("span",{staticClass:"func-title"},[e._v("消息记录")]),s("el-button",{staticClass:"ml25",attrs:{size:"medium",type:"primary",plain:""},on:{click:e.cleanMessage}},[e._v("清空消息 ")])],1),s("div",{staticClass:"divider divider-dashed"}),s("div",[s("span",{staticClass:"func-title mr20"},[e._v("功能区")]),s("el-checkbox",{staticClass:"ml25 mtm",model:{value:e.recvClean,callback:function(t){e.recvClean=t},expression:"recvClean"}},[e._v("收包清空记录 ")]),s("el-checkbox",{staticClass:"mtm",model:{value:e.recvDecode,callback:function(t){e.recvDecode=t},expression:"recvDecode"}},[e._v("收包JSON解码 ")]),s("el-checkbox",{staticClass:"mtm",model:{value:e.recvPause,callback:function(t){e.recvPause=t},expression:"recvPause"}},[e._v("暂停接收")])],1),s("div",{staticClass:"divider divider-dashed"}),s("div",{staticClass:"message-box",attrs:{id:"message-box"}},e._l(e.messageData,(function(t,a){return s("div",{key:a,staticClass:"mb-4",class:{"text-left":t.direction,"text-left":!t.direction}},[s("strong",[s("span",{class:{"text-success":t.direction,"text-primary":!t.direction}},[e._v(" "+e._s(t.direction?"发送":"收到")+"消息")]),e._v(" "+e._s(t.time)+" ")]),e.recvDecode?e._e():s("div",{staticClass:"monospace"},[e._v(e._s(t.content))]),e.recvDecode?s("div",{staticClass:"monospace",domProps:{innerHTML:e._s(JSON.format(t.content))}}):e._e()])})),0)])],1)],1)},f=[],b=(s("e35a"),s("5e9f"),s("0b46")),j=s("35f4"),p=s.n(j),v=(s("fe59"),s("f4e3"),s("0d7a"),s("08ba"),s("542c")),m=s.n(v);JSON.format=function(e,t){try{JSON.parse(e)}catch(o){return e}var s="",a=0,n="  ";t=t||{},t.newlineBeforeColon=!0===t.newlineBeforeColon,t.spaceAfterColon=!1!==t.spaceAfterColon,"string"!==typeof e||(e=JSON.parse(e)),e=JSON.stringify(e);var c=/([{}])/g;e=e.replace(c,"\r\n$1\r\n"),c=/([[]])/g,e=e.replace(c,"\r\n$1\r\n"),c=/(,)/g,e=e.replace(c,"$1\r\n"),c=/(\r\n\r\n)/g,e=e.replace(c,"\r\n"),c=/\r\n,/g,e=e.replace(c,","),t.newlineBeforeColon||(c=/:\r\n\{/g,e=e.replace(c,":{"),c=/:\r\n\[/g,e=e.replace(c,":[")),t.spaceAfterColon&&(c=/:/g,e=e.replace(c,":")),e.split("\r\n").forEach((function(e){var t=0,c=0,r="";for(e.match(/\{$/)||e.match(/\[$/)?c=1:e.match(/\}/)||e.match(/\]/)?0!==a&&(a-=1):c=0,t=0;t<a;t++)r+=n;s+=r+e+"\r\n",a+=c}));var r='<pre><code class="json">'+s+"</code></pre>";return void 0!==m.a&&(r='<pre><code class="json">'+m.a.highlightAuto(s).value+"</code></pre>"),r};var h={data:function(){return{consoleData:[],messageData:[],instance:WebSocket,address:"wss://echo.websocket.org",content:"",heartBeatSecond:1,heartBeatContent:"",autoSend:!1,autoTimer:void 0,sendClean:!1,recvClean:!1,recvDecode:!0,connected:!1,recvPause:!1,msgHistory:[]}},created:function(){this.canUseH5WebSocket();var e=localStorage.getItem("address");"string"===typeof e&&(this.address=e),window.onerror=function(e){console.warn(e)}},filters:{rStatus:function(e){switch(e){case void 0:return"尚未创建";case 0:return"尚未开启";case 1:return"连接成功";case 2:return"正在关闭";case 3:return"连接关闭"}}},methods:{autoWsConnect:function(){try{if(!1===this.connected){localStorage.setItem("address",this.address);var e=new WebSocket(this.address),t=this;e.onopen=function(e){console.warn(e),t.connected=!0;var s=t.instance.url.replace("ws://","").replace("wss://","");s="/"===s.substring(s.length-1)?s.substring(0,s.length-1):s,t.writeAlert("success","OPENED => "+s)},e.onclose=function(e){console.warn(e),t.autoSend=!1,clearInterval(t.autoTimer),t.connected=!1,t.writeAlert("danger","CLOSED => "+t.closeCode(e.code))},e.onerror=function(e){console.warn(e),t.writeConsole("danger","发生错误 请打开浏览器控制台查看")},e.onmessage=function(e){if(console.warn(e),!t.recvPause){var s=e.data;t.recvClean&&(t.messageData=[]),t.writeNews(0,s)}},this.instance=e}else this.instance.close(1e3,"Active closure of the user")}catch(s){console.warn(s),this.writeAlert("danger","创建 WebSocket 对象失败 请检查服务器地址")}},autoHeartBeat:function(){var e=this;!0===e.autoSend?(e.autoSend=!1,clearInterval(e.autoTimer)):(e.autoSend=!0,e.autoTimer=setInterval((function(){e.writeConsole("info","循环发送: "+e.heartBeatContent),e.sendData(e.heartBeatContent,!0)}),1e3*e.heartBeatSecond))},setHistoryMsg:function(e){this.content=e,this.sendData(e,!0)},writeConsole:function(e,t){var s=this;this.consoleData.push({content:t,type:e,time:p()().format("HH:mm:ss")}),this.$nextTick((function(){s.scrollOver(document.getElementById("console-box"))}))},writeNews:function(e,t,s){var a=this;"function"===typeof s&&(t=s(t)),this.messageData.push({direction:e,content:t,time:p()().format("HH:mm:ss")}),this.$nextTick((function(){a.recvClean||a.scrollOver(document.getElementById("message-box"))}))},writeAlert:function(e,t){this.$message({showClose:!0,message:t,type:e}),this.writeConsole(e,t)},canUseH5WebSocket:function(){"WebSocket"in window?this.writeAlert("success","初始化完成"):this.writeAlert("danger","当前浏览器不支持 H5 WebSocket 请更换浏览器")},closeCode:function(e){var t={1e3:"1000 CLOSE_NORMAL",1001:"1001 CLOSE_GOING_AWAY",1002:"1002 CLOSE_PROTOCOL_ERROR",1003:"1003 CLOSE_UNSUPPORTED",1004:"1004 CLOSE_RETAIN",1005:"1005 CLOSE_NO_STATUS",1006:"1006 CLOSE_ABNORMAL",1007:"1007 UNSUPPORTED_DATA",1008:"1008 POLICY_VIOLATION",1009:"1009 CLOSE_TOO_LARGE",1010:"1010 MISSING_EXTENSION",1011:"1011 INTERNAL_ERROR",1012:"1012 SERVICE_RESTART",1013:"1013 TRY_AGAIN_LATER",1014:"1014 CLOSE_RETAIN",1015:"1015 TLS_HANDSHAKE"},s=t[e];return void 0===s&&(s="0000 UNKNOWN_ERROR 未知错误"),s},manualSend:function(e){this.sendData(e,!1)},sendData:function(e,t){var s=this,a=e;"object"===Object(b["a"])(a)&&(a=s.content);try{!1===t&&s.msgHistory.unshift(a),s.instance.send(a),s.writeNews(1,a),s.sendClean&&"object"===Object(b["a"])(e)&&(s.content="")}catch(n){throw s.writeAlert("danger","消息发送失败 原因请查看控制台"),n}},scrollOver:function(e){e&&(e.scrollTop=e.scrollHeight)},cleanMessage:function(){this.messageData=[]}}},g=h,y=(s("5bdf"),Object(r["a"])(g,u,f,!1,null,"6997ea80",null)),C=y.exports;a["default"].use(d["a"]);var k=[{path:"/",name:"home",component:C}],_=new d["a"]({routes:k}),w=_,O=s("9f3a");a["default"].use(O["a"]);var S=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}}),x=s("b705"),E=s.n(x);s("3880");a["default"].use(E.a),a["default"].config.productionTip=!1,new a["default"]({router:w,store:S,render:function(e){return e(l)}}).$mount("#app")},"5b5c":function(e,t,s){var a={"./af":"0154","./af.js":"0154","./ar":"a16b","./ar-dz":"a1aa","./ar-dz.js":"a1aa","./ar-kw":"c6c3","./ar-kw.js":"c6c3","./ar-ly":"85f7","./ar-ly.js":"85f7","./ar-ma":"f589","./ar-ma.js":"f589","./ar-sa":"0ef8","./ar-sa.js":"0ef8","./ar-tn":"c3a3","./ar-tn.js":"c3a3","./ar.js":"a16b","./az":"1bfa","./az.js":"1bfa","./be":"f5be","./be.js":"f5be","./bg":"f934","./bg.js":"f934","./bm":"56bb","./bm.js":"56bb","./bn":"70cf","./bn.js":"70cf","./bo":"0074","./bo.js":"0074","./br":"22a4","./br.js":"22a4","./bs":"9ad2","./bs.js":"9ad2","./ca":"6c31","./ca.js":"6c31","./cs":"abba","./cs.js":"abba","./cv":"7b52","./cv.js":"7b52","./cy":"5f2f","./cy.js":"5f2f","./da":"0f6d","./da.js":"0f6d","./de":"dac6","./de-at":"23f3","./de-at.js":"23f3","./de-ch":"bb77","./de-ch.js":"bb77","./de.js":"dac6","./dv":"fdb0","./dv.js":"fdb0","./el":"343c","./el.js":"343c","./en-au":"54e8","./en-au.js":"54e8","./en-ca":"bee6","./en-ca.js":"bee6","./en-gb":"b53c","./en-gb.js":"b53c","./en-ie":"691d","./en-ie.js":"691d","./en-il":"24f7","./en-il.js":"24f7","./en-in":"8393","./en-in.js":"8393","./en-nz":"64cd","./en-nz.js":"64cd","./en-sg":"8a05","./en-sg.js":"8a05","./eo":"046d","./eo.js":"046d","./es":"7694","./es-do":"b81d","./es-do.js":"b81d","./es-us":"8b63","./es-us.js":"8b63","./es.js":"7694","./et":"1856","./et.js":"1856","./eu":"0ccc","./eu.js":"0ccc","./fa":"7d80","./fa.js":"7d80","./fi":"cc1c","./fi.js":"cc1c","./fil":"8107","./fil.js":"8107","./fo":"5927","./fo.js":"5927","./fr":"0071","./fr-ca":"dfd2","./fr-ca.js":"dfd2","./fr-ch":"34f3","./fr-ch.js":"34f3","./fr.js":"0071","./fy":"94ed","./fy.js":"94ed","./ga":"f82e","./ga.js":"f82e","./gd":"c61e","./gd.js":"c61e","./gl":"9124","./gl.js":"9124","./gom-deva":"ec6e","./gom-deva.js":"ec6e","./gom-latn":"c225","./gom-latn.js":"c225","./gu":"8a84","./gu.js":"8a84","./he":"f94d","./he.js":"f94d","./hi":"44ab","./hi.js":"44ab","./hr":"ec4c","./hr.js":"ec4c","./hu":"021a","./hu.js":"021a","./hy-am":"61f8","./hy-am.js":"61f8","./id":"f91e","./id.js":"f91e","./is":"dd50","./is.js":"dd50","./it":"a409","./it-ch":"333c","./it-ch.js":"333c","./it.js":"a409","./ja":"0918","./ja.js":"0918","./jv":"91ca","./jv.js":"91ca","./ka":"01c5","./ka.js":"01c5","./kk":"222d","./kk.js":"222d","./km":"967d","./km.js":"967d","./kn":"f31e","./kn.js":"f31e","./ko":"84dd","./ko.js":"84dd","./ku":"3bb0","./ku.js":"3bb0","./ky":"6b69","./ky.js":"6b69","./lb":"ae2f","./lb.js":"ae2f","./lo":"9ad28","./lo.js":"9ad28","./lt":"7ae9","./lt.js":"7ae9","./lv":"ee48","./lv.js":"ee48","./me":"72bc","./me.js":"72bc","./mi":"e072","./mi.js":"e072","./mk":"1c3c","./mk.js":"1c3c","./ml":"bd5a","./ml.js":"bd5a","./mn":"9459","./mn.js":"9459","./mr":"9559","./mr.js":"9559","./ms":"3ccb","./ms-my":"7670","./ms-my.js":"7670","./ms.js":"3ccb","./mt":"f2a4","./mt.js":"f2a4","./my":"0f9b","./my.js":"0f9b","./nb":"d231","./nb.js":"d231","./ne":"8388","./ne.js":"8388","./nl":"1f79","./nl-be":"51eb","./nl-be.js":"51eb","./nl.js":"1f79","./nn":"4ebd","./nn.js":"4ebd","./oc-lnc":"8adc","./oc-lnc.js":"8adc","./pa-in":"7b6a","./pa-in.js":"7b6a","./pl":"55f6","./pl.js":"55f6","./pt":"b479","./pt-br":"1105","./pt-br.js":"1105","./pt.js":"b479","./ro":"cdf1","./ro.js":"cdf1","./ru":"f5c8","./ru.js":"f5c8","./sd":"ad40","./sd.js":"ad40","./se":"5f63","./se.js":"5f63","./si":"68d8","./si.js":"68d8","./sk":"4af9","./sk.js":"4af9","./sl":"ffbe","./sl.js":"ffbe","./sq":"f55a","./sq.js":"f55a","./sr":"cf4a","./sr-cyrl":"926e","./sr-cyrl.js":"926e","./sr.js":"cf4a","./ss":"afa0","./ss.js":"afa0","./sv":"32ec","./sv.js":"32ec","./sw":"f832","./sw.js":"f832","./ta":"50b9","./ta.js":"50b9","./te":"558e","./te.js":"558e","./tet":"e75b","./tet.js":"e75b","./tg":"b98b","./tg.js":"b98b","./th":"37b4","./th.js":"37b4","./tk":"7907","./tk.js":"7907","./tl-ph":"55bd","./tl-ph.js":"55bd","./tlh":"692f0","./tlh.js":"692f0","./tr":"0ced","./tr.js":"0ced","./tzl":"afa0f","./tzl.js":"afa0f","./tzm":"b817","./tzm-latn":"53be","./tzm-latn.js":"53be","./tzm.js":"b817","./ug-cn":"d62a","./ug-cn.js":"d62a","./uk":"2ac1","./uk.js":"2ac1","./ur":"3aea","./ur.js":"3aea","./uz":"4b7a","./uz-latn":"936f","./uz-latn.js":"936f","./uz.js":"4b7a","./vi":"8c25","./vi.js":"8c25","./x-pseudo":"e1ad","./x-pseudo.js":"e1ad","./yo":"0a91","./yo.js":"0a91","./zh-cn":"d2a5","./zh-cn.js":"d2a5","./zh-hk":"db73","./zh-hk.js":"db73","./zh-mo":"28fe","./zh-mo.js":"28fe","./zh-tw":"32e9","./zh-tw.js":"32e9"};function n(e){var t=c(e);return s(t)}function c(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=c,e.exports=n,n.id="5b5c"},"5bdf":function(e,t,s){"use strict";var a=s("1689"),n=s.n(a);n.a},"5c0b":function(e,t,s){"use strict";var a=s("3576"),n=s.n(a);n.a}});
//# sourceMappingURL=app.85929fc2.js.map