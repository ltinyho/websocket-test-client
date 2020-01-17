<template>
  <div class="box-card">
    <el-row class="card-body" :gutter="60">
      <el-col :span="12" class="card-operate">
        <div>
          <div class="func-title">
            服务器配置 状态: {{ instance.readyState | rStatus }}
          </div>
          <el-input
                  v-model="address"
                  @keyup.ctrl.enter="autoWsConnect"
                  clearable
                  placeholder="wss://echo.websocket.org?a=b"
          >
            <template slot="prepend">服务地址</template>
            <el-button
                    @click="autoWsConnect"
                    :style="{ color: connected ? '#f56c6c' : '#67c23a' }"
                    slot="append"
            >{{ connected ? '关闭连接' : '开启连接' }}
            </el-button>
          </el-input>
        </div>
        <div class="divider divider-dashed"></div>
        <!--  发包 start  -->
        <div class="pts">
          <div class="func-title">
            发包设置
            <el-popover
                    placement="bottom-start"
                    width="400"
                    trigger="hover">
              <div>
                <span class="prl">发送历史</span>
                <el-button v-if="msgHistory.length"
                           type="primary"
                           size="mini"
                           @click="msgHistory=[]"
                           plain>清空历史
                </el-button>
              </div>
              <ul>
                <li class="history-msg" v-for="msg in msgHistory"
                    :key="msg"
                    @click="content=msg"
                    :title="msg">{{msg}}</li>
              </ul>
              <i title="发送历史"
                 slot="reference"
                 class="el-icon-time history-trigger"></i>
            </el-popover>
          </div>
          <el-input
                  v-model="content"
                  placeholder="请输入内容"
                  @keyup.native.ctrl.enter="sendData"
                  type="textarea"
                  clearable
                  :rows="10"
          >
          </el-input>
          <el-checkbox class="mtm" v-model="sendClean" :disabled="!connected"
          >发包清空输入
          </el-checkbox
          >
        </div>
        <div>
          <el-button
                  @click="sendData"
                  style="width:100%;"
                  class="mtl"
                  :disabled="!connected"
                  type="primary"
          >发送(ctrl+enter)
          </el-button
          >
        </div>
        <!--  发包 end  -->
        <!-- 自动发送 start -->
        <div class="card-text mtl">
          <div>
            <el-input
                    placeholder="请输入定时时间"
                    v-model="heartBeatSecond"
                    clearable
            >
              <template slot="prepend">
                <span class="prm">每隔?秒发送内容</span>
              </template>
              <el-button
                      slot="append"
                      @click="autoHeartBeat"
                      :style="{
                  color: connected ? (autoSend ? '#f56c6c' : '#67c23a') : false
                }"
                      :disabled="!connected"
              >
                {{ autoSend ? '停止发送' : '开始发送' }}
              </el-button>
            </el-input>
            <el-input v-model="heartBeatContent"
                      type="textarea"
                      class="mts"
                      rows="5"
                      placeholder="请输入定时发送的内容"></el-input>
          </div>
        </div>
        <!-- 自动发送 end -->
      
      </el-col>
      
      <el-col :span="12" class="card-console">
        <div>
          <span class="func-title">消息记录</span>
          <el-button
                  @click="cleanMessage"
                  class="ml25"
                  size="medium"
                  type="primary"
                  plain
          >清空消息
          </el-button
          >
        </div>
        <div class="divider divider-dashed"></div>
        <div>
          <span class="func-title mr20">功能区</span>
          <el-checkbox class="ml25 mtm" v-model="recvClean"
          >收包清空记录
          </el-checkbox
          >
          <el-checkbox class="mtm" v-model="recvDecode"
          >收包JSON解码
          </el-checkbox
          >
          <el-checkbox class="mtm" v-model="recvPause">暂停接收</el-checkbox>
        </div>
        <div class="divider divider-dashed"></div>
        <div class="message-box">
          <div
                  v-for="(item, idx) in messageData"
                  :key="idx"
                  class="mb-4"
                  :class="{
              'text-left': item.direction,
              'text-left': !item.direction
            }"
          >
            <strong>
              <span
                      :class="{
                  'text-success': item.direction,
                  'text-primary': !item.direction
                }"
              >
                {{ item.direction ? '发送' : '收到' }}消息</span
              >
              {{ item.time }}
            </strong>
            <div class="monospace" v-if="!recvDecode">{{ item.content }}</div>
            <div
                    class="monospace"
                    v-html="JSON.format(item.content)"
                    v-if="recvDecode"
            ></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import moment from 'moment';
  import './json';

  export default {
    data() {
      return {
        consoleData: [], // 控制台日志
        messageData: [], // 消息记录
        instance: WebSocket, // ws instance
        address: 'wss://echo.websocket.org', // 链接地址
        content: '',
        heartBeatSecond: 1,
        heartBeatContent: '',
        autoSend: false,
        autoTimer: undefined,
        sendClean: false,
        recvClean: false,
        recvDecode: true,
        connected: false,
        recvPause: false,
        msgHistory: [],
      };
    },
    created: function created() {
      this.canUseH5WebSocket();
      var address = localStorage.getItem('address');
      if (typeof address === 'string') this.address = address;
      window.onerror = function (ev) {
        console.warn(ev);
      };
    },
    filters: {
      rStatus: function (value) {
        switch (value) {
        case undefined:
          return '尚未创建';
        case 0:
          return '尚未开启';
        case 1:
          return '连接成功';
        case 2:
          return '正在关闭';
        case 3:
          return '连接关闭';
        }
      },
    },
    methods: {
      autoWsConnect: function () {
        try {
          if (this.connected === false) {
            localStorage.setItem('address', this.address);
            var wsInstance = new WebSocket(this.address);
            var _this = this;
            wsInstance.onopen = function (ev) {
              console.warn(ev);
              _this.connected = true;
              var service = _this.instance.url
              .replace('ws://', '')
              .replace('wss://', '');
              service =
                service.substring(service.length - 1) === '/'
                  ? service.substring(0, service.length - 1)
                  : service;
              _this.writeAlert('success', 'OPENED => ' + service);
            };
            wsInstance.onclose = function (ev) {
              console.warn(ev);
              _this.autoSend = false;
              clearInterval(_this.autoTimer);
              _this.connected = false;
              _this.writeAlert('danger', 'CLOSED => ' + _this.closeCode(ev.code));
            };
            wsInstance.onerror = function (ev) {
              console.warn(ev);
              _this.writeConsole('danger', '发生错误 请打开浏览器控制台查看');
            };
            wsInstance.onmessage = function (ev) {
              console.warn(ev);
              if (!_this.recvPause) {
                var data = ev.data;
                if (_this.recvClean) _this.messageData = [];
                _this.writeNews(0, data);
              }
            };
            this.instance = wsInstance;
          } else {
            this.instance.close(1000, 'Active closure of the user');
          }
        } catch (err) {
          console.warn(err);
          this.writeAlert('danger', '创建 WebSocket 对象失败 请检查服务器地址');
        }
      },
      autoHeartBeat: function () {
        var _this = this;
        if (_this.autoSend === true) {
          _this.autoSend = false;
          clearInterval(_this.autoTimer);
        } else {
          _this.autoSend = true;
          _this.autoTimer = setInterval(function () {
            _this.writeConsole('info', '循环发送: ' + _this.heartBeatContent);
            _this.sendData(_this.heartBeatContent);
          }, _this.heartBeatSecond * 1000);
        }
      },
      writeConsole: function (className, content) {
        var _this = this;
        this.consoleData.push({
          content: content,
          type: className,
          time: moment().format('HH:mm:ss'),
        });
        this.$nextTick(function () {
          _this.scrollOver(document.getElementById('console-box'));
        });
      },
      writeNews: function (direction, content, callback) {
        var _this = this;
        if (typeof callback === 'function') {
          content = callback(content);
        }

        this.messageData.push({
          direction: direction,
          content: content,
          time: moment().format('HH:mm:ss'),
        });
        this.$nextTick(function () {
          if (!_this.recvClean) {
            _this.scrollOver(document.getElementById('message-box'));
          }
        });
      },
      writeAlert: function (type, content) {
        this.$message({
          showClose: true,
          message: content,
          type: type,
        });
        this.writeConsole(type, content);
      },
      canUseH5WebSocket: function () {
        if ('WebSocket' in window) {
          this.writeAlert('success', '初始化完成');
        } else {
          this.writeAlert('danger', '当前浏览器不支持 H5 WebSocket 请更换浏览器');
        }
      },
      closeCode: function (code) {
        var codes = {
          1000: '1000 CLOSE_NORMAL',
          1001: '1001 CLOSE_GOING_AWAY',
          1002: '1002 CLOSE_PROTOCOL_ERROR',
          1003: '1003 CLOSE_UNSUPPORTED',
          1004: '1004 CLOSE_RETAIN',
          1005: '1005 CLOSE_NO_STATUS',
          1006: '1006 CLOSE_ABNORMAL',
          1007: '1007 UNSUPPORTED_DATA',
          1008: '1008 POLICY_VIOLATION',
          1009: '1009 CLOSE_TOO_LARGE',
          1010: '1010 MISSING_EXTENSION',
          1011: '1011 INTERNAL_ERROR',
          1012: '1012 SERVICE_RESTART',
          1013: '1013 TRY_AGAIN_LATER',
          1014: '1014 CLOSE_RETAIN',
          1015: '1015 TLS_HANDSHAKE',
        };
        var error = codes[code];
        if (error === undefined) error = '0000 UNKNOWN_ERROR 未知错误';
        return error;
      },
      sendData: function (raw) {
        var _this = this;
        var data = raw;
        if (typeof data === 'object') {
          data = _this.content;
        }
        try {
          _this.msgHistory.unshift(data);
          _this.instance.send(data);
          _this.writeNews(1, data);
          if (_this.sendClean && typeof raw === 'object') {
            _this.content = '';
          }
        } catch (err) {
          _this.writeAlert('danger', '消息发送失败 原因请查看控制台');
          throw err;
        }
      },
      scrollOver: function scrollOver(e) {
        if (e) {
          e.scrollTop = e.scrollHeight;
        }
      },
      cleanMessage: function () {
        this.messageData = [];
      },
    },
  };
</script>
<style lang="scss" scoped>
  @import "../assets/hljs.css";
  
  .box-card {
    border: 1px solid #dcdfe6;
    padding: 10px 30px;
    min-height: 90vh;
    
    .card-operate {
    }
    
    .card-console {
    }
  }
  
  .func-title {
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
    font-size: 20px;
    margin-bottom: 12px;
  }
  
  .divider {
    clear: both;
    overflow: hidden;
    margin: 1rem auto;
    height: 0;
  }
  
  .divider-dashed {
    border-top: 1px dashed #ccc;
  }
  
  .card-operate,
  .message-box {
    display: block;
    overflow: auto;
    padding: 1rem;
  }
  
  .message-box {
    max-height: calc(100vh - 220px);
  }
  
  ::-webkit-scrollbar-track-piece {
    background-color: #f8f8f8;
  }
  
  ::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }
  
  ::-webkit-scrollbar-thumb {
    min-height: 28px;
    background-color: #ddd;
    background-clip: padding-box;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #bbb;
  }
  

  .history-trigger {
    cursor: pointer;
  }
  .history-msg{
    cursor: pointer;
    width: 100%;
    padding: 5px 0;
    font-size: 16px;
    &:hover{
      color:#0055AF;
    }
  }
</style>
