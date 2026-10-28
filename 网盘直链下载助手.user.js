// ==UserScript==
// @name              FerryLink
// @namespace         https://github.com/Wjavan/FerryLink
// @version           1.5.1
// @author            Wjavan
// @description       支持百度/阿里/天翼/迅雷/夸克/移动六大网盘直链下载。支持 HTTP/JSON-RPC/cURL，推送至 IDM/XDown/Aria2/NDM/Motrix/终端。基于油小猴(youxiaohou.com)的网盘直链下载助手修改。
// @copyright         2026, Wjavan (https://github.com/Wjavan)
// @license           GPL-3.0
// @homepage          https://github.com/Wjavan/FerryLink
// @website           https://github.com/Wjavan/FerryLink
// @source            https://github.com/Wjavan/FerryLink
// @supportURL        https://github.com/Wjavan/FerryLink/issues
// @icon              data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiZyIgeDE9IjAiIHkxPSIwIiB4Mj0iMC4yNSIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzFFNUFBMCIvPjxzdG9wIG9mZnNldD0iMC41NSIgc3RvcC1jb2xvcj0iIzEyM0M3MiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzBBMjM0NCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJodWxsIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjRkZCNjNGIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTg3NjBGIi8+PC9saW5lYXJHcmFkaWVudD48Y2xpcFBhdGggaWQ9InNxdWlyY2xlIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgcng9IjExNiIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGNsaXAtcGF0aD0idXJsKCNzcXVpcmNsZSkiPjxyZWN0IHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBmaWxsPSJ1cmwoI2JnKSIvPjxwYXRoIGQ9Ik0wLDQzNCBDIDY4LDQwOCAxMjQsNDA4IDE4MCw0MzQgQyAyMzYsNDYwIDI5Miw0NjAgMzQ4LDQzNCBDIDQwNCw0MDggNDYwLDQwOCA1MTIsNDM0IEw1MTIsNTEyIEwwLDUxMiBaIgogICAgICAgICAgZmlsbD0iIzFGNUU5QyIvPjxwYXRoIGQ9Ik0wLDQ3MiBDIDc2LDQ0NiAxMzIsNDQ2IDE4OCw0NzIgQyAyNDQsNDk4IDMwMCw0OTggMzU2LDQ3MiBDIDQxMiw0NDYgNDY4LDQ0NiA1MTIsNDcyIEw1MTIsNTEyIEwwLDUxMiBaIgogICAgICAgICAgZmlsbD0iIzNCOENEMCIvPjxyZWN0IHg9IjIzNiIgeT0iNjAiIHdpZHRoPSI0NCIgaGVpZ2h0PSIxNzAiIHJ4PSIxMCIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNjIsMjI2IEwzNTAsMjI2IEwyNTYsMzIwIFoiIGZpbGw9IiNGRkZGRkYiLz48cmVjdCB4PSIyMTgiIHk9IjMzMiIgd2lkdGg9Ijc2IiBoZWlnaHQ9IjQwIiByeD0iMTIiIGZpbGw9IiNGRkZGRkYiLz48cmVjdCB4PSIyMzYiIHk9IjM0NCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjExIiByeD0iNSIgZmlsbD0iIzdGQjNFMCIvPjxwYXRoIGQ9Ik0xNjIsMzc4IEwzNTAsMzc4IFEzNjAsMzc4IDM1NywzODcgTDM0MCw0MTAgUTMzNiw0MTYgMzI4LDQxNiBMMTg0LDQxNiBRMTc2LDQxNiAxNzIsNDEwIEwxNTUsMzg3IFExNTIsMzc4IDE2MiwzNzggWiIKICAgICAgICAgIGZpbGw9InVybCgjaHVsbCkiLz48cmVjdCB4PSIxNDkiIHk9IjM2NiIgd2lkdGg9IjIxNCIgaGVpZ2h0PSIxMiIgcng9IjYiIGZpbGw9IiNGRkZGRkYiLz48L2c+PC9zdmc+
// @match             *://pan.baidu.com/disk/home*
// @match             *://yun.baidu.com/disk/home*
// @match             *://pan.baidu.com/disk/main*
// @match             *://yun.baidu.com/disk/main*
// @match             *://openapi.baidu.com/oauth/*
// @match             *://www.aliyundrive.com/drive*
// @match             *://www.alipan.com/drive*
// @match             *://cloud.189.cn/web/*
// @match             *://pan.xunlei.com/*
// @match             *://pan.quark.cn/*
// @match             *://yun.139.com/*
// @match             *://caiyun.139.com/*
// @run-at            document-start
// @require           https://registry.npmmirror.com/jquery/3.7.0/files/dist/jquery.min.js
// @require           https://registry.npmmirror.com/sweetalert2/10.16.6/files/dist/sweetalert2.all.min.js
// @require           https://registry.npmmirror.com/js-md5/0.7.3/files/build/md5.min.js
// @connect           baidu.com
// @connect           baidupcs.com
// @connect           jomodns.com
// @connect           aliyundrive.com
// @connect           aliyundrive.net
// @connect           alipan.com
// @connect           aliyundrive.cloud
// @connect           189.cn
// @connect           xunlei.com
// @connect           quark.cn
// @connect           yun.139.com
// @connect           caiyun.139.com
// @connect           localhost
// @connect           127.0.0.1
// @connect           *
// @grant             GM_xmlhttpRequest
// @grant             GM_setClipboard
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             GM_deleteValue
// @grant             GM_registerMenuCommand
// @grant             GM_cookie
// @grant             GM_openInTab
// @grant             window.close
// @updateURL         https://update.greasyfork.org/scripts/595544/FerryLink.meta.js
// @downloadURL       https://update.greasyfork.org/scripts/595544/FerryLink.user.js
// ==/UserScript==
(function () {
    'use strict';
    // 库没拉下来脚本就挂，先探缺哪个
    if (typeof $ === 'undefined' || typeof Swal === 'undefined') {
        const missing = [typeof $ === 'undefined' ? 'jQuery' : null,
                         typeof Swal === 'undefined' ? 'SweetAlert2' : null]
                         .filter(Boolean).join('、');
        document.documentElement.appendChild(Object.assign(document.createElement('div'), {
            textContent: 'FerryLink 依赖加载失败（缺少 ' + missing + '）。请检查网络后刷新，或从 GitHub 手动安装本地依赖版。',
            style: 'position:fixed;top:0;left:0;right:0;z-index:2147483647;background:#cc3235;color:#fff;padding:8px 12px;font:13px/1.5 sans-serif;text-align:center'
        }));
        return;
    }
    let pageNum = '', selectedFiles = [], panInfo = {}, color = '',
        doc = $(document), downloadProgress = {}, pendingRequests = {}, intervals = {};

    const MARK_OK = '<span class="pl-mark ok">✓</span>';
    const MARK_NO = '<span class="pl-mark no">✗</span>';
    let downloadState = { downloader: '', protocol: '' };

    const DOWNLOADERS = [
        { id: 'browser',  name: '浏览器'   },
        { id: 'idm',      name: 'IDM'      },
        { id: 'aria2',    name: 'Aria2'    },
        { id: 'motrix',   name: 'Motrix'   },
        { id: 'xdown',    name: 'XDown'    },
        { id: 'bitcomet', name: 'BitComet' },
        { id: 'term',     name: '终端'     },
    ];

    // act：nav 隐藏 iframe，push 推本机接口，copy 复制
    // id 是分派键，改名会断执行器，别动
    //   http   HTTP 直链       直链下载
    //   idm    本地 HTTP API   IDM 内置接口 1001
    //   transcode 转码        备用视频链路，直链不可用或过慢时可选
    //   rpc    JSON-RPC        aria2/Motrix 的 6800 端口
    //   curl   cURL            命令行
    //   aria2c Aria2c          命令行
    //   bc     BC              bc:// 调起本机客户端
    //   bc-rpc BC-RPC          BitComet 远程下载
    const PROTOCOLS = {
        browser:  [{ id: 'http',   name: 'HTTP 直链',     group: 'link', act: 'nav'  },
                   { id: 'transcode', name: '转码',      group: 'link', act: 'nav'  },
                   { id: 'seg',    name: '多链下载',    group: 'link', act: 'nav'  }],
        idm:      [{ id: 'idm',    name: '本地 HTTP API', group: 'api',  act: 'push' }],
        aria2:    [{ id: 'aria2c', name: 'Aria2c',         group: 'cli',  act: 'copy' },
                   { id: 'rpc',    name: 'JSON-RPC',      group: 'api',  act: 'push' }],
        motrix:   [{ id: 'aria2c', name: 'Aria2c',         group: 'cli',  act: 'copy' },
                   { id: 'rpc',    name: 'JSON-RPC',      group: 'api',  act: 'push' }],
        xdown:    [{ id: 'http',   name: 'HTTP 直链',     group: 'link', act: 'copy', btn: '复制命令' }],
        bitcomet: [{ id: 'bc',     name: 'BC',           group: 'uri',  act: 'copy', btn: '复制命令' },
                   { id: 'bc-rpc', name: 'BC-RPC',       group: 'api',  act: 'push' }],
        term:     [{ id: 'curl',   name: 'cURL',          group: 'cli',  act: 'copy' },
                   { id: 'aria2c', name: 'Aria2c',        group: 'cli',  act: 'copy' }],
    };

    // 四族：直接 GET / 推本机接口 / 生成命令行 / 调 URI
    const PROTO_GROUPS = [
        { id: 'link', label: '直链下载' },
        { id: 'api',  label: 'HTTP 接口推送' },
        { id: 'cli',  label: '命令行' },
        { id: 'uri',  label: 'URI 协议' },
    ];
    const PROTO_TITLES = {
        http:   '浏览器直接请求直链下载',
        transcode: '备用视频链路；直链不可用或过慢时可选',
        idm:    '通过 IDM 本地 HTTP 接口（127.0.0.1:1001）推送任务，需 IDM 已启动且浏览器扩展已注册 client',
        rpc:    '通过 Aria2/Motrix 的 JSON-RPC 接口（HTTP 6800 端口）推送任务，需已开启 RPC',
        curl:   '生成 curl 命令行，适合 Linux/macOS 终端',
        aria2c: '生成 aria2c 命令行，适合终端或脚本',
        bc:     '复制 bc:// 地址：粘贴到 BitComet「文件→打开 URL」或地址栏即可调起客户端下载；无需配置端口，需本机已安装 BitComet',
        'bc-rpc': '点击开始下载后先探测 BitComet 远程下载：可用则直接推送（无浏览器弹框）；不可用则自动改用 bc:// 调起本机 BitComet 客户端',
        seg:    '开 4 路并发分段取回再合并存盘，单连接被限速时能叠加带宽；节点过慢会自动停手',
    };
    const PROTO_ORDER = ['http', 'transcode', 'seg', 'idm', 'rpc', 'curl', 'aria2c', 'bc', 'bc-rpc'];
    const ALL_PROTOCOLS = PROTO_GROUPS.map(g => {
        const seen = {};
        Object.keys(PROTOCOLS).forEach(dl => PROTOCOLS[dl].forEach(p => {
            if (p.group === g.id && !seen[p.id]) seen[p.id] = p;
        }));
        return { label: g.label, items: PROTO_ORDER.filter(id => seen[id]).map(id => seen[id]) };
    });

    let watched = {};
    const terminalType = {
        wc: "Windows CMD",
        wp: "Windows PowerShell",
        lt: "Linux 终端",
        ls: "Linux Shell",
        mt: "MacOS 终端",
    };
    let toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });
    const message = {
        success: (text) => {
            return toast.fire({title: text, icon: 'success'});
        },
        error: (text) => {
            return toast.fire({title: text, icon: 'error'});
        },
        warning: (text) => {
            return toast.fire({title: text, icon: 'warning'});
        },
        info: (text) => {
            return toast.fire({title: text, icon: 'info'});
        },
        question: (text) => {
            return toast.fire({title: text, icon: 'question'});
        }
    };
    const LEGACY_LOCAL_KEYS = ['baiduyunPlugin_BDUSS', 'accessToken'];
    let base = {
        getCookie(name) {
            let cname = name + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i].trim();
                if (c.indexOf(cname) == 0) return c.substring(cname.length, c.length);
            }
            return "";
        },
        isType(obj) {
            return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
        },
        getValue(name) {
            return GM_getValue(name);
        },
        setValue(name, value) {
            GM_setValue(name, value);
        },
        deleteValue(name) {
            GM_deleteValue(name);
        },
        getStorage(key) {
            let v = null;
            if (key === 'token' || !LEGACY_LOCAL_KEYS.includes(key)) {
                try { v = localStorage.getItem(key); } catch (e) { /* storage unavailable */ }
            }
            if (v === null || v === undefined) v = GM_getValue(key, null);
            if ((v === null || v === undefined) && LEGACY_LOCAL_KEYS.includes(key)) {
                let legacy = null;
                try { legacy = localStorage.getItem(key); } catch (e) { /* storage unavailable */ }
                if (legacy !== null && legacy !== undefined) {
                    GM_setValue(key, legacy);
                    v = legacy;
                }
                try { localStorage.removeItem(key); } catch (e) { /* storage unavailable */ }
            }
            try {
                return JSON.parse(v);
            } catch (e) {
                return v;
            }
        },
        async refreshAliToken(tk) {
            if (!tk || !tk.refresh_token) return tk;
            const now = Date.now();
            const exp = tk.expire_time ? Date.parse(tk.expire_time) : 0;
            if (!exp || exp - now > 60000) return tk;
            try {
                const res = await base.post(
                    'https://api.aliyundrive.com/v2/account/token',
                    { grant_type: 'refresh_token', refresh_token: tk.refresh_token },
                    { 'content-type': 'application/json;charset=utf-8' }
                );
                const merged = Object.assign({}, tk, {
                    access_token: res.access_token,
                    refresh_token: res.refresh_token || tk.refresh_token,
                    token_type: res.token_type || tk.token_type || 'Bearer',
                    expire_time: new Date(now + (res.expire_time ? Date.parse(res.expire_time) : now + 7200000)).toISOString(),
                });
                base.setStorage('token', merged);
                return merged;
            } catch (e) {
                return tk;
            }
        },
        setStorage(key, value) {
            let payload = value;
            if (this.isType(value) === 'object' || this.isType(value) === 'array') {
                payload = JSON.stringify(value);
            }
            if (key === 'token') {
                try { localStorage.setItem(key, payload); } catch (e) { /* storage unavailable */ }
            }
            return GM_setValue(key, payload);
        },
        migrate() {
            const MARK = 'ferrylink_migrated_version';
            const VERSION = '1.5.1';
            try {
                if (GM_getValue(MARK, '') === VERSION) return;
                ['shareToken', 'share_token', 'ferrylink_last_downloader', 'ferrylink_last_protocol'].forEach((k) => {
                    try { GM_deleteValue(k); localStorage.removeItem(k); } catch (e) {}
                });
                LEGACY_LOCAL_KEYS.forEach((k) => {
                    // 存量凭据搬到 GM 存储后清掉原处，不留副本
                    try { base.getStorage(k); } catch (e) {}
                    try { localStorage.removeItem(k); } catch (e) {}
                });
                GM_setValue(MARK, VERSION);
            } catch (e) { /* never block startup */ }
        },
        setClipboard(text) {
            GM_setClipboard(text, 'text');
        },
        e(str) {
                        return btoa(Array.from(new TextEncoder().encode(str), c => String.fromCharCode(c)).join(''));
                    },
        getExtension(name) {
            const reg = /(?!\.)\w+$/;
            if (reg.test(name)) {
                let match = name.match(reg);
                return match[0].toUpperCase();
            }
            return '';
        },
        sizeFormat(value) {
            if (value === +value) {
                let unit = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
                let index = Math.floor(Math.log(value) / Math.log(1024));
                let size = value / Math.pow(1024, index);
                size = size.toFixed(1);
                return size + unit[index];
            }
            return '';
        },

        esc(str) {
            return String(str ?? '').replace(/[&<>"']/g, c => ({
                '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
            }[c]));
        },
        fixFilename(name) {
            return String(name || '').replace(/[!?&|`"'*\/:<>\\$;(){}\n\r\x00-\x1F\x7F]/g, '_');
        },
        validRpcDomain(domain) {
            const d = String(domain || '').trim();
            if (!d) return false;
            if (d === 'localhost' || d === '::1' || d === '[::1]') return true;
            let host = d;
            try {
                host = new URL(d.includes('://') ? d : 'http://' + d).hostname;
            } catch (e) { return false; }
            if (host === 'localhost' || host === '::1') return true;
            return /^((127|10)\.\d{1,3}\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3}|169\.254\.\d{1,3}\.\d{1,3})$/.test(host)
                || /^172\.(1[6-9]|2[0-9]|3[01])\.\d{1,3}\.\d{1,3}$/.test(host)
                || /^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\.\d{1,3}\.\d{1,3}$/.test(host);
        },
        // ── 默认下载器：记住一组选择，打开面板直接可用 ──────────────────
        defaultSelection() {
            const s = base._siteKey();
            const dl = base.getValue(`setting_default_downloader_${s}`) || '';
            const proto = base.getValue(`setting_default_protocol_${s}`) || '';
            if (!dl || !PROTOCOLS[dl]) return null;
            if (!PROTOCOLS[dl].some(p => p.id === proto)) return null;
            return { downloader: dl, protocol: proto };
        },
        setDefaultSelection(dl, proto) {
            const s = base._siteKey();
            base.setValue(`setting_default_downloader_${s}`, dl || '');
            base.setValue(`setting_default_protocol_${s}`, proto || '');
        },
        clearDefaultSelection() {
            const s = base._siteKey();
            base.deleteValue(`setting_default_downloader_${s}`);
            base.deleteValue(`setting_default_protocol_${s}`);
        },
        // 默认值按网盘分开存，迅雷的多链/转码才不会把别的站顶掉
        _siteKey() {
            const a = base._activeAdapter || {};
            return a.site || 'default';
        },
        _defaultNames() {
            const d = base.defaultSelection();
            if (!d) return '';
            const dl = DOWNLOADERS.find(x => x.id === d.downloader);
            const p = (PROTOCOLS[d.downloader] || []).find(x => x.id === d.protocol);
            return (dl ? dl.name : d.downloader) + ' · ' + (p ? p.name : d.protocol);
        },
        // 星标只做记号，含义靠文字，图标不抢对比度
        _defaultBtnHtml() {
            const d = base.defaultSelection();
            const same = !!d && downloadState.downloader === d.downloader && downloadState.protocol === d.protocol;
            const star = '<svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true"><path d="M6 1.5l1.4 2.8 3.1.45-2.25 2.2.53 3.1L6 8.6 3.22 10.05l.53-3.1L1.5 4.75l3.1-.45z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>';
            if (!same) {
                return `<button type="button" id="pl-dl-default-btn" class="pl-dl-default-btn listener-dl-set-default" title="记住当前的下载器与协议，下次打开面板自动选中">${star}<span>设为默认</span></button>`;
            }
            const starOn = star.replace('fill="none"', 'fill="currentColor"');
            const cross = '<svg class="pl-dl-default-x" viewBox="0 0 12 12" width="11" height="11" aria-hidden="true"><path d="M2.8 2.8l6.4 6.4M9.2 2.8L2.8 9.2" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>';
            return `<button type="button" id="pl-dl-default-btn" class="pl-dl-default-btn is-set listener-dl-set-default" title="当前默认下载方式，点此取消">${starOn}<span class="pl-dl-default-tag">默认</span><span class="pl-dl-default-name">${base.esc(base._defaultNames())}</span>${cross}</button>`;
        },
        // 按当前选择改称呼，只有等于默认才给 ✕
        _syncDefaultBtn() {
            const $b = $('#pl-dl-default-btn');
            if (!$b.length) return;
            const html = base._defaultBtnHtml();
            if ($b[0].outerHTML !== html) $b.replaceWith(html);
        },
        _applyDefaultSelection() {
            const d = base.defaultSelection();
            if (!d || downloadState.downloader) return false;   // 同页面内已选过就沿用
            const protos = PROTOCOLS[d.downloader] || [];
            const pick = protos.find(p => p.id === d.protocol && base._protoUsable(p))
                || protos.find(p => base._protoUsable(p));
            downloadState.downloader = d.downloader;
            downloadState.protocol = pick ? pick.id : '';
        },
        _rpcConfig() {
            const rpc = {
                domain: base.getValue('setting_rpc_domain'),
                port: base.getValue('setting_rpc_port'),
                path: base.getValue('setting_rpc_path'),
                token: base.getValue('setting_rpc_token'),
                dir: base.getValue('setting_rpc_dir'),
            };
            if (!base.validRpcDomain(rpc.domain)) {
                base.panelNotice('RPC主机无效，仅允许本机或内网地址（如 http://127.0.0.1）', 'error');
                return null;
            }
            rpc.url = `${rpc.domain}:${rpc.port}${rpc.path}`;
            return rpc;
        },
        safeRpcFilename(name) {
            return String(name || '')
                .replace(/[\x00-\x1F\x7F]/g, '')
                .replace(/[/\\]/g, '_')
                .replace(/\.\./g, '_')
                .replace(/^\.+/, '_')
                .slice(0, 255);
        },
        getRandomString(len) {
            len = len || 16;
            let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
            let maxPos = $chars.length;
            let pwd = '';
            for (let i = 0; i < len; i++) {
                pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return pwd;
        },
        getSign(e, t, a, n) {
            let i = "";
            if (t) {
                let s = Object.assign({}, t);
                i = JSON.stringify(s),
                    i = i.replace(/\s*/g, ""),
                    i = encodeURIComponent(i);
                let c = i.split(""),
                    u = c.sort();
                i = u.join("");
            }
            let A = md5(base.e(i));
            let l = md5(a + ":" + n);
            return md5(A + l).toUpperCase();
        },
        _resetData() {
                    downloadProgress = {};
                    $.each(pendingRequests, (key) => {
                        (pendingRequests[key]).abort();
                    });
                    $.each(intervals, (key) => {
                        clearInterval(intervals[key]);
                    });
                    intervals = {};
                    pendingRequests = {};
                },
        post(url, data, headers, type) {
                            if (this.isType(data) === 'object') {
                                data = JSON.stringify(data);
                            }
                            return new Promise((resolve, reject) => {
                                const key = 'post_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
                                const clear = () => { delete pendingRequests[key]; };
                                pendingRequests[key] = GM_xmlhttpRequest({
                                    method: "POST", url, headers, data,
                                    responseType: type || 'json',
                                    timeout: 30000,
                                    ontimeout: () => { clear(); reject(new Error('请求超时（30s）')); },
                                    onload: (res) => {
                                        clear();
                                        if (type === 'blob') { resolve(res); return; }
                                        if (res.status >= 400) {
                                            const body = res.response || res.responseText || '';
                                            let msg = 'HTTP ' + res.status;
                                            try {
                                                const parsed = JSON.parse(body);
                                                msg = parsed.message || parsed.msg || parsed.code || msg;
                                            } catch (e) { /* non-JSON error body */ }
                                            reject(new Error(msg));
                                            return;
                                        }
                                        resolve(res.response || res.responseText);
                                    },
                                    onerror: (err) => {
                                        clear();
                                        reject(err);
                                    },
                                });
                            });
                        },
        get(url, headers, type, extra) {
            headers = Object.assign({ 'Referer': location.origin }, headers);
            return new Promise((resolve, reject) => {
                const key = 'get_' + (extra && extra.index != null ? extra.index : Date.now());
                const clear = () => { delete pendingRequests[key]; };
                let requestObj = GM_xmlhttpRequest({
                    method: "GET", url, headers,
                    responseType: type || 'json',
                    timeout: type === 'blob' ? 0 : 30000,
                    ontimeout: () => { clear(); reject(new Error('请求超时（30s）')); },
                    onload: (res) => {
                        clear();
                        resolve(res.response || res.responseText);
                    },
                    onprogress: (res) => {
                        if (extra && extra.filename && extra.index != null) {
                            res.total > 0 ? downloadProgress[extra.index] = Math.floor(res.loaded * 100 / res.total) : downloadProgress[extra.index] = 0;
                        }
                    },
                    onloadstart() {
                        if (extra && extra.filename && extra.index != null) {
                            downloadProgress[extra.index] = 0;
                        }
                    },
                    onerror: (err) => {
                        clear();
                        reject(err);
                    },
                });
                pendingRequests[key] = requestObj;
            });
        },
        getFinalUrl(url, headers) {
            headers = Object.assign({ 'Referer': location.origin }, headers);
            return new Promise((resolve, reject) => {
                const key = 'finalurl_' + Date.now();
                const done = (v) => { delete pendingRequests[key]; resolve(v); };
                pendingRequests[key] = GM_xmlhttpRequest({
                    method: "HEAD", url, headers,
                    timeout: 10000,
                    ontimeout: () => { delete pendingRequests[key]; reject(new Error('请求超时（10s）')); },
                    onload: (res) => { done(res.finalUrl || url); },
                    onerror: () => {
                        delete pendingRequests[key];
                        pendingRequests[key] = GM_xmlhttpRequest({
                            method: "GET", url,
                            headers: Object.assign({}, headers, { 'Range': 'bytes=0-0' }),
                            timeout: 10000,
                            ontimeout: () => { delete pendingRequests[key]; reject(new Error('请求超时（10s）')); },
                            onload: (res) => { done(res.finalUrl || url); },
                            onerror: () => { delete pendingRequests[key]; resolve(url); }
                        });
                    }
                });
            });
        },
        stringify(obj) {
            let str = '';
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    var value = obj[key];
                    if (Array.isArray(value)) {
                        for (var i = 0; i < value.length; i++) {
                            str += encodeURIComponent(key) + '=' + encodeURIComponent(value[i]) + '&';
                        }
                    } else {
                        str += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
                    }
                }
            }
            return str.slice(0, -1);
        },
        addStyle(id, tag, css) {
            tag = tag || 'style';
            let doc = document, styleDom = doc.getElementById(id);
            if (styleDom) return;
            let style = doc.createElement(tag);
            style.rel = 'stylesheet';
            style.id = id;
            tag === 'style' ? style.innerHTML = css : style.href = css;
            doc.getElementsByTagName('head')[0].appendChild(style);
        },
        sleep(time) {
            return new Promise(resolve => setTimeout(resolve, time));
        },
        findReact(dom, traverseUp = 0) {
            if (!dom) return null;
            const key = Object.keys(dom).find(key => {
                return key.startsWith("__reactFiber$")
                    || key.startsWith("__reactInternalInstance$");
            });
            if (!key) return null;
            const domFiber = dom[key];
            if (domFiber == null) return null;
            if (domFiber._currentElement) {
                let compFiber = domFiber._currentElement._owner;
                for (let i = 0; i < traverseUp; i++) {
                    if (!compFiber || !compFiber._currentElement) return null;
                    compFiber = compFiber._currentElement._owner;
                }
                return compFiber ? compFiber._instance : null;
            }
            const GetCompFiber = fiber => {
                let parentFiber = fiber.return;
                while (parentFiber && typeof parentFiber.type == "string") {
                    parentFiber = parentFiber.return;
                }
                return parentFiber;
            };
            let compFiber = GetCompFiber(domFiber);
            if (!compFiber) return null;
            for (let i = 0; i < traverseUp; i++) {
                compFiber = GetCompFiber(compFiber);
                if (!compFiber) return null;
            }
            return compFiber.stateNode || compFiber;
        },
        rpcDefaults: { domain: 'http://localhost', port: '16800', path: '/jsonrpc', token: '', dir: 'C:' },
        bcDefaults: { domain: 'http://localhost', port: '8080', path: '/panel/task_add_httpftp_result', user: '', pass: '', dir: '' },
        initDefaultConfig() {
            let value = [
                { name: 'setting_rpc_domain', value: base.rpcDefaults.domain },
                { name: 'setting_rpc_port', value: base.rpcDefaults.port },
                { name: 'setting_rpc_path', value: base.rpcDefaults.path },
                { name: 'setting_rpc_token', value: base.rpcDefaults.token },
                { name: 'setting_rpc_dir', value: base.rpcDefaults.dir },
                { name: 'setting_terminal_type', value: /Mac/i.test(navigator.platform) ? 'mt'
                     : /Win/i.test(navigator.platform) ? 'wc' : 'lt' },
                { name: 'setting_theme_mode', value: 'light' },
                { name: 'setting_theme_color', value: '#09AAFF' },
                { name: 'setting_bitcomet_domain', value: base.bcDefaults.domain },
                { name: 'setting_bitcomet_port', value: base.bcDefaults.port },
                { name: 'setting_bitcomet_path', value: base.bcDefaults.path },
                { name: 'setting_bitcomet_user', value: base.bcDefaults.user },
                { name: 'setting_bitcomet_pass', value: base.bcDefaults.pass },
                { name: 'setting_bitcomet_dir', value: base.bcDefaults.dir },
                { name: 'setting_idm_rpc', value: [{ id: '1', default: true }] },
            ];
            value.forEach((v) => {
                base.getValue(v.name) === undefined && base.setValue(v.name, v.value);
            });
        },
        showSetting() {
            const rpcVal = `${base.getValue('setting_rpc_domain')}:${base.getValue('setting_rpc_port')}${base.getValue('setting_rpc_path')}`;
            const idmId = base._idmId();
            let colorBtn = '';
            ['#09AAFF', '#cc3235', '#526efa', '#518c17', '#ed944b', '#f969a5', '#bca280'].forEach((v) => {
                colorBtn += `<div data-color="${v}" style="background: ${v};border: 1px solid ${v}" class="pl-color-box listener-color ${v === base.getValue('setting_theme_color') ? 'checked' : ''}" tabindex="0" role="button"></div>`;
            });
            let termOpts = '';
            Object.keys(terminalType).forEach(k => {
                termOpts += `<option value="${k}" ${base.getValue('setting_terminal_type') === k ? 'selected' : ''}>${terminalType[k]}</option>`;
            });
            const dom = `<div class="pl-setting-list">
                <div class="pl-setting-row pl-setting-row-click listener-open-idm-setting">
                    <div class="pl-setting-row-main"><div class="pl-setting-row-name">IDM 客户端</div><div class="pl-setting-row-sub">客户端 ID：${base.esc(idmId)}</div></div>
                </div>
                <div class="pl-setting-row pl-setting-row-click listener-open-rpc-setting">
                    <div class="pl-setting-row-main"><div class="pl-setting-row-name">Aria 配置</div><div class="pl-setting-row-sub">${base.esc(rpcVal)}</div></div>
                </div>
                <div class="pl-setting-row pl-setting-row-click listener-open-bc-setting">
                    <div class="pl-setting-row-main"><div class="pl-setting-row-name">BitComet 配置</div><div class="pl-setting-row-sub">${base.esc(base.getValue('setting_bitcomet_domain') || '')}:${base.esc(base.getValue('setting_bitcomet_port') || '')}${base.esc(base.getValue('setting_bitcomet_path') || '')}</div></div>
                </div>
                <div class="pl-setting-row">
                    <div class="pl-setting-row-main"><div class="pl-setting-row-name">终端类型</div></div>
                    <select class="pl-input listener-terminal pl-setting-select">${termOpts}</select>
                </div>
                <div class="pl-setting-row">
                    <div class="pl-setting-row-main"><div class="pl-setting-row-name">主题颜色</div></div>
                    <div class="pl-color">${colorBtn}</div>
                </div>
                <div class="pl-setting-row">
                    <div class="pl-setting-row-main"><div class="pl-setting-row-name">深色模式</div><div class="pl-setting-row-sub listener-theme-mode-sub">${({ light: '浅色', dark: '深色' })[base.getValue('setting_theme_mode') || 'light'] || '浅色'}</div></div>
                    <button type="button" class="pl-input listener-theme-mode pl-setting-theme-btn">${({ light: '浅色', dark: '深色' })[base.getValue('setting_theme_mode') || 'light'] || '浅色'}</button>
                </div>
                <div class="pl-setting-help">帮助：<a href="https://www.youxiaohou.com/zh-cn/motrix.html" target="_blank" rel="noreferrer noopener">RPC 配置说明</a> · <a href="https://www.youxiaohou.com/zh-cn/curl.html" target="_blank" rel="noreferrer noopener">cURL 使用教程</a> · <a href="https://github.com/Wjavan/FerryLink" target="_blank" rel="noreferrer noopener">项目主页</a></div>
            </div>`;
            Swal.fire({
                title: '助手配置',
                html: dom,
                width: 520,
                showCloseButton: true,
                showConfirmButton: false,
                footer: '',
                target: document.body,
                customClass: {
                    container: 'ferrylink-swal-container',
                    popup: 'ferrylink-swal-popup'
                },
                didOpen: () => {
                    const container = Swal.getContainer();
                    const popup = Swal.getPopup();
                    if (container) container.style.setProperty('z-index', '2147483647', 'important');
                    if (popup) popup.style.setProperty('z-index', '2147483647', 'important');
                },
            }).then(() => {
                if (base._settingNav) { base._settingNav = false; return; }
                message.success('设置成功！');
                history.go(0);
            }).catch(err => {
                console.error('[showSetting] Swal.fire error:', err);
            });
            this._bindSettingEvents();
        },
        showRPCSetting(fromSetting) {
            const dom = `<div>
                <div class="pl-dl-warning-bar" style="display:block">本页配置 Aria2 / Motrix 的 JSON-RPC 参数：Aria2 默认端口 6800、Motrix 默认 16800，按实际运行的客户端填写即可。</div>
                <label class="pl-setting-label"><div class="pl-label">RPC主机</div><input type="text" placeholder="主机地址，需带上http(s)://" class="pl-input listener-domain" value="${base.esc(base.getValue('setting_rpc_domain'))}"></label>
                <label class="pl-setting-label"><div class="pl-label">RPC端口</div><input type="text" placeholder="端口号，例如：Motrix为16800" class="pl-input listener-port" value="${base.esc(base.getValue('setting_rpc_port'))}"></label>
                <label class="pl-setting-label"><div class="pl-label">RPC路径</div><input type="text" placeholder="路径，默认为/jsonrpc" class="pl-input listener-path" value="${base.esc(base.getValue('setting_rpc_path'))}"></label>
                <label class="pl-setting-label"><div class="pl-label">RPC密钥</div><input type="text" placeholder="无密钥无需填写" class="pl-input listener-token" value="${base.esc(base.getValue('setting_rpc_token'))}"></label>
                <label class="pl-setting-label"><div class="pl-label">保存路径</div><input type="text" placeholder="留空则使用 aria2 默认下载目录；Windows 示例：C:\\Downloads" class="pl-input listener-dir" value="${base.esc(base.getValue('setting_rpc_dir'))}"></label>
                <div class="pl-setting-actions"><button type="button" class="pl-dl-btn pl-dl-btn-secondary listener-reset-rpc">恢复默认</button><button type="button" class="pl-dl-btn pl-dl-btn-secondary listener-test-rpc">测试连接</button></div>
            </div>`;
            Swal.fire({
                title: 'Aria 配置',
                html: dom,
                showCloseButton: true,
                showConfirmButton: false,
                target: document.body,
                customClass: {
                    container: 'ferrylink-swal-container',
                    popup: 'ferrylink-swal-popup pl-popup-flip'
                },
                didOpen: () => {
                    const container = Swal.getContainer();
                    const popup = Swal.getPopup();
                    if (container) container.style.setProperty('z-index', '2147483647', 'important');
                    if (popup) popup.style.setProperty('z-index', '2147483647', 'important');
                },
                willClose: () => {
                    if (fromSetting) base.showSetting();
                    else { message.success('设置成功！'); history.go(0); }
                },
            });
            this._bindSettingEvents();
        },
        showIDMSetting(fromSetting) {
            const idmId = base._idmId();
            const dom = `<div>
                <label class="pl-setting-label"><div class="pl-label">客户端 ID</div><input type="text" placeholder="IDM 多配置时的客户端编号，默认 1" class="pl-input listener-idm-id" value="${base.esc(idmId)}"></label>
                <div class="pl-setting-tip-text">Client ID 是 IDM 用来区分不同浏览器捕获扩展的编号，多浏览器需各配一个，填错会导致推送失败，一般保持默认 1 即可。取值方法：浏览器进入 IDM 扩展的「管理扩展/调试附加组件」检查视图，在 DevTools 的「应用程序/存储 → 扩展存储 → 本地」里找 client 对应的数字。</div>
            </div>`;
            Swal.fire({
                title: 'IDM 客户端设置',
                html: dom,
                showCloseButton: true,
                showConfirmButton: false,
                target: document.body,
                customClass: {
                    container: 'ferrylink-swal-container',
                    popup: 'ferrylink-swal-popup pl-popup-flip'
                },
                didOpen: () => {
                    const container = Swal.getContainer();
                    const popup = Swal.getPopup();
                    if (container) container.style.setProperty('z-index', '2147483647', 'important');
                    if (popup) popup.style.setProperty('z-index', '2147483647', 'important');
                },
                willClose: () => {
                    if (fromSetting) base.showSetting();
                    else { message.success('设置成功！'); history.go(0); }
                },
            });
            this._bindSettingEvents();
        },
        showBitcometSetting(fromSetting) {
            const domain = base.getValue('setting_bitcomet_domain') || '';
            const port = base.getValue('setting_bitcomet_port') || '8080';
            const path = base.getValue('setting_bitcomet_path') || '/panel/task_add_httpftp_result';
            const user = base.getValue('setting_bitcomet_user') || '';
            const pass = base.getValue('setting_bitcomet_pass') || '';
            const dir = base.getValue('setting_bitcomet_dir') || '';
            const dom = `<div>
                <label class="pl-setting-label"><div class="pl-label">服务器地址</div><input type="text" placeholder="主机地址，需带上http(s)://" class="pl-input listener-bc-domain" value="${base.esc(domain)}"></label>
                <label class="pl-setting-label"><div class="pl-label">服务器端口</div><input type="text" placeholder="端口号，一般为 8080" class="pl-input listener-bc-port" value="${base.esc(port)}"></label>
                <label class="pl-setting-label"><div class="pl-label">请求路径</div><input type="text" placeholder="一般为 /panel/task_add_httpftp_result" class="pl-input listener-bc-path" value="${base.esc(path)}"></label>
                <label class="pl-setting-label"><div class="pl-label">服务器账号</div><input type="text" placeholder="远程下载服务的账号，无账号无需填写" class="pl-input listener-bc-user" value="${base.esc(user)}"></label>
                <label class="pl-setting-label"><div class="pl-label">服务器密码</div><input type="password" placeholder="远程下载服务的密码，无密码无需填写" class="pl-input listener-bc-pass" value="${base.esc(pass)}"></label>
                <label class="pl-setting-label"><div class="pl-label">保存路径</div><input type="text" placeholder="文件下载后保存路径，留空则使用 BitComet 默认目录" class="pl-input listener-bc-dir" value="${base.esc(dir)}"></label>
                <div class="pl-setting-actions"><button type="button" class="pl-dl-btn pl-dl-btn-secondary listener-reset-bc">恢复默认</button><button type="button" class="pl-dl-btn pl-dl-btn-secondary listener-test-bc">测试连接</button></div>
            </div>`;
            Swal.fire({
                title: 'BitComet 配置',
                html: dom,
                showCloseButton: true,
                showConfirmButton: false,
                target: document.body,
                customClass: {
                    container: 'ferrylink-swal-container',
                    popup: 'ferrylink-swal-popup pl-popup-flip'
                },
                didOpen: () => {
                    const container = Swal.getContainer();
                    const popup = Swal.getPopup();
                    if (container) container.style.setProperty('z-index', '2147483647', 'important');
                    if (popup) popup.style.setProperty('z-index', '2147483647', 'important');
                },
                willClose: () => {
                    if (fromSetting) base.showSetting();
                    else { message.success('设置成功！'); history.go(0); }
                },
            });
            this._bindSettingEvents();
        },
        _bindSettingEvents() {
            if (this.settingBound) return;
            this.settingBound = true;
            doc.on('click', '.listener-color', (e) => {
                const picked = e.target.dataset.color;
                if (base.getValue('setting_theme_color') === picked || base._themeSwitching) return;
                base.setValue('setting_theme_color', picked);
                message.success('切换成功！');
                // 主色要重载才生效，让提示先渲染一帧再走
                base._themeSwitching = true;
                setTimeout(() => history.go(0), 150);
            });
            doc.on('keydown', '.listener-color', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.click(); }
            });
            doc.on('click', '.listener-theme-mode', () => {
                const order = ['light', 'dark'];
                const labels = { light: '浅色', dark: '深色' };
                const cur = base.getValue('setting_theme_mode') || 'light';
                const next = order[(order.indexOf(cur) + 1) % order.length] || 'light';
                base.setValue('setting_theme_mode', next);
                base.applyThemeMode();
                const label = labels[next] || '浅色';
                $('.listener-theme-mode').text(label);
                $('.listener-theme-mode-sub').text(label);
            });
            doc.on('input', '.listener-domain', async (e) => {
                base.setValue('setting_rpc_domain', e.target.value);
            });
            doc.on('input', '.listener-port', async (e) => {
                base.setValue('setting_rpc_port', e.target.value);
            });
            doc.on('input', '.listener-path', async (e) => {
                base.setValue('setting_rpc_path', e.target.value);
            });
            doc.on('input', '.listener-token', async (e) => {
                base.setValue('setting_rpc_token', e.target.value);
            });
            doc.on('input', '.listener-dir', async (e) => {
                base.setValue('setting_rpc_dir', e.target.value);
            });
            doc.on('input', '.listener-idm-id', async (e) => {
                const v = (e.target.value || '1').trim() || '1';
                base.setValue('setting_idm_rpc', [{ id: v, default: true }]);
            });
            doc.on('change', '.listener-terminal', async (e) => {
                base.setValue('setting_terminal_type', e.target.value);
            });
            doc.on('click', '.listener-open-rpc-setting', () => {
                base._settingNav = true;
                Swal.close();
                base.showRPCSetting(true);
            });
            doc.on('click', '.listener-open-idm-setting', () => {
                base._settingNav = true;
                Swal.close();
                base.showIDMSetting(true);
            });
            doc.on('click', '.listener-open-bc-setting', () => {
                base._settingNav = true;
                Swal.close();
                base.showBitcometSetting(true);
            });
            doc.on('input', '.listener-bc-domain', async (e) => {
                base.setValue('setting_bitcomet_domain', e.target.value);
            });
            doc.on('input', '.listener-bc-port', async (e) => {
                base.setValue('setting_bitcomet_port', e.target.value);
            });
            doc.on('input', '.listener-bc-path', async (e) => {
                base.setValue('setting_bitcomet_path', e.target.value);
            });
            doc.on('input', '.listener-bc-user', async (e) => {
                base.setValue('setting_bitcomet_user', e.target.value);
            });
            doc.on('input', '.listener-bc-pass', async (e) => {
                base.setValue('setting_bitcomet_pass', e.target.value);
            });
            doc.on('input', '.listener-bc-dir', async (e) => {
                base.setValue('setting_bitcomet_dir', e.target.value);
            });
            doc.on('click', '.listener-test-rpc', async (e) => {
                const $btn = $(e.currentTarget).prop('disabled', true).text('测试中…');
                await base.testRpcConnection();
                $btn.prop('disabled', false).text('测试连接');
            });
            doc.on('click', '.listener-test-bc', async (e) => {
                const $btn = $(e.currentTarget).prop('disabled', true).text('测试中…');
                await base.testBitcometConnection();
                $btn.prop('disabled', false).text('测试连接');
            });
            doc.on('click', '.listener-reset-rpc', () => {
                if (!window.confirm('将重置所有 Aria2 / Motrix 配置为默认值？当前自定义设置会被覆盖。')) return;
                ['setting_rpc_domain', 'setting_rpc_port', 'setting_rpc_path', 'setting_rpc_token', 'setting_rpc_dir']
                    .forEach(k => base.setValue(k, base.rpcDefaults[k.slice('setting_rpc_'.length).toLowerCase()]));
                base.panelNotice('Aria2 / Motrix 配置已恢复默认', 'success');
            });
            doc.on('click', '.listener-reset-bc', () => {
                if (!window.confirm('将重置所有 BitComet 配置为默认值？当前自定义设置会被覆盖。')) return;
                ['setting_bitcomet_domain', 'setting_bitcomet_port', 'setting_bitcomet_path', 'setting_bitcomet_user', 'setting_bitcomet_pass', 'setting_bitcomet_dir']
                    .forEach(k => base.setValue(k, base.bcDefaults[k.slice('setting_bitcomet_'.length).toLowerCase()]));
                base.panelNotice('BitComet 配置已恢复默认', 'success');
            });
        },
        _idmId() {
            const idmCfg = base.getValue('setting_idm_rpc');
            return (Array.isArray(idmCfg) ? (idmCfg.find(i => i && i.default) || idmCfg[0] || {}).id : (idmCfg && idmCfg.id)) || '1';
        },
        async testRpcConnection() {
            const domain = base.getValue('setting_rpc_domain'),
                port = base.getValue('setting_rpc_port'),
                path = base.getValue('setting_rpc_path'),
                token = base.getValue('setting_rpc_token');
            if (!base.validRpcDomain(domain)) { base.panelNotice('请先填写正确的 RPC 主机（仅允许本机或内网地址）', 'error'); return; }
            const url = `${domain}:${port}${path}`;
            try {
                const res = await base.post(url, { id: Date.now(), jsonrpc: '2.0', method: 'aria2.getVersion', params: [`token:${token || ''}`] });
                const v = res && res.result && res.result.version;
                if (v) base.panelNotice('连接成功，aria2 版本 ' + v, 'success');
                else base.panelNotice('Aria2 拒绝请求：' + ((res && res.error && res.error.message) || '未知错误（请检查密钥与路径）'), 'error');
            } catch (e) {
                base.panelNotice('无法连接 RPC（' + domain + ':' + port + '）' + (e && e.message ? '：' + e.message : '') + '，请确认下载器已启动且 RPC 服务已开启', 'error');
            }
        },
        async testBitcometConnection(silent) {
            const domain = base.getValue('setting_bitcomet_domain'),
                port = base.getValue('setting_bitcomet_port'),
                path = base.getValue('setting_bitcomet_path'),
                user = base.getValue('setting_bitcomet_user'),
                pass = base.getValue('setting_bitcomet_pass');
            if (!base.validRpcDomain(domain)) { if (!silent) base.panelNotice('请先填写正确的服务器地址（仅允许本机或内网地址）', 'error'); return false; }
            const url = domain + ':' + port + path;
            const origin = domain + ':' + port;
            try {
                await this.post(url, 'a=1', {
                    'Authorization': 'Basic ' + this.e(user + ':' + pass),
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Cache-Control': 'max-age=0',
                    'Origin': origin,
                    'Referer': origin + '/panel/task_add_httpftp',
                    'User-Agent': navigator.userAgent,
                }, 'text');
                if (!silent) base.panelNotice('连接成功', 'success');
                return true;
            } catch (e) {
                if (silent) return false;
                const msg = (e && e.message) || '';
                if (/401/.test(msg)) base.panelNotice('服务器已连接，但账号或密码错误', 'warning');
                else base.panelNotice('无法连接 BitComet（' + domain + ':' + port + '）' + (msg ? '：' + msg : ''), 'error');
                return false;
            }
        },
        registerMenuCommand() {
            GM_registerMenuCommand('设置', () => {
                this.showSetting();
            });
        },
        panelNotice(text, type, ms) {
            base._lastNotice = text;
            $('.pl-dl-toast').remove();
            const $t = $(`<div class="pl-dl-toast${type ? ' pl-dl-toast-' + type : ''}"><span>${base.esc(text)}</span></div>`);
            $t.attr('role', type === 'error' ? 'alert' : 'status');
            $('body').append($t);
            $t.hide().fadeIn(180);
            clearTimeout(this._noticeTimer);
            this._noticeTimer = setTimeout(() => { $t.fadeOut(200, () => $t.remove()); }, ms || 2500);
        },
        createTip() {
            doc.on('click', '.pl-dl-chip[data-type="downloader"]', (e) => {
                const id = e.currentTarget.dataset.id;
                const oldProto = downloadState.protocol;
                $('.pl-dl-chip[data-type="downloader"]').removeClass('active');
                if (downloadState.downloader === id) {
                    downloadState.downloader = '';
                    downloadState.protocol = '';
                    base._updateProtocolChips();
                    base._updateMainButton();
                    return;
                }
                downloadState.downloader = id;
                $(e.currentTarget).addClass('active');
                const protos = PROTOCOLS[id];
                if (oldProto && protos.some(p => p.id === oldProto)) {
                    downloadState.protocol = oldProto;
                } else {
                    downloadState.protocol = protos.length === 1 ? protos[0].id : '';
                }
                base._updateProtocolChips();
                base._updateMainButton();
            });
            doc.on('click', '.pl-dl-chip[data-type="protocol"]', (e) => {
                if (!downloadState.downloader) { base.panelNotice('请先在上方选择下载器', 'info'); return; }
                downloadState.protocol = e.currentTarget.dataset.id;
                $('.pl-dl-chip[data-type="protocol"]').removeClass('active');
                $(e.currentTarget).addClass('active');
                base._updateMainButton();
                base._paintLinkCells();
                base._syncDefaultBtn();
            });
            doc.on('click', '.listener-dl-execute', async () => {
                if (!downloadState.downloader || !downloadState.protocol) return;
                if (!base.panelFiles || !base.panelFiles.length) return;
                const files = base.panelFiles.map((f, i) => ({ ...f, _idx: i }));
                await base.executeAction(files, base._activeAdapter);
            });
            doc.on('click', '.listener-dl-copy-name', (e) => {
                if (!base.panelFiles || !base.panelFiles.length) return;
                const names = base.panelFiles.filter(f => !f.isFolder).map(f => f.filename);
                const $btn = $(e.currentTarget);
                const old = $btn.text();
                if (!names.length) { $btn.text('没有可复制的文件名'); setTimeout(() => $btn.text(old), 1500); return; }
                base.setClipboard(names.join('\n'));
                $btn.text('复制完成：成功 ' + names.length + '，失败 0');
                setTimeout(() => $btn.text(old), 1500);
            });
            doc.on('click', '.listener-dl-copy-link', (e) => {
                if (!base.panelFiles || !base.panelFiles.length) return;
                const useMedia = downloadState.protocol === 'transcode' && base._hasMediaLink();
                const links = base.panelFiles.filter(f => !f.isFolder).map(f => useMedia ? f.mediaLink : f.dlink).filter(u => u && /^https?:\/\//.test(u));
                const $btn = $(e.currentTarget);
                const old = $btn.text();
                if (!links.length) { $btn.text('没有可复制的链接'); setTimeout(() => $btn.text(old), 1500); return; }
                base.setClipboard(links.join('\n'));
                $btn.text('复制完成：成功 ' + links.length + '，失败 0');
                setTimeout(() => $btn.text(old), 1500);
            });
            doc.on('click', '.listener-dl-set-default', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const cur = base.defaultSelection();
                const same = cur && cur.downloader === downloadState.downloader && cur.protocol === downloadState.protocol;
                if (same) {
                    base.clearDefaultSelection();
                    base.panelNotice('已取消默认下载方式', 'info');
                } else if (downloadState.downloader && downloadState.protocol) {
                    base.setDefaultSelection(downloadState.downloader, downloadState.protocol);
                    base.panelNotice('已设为默认：' + base._defaultNames(), 'success');
                } else {
                    base.panelNotice('请先选择下载器和协议，再设为默认', 'info');
                    return;
                }
                $('#pl-dl-default-btn').replaceWith(base._defaultBtnHtml());
            });
            doc.on('click', '.listener-open-setting', (e) => {
                e.preventDefault();
                e.stopPropagation();
                base.showSetting();
            });
            doc.on('click', '.listener-dl-retry', async () => {
                const adapter = base._activeAdapter;
                if (!adapter) return;
                Swal.close();
                Swal.showLoading();
                try { await adapter.getPCSLink(); }
                catch (err) { Swal.close(); base.renderErrorPanel('获取下载链接失败：' + (err && err.message || '未知错误'), adapter); }
                finally { if (document.querySelector('.swal2-popup.swal2-loading')) Swal.close(); }
            });
        },
        createDownloadIframe() {
            if ($('#downloadIframe').length > 0) return;
            let $div = $('<div style="padding:0;margin:0;display:block"></div>');
            let $iframe = $('<iframe src="about:blank" id="downloadIframe" style="display:none"></iframe>');
            $div.append($iframe);
            $('body').append($div);
        },
        iframeDownload(link) {
            if (!/^https?:\/\//i.test(link)) {
                base.panelNotice('提示：下载链接无效！', 'error');
                return false;
            }
            this.createDownloadIframe();
            $('#downloadIframe').attr('src', link);
            return true;
        },
        // 百度 >50MB 直链绑 UA，浏览器导航 403，得由脚本带认证头取回
        _streamDownload(f, onProgress) {
            return new Promise((resolve) => {
                GM_xmlhttpRequest({
                    method: 'GET',
                    url: f.dlink,
                    headers: base._cdnHeaders(f.dlink),
                    responseType: 'blob',
                    onprogress: (r) => { if (r.total > 0 && onProgress) onProgress(Math.floor(r.loaded * 100 / r.total), r.loaded); },
                    onload: (r) => {
                        // 204 = IDM 把请求接走了，提示一下免得用户以为没反应
                        if (r && r.status === 204) { resolve({ ok: true, by: 'IDM' }); return; }
                        if (!r || r.status < 200 || r.status >= 300 || !r.response) {
                            resolve({ ok: false, why: 'HTTP ' + ((r && r.status) || '?') });
                            return;
                        }
                        const url = URL.createObjectURL(r.response);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = f.filename || 'download';
                        document.body.appendChild(a);
                        a.click();
                        a.remove();
                        setTimeout(() => URL.revokeObjectURL(url), 60000);
                        resolve({ ok: true });
                    },
                    onerror: () => resolve({ ok: false, why: '网络错误' }),
                    ontimeout: () => resolve({ ok: false, why: '超时' }),
                });
            });
        },

        renderDownloadPanel(files, adapter) {
            base.panelFiles = files;
            base._activeAdapter = adapter;
            base._applyDefaultSelection(); // 先套默认，再画 chips

            const fileRows = files.map((f, i) => {
                const gray = f.isFolder || !f.dlink || !/^https?:\/\//.test(f.dlink);
                let reason = '';
                if (f.isFolder) reason = '文件夹请进入后选择文件';
                else if (!f.dlink) reason = '该文件未返回下载链接（可能已失效或被禁止下载）';
                else if (!/^https?:\/\//.test(f.dlink)) reason = f.dlink;
                const linkText = f.dlink && /^https?:\/\//.test(f.dlink) ? f.dlink : reason;
                return `<div class="pl-dl-file-row${gray ? ' pl-dl-gray' : ''}" data-index="${i}">
                    <div class="pl-dl-file-name" title="${base.esc(f.filename)}">${base.esc(f.filename)}</div>
                    <div class="pl-dl-file-size">${f.sizeStr || ''}</div>
                    <div class="pl-dl-file-link" title="${base.esc(linkText)}">${base.esc(linkText)}</div>
                    <div class="pl-dl-file-status" data-status-index="${i}"></div>
                </div>`;
            }).join('');

            const dlChips = DOWNLOADERS.map(d => {
                const active = downloadState.downloader === d.id ? ' active' : '';
                return `<div class="pl-dl-chip${active}" data-type="downloader" data-id="${d.id}">${d.name}</div>`;
            }).join('');

            const intro = '已支持六大网盘直链；下载方式覆盖浏览器/IDM/Aria2/Motrix/XDown/BitComet/终端。未选择下载器时展示全部协议，选择下载器后自动筛选可用协议。百度直链带有效期，获取后请尽快使用。';
            const badCount = files.filter(f => f.isFolder || !f.dlink || !/^https?:\/\//.test(f.dlink)).length;
            const countLine = files.length === 0 ? '' : `<div class="pl-dl-file-count">共 ${files.length} 个文件${badCount ? '，' + badCount + ' 个不可操作' : ''}</div>`;
            const emptyHtml = files.length === 0 ? '<div class="pl-dl-empty"><svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h4"/></svg><div class="pl-dl-empty-title">请先在页面中选择文件</div></div>' : `${countLine}<div class="pl-dl-files" id="pl-dl-files">${fileRows}</div>`;

            const html = `<div class="pl-dl-panel">
                <div class="pl-dl-intro">${intro}</div>
                <div class="pl-dl-warning-bar" id="pl-dl-rpc-warning">尚未配置 Aria2 / Motrix 的 RPC 参数，请先完成配置</div>
                ${emptyHtml}
                <div class="pl-dl-section">
                    <div class="pl-dl-section-label">选择下载器 ${base._defaultBtnHtml()}</div>
                    <div class="pl-dl-chips">${dlChips}</div>
                </div>
                <div class="pl-dl-section">
                    <div class="pl-dl-section-label" id="pl-dl-protocol-label">${base._protocolLabelText()}</div>
                    <div class="pl-dl-chips" id="pl-dl-protocol-chips">${base._protocolChipsHtml()}</div>
                </div>
                <div class="pl-dl-actions">
                    <button class="pl-dl-btn pl-dl-btn-primary listener-dl-execute" disabled>请先选择下载器</button>
                    <button class="pl-dl-btn pl-dl-btn-secondary listener-dl-copy-name">复制文件名</button>
                    <button class="pl-dl-btn pl-dl-btn-secondary listener-dl-copy-link">复制下载链接</button>
                    <button class="pl-dl-btn pl-dl-btn-secondary pl-dl-btn-right listener-open-setting">助手设置</button>
                </div>
                <div class="pl-dl-help">帮助：<a href="https://www.youxiaohou.com/zh-cn/motrix.html" target="_blank" rel="noreferrer noopener">RPC 配置说明</a> · <a href="https://www.youxiaohou.com/zh-cn/curl.html" target="_blank" rel="noreferrer noopener">cURL 使用教程</a> · <a href="https://github.com/Wjavan/FerryLink" target="_blank" rel="noreferrer noopener">项目主页</a></div>
            </div>`;

            Swal.fire({
                title: 'FerryLink 下载助手',
                html, allowOutsideClick: false,
                showCloseButton: true, showConfirmButton: false,
                width: 860,
                padding: '16px 24px 16px',
                customClass: { popup: 'pl-popup' },
                willClose: () => { base._resetData(); },
            });
            base._updateMainButton();
            base._paintLinkCells();
        },
        renderErrorPanel(errMsg, adapter) {
            base._activeAdapter = adapter;
            base.panelFiles = [];
            Swal.fire({
                title: '获取下载链接失败',
                html: `<div class="pl-dl-panel"><div class="pl-dl-error">${base.esc(errMsg)}<br><button class="pl-dl-retry listener-dl-retry">重试</button></div></div>`,
                allowOutsideClick: false,
                showCloseButton: true, showConfirmButton: false,
                width: 860,
                customClass: { popup: 'pl-popup' },
            });
        },
        _updateMainButton() {
            const $btn = $('.listener-dl-execute');
            if (!$btn.length) return;
            if (!base.panelFiles || !base.panelFiles.length) { $btn.prop('disabled', true).text('请先在页面中选择文件'); return; }
            if (!downloadState.downloader) { $btn.prop('disabled', true).text('请先选择下载器'); return; }
            const protos = PROTOCOLS[downloadState.downloader];
            if (!downloadState.protocol && protos.length === 1) {
                downloadState.protocol = protos[0].id;
                $('.pl-dl-chip[data-type="protocol"]').removeClass('active');
                $(`.pl-dl-chip[data-type="protocol"][data-id="${downloadState.protocol}"]`).addClass('active');
            }
            if (!downloadState.protocol) { $btn.prop('disabled', true).text('请先选择下载协议'); return; }
            // 无转码档时回落，别把无效选择留给用户
            if (downloadState.protocol === 'transcode' && !base._hasMediaLink()) {
                downloadState.protocol = 'http';
                $('.pl-dl-chip[data-type="protocol"]').removeClass('active');
                $('.pl-dl-chip[data-type="protocol"][data-id="http"]').addClass('active');
            }
            const proto = protos.find(p => p.id === downloadState.protocol);
            if (!proto) { $btn.prop('disabled', true).text('请先选择下载协议'); return; }
            $btn.prop('disabled', false);
            if (proto.btn) $btn.text(proto.btn);
            else if (proto.act === 'nav') $btn.text('开始下载');
            else if (proto.act === 'push') $btn.text('推送下载任务');
            else if (proto.act === 'copy') $btn.text('复制命令');
        },
        _protocolLabelText() {
            return downloadState.downloader ? '可用协议' : '全部协议（选择下载器后自动筛选）';
        },
        // 转码档只有迅雷给，判据只留这一处
        _hasMediaLink() {
            return (base.panelFiles || []).some(f => f.mediaLink);
        },
        // 站点受限的协议只这一处判据，chip 与默认值共用
        _protoUsable(p) {
            const isXunlei = /xunlei\.com/.test(String(location && location.host || ''));
            if (p.id === 'seg' && !isXunlei) return false;
            if (p.id === 'transcode' && (!isXunlei || !base._hasMediaLink())) return false;
            return true;
        },
        _protoChip(p) {
            if (!base._protoUsable(p)) return '';
            const active = downloadState.protocol === p.id ? ' active' : '';
            return `<div class="pl-dl-chip${active}" data-type="protocol" data-id="${p.id}" title="${base.esc(PROTO_TITLES[p.id] || '')}">${p.name}</div>`;
        },
        _protocolChipsHtml() {
            if (!downloadState.downloader) {
                return ALL_PROTOCOLS.map(g => `
                    <div class="pl-dl-proto-group">
                        <div class="pl-dl-proto-group-label">${g.label}</div>
                        <div class="pl-dl-chips">${g.items.map(p => base._protoChip(p)).join('')}</div>
                    </div>`).join('');
            }
            return PROTOCOLS[downloadState.downloader].map(p => base._protoChip(p)).filter(Boolean).join('');
        },
        // 落选提示只在多选时给
        _paintLinkCells() {
            const useMedia = downloadState.protocol === 'transcode' && base._hasMediaLink();
            const missTip = useMedia && (base.panelFiles || []).length > 1;
            (base.panelFiles || []).forEach((f, i) => {
                const url = (useMedia ? f.mediaLink : f.dlink) || '';
                const ok = /^https?:\/\//.test(url);
                const text = ok ? url : (f.isFolder ? '文件夹请进入后选择文件' : (missTip ? '该文件没有转码档' : (url || '该文件未返回下载链接（可能已失效或被禁止下载）')));
                const $row = $('.pl-dl-file-row[data-index="' + i + '"]');
                $row.toggleClass('pl-dl-gray', !!f.isFolder || !ok);
                $row.children('.pl-dl-file-link').text(text).attr('title', text);
            });
        },
        _updateProtocolChips() {
            const $c = $('#pl-dl-protocol-chips');
            if (!$c.length) return;
            $('#pl-dl-protocol-label').text(base._protocolLabelText());
            $c.html(base._protocolChipsHtml());
            base._paintLinkCells();
            base._syncDefaultBtn();
        },
        async executeAction(files, adapter) {
            if (!downloadState.downloader || !downloadState.protocol) return;
            const protos = PROTOCOLS[downloadState.downloader];
            const proto = protos.find(p => p.id === downloadState.protocol);
            if (!proto) return;
            // 只换地址不换通道，执行器只认 dlink
            if (proto.id === 'transcode') {
                const usable = files.filter(f => !f.isFolder && f.mediaLink && /^https?:\/\//.test(f.mediaLink));
                const skipped = files.filter(f => !f.isFolder).length - usable.length;
                if (skipped > 0) base.panelNotice(skipped + ' 个文件没有转码档，已跳过', 'warning');
                if (!usable.length) return;
                files = usable.map(f => ({ ...f, dlink: f.mediaLink }));
            }
            const valid = files.filter(f => !f.isFolder && f.dlink && /^https?:\/\//.test(f.dlink));
            if (!valid.length) { base.panelNotice('没有可操作的文件', 'warning'); return; }
            // 50MB 预扫描只管浏览器下载和 aria2c
            const over = (proto.act === 'nav' || proto.id === 'aria2c') ? valid.filter(f => base._isBigBaiduLink(f)) : [];
            if (over.length) {
                const list = over.map(f => base.esc(f.filename) + '（' + base.sizeFormat(f.rawSize) + '）').join('<br>');
                const tip = proto.act === 'nav'
                    ? '<br><br>这些文件会由脚本带认证头取回（进度显示在对应那一行）；失败时请改用 IDM / Aria2 / curl'
                    : '<br><br>命令行下载需携带认证头（脚本已自动附加）';
                const r = await Swal.fire({
                    title: '文件超过 50MB',
                    html: '以下文件超过 50MB，浏览器自带下载会被服务器 403 拒绝：<br>' + list + tip,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: '继续下载',
                    cancelButtonText: '重新选择',
                });
                base.renderDownloadPanel(base.panelFiles || [], base._activeAdapter);
                if (!r.isConfirmed) return;
            }
            if (proto.act === 'nav') await base._executeNav(valid, adapter, proto);
            else if (proto.act === 'push') await base._executePush(valid, adapter);
            else if (proto.act === 'copy') await base._executeCopy(valid, adapter);
        },
        async _executeNav(files, adapter, proto) {
            const $btn = $('.listener-dl-execute');
            if (files.length > 5) base.panelNotice('共 ' + files.length + ' 个文件，逐个触发中…如遇拦截可改用推送/复制', 'info');
            $btn.text('正在逐个触发 ' + files.length + ' 个下载…').prop('disabled', true);
            let ok = 0, fail = 0;
            for (let i = 0; i < files.length; i++) {
                const f = files[i];
                const $st = $('.pl-dl-file-status[data-status-index="' + f._idx + '"]');
                if (base._isBigBaiduLink(f)) {
                    const bar = base._paintBar($st, '下载中');
                    bar.paint(0);
                    const r = await base._streamDownload(f, bar.paint);
                    bar.done();
                    if (r.ok) {
                        ok++;
                        $st.html(MARK_OK);
                        if (r.by) base.panelNotice('已成功唤起 ' + r.by + '，请查看 ' + r.by + ' 下载框！', 'success');
                    } else {
                        fail++;
                        $st.html(MARK_NO);
                        base.panelNotice('下载失败：' + r.why + '。大文件请用 IDM/Aria2/cURL。', 'error');
                    }
                } else if (proto && proto.id === 'seg' && base._useSegDownload(f)) {
                    const bar = base._paintBar($st, '多链下载');
                    bar.paint(0);
                    const r = await base._segDownload(f, bar.paint);
                    bar.done();
                    if (r.ok) {
                        ok++; $st.html(MARK_OK);
                        base.panelNotice('已下载 ' + f.filename + '（' + base.sizeFormat(f.rawSize || 0) + '）', 'success', 5000);
                    } else { fail++; $st.html(MARK_NO); base.panelNotice('多链下载失败：' + r.why, 'error'); }
                } else {
                    const r = base.iframeDownload(f.dlink);
                    if (r) { ok++; $st.html(MARK_OK); } else { fail++; $st.html(MARK_NO); }
                }
                if (i < files.length - 1) await base.sleep(800);
            }
            $btn.text('下载完成：成功 ' + ok + '，失败 ' + fail);
            setTimeout(() => base._updateMainButton(), 4000);
        },
        // 进度画在「链接」格上：两个下载路径共用，别各写一份
        _paintBar($st, label) {
            const $bar = $st.siblings('.pl-dl-file-link');
            const linkText = $bar.text();
            const dark = $(document.body).hasClass('fl-dark');
            const track = dark ? '#3f4041' : '#eef0f2';
            let lastPaint = 0, lastLoaded = 0, lastT = 0, spd = 0;
            const t0 = Date.now();
            const fmt = (p) => (p >= 100 ? '100' : p.toFixed(1));
            return {
                paint: (pct, loaded) => {
                    const now = Date.now();
                    // 500ms 一帧界面不闪；速度按 1 秒增量算，窗口太短数字跟着抖
                    if (pct !== 0 && pct !== 100 && now - lastPaint < 500) return;
                    lastPaint = now;
                    if (typeof loaded === 'number' && loaded > 0) {
                        const dt = (now - lastT) / 1000;
                        if (lastT && dt >= 1) {
                            spd = Math.max(0, (loaded - lastLoaded) / dt);
                            lastLoaded = loaded; lastT = now;
                        } else if (!lastT) {
                            const sec = (now - t0) / 1000;
                            lastLoaded = loaded; lastT = now;
                            if (sec > 0.5) spd = loaded / sec;
                        }
                    }
                    $bar.css({
                        borderRadius: '8px', textAlign: 'center', fontFamily: 'inherit',
                        background: 'linear-gradient(to right, ' + (color || '#09AAFF') + ' ' + pct + '%, ' + track + ' ' + pct + '%)',
                        color: pct > 50 ? '#fff' : (dark ? '#e8eaed' : '#606266'),
                    }).text(label + ' ' + fmt(pct) + '%' + (spd > 0 ? ' · ' + base.sizeFormat(spd) + '/s' : ''));
                },
                done: () => $bar.removeAttr('style').text(linkText),
            };
        },
        // 只在迅雷上开：其他网盘的 CDN 能不能并发尚未确认
        _useSegDownload(f) {
            return /xunlei\.com/.test(location.host) && !!f.dlink;
        },
        // 多连接下载：服务端按连接限速，开多个连接线性叠加
        _segDownload(f, onProgress) {
            const THREAD = 4;                       // 并发连接数，再多会被服务端拒
            const CHUNK = 4 * 1024 * 1024;          // 每次请求 4MB：太大就撞超时，太小请求头开销高
            const WORK_TIMEOUT = 60000;             // 连续 60s 无进展就放弃该块
            const total = f.rawSize || 0;
            const headers = base._cdnHeaders(f.dlink);
            const got = {};
            const done = [];
            let finished = 0;
            const t0 = Date.now();
            const report = () => {
                let sum = finished;
                for (const k in got) sum += got[k];
                if (onProgress && total > 0) onProgress(Math.min(99.9, sum * 100 / total), sum);
            };
            const reqs = new Map();              // 在途请求，看门狗判定慢就全掐掉
            const abortOne = (idx) => { const rq = reqs.get(idx); if (rq) { try { rq.abort(); } catch (e) { } } };
            const abortAll = () => { reqs.forEach(r => { try { r.abort(); } catch (e) { } }); reqs.clear(); };
            let slowAbort = false;
            const fire = (idx, start, end) => new Promise((resolve) => {
                let timer = null, settled = false;
                const finish = (v) => {
                    settled = true;
                    if (timer) clearTimeout(timer);
                    reqs.delete(idx);
                    resolve(v);
                };
                const arm = () => {
                    if (settled) return;
                    if (timer) clearTimeout(timer);
                    timer = setTimeout(() => {
                        abortOne(idx);
                        finish({ ok: false, why: '超时' });
                    }, WORK_TIMEOUT);
                };
                arm();
                reqs.set(idx, GM_xmlhttpRequest({
                    method: 'GET',
                    url: f.dlink,
                    headers: Object.assign({ Range: 'bytes=' + start + '-' + end }, headers),
                    responseType: 'arraybuffer',
                    onprogress: (r) => {
                        if (r && r.loaded) { got[idx] = r.loaded; arm(); report(); }
                    },
                    onload: (r) => {
                        if (r.status === 206 || r.status === 200) { got[idx] = end - start + 1; report(); finish({ ok: true, buf: r.response }); }
                        else finish({ ok: false, why: 'HTTP ' + r.status });
                    },
                    onerror: () => finish({ ok: false, why: '网络错误' }),
                    ontimeout: () => finish({ ok: false, why: '超时' }),
                }));
            });
            return (async () => {
                if (!total) return { ok: false, why: '取不到文件大小' };
                const chunks = [];
                for (let off = 0; off < total; off += CHUNK) {
                    chunks.push({ start: off, end: Math.min(off + CHUNK - 1, total - 1) });
                }
                let next = 0, fail = 0;
                const watchdog = setInterval(() => {
                    const sec = (Date.now() - t0) / 1000;
                    if (sec < 60) return;
                    const sum = finished + Object.keys(got).reduce((a, k) => a + got[k], 0);
                    const rate = sum / 1024 / sec;
                    if (rate < 60) {
                        slowAbort = true; abortAll();
                        clearInterval(watchdog);
                    }
                }, 10000);
                const worker = async (idx) => {
                    while (next < chunks.length) {
                        if (slowAbort || fail >= 6) return;
                        const me = next++;
                        const c = chunks[me];
                        let r = null;
                        for (let t = 0; t < 3; t++) {
                            if (slowAbort) return;
                            got[idx] = 0;
                            r = await fire(idx, c.start, c.end);
                            if (r.ok && r.buf) break;
                            // 503 = 服务端嫌连接多，退避要比普通错误久
                            const wait = /503/.test(r.why || '') ? 2000 * (t + 1) : 500 * (t + 1);
                            await base.sleep(wait);
                        }
                        if (!r || !r.ok || !r.buf) { fail++; got[idx] = 0; return; }
                        done[me] = r.buf; finished += r.buf.byteLength; delete got[idx]; report();
                    }
                };
                await Promise.all(Array.from({ length: Math.min(THREAD, chunks.length) }, (_, i) => worker(i)));
                clearInterval(watchdog);
                if (slowAbort) return { ok: false, why: '节点速度过低，已停止' };
                const missing = chunks.findIndex((c, i) => !done[i]);
                if (missing >= 0) return { ok: false, why: fail ? '部分分块失败' : '有分块未完成' };
                if (onProgress) onProgress(100, total);
                const url = URL.createObjectURL(new Blob(done));
                const a = document.createElement('a');
                a.href = url;
                a.download = f.filename || 'download';
                document.body.appendChild(a);
                a.click();
                a.remove();
                setTimeout(() => URL.revokeObjectURL(url), 120000);
                return { ok: true };
            })();
        },
        async _executePush(files, adapter) {
            const $btn = $('.listener-dl-execute');
            const pid = downloadState.protocol;
            if (pid === 'idm') {
                $btn.text('正在推送 ' + files.length + ' 个任务至 IDM…').prop('disabled', true);
                let ok = 0, fail = 0;
                for (let f of files) {
                    let h = {};
                    const r = await base.sendLinkToIDM(f.dlink, f.filename, f.rawSize || 0, base._cdnHeaders(f.dlink));
                    if (r === 'success') { ok++; $('.pl-dl-file-status[data-status-index="' + f._idx + '"]').html(MARK_OK); }
                    else { fail++; $('.pl-dl-file-status[data-status-index="' + f._idx + '"]').html(MARK_NO); }
                }
                $btn.text('推送完成：成功 ' + ok + '，失败 ' + fail);
                if (fail > 0) base.panelNotice('部分文件推送失败：IDM 未响应', 'error'); else if (ok > 0) base.panelNotice('已推送至 IDM', 'success');
                setTimeout(() => base._updateMainButton(), 4000);
            } else if (pid === 'rpc') {
                const d = base.getValue('setting_rpc_domain'), p = base.getValue('setting_rpc_port'), pa = base.getValue('setting_rpc_path');
                if (!d || !p || !pa) { $('#pl-dl-rpc-warning').show(); base.showRPCSetting(false); return; }
                $('#pl-dl-rpc-warning').hide();
                $btn.text('正在推送 ' + files.length + ' 个任务至 RPC…').prop('disabled', true);
                let ok = 0, fail = 0;
                for (let f of files) {
                    const $cell = $('.pl-dl-file-status[data-status-index="' + f._idx + '"]');
                    base._lastNotice = '';   // 清掉上一条，免得把别人的提示当成本次失败原因
                    const r = await adapter.sendLinkToRPC(f.filename, f.dlink);
                    if (r === 'success') { ok++; $cell.html(MARK_OK); }
                    else { fail++; $cell.html(MARK_NO); base._markFailWithReason($cell, base._lastNotice); }
                }
                $btn.text('推送完成：成功 ' + ok + '，失败 ' + fail);
                if (fail > 0) base.panelNotice('部分文件推送失败，原因见各行说明', 'error'); else if (ok > 0) base.panelNotice('已推送至 Aria2，下载已开始', 'success');
                setTimeout(() => base._updateMainButton(), 4000);
            } else if (pid === 'bc-rpc') {
                // 先探远程，通就静默推送，不通调本地 BC
                // 探活上限 2.5s：点击的激活态只有 5s，卡住就把导航机会耗光
                const remote = await Promise.race([
                    base.testBitcometConnection(true),
                    base.sleep(2500).then(() => false),
                ]);
                if (!remote) { base._launchBC(files); return; }
                $btn.text('正在推送 ' + files.length + ' 个任务至 BitComet…').prop('disabled', true);
                let ok = 0, fail = 0;
                for (let f of files) {
                    const $cell = $('.pl-dl-file-status[data-status-index="' + f._idx + '"]');
                    base._lastNotice = '';
                    const r = await base.sendLinkToBitcomet(f.filename, f.dlink, base._cdnHeaders(f.dlink));
                    if (r === 'success') { ok++; $cell.html(MARK_OK); }
                    else { fail++; $cell.html(MARK_NO); base._markFailWithReason($cell, base._lastNotice); }
                }
                $btn.text('推送完成：成功 ' + ok + '，失败 ' + fail);
                if (ok > 0) base.panelNotice('已推送至 BitComet', 'success');
                setTimeout(() => base._updateMainButton(), 4000);
            }
        },
        _markFailWithReason($cell, why) {
            const text = why || '推送失败（未返回原因）';
            $cell.siblings('.pl-dl-file-link').text(text).attr('title', text);
        },
        _launchBC(files) {
            const $btn = $('.listener-dl-execute');
            const adapter = base._activeAdapter;
            if (!adapter) return;
            let ok = 0, fail = 0, delay = 0;
            files.forEach((f, i) => {
                const idx = (f._idx != null) ? f._idx : i;
                let b = '';
                try { b = adapter.convertLinkToBC(f.dlink, f.filename, panInfo.ua || navigator.userAgent); } catch (e) { b = ''; }
                if (typeof b === 'object') b = b.link || '';
                const url = decodeURIComponent(b || '');
                const $cell = $('.pl-dl-file-status[data-status-index="' + idx + '"]');
                if (!/^bc:\/\//i.test(url)) { fail++; $cell.html(MARK_NO); return; }
                setTimeout(() => {
                    const a = document.createElement('a');
                    a.href = url;
                    a.style.display = 'none';
                    document.body.appendChild(a);
                    a.click();
                    setTimeout(() => a.remove(), 0);
                }, delay);
                delay += 600;   // 多个任务错开，避免连续导航被浏览器合并/丢弃
                ok++;
                $cell.html(MARK_OK);
            });
            $btn.text('推送成功：成功 ' + ok + '，失败 ' + fail);
            if (fail > 0) base.panelNotice('调起失败 ' + fail + ' 个：bc:// 地址生成失败', 'error');
            setTimeout(() => base._updateMainButton(), 4000);
        },
        async _executeCopy(files, adapter) {
            const $btn = $('.listener-dl-execute');
            $btn.text('正在生成命令…').prop('disabled', true);
            const pid = downloadState.protocol;
            let parts = [];
            for (let f of files) {
                let cmd = '';
                if (pid === 'aria2c') {
                    let a = adapter.convertLinkToAria(f.dlink, f.filename, panInfo.ua || navigator.userAgent);
                    if (typeof a === 'object') a = encodeURIComponent(a.link || a.text || '');
                    cmd = decodeURIComponent(a);
                } else if (pid === 'curl') {
                    let c = adapter.convertLinkToCurl(f.dlink, f.filename, panInfo.ua || navigator.userAgent);
                    if (typeof c === 'object') c = encodeURIComponent(c.link || '');
                    cmd = decodeURIComponent(c);
                } else if (pid === 'bc') {
                    let b = adapter.convertLinkToBC(f.dlink, f.filename, panInfo.ua || navigator.userAgent);
                    if (typeof b === 'object') b = encodeURIComponent(b.link || '');
                    cmd = decodeURIComponent(b);
                } else {
                    cmd = f.dlink;   // XDown 等：复制原始直链
                }
                parts.push(cmd);
                $('.pl-dl-file-status[data-status-index="' + f._idx + '"]').html(MARK_OK);
            }
            base.setClipboard(parts.join('\n'));
            $btn.text('复制完成：成功 ' + parts.length + '，失败 0');
            setTimeout(() => base._updateMainButton(), 4000);
        },


        standHeaders(headers = {}, addDefault = false) {
            if (!headers) return {};
            if (typeof headers === 'string') {
                const raw = {};
                headers.split(/[\r\n]+/).forEach(line => {
                    if (!line.trim() || !line.includes(':')) return;
                    const [key, ...rest] = line.split(':');
                    raw[key.trim().toLowerCase()] = rest.join(':').trim();
                });
                headers = raw;
            }
            let out = {};
            for (let key in headers) {
                const value = typeof headers[key] === 'object' ? JSON.stringify(headers[key]) : String(headers[key]);
                if (!value) continue;
                out[key.toLowerCase().split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('-')] = value;
            }
            if (addDefault) return out;
            return {
                "Cache-Control": "no-cache",
                "Pragma": "no-cache",
                "User-Agent": navigator.userAgent,
                "Referer": `${location.origin}/`,
                ...out
            };
        },
                _isBigBaiduLink(f) {
                    return /d\.pcs\.baidu\.com/.test(f.dlink || '') && (f.rawSize || 0) > 50 * 1024 * 1024;
                },
                _cdnHeaders(link) {
                    const h = {};
                    if (/d\.pcs\.baidu\.com/.test(link)) h['User-Agent'] = 'pan.baidu.com';
                    if (/xunlei\.com/.test(link)) {
                        const xc = xunlei && xunlei._getAuthCookie ? xunlei._getAuthCookie() : '';
                        if (xc) h['Cookie'] = xc;
                    }
                    if (/quark\.cn/.test(link)) {
                        h['User-Agent'] = LOCAL_CONFIG.quark.ua;
                        h['Cookie'] = String(document.cookie);
                    }
                    return h;
                },
                // bc:// 参数名按官方文档：url / refer / cookie / user_agent，写成 referrer 客户端不认
                _bc(link, filename, headers) {
                    const h = this.standHeaders(headers, true);
                    const p = [`url=${encodeURIComponent(link)}`];
                    if (h['Referer']) p.push('refer=' + encodeURIComponent(h['Referer']));
                    if (h['User-Agent']) p.push('user_agent=' + encodeURIComponent(h['User-Agent']));
                    if (h['Cookie']) p.push('cookie=' + encodeURIComponent(h['Cookie']));
                    return encodeURIComponent(`bc://http/${this.e(`AA/${encodeURIComponent(filename)}/?${p.join('&')}ZZ`)}`);
                },
                async sendLinkToBitcomet(filename, link, headers) {
                    const domain = base.getValue('setting_bitcomet_domain');
                    const port = base.getValue('setting_bitcomet_port');
                    const path = base.getValue('setting_bitcomet_path');
                    const user = base.getValue('setting_bitcomet_user');
                    const pass = base.getValue('setting_bitcomet_pass');
                    const dir = base.getValue('setting_bitcomet_dir') || '';
                    if (!base.validRpcDomain(domain)) {
                        base.panelNotice('BitComet 服务器地址无效，仅允许本机或内网地址', 'error');
                        return 'fail';
                    }
                    const url = domain + ':' + port + path;
                    const origin = domain + ':' + port;   // BitComet 面板自身的 origin
                    headers = this.standHeaders(headers);
                    const data = new URLSearchParams();
                    data.set('url', link);
                    if (dir) data.set('save_path', dir);
                    data.set('file_name', filename);
                    data.set('connection', '200');
                    for (const [k, v] of Object.entries(headers)) {
                        const key = k.toLowerCase();
                        if (key === 'referer') data.set('referrer', v);
                        else if (key === 'user-agent') data.set('user_agent', v);
                        else if (key === 'cookie') data.set('cookie', v);
                    }
                    try {
                        const res = await this.post(url, data.toString(), {
                            'Authorization': 'Basic ' + this.e(user + ':' + pass),
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Cache-Control': 'max-age=0',
                            'Origin': origin,
                            'Referer': origin + '/panel/task_add_httpftp',
                            'User-Agent': navigator.userAgent,
                        }, 'text');
                        if (res && String(res).includes('Add task failed!')) {
                            base.panelNotice('BitComet 添加任务失败', 'error');
                            return 'fail';
                        }
                        return 'success';
                    } catch (e) {
                        base.panelNotice('无法连接 BitComet（' + domain + ':' + port + '）' + (e && e.message ? '：' + e.message : ''), 'error');
                        return 'fail';
                    }
                },
        async sendLinkToIDM(link, filename, filesize, headers = {}) {
            const list = base.getValue('setting_idm_rpc') || [];
            const rpc = list.find(i => i && i.default) || list[0] || { id: '1' };
            if (!this.sendLinkToIDM.lock) this.sendLinkToIDM.lock = Promise.resolve();
            return this.sendLinkToIDM.lock = this.sendLinkToIDM.lock.then(async () => {
                headers = this.standHeaders(headers);
                if (!this.sendLinkToIDM.seq) this.sendLinkToIDM.seq = 1;
                const seq = this.sendLinkToIDM.seq;
                const time = Date.now();
                // IDM 监听 127.0.0.1:1001，是本机接口，不跨域
                const url = `http://127.0.0.1:1001/client/${encodeURIComponent(rpc.id)}?seq=${seq}`;
                const ext = base.getExtension(filename);
                // IDM 头解析死板，少个结尾换行整块被拒
                const headersText = Object.entries(headers).map(([k, v]) => `${k}: ${v}`).join('\n') + '\n';
                // 长度前缀是字节数，文件名用 Blob().size
                const format = (key, val) => {
                    if (val === undefined || val === null) return '';
                    const str = String(val);
                    return `${key}=${new Blob([str]).size}:${str}`;
                };
                const fields = [
                    format(4, ext),
                    format(6, link),
                    format(7, location.origin),
                    format(11, headersText),
                    format(100, filename),
                    format(122, 4)
                ];
                // 信封格式没文档，从左往右读
                const data = `MSG#${seq}#13#1#10241:${seq + 1000}:0:${time}:0:1:2:${filesize || 0}:0,${fields.join(',')};`;
                
                const raw = await new Promise((resolve) => {
                    GM_xmlhttpRequest({
                        method: "POST", url, data,
                        headers: { "Content-Type": "text/plain" },
                        // withCredentials 关掉会 403
                        withCredentials: true,
                        timeout: 15000,
                        onload: (r) => resolve(r.responseText || r.response || ''),
                        ontimeout: () => resolve(''),
                        onerror: () => resolve(''),
                    });
                });
                const res = raw || false;
                this.sendLinkToIDM.seq++;
                if (res && String(res).endsWith('3;')) {
                    return 'success';
                }
                return 'fail';
            });
        },

        listenElement(element, callback) {
            if (!element) return;
            if (watched[element]) return;
            watched[element] = true;
            const checkInterval = 500, warnAfter = 15000;
            let everFound = false, warned = false;
            const startAt = Date.now();
            function checkElement() {
                setTimeout(checkElement, checkInterval);
                if (document.querySelector(element)) {
                    everFound = true;
                    callback();
                }
                if (!everFound && !warned && !document.querySelector('.pl-button') && Date.now() - startAt > warnAfter) {
                    warned = true;
                    console.warn('[FerryLink] 挂载点未出现：' + element + '（15 秒内一直没找到，页面结构可能已改）');
                }
            }
            checkElement();
        },
        addPanLinkerStyle() {
            color = base.getValue('setting_theme_color');
            const darkRules = `
            .ferrylink-swal-popup, .pl-popup { background: #1d1e1f !important; color: #d8d9da; }
            .swal2-title { color: #e8eaed; }
            .swal2-html-container { color: #d8d9da; }
            .swal2-close { color: #8b8e93; }
            .swal2-close:hover { color: #d8d9da; }
            .swal2-confirm { background-color: ${color} !important; }
            .swal2-cancel { background-color: #3a3b3d !important; color: #d8d9da !important; }
            .pl-setting-row { border-bottom-color: #343536; }
            .pl-setting-row-name { color: #e8eaed; }
            .pl-setting-row-sub, .pl-setting-tip-text, .pl-setting-help { color: #8b8e93; }
            .pl-setting-row-click:hover { background: #2a2b2c; }
            .pl-setting-row-click::after { color: #8b8e93; }
            .pl-setting-row-click:hover::after { color: ${color}; }
            .pl-label { color: #e8eaed; }
            .pl-input { background: #2a2b2c; border-color: #3f4041; color: #e8eaed; }
            .pl-input::placeholder { color: #6b6e73; }
            .pl-color-box { border-color: #3f4041; }
            .pl-color-box.checked { border-color: #e8eaed !important; }
            .pl-dl-panel { color: #d8d9da; }
            .pl-dl-intro, .pl-dl-help, .pl-dl-file-count, .pl-dl-section-label, .pl-dl-proto-group-label { color: #8b8e93; }
            .pl-dl-files { border-top-color: #343536; border-bottom-color: #343536; }
            .pl-dl-section { border-top-color: #343536; }
            .pl-dl-file-row:hover { background: #2a2b2c; }
            .pl-dl-file-name { color: #e8eaed; }
            .pl-dl-file-size { color: #8b8e93; }
            .pl-dl-file-link { color: #a8abb0; }
            .pl-mark.ok { color: #9ccc65; }
            .pl-mark.no { color: #e06c75; }
            .pl-dl-gray .pl-dl-file-link { color: #e06c75; }
            /* 深色下滚动条提亮，否则跟深色背景同色看不见 */
            body.fl-dark ::-webkit-scrollbar-thumb { background-color: rgba(255,255,255,.22); }
            body.fl-dark ::-webkit-scrollbar-thumb:hover { background-color: rgba(255,255,255,.3); }
            .pl-dl-chip { background: #2a2b2c; border-color: #3f4041; color: #c9cacc; }
            .pl-dl-chip.active { background: ${color}; border-color: ${color}; color: #fff; }
            .pl-dl-default-btn { background: #2a2b2c; border-color: #3f4041; color: #c9cacc; }
            .pl-dl-default-btn:focus-visible { box-shadow: 0 0 0 2px #1d1e1f, 0 0 0 4px currentColor; }
            .pl-dl-default-btn:hover { background: #343536; border-color: ${color}; color: ${color}; }
            .pl-dl-default-btn.is-set { background: #1b2c35; border-color: #26617f; color: ${color}; }
            .pl-dl-default-btn.is-set .pl-dl-default-tag, .pl-dl-default-btn.is-set .pl-dl-default-name { color: #d8d9da; }
            .pl-dl-default-btn.is-set .pl-dl-default-x { color: #8b8e93; }
            .pl-dl-default-btn.is-set:hover { background: #3f2226; border-color: #5a2f33; }
            .pl-dl-default-btn.is-set:hover .pl-dl-default-tag, .pl-dl-default-btn.is-set:hover .pl-dl-default-name, .pl-dl-default-btn.is-set:hover .pl-dl-default-x { color: #e06c75; }
            .pl-dl-actions { border-top-color: #343536; }
            .pl-dl-btn-secondary { background: #2a2b2c; color: #c9cacc; border-color: #3f4041; }
            .pl-dl-btn-secondary:hover { background: #343536; }
            .pl-dl-btn-primary:disabled { background: #2a2b2c; color: #5b5e63; }
            .pl-dl-warning-bar { background: #3f2226; color: #e06c75; }
            .pl-dl-toast { background: #2a2b2c; color: #e8eaed; border-color: #3f4041; }
            .pl-dl-toast-success { border-color: #67c23a; color: #95d475; }
            .pl-dl-toast-error { border-color: #f56c6c; color: #f89898; }
            .pl-dl-empty { color: #8b8e93; }
            .pl-dl-empty svg { color: #5e6165; }
            .pl-dl-error { color: #e06c75; }
            .pl-dl-retry { background: #2a2b2c; border-color: ${color}; color: ${color}; }
            .pl-dl-retry:hover { background: ${color}22; }
            .swal2-popup, .swal2-title, .swal2-html-container { color: #e8eaed; }
            `;
            // 组合选择器每项都带前缀，否则只第一个生效
            const darkScoped = darkRules.trim().split('\n').map(l => l.trim() ? l.trim().replace(/(^|,\s+)([.#])/g, '$1body.fl-dark $2') : l).join('\n');
            let css = `
            body::-webkit-scrollbar { display: none }
            ::-webkit-scrollbar { width: 6px; height: 10px }
            ::-webkit-scrollbar-track { border-radius: 0; background: none }
            ::-webkit-scrollbar-thumb { background-color: rgba(85,85,85,.65) }
            ::-webkit-scrollbar-thumb,::-webkit-scrollbar-thumb:hover { border-radius: 999px; -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.2) }
            ::-webkit-scrollbar-thumb:hover { background-color: rgba(85,85,85,.75) }
            /* 面板外的弹窗用 16px 基准，面板本体 12px */
            .swal2-popup { font-size: 16px !important; }
            .pl-popup { font-size: 12px !important; border-radius: 6px !important; box-shadow: 0 1px 2px rgb(28 28 32 / 4%), 0 6px 16px rgb(28 28 32 / 8%) !important; }
            .pl-popup a { color: ${color} !important; }
            .tag-danger { color: #cc3235; margin: 0 5px; }
            .ali-button { display: inline-flex; align-items: center; justify-content: center; border: 0 solid transparent; border-radius: 5px; white-space: nowrap; flex-shrink: 0; font-size: 14px; line-height: 1.5; outline: 0; touch-action: manipulation; transition: background .3s ease; color: #fff; background: #637dff; margin-left: 20px; padding: 0 12px; position: relative; cursor: pointer; height: 32px; min-height: 32px; }
            .ali-button:hover { background: #7a90ff; }
            .ali-button:focus-visible { outline: 2px solid #637dff; outline-offset: 2px; }
            .xunlei-button { display: inline-flex; align-items: center; justify-content: center; border: 0 solid transparent; border-radius: 5px; white-space: nowrap; flex-shrink: 0; font-size: 14px; line-height: 1.5; outline: 0; touch-action: manipulation; transition: background .3s ease; color: #fff; background: #3f85ff; margin-left: 12px; padding: 0 12px; position: relative; cursor: pointer; height: 36px; min-height: 32px; }
            .xunlei-button:hover { background: #619bff; }
            .xunlei-button:focus-visible { outline: 2px solid #3f85ff; outline-offset: 2px; }
            .tianyi-button { margin-right: 12px; padding: 4px 12px; border-radius: 4px; color: #fff; font-size: 14px; border: 1px solid #0073e3; background: #2b89ea; cursor: pointer; position: relative; min-height: 32px; transition: background .3s ease; width: auto; white-space: nowrap; text-align: center; }
            .tianyi-button:hover { border-color: #1874d3; background: #3699ff; }
            .tianyi-button:focus-visible { outline: 2px solid #2b89ea; outline-offset: 2px; }
            .yidong-button { float: left; position: relative; margin: 20px 24px 20px 0; width: 98px; height: 36px; background: #3181f9; border-radius: 2px; font-size: 14px; color: #fff; line-height: 36px; text-align: center; cursor: pointer; min-height: 32px; transition: background .3s ease; }
            .yidong-button:hover { background: #2d76e5; }
            .yidong-button:focus-visible { outline: 2px solid #3181f9; outline-offset: 2px; }
            .quark-button { display: inline-flex; align-items: center; justify-content: center; border: 1px solid #ddd; border-radius: 8px; white-space: nowrap; flex-shrink: 0; font-size: 14px; line-height: 1.5; outline: 0; color: #333; background: #fff; margin-right: 10px; padding: 0 14px; position: relative; cursor: pointer; height: 36px; min-height: 32px; transition: background .3s ease; }
            .quark-button:hover { background: #f6f6f6; }
            .quark-button:focus-visible { outline: 2px solid #3f85ff; outline-offset: 2px; }
            .pointer { cursor: pointer; }
            /* 设置页：菜单式主设置页行样式 */
            .pl-setting-list { text-align: left; }
            .pl-setting-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 8px; margin: 0 -8px; border-bottom: 1px solid #e6e8eb; }
            .pl-setting-row:last-child { border-bottom: 0; }
            .pl-setting-row-main { flex: 1; min-width: 0; }
            .pl-setting-row-name { font-size: 14px; color: #303133; }
            .pl-setting-row-sub { font-size: 11px; color: #6b7078; margin-top: 2px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
            .pl-setting-row-click { cursor: pointer; border-radius: 6px; }
            .pl-setting-row-click::after { content: '›'; font-size: 20px; line-height: 1; color: #6b7078; transition: color 150ms; }
            .pl-setting-row-click:hover { background: #f5f6f7; }
            .pl-setting-row-click:hover .pl-setting-row-name { color: ${color}; }
            .pl-setting-row-click:hover::after { color: ${color}; }
            .pl-setting-tip-text { font-size: 11px; color: #6b7078; line-height: 1.7; margin-top: 10px; text-align: left; }
            .pl-setting-help { font-size: 12px; color: #6b7078; margin-top: 8px; text-align: center; }
            /* 同 .pl-dl-help a：设置页这行也是文字加链接混排，一样要挡宿主样式 */
            .pl-setting-help a { color: ${color}; text-decoration: none; font: inherit; vertical-align: baseline; }
            .pl-setting-help a:hover { text-decoration: underline; }
            .pl-setting-label { display: flex; align-items: center; justify-content: space-between; padding-top: 10px; }
            .pl-label { flex: 0 0 100px; text-align: left; }
            .pl-input { flex: 1; padding: 8px 10px; border: 1px solid #e6e8eb; border-radius: 6px; font-size: 14px; background: #fff; color: #303133; transition: border-color 180ms ease; }
            .pl-input:focus { outline: none; border-color: ${color}; }
            .pl-setting-select { flex: 0 0 180px; min-height: 36px; cursor: pointer; appearance: none; -webkit-appearance: none; padding-right: 30px; background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23909399' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 10px center; }
            .pl-setting-select:focus-visible { outline: 2px solid ${color}; outline-offset: 2px; }
            .pl-color { flex: 1; display: flex; flex-wrap: wrap; gap: 8px; }
            .pl-color-box { width: 30px; height: 30px; box-sizing: border-box; border: 1px solid #e6e8eb; border-radius: 6px; cursor: pointer; transition: border-color 150ms; }
            .pl-color-box:hover { border-color: ${color}; }
            .pl-color-box.checked { border: 3px dashed #303133 !important }
            .pl-color-box:focus-visible { outline: 2px solid ${color}; outline-offset: 2px; }
            /* swal2 关闭按钮焦点轮廓：Tab 导航或弹窗打开时自动聚焦都会触发 */
            .swal2-close:focus, .swal2-close:focus-visible { outline: 0 !important; box-shadow: none !important; }
            .swal2-container { z-index: 200000 !important; }
            .ferrylink-swal-container { z-index: 2147483647 !important; }
            .ferrylink-swal-popup { z-index: 2147483647 !important; }
            body.swal2-height-auto { height: inherit !important; }
                        .btn-operate .btn-main { display:flex; align-items:center; }
            /* ---- L3 UI 层：下载面板样式 pl-dl-* ---- */
            .pl-dl-panel { width: 100%; font-size: 13px; }
            .pl-dl-intro { font-size: 13px; color: #606266; line-height: 1.7; margin-bottom: 12px; }
            .pl-dl-intro a { color: ${color}; }
            .pl-dl-help { font-size: 12px; color: #6b7078; margin-top: 10px; }
            /* 宿主页会重置裸链接的字号字体，让「帮助：」偏高，这里用 font: inherit 对齐 */
            .pl-dl-help a { color: ${color}; text-decoration: none; font: inherit; vertical-align: baseline; }
            .pl-dl-help a:hover { text-decoration: underline; }
            .pl-dl-btn:focus-visible, .pl-dl-chip:focus-visible { outline: 2px solid ${color}; outline-offset: 2px; }
            .pl-dl-files { max-height: 320px; overflow-y: auto; margin: 0 -10px; padding: 0 10px; border-top: 1px solid #e6e8eb; border-bottom: 1px solid #e6e8eb; }
            .pl-dl-file-count { font-size: 12px; color: #6b7078; margin-bottom: 6px; font-weight: 600; }
            /* 左右各外扩 10px 再由 padding 抵消，让 hover 底色与列表上下通栏边线同宽同齐 */
            .pl-dl-file-row { display: flex; align-items: center; gap: 10px; margin: 0 -10px; padding: 8px 20px; transition: background 180ms; }
            .pl-dl-file-row:hover { background: #f2f4f7; }
            .pl-dl-file-name { flex: 0 0 200px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-weight: 500; color: #111; }
            .pl-dl-file-size { flex: 0 0 70px; font-size: 12px; color: #6b7078; text-align: right; }
            .pl-dl-file-link { flex: 1; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 12px; color: #787774; }
            .pl-dl-file-status { flex: 0 0 auto; font-size: 13px; min-width: 22px; text-align: center; }
            .pl-mark { font-size: 16px; font-weight: 700; line-height: 1; }
            .pl-mark.ok { color: #518c17; }
            .pl-mark.no { color: #cc3235; }
            /* 灰行只压名字、大小、状态，原因那格保持清楚，用户要读的就是它 */
            .pl-dl-gray .pl-dl-file-name, .pl-dl-gray .pl-dl-file-size, .pl-dl-gray .pl-dl-file-status { opacity: 0.45; }
            .pl-dl-gray .pl-dl-file-link { color: #cc3235; }
            .pl-dl-section { margin: 0 -10px; padding: 14px 10px; border-top: 1px solid #e6e8eb; }
            .pl-dl-section-label { font-size: 12px; color: #6b7078; margin-bottom: 8px; font-weight: 600; }
            .pl-dl-default-btn { display: inline-flex; align-items: center; gap: 5px; margin-left: 8px; height: 22px; padding: 0 9px; border: 1px solid #d4d8de; border-radius: 999px; background: #fff; color: #606266; font-size: 12px; font-weight: 400; line-height: 1; font-family: inherit; cursor: pointer; vertical-align: middle; transition: background-color 180ms, border-color 180ms, color 180ms; }
            .pl-dl-default-btn svg { flex: 0 0 auto; }
            .pl-dl-default-btn:hover { border-color: #b9dff2; background: #f4fbff; color: #0a7bb8; }
            .pl-dl-default-btn:focus-visible { outline: none; box-shadow: 0 0 0 2px #fff, 0 0 0 4px currentColor; }
            .pl-dl-default-btn.is-set { border-color: #bfe9ff; background: #eef9ff; color: #0a7bb8; }
            .pl-dl-default-btn.is-set .pl-dl-default-tag { color: #303133; font-weight: 600; }
            .pl-dl-default-btn.is-set .pl-dl-default-name { max-width: 168px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #303133; }
            .pl-dl-default-btn.is-set .pl-dl-default-x { color: #8b8e93; }
            .pl-dl-default-btn.is-set:hover { border-color: #f2b7b9; background: #fef0f0; color: #cc3235; }
            .pl-dl-default-btn.is-set:hover .pl-dl-default-tag, .pl-dl-default-btn.is-set:hover .pl-dl-default-name { color: #cc3235; }
            .pl-dl-default-btn.is-set:hover .pl-dl-default-x { color: #cc3235; }
            #pl-dl-protocol-chips { row-gap: 4px; }
            .pl-dl-chips { display: flex; flex-wrap: wrap; gap: 8px; }
            .pl-dl-chip { display: inline-flex; align-items: center; padding: 8px 18px; border-radius: 999px; font-size: 13px; border: 1px solid #d4d8de; background: #fafbfc; color: #606266; cursor: pointer; transition: background-color 180ms, border-color 180ms, color 180ms; white-space: nowrap; }
            .pl-dl-chip:hover { border-color: ${color}; color: ${color}; }
            .pl-dl-chip.active { background: ${color}; border-color: ${color}; color: #fff; }
            .pl-dl-chip.disabled { opacity: 0.4; cursor: not-allowed; pointer-events: none; }
            .pl-dl-proto-group { width: 100%; }
            .pl-dl-proto-group-label { font-size: 12px; color: #6b7078; margin: 4px 0; }
            .pl-dl-actions { display: flex; align-items: center; gap: 10px; padding-top: 14px; border-top: 1px solid #e6e8eb; }
            .pl-dl-btn { padding: 8px 22px; border-radius: 8px; font-size: 13px; border: 0; cursor: pointer; transition: background-color 180ms, border-color 180ms, color 180ms; white-space: nowrap; min-height: 38px; }
            .pl-dl-btn-primary { background: ${color}; color: #fff; font-size: 14px; font-weight: 500; min-width: 150px; }
            .pl-dl-btn-primary:hover { opacity: 0.9; }
            .pl-dl-btn-primary:disabled { background: #f5f6f7; color: #c0c4cc; cursor: not-allowed; font-weight: 400; }
            .pl-dl-btn-secondary { background: #fff; color: #606266; border: 1px solid #d4d8de; }
            .pl-dl-btn-right { margin-left: auto; }
            .pl-dl-btn-secondary:hover { background: #f5f6f7; }
            .pl-dl-btn-secondary:disabled { opacity: 0.5; cursor: not-allowed; }
            .pl-dl-error { padding: 16px; text-align: center; color: #cc3235; }
            .pl-dl-warning-bar { background: #fef0f0; color: #cc3235; padding: 6px 12px; border-radius: 6px; font-size: 12px; margin: 8px 0; display: none; }
            .pl-dl-toast { position: fixed; top: 10vh; left: 50%; transform: translateX(-50%); z-index: 2147483647; display: flex; align-items: center; background: #fff; color: #303133; border: 1px solid #e6e8eb; padding: 12px 24px; border-radius: 8px; font-size: 15px; font-weight: 500; box-shadow: 0 4px 16px rgb(28 28 32 / 18%), 0 1px 3px rgb(28 28 32 / 12%); max-width: 80vw; }
            .pl-dl-toast span { word-break: break-all; }
            .pl-dl-toast-success { border-color: #67c23a; color: #2f7a17; }
            .pl-dl-toast-error { border-color: #f56c6c; color: #c03639; }
            .pl-dl-empty { padding: 14px 28px; text-align: center; color: #6b7078; font-size: 14px; }
            .pl-dl-empty svg { display: block; margin: 0 auto 10px; color: #c3c8cf; }
            .pl-dl-empty-title { font-size: 15px; }
            .pl-dl-retry { margin-top: 10px; padding: 8px 22px; min-height: 38px; border-radius: 8px; border: 1px solid ${color}; color: ${color}; background: #fff; cursor: pointer; font-size: 13px; }
            .pl-dl-retry:hover { background: ${color}11; }
            /* 弹窗入场：drop（平滑掉落） */
            @keyframes ferrylinkDrop {
                0%   { transform: translateY(-30px); opacity: 0; }
                100% { transform: translateY(0);    opacity: 1; }
            }
            .swal2-popup:not(.swal2-hide) { animation: ferrylinkDrop 0.42s cubic-bezier(.22,.61,.36,1) both; }
            .pl-popup-flip:not(.swal2-hide) { animation: ferrylinkFlip 0.45s cubic-bezier(.22,.61,.36,1) both; transform-origin: center; }
            /* 系统开启减少动态效果时不播入场动画 */
            @media (prefers-reduced-motion: reduce) {
                .swal2-popup:not(.swal2-hide), .pl-popup-flip:not(.swal2-hide) { animation: none; }
            }
            ::selection { background: ${color}33; color: inherit; }
            @keyframes ferrylinkFlip {
                0%   { transform: perspective(800px) rotateY(-80deg); opacity: 0; }
                100% { transform: perspective(800px) rotateY(0); opacity: 1; }
            }
            ${darkScoped}
            .pl-setting-actions { display: flex; align-items: center; justify-content: center; gap: 80px; padding-top: 14px; }
            .pl-setting-theme-btn { flex: 0 0 auto; min-height: 32px; padding: 4px 16px; cursor: pointer; }
            `;
            this.addStyle('panlinker-style', 'style', css);
            this.applyThemeMode();
        },
        applyThemeMode() {
            const dark = (base.getValue('setting_theme_mode') || 'light') === 'dark';
            $(document.body).toggleClass('fl-dark', dark);
        },
    };
    const LOCAL_CONFIG = {
        baidu: {
            pcs: {"0": "https://pan.baidu.com/rest/2.0/xpan/multimedia?method=filemetas&dlink=1", "1": "https://pan.baidu.com/api/sharedownload?channel=chunlei&clienttype=12&web=1&app_id=250528", "2": "https://pan.baidu.com/share/tplconfig?fields=sign,timestamp&channel=chunlei&web=1&app_id=250528&clienttype=0", "3": "https://openapi.baidu.com/oauth/2.0/authorize?client_id=IlLqBbU3GjQ0t46TRwFateTprHWl39zF&response_type=token&redirect_uri=oob&confirm_login=0&scope=basic,netdisk", "4": "https://openapi.baidu.com/oauth/2.0/login_success"},
            btn: {"home": ".tcuLAu", "main": ".wp-s-agile-tool-bar__header"},
            ua: "pan.baidu.com",
            api: {0: "API 下载", 1: ''},
            aria: {0: "Aria 下载", 1: ''},
            rpc: {0: "RPC 下载", 1: ''},
            curl: {0: "cURL 下载", 1: ''},
            bc: {0: "BC 下载", 1: ''},
        },
        ali: {
            pcs: {"0": "https://api.aliyundrive.com/v2/file/get_share_link_download_url", "1": "https://api.aliyundrive.com/v2/file/get_download_url"},
            btn: {"home": "[class*=\"header--\"] > [class*=\"actions--\"], [class*=\"header--\"] [class*=\"actions--\"]"},
            dom: {"list": "[class*=\"node-list-table-view--\"]", "grid": "[class*=\"node-list-grid-view--\"]", "switch": "[class*=\"switch-wrapper--\"]"},
            api: {0: "API 下载", 1: ''},
            aria: {0: "Aria 下载", 1: ''},
            rpc: {0: "RPC 下载", 1: ''},
            curl: {0: "cURL 下载", 1: ''},
            bc: {0: "BC 下载", 1: ''},
        },
        tianyi: {
            pcs: {"0": "https://cloud.189.cn/api/open/file/getFileDownloadUrl.action", "1": "https://api.cloud.189.cn/open/oauth2/ssoH5.action", "2": "https://api.cloud.189.cn/open/file/getFileDownloadUrl.action"},
            btn: {"home": "[class*=\"FileHead_file-head-left\"]"},
            api: {0: "API 下载", 1: ''},
            aria: {0: "Aria 下载", 1: ''},
            rpc: {0: "RPC 下载", 1: ''},
            curl: {0: "cURL 下载", 1: ''},
            bc: {0: "BC 下载", 1: ''},
        },
        xunlei: {
            pcs: {"0": "https://api-pan.xunlei.com/drive/v1/files/"},
            btn: {"home": ".FileMenu__menus--HFKwO"},
            api: {0: "API 下载", 1: ''},
            aria: {0: "Aria 下载", 1: ''},
            rpc: {0: "RPC 下载", 1: ''},
            curl: {0: "cURL 下载", 1: ''},
            bc: {0: "BC 下载", 1: ''},
        },
        quark: {
            pcs: {"0": "https://drive-pc.quark.cn/1/clouddrive/file/download?pr=ucpro&fr=pc&sys=win32&ve=6.9.7.761", "1": "https://drive-social-api.quark.cn/1/clouddrive/chat/conv/file/acquire_dl_token?pr=ucpro&fr=pc&sys=win32&ve=6.9.7.761&fr=win&la=zh-CN&ch=pckk%40product_guanwan"},
            btn: {"home": ".btn-operate .btn-main"},
            ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 QuarkPC/6.9.7.761 QuarkCloudDrivePC/6.9.7.761 quark-cloud-drive/2.5.40",
            api: {0: "API 下载", 1: ''},
            aria: {0: "Aria 下载", 1: ''},
            rpc: {0: "RPC 下载", 1: ''},
            curl: {0: "cURL 下载", 1: ''},
            bc: {0: "BC 下载", 1: ''},
        },
        yidong: {
            pcs: {"0": "https://personal-kd-njs.yun.139.com/hcy/file/getDownloadUrl", "1": "https://caiyun.139.com/stapi/outlink/content/download"},
            btn: {"home": ".top_button"},
            api: {0: "API 下载", 1: ''},
            aria: {0: "Aria 下载", 1: ''},
            rpc: {0: "RPC 下载", 1: ''},
            curl: {0: "cURL 下载", 1: ''},
            bc: {0: "BC 下载", 1: ''},
        },
    };

    // L1 适配层：六个网盘适配器，禁止互相引用
    let baidu = {
        site: 'baidu',
        _linkCache: [],   // dlink 内存缓存 [{ id: fs_id, expires, data }]，会话级、不落 GM 存储
        _getFidArray() {
            let fidlist = [];
            selectedFiles.forEach(v => {
                if (+v.isdir === 1) return;
                let fid = v.fs_id !== undefined && v.fs_id !== null ? v.fs_id
                    : (v.file_id !== undefined && v.file_id !== null ? v.file_id : v.id);
                if (fid !== undefined && fid !== null && fid !== '') fidlist.push(fid);
            });
            return fidlist;
        },

        setBDUSS(done) {
            const save = (BDUSS) => {
                if (BDUSS) base.setStorage("baiduyunPlugin_BDUSS", {BDUSS});
                done && done(!!BDUSS);
            };
            try {
                if (GM_cookie) {
                    GM_cookie('list', {name: 'BDUSS'}, (cookies, error) => {
                        if (!error && cookies && cookies[0] && cookies[0].value) {
                            save(cookies[0].value);
                        } else {
                            save(base.getCookie('BDUSS'));
                        }
                    });
                    return;
                }
            } catch (e) {
            }
            save(base.getCookie('BDUSS'));
        },
        getBDUSS() {
            let baiduyunPlugin_BDUSS = base.getStorage('baiduyunPlugin_BDUSS') ? base.getStorage('baiduyunPlugin_BDUSS') : '{"baiduyunPlugin_BDUSS":""}';
            return baiduyunPlugin_BDUSS.BDUSS || '';
        },
        convertLinkToAria(link, filename, ua) {
            let BDUSS = this.getBDUSS();
            filename = base.fixFilename(filename);
            let cookie = BDUSS ? ` --header "Cookie: BDUSS=${BDUSS}"` : '';
            return encodeURIComponent(`aria2c "${link}" --out "${filename}" -x 16 -s 16 -k 1M --header "User-Agent: ${ua}"${cookie}`);
        },
        convertLinkToBC(link, filename, ua) {
            let BDUSS = this.getBDUSS();
            let cookie = BDUSS ? `BDUSS=${BDUSS}` : '';
            let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}&cookie=${encodeURIComponent(cookie)}&user_agent=${encodeURIComponent(ua)}ZZ`;
            return encodeURIComponent(`bc://http/${base.e(bc)}`);
        },
        convertLinkToCurl(link, filename, ua) {
            let BDUSS = this.getBDUSS();
            let terminal = base.getValue('setting_terminal_type');
            filename = base.fixFilename(filename);
            let cookie = BDUSS ? ` -b "BDUSS=${BDUSS}"` : '';
            return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}" -A "${ua}"${cookie}`);
        },
        addPageListener() {
            doc.on('click', '.pl-button', async (e) => {
                if ($(e.target).closest('.g-button-menu, .menu').length) return;
                // 不走 didOpen 调 showLoading：它包在 setTimeout 里，面板已在 DOM
                Swal.fire({ title: '获取下载链接', html: '<div class="pl-fetch-progress">正在获取…</div>', allowOutsideClick: false, showConfirmButton: false });
                Swal.showLoading();
                try { await this.getPCSLink(); } catch (err) { Swal.close(); base.renderErrorPanel('获取下载链接失败：' + (err && err.message || '未知错误'), this); } finally { if (document.querySelector('.swal2-popup.swal2-loading')) Swal.close(); }
            });
        },
        addButton() {
            if (!pageNum) return;
            let $button = $(`<div class="pl-button" style="position: relative; display: inline-block; margin-right: 8px;"><div style="color:#fff;background: ${color};border-color:${color}" class="g-button g-button-blue"><span class="g-button-right"><em class="icon icon-download"></em><span class="text" style="width: 60px;">下载助手</span></span></div>`);
            if (pageNum === 'main') {
                $button = $(`<div class="pl-button" style="position: relative; display: inline-block; margin-right: 8px;"><button class="u-button u-button--primary u-button--small is-round is-has-icon" style="background: ${color};border-color: ${color};font-size: 14px; padding: 8px 16px; border: none;"><i class="u-icon u-icon-download"></i><span>下载助手</span></button>`);
            }
            const sel = pageNum === 'home' ? panInfo.btn.home : panInfo.btn.main;
            const tryInject = () => {
                let $toolWrap = $(sel);
                if (!$toolWrap.length || $('.pl-button').length) return false;
                $toolWrap.prepend($button);
                return true;
            };
            if (!tryInject()) base.listenElement(sel, tryInject);
            this.setBDUSS();
            this.addPageListener();
        },
        async getToken() {
            const saveToken = (token) => {
                if (token) {
                    base.setValue('baidu_access_token', token);
                    base.setValue('baidu_access_token_bduss', this.getBDUSS());
                    this.getCurrentUK().then((uk) => {
                        if (uk) base.setValue('baidu_access_token_uk', uk);
                    });
                }
                return token;
            };
            const waitForToken = (maxAttempts = 60) => new Promise((resolve) => {
                let attempts = 0;
                const interval = setInterval(() => {
                    const token = base.getValue('baidu_access_token');
                    if (token) {
                        clearInterval(interval);
                        resolve(token);
                    }
                    attempts++;
                    if (attempts > maxAttempts) {
                        clearInterval(interval);
                        resolve('');
                    }
                }, 1000);
            });
            try {
                if (base.getFinalUrl) {
                    let res = await base.getFinalUrl(panInfo.pcs[3]);
                    if (res.includes('authorize')) {
                        let html = await base.get(panInfo.pcs[3], {}, 'text');
                        let bdstoken = html.match(/name="bdstoken"\s+value="([^"]+)"/)?.[1];
                        let client_id = html.match(/name="client_id"\s+value="([^"]+)"/)?.[1];
                        if (bdstoken && client_id) {
                            let data = {
                                grant_permissions_arr: 'netdisk',
                                bdstoken: bdstoken,
                                client_id: client_id,
                                response_type: 'token',
                                display: 'page',
                                grant_permissions: 'basic,netdisk'
                            };
                            await base.post(panInfo.pcs[3], base.stringify(data), {'Content-Type': 'application/x-www-form-urlencoded'});
                            let res2 = await base.getFinalUrl(panInfo.pcs[3]);
                            return saveToken(res2.match(/access_token=([^&]+)/)?.[1]);
                        }
                    } else {
                        return saveToken(res.match(/access_token=([^&]+)/)?.[1]);
                    }
                }
            } catch (e) {
            }
            base.deleteValue('baidu_access_token');
            GM_openInTab(panInfo.pcs[3], {active: false, insert: true, setParent: true});
            let token = await waitForToken(60);
            return saveToken(token);
        },
        async getCurrentUK() {
            try {
                let res = await Promise.race([
                    base.get('https://pan.baidu.com/rest/2.0/xpan/nas?method=uinfo', {"User-Agent": panInfo.ua}),
                    new Promise((resolve) => setTimeout(() => resolve(null), 3000))
                ]);
                if (res && res.errno === 0 && res.user_info && res.user_info.uk) {
                    return String(res.user_info.uk);
                }
            } catch (e) {}
            return '';
        },
        async preflightAccount() {
            try {
                let accessToken = base.getValue('baidu_access_token');
                let storedUK = base.getValue('baidu_access_token_uk');
                if (!accessToken || !storedUK) return;
                let currentUK = await this.getCurrentUK();
                if (!currentUK) return;
                if (currentUK !== storedUK) {
                    base.deleteValue('baidu_access_token');
                    base.deleteValue('baidu_access_token_bduss');
                    base.deleteValue('baidu_access_token_uk');
                    await this.getToken();
                }
            } catch (e) {
                    message.error('百度授权失败：' + (e.message || '未知错误'));
                }
        },
        async getPCSLink(maxRequestTime = 1) {
            selectedFiles = this.getSelectedList();
            let fidArray = this._getFidArray(), res;
            if (pageNum === 'home' || pageNum === 'main') {
                if (selectedFiles.length === 0) {
                    Swal.close(); return base.renderDownloadPanel([], this);
                }
                if (!fidArray.length) {
                    Swal.close(); return message.error('提示：请打开文件夹后勾选文件！');
                }
                let currentBDUSS = this.getBDUSS();
                let storedBDUSS = base.getValue('baidu_access_token_bduss');
                let accessToken = base.getValue('baidu_access_token');
                if (accessToken) {
                    let currentUK = await this.getCurrentUK();
                    let storedUK = base.getValue('baidu_access_token_uk');
                    let mismatch = false;
                    if (currentUK && storedUK && storedUK !== currentUK) mismatch = true;
                    if (!mismatch && currentBDUSS && storedBDUSS && storedBDUSS !== currentBDUSS) mismatch = true;
                    if (mismatch) {
                        base.deleteValue('baidu_access_token');
                        base.deleteValue('baidu_access_token_bduss');
                        base.deleteValue('baidu_access_token_uk');
                        this._linkCache = [];   // 账号变了，旧 dlink 绑定的是别人的 uk，全废
                        accessToken = '';
                    } else if (currentUK && !storedUK) {
                        base.setValue('baidu_access_token_uk', currentUK);
                    } else if (currentBDUSS && !storedBDUSS) {
                        base.setValue('baidu_access_token_bduss', currentBDUSS);
                    }
                }
                if (!accessToken) accessToken = await this.getToken();

                const now = Date.now();
                const files = selectedFiles.filter(v => +v.isdir !== 1);
                const pending = files.filter(it => {
                    const idx = this._linkCache.findIndex(c => c.id == it.fs_id);
                    if (idx === -1) return true;
                    if (this._linkCache[idx].expires > now) {
                        Object.assign(it, this._linkCache[idx].data);
                        return false;
                    }
                    this._linkCache.splice(idx, 1);
                    return true;
                });

                // 百度 fsids 上限 100，取 50 留余量
                const BATCH = 50;
                let returnedCount = 0, refreshed = false, anyMarked = false;
                for (let i = 0; i < pending.length; i += BATCH) {
                    const batch = pending.slice(i, i + BATCH);
                    const fsids = encodeURIComponent('[' + batch.map(x => x.fs_id) + ']');
                    const url = `${panInfo.pcs[0]}&fsids=${fsids}&access_token=${accessToken}`;
                    try {
                        res = await base.get(url, {"User-Agent": panInfo.ua});
                    } catch (e) { res = null; }

                    if (res && res.errno === 112) {
                        Swal.close(); return message.error('提示：页面过期，请刷新重试！');
                    }
                    if (!res || res.errno !== 0) {
                        if (!refreshed && maxRequestTime >= 1) {
                            refreshed = true;
                            base.deleteValue('baidu_access_token');
                            base.deleteValue('baidu_access_token_bduss');
                            base.deleteValue('baidu_access_token_uk');
                            accessToken = await this.getToken();
                            i -= BATCH; continue;
                        }
                        const reason = res && res.errno
                            ? `获取下载地址失败（错误码 ${res.errno}）`
                            : '请求失败，请重试';
                        batch.forEach(x => { x.dlink = reason; });
                        anyMarked = true;
                    } else if (!Array.isArray(res.list)) {
                        // 百度会把错误说明塞进 list（如大文件要 SVIP），不重试
                        const text = typeof res.list === 'string' && res.list ? res.list : '该文件未返回下载链接';
                        batch.forEach(x => { x.dlink = text; });
                        anyMarked = true;
                    } else {
                        batch.forEach(x => {
                            const hit = res.list.find(li => li.fs_id == x.fs_id);
                            if (hit) {
                                Object.assign(x, hit);
                                returnedCount++;
                                this._linkCache.push({ id: x.fs_id, expires: now + 4 * 60 * 60 * 1000, data: hit });
                            } else if (res.list.length > 0) {
                                x.dlink = '该文件未返回下载链接（可能已失效或被禁止下载）';
                                anyMarked = true;
                            }
                        });
                    }

                    const hc = Swal.getHtmlContainer && Swal.getHtmlContainer();
                    if (hc) hc.textContent = `已获取 ${Math.min(i + BATCH, pending.length)} / ${pending.length} 个地址`;
                    if (i + BATCH < pending.length) await base.sleep(1000);
                }

                if (pending.length > 0 && returnedCount === 0 && !anyMarked) {
                    if (maxRequestTime >= 1) {
                        base.deleteValue('baidu_access_token');
                        base.deleteValue('baidu_access_token_bduss');
                        base.deleteValue('baidu_access_token_uk');
                        await this.getToken();
                        return this.getPCSLink(maxRequestTime - 1);
                    }
                    return message.error('提示：获取下载链接失败！请刷新网页后重试！');
                }
                const normalized = this.normalizeList(files);
                base.renderDownloadPanel(normalized, this);
            }
        },
        normalizeList(list) {
            return list.map(v => {
                let dlink = '';
                if (v.dlink) {
                    dlink = /^https?:\/\//.test(v.dlink)
                        ? v.dlink + '&access_token=' + base.getValue('baidu_access_token')
                        : v.dlink;
                }
                return {
                    filename: v.server_filename || v.filename || '',
                    sizeStr: base.sizeFormat(v.size),
                    rawSize: v.size || 0,
                    dlink: dlink,
                    ext: base.getExtension(v.server_filename || v.filename),
                    isFolder: +v.isdir === 1,
                    raw: v,
                };
            });
        },
        async sendLinkToRPC(filename, link) {
            let rpc = base._rpcConfig();
            if (!rpc) return 'fail';
            let BDUSS = this.getBDUSS();
            let url = rpc.url;
            let rpcData = {
                id: new Date().getTime(),
                jsonrpc: '2.0',
                method: 'aria2.addUri',
                params: [`token:${rpc.token}`, [link], {
                    dir: rpc.dir,
                    out: base.safeRpcFilename(filename),
                    header: [`User-Agent: ${panInfo.ua}`, ...(BDUSS ? [`Cookie: BDUSS=${BDUSS}`] : [])],
                }]
            };
            try {
                let res = await base.post(url, rpcData, {"User-Agent": panInfo.ua}, '');
                if (res.result) return 'success';
                base.panelNotice('Aria2 拒绝请求：' + ((res.error && res.error.message) || '未知错误（请检查 RPC 密钥与保存路径）'));
                return 'fail';
            } catch (e) {
                base.panelNotice('无法连接 RPC（' + rpc.domain + ':' + rpc.port + '）' + (e && e.message ? '：' + e.message : '') + '，请确认下载器已启动且 RPC 服务已开启');
                return 'fail';
            }
        },
        getSelectedList() {
            try {
                return require('system-core:context/context.js').instanceForSystem.list.getSelected();
            } catch (e) {
                let panInfo = document.querySelector('.wp-s-core-pan');
                return panInfo && panInfo.__vue__ ? panInfo.__vue__.selectedList : [];
            }
        },
        detectPage() {
            let path = location.pathname;
            if (/^\/disk\/home/.test(path)) return 'home';
            if (/^\/disk\/main/.test(path)) return 'main';
            return '';
        },
        async initPanLinker() {
            base.initDefaultConfig();
            base.addPanLinkerStyle();
            pageNum = this.detectPage();
            panInfo = LOCAL_CONFIG.baidu;
            Object.freeze && Object.freeze(panInfo);
            this.addButton();
            base.createTip();
            base.registerMenuCommand();
            this.preflightAccount();
        },
        async initAuthorize() {
            let authPollTimer = setInterval(() => {
                if (/openapi.baidu.com\/oauth\/2.0\/authorize/.test(location.href)) {
                    let confirmButton =
                        document.querySelector('#auth-allow') ||
                        document.querySelector('#accept') ||
                        document.querySelector('input[type="submit"]') ||
                        Array.from(document.querySelectorAll('button, a, input[type="button"]')).find(el => {
                            let t = (el.textContent || el.value || '').trim();
                            return /^(授权|允许|同意|确认|Allow|Authorize)/i.test(t);
                        });
                    if (confirmButton) {
                        confirmButton.click();
                        return;
                    }
                }
                if (/openapi.baidu.com\/oauth\/2.0\/login_success/.test(location.href)) {
                    if (location.href.includes('access_token')) {
                        let token = location.href.match(/access_token=([^&#]+)/)?.[1];
                        base.setValue('baidu_access_token', token);
                        this.getCurrentUK().then((uk) => {
                            if (uk) base.setValue('baidu_access_token_uk', uk);
                        });
                        clearInterval(authPollTimer);
                        window.close();
                    }
                }
            }, 200)
        }
    };
    let ali = {
        site: 'ali',
        convertLinkToAria(link, filename, ua) {
                    filename = base.fixFilename(filename);
                    // 阿里 CDN 没浏览器 UA 就 403，命令也得带头
                    return encodeURIComponent(`aria2c "${link}" --out "${filename}" -x 16 -s 16 -k 1M --header "Referer: ${location.origin}/" --header "User-Agent: ${ua || navigator.userAgent}"`);
                },
        convertLinkToBC(link, filename, ua) {
            return base._bc(link, filename, {
                'Referer': `${location.origin}/`,
                'User-Agent': ua || navigator.userAgent,
            });
        },
        convertLinkToCurl(link, filename, ua) {
            let terminal = base.getValue('setting_terminal_type');
            filename = base.fixFilename(filename);
            // -e 带 Referer：域名会迁移，写死 aliyundrive.com 在 alipan.com 上会 403
            return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}" -e "${location.origin}/" -A "${ua || navigator.userAgent}"`);
        },
        addPageListener() {
            doc.on('click', '.pl-button', async (e) => {
                if ($(e.target).closest('.g-button-menu, .menu').length) return;
                Swal.showLoading();
                try { await this.getPCSLink(); } catch (err) { Swal.close(); base.renderErrorPanel('获取下载链接失败：' + (err && err.message || '未知错误'), this); } finally { if (document.querySelector('.swal2-popup.swal2-loading')) Swal.close(); }
            });
        },
        async getRealLink(d, f) {
                    try {
                        let tk = base.getStorage('token');
                        tk = await base.refreshAliToken(tk);
                        if (!tk || !tk.access_token) {
                            Swal.close();
                            return message.error('提示：Token过期或缺失，请刷新网页后重试！');
                        }
                        let authorization = `${tk.token_type} ${tk.access_token}`;
                        let res = await base.post(panInfo.pcs[1], {
                            drive_id: d,
                            file_id: f
                        }, {
                            authorization,
                            "content-type": "application/json;charset=utf-8",
                            "referer": "https://www.aliyundrive.com/",
                            "x-canary": "client=windows,app=adrive,version=v6.0.0"
                        });
                        if (res.code === 'AccessTokenInvalid') {
                            Swal.close();
                            return message.error('提示：Token过期，请刷新网页后重试！');
                        }
                        if (res.url) {
                            return res.url;
                        }
                        return '';
                    } catch (e) { return ''; }
                },
        addButton() {
            if (!pageNum) return;
            let $toolWrap;
            let $button = $(`<div class="ali-button pl-button"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M853.333 938.667H170.667a85.333 85.333 0 0 1-85.334-85.334v-384A85.333 85.333 0 0 1 170.667 384H288a32 32 0 0 1 0 64H170.667a21.333 21.333 0 0 0-21.334 21.333v384a21.333 21.333 0 0 0 21.334 21.334h682.666a21.333 21.333 0 0 0 21.334-21.334v-384A21.333 21.333 0 0 0 853.333 448H736a32 32 0 0 1 0-64h117.333a85.333 85.333 0 0 1 85.334 85.333v384a85.333 85.333 0 0 1-85.334 85.334z" fill="#fff"/><path d="M715.03 543.552a32.81 32.81 0 0 0-46.251 0L554.005 657.813v-540.48a32 32 0 0 0-64 0v539.734L375.893 543.488a32.79 32.79 0 0 0-46.229 0 32.427 32.427 0 0 0 0 46.037l169.557 168.811a32.81 32.81 0 0 0 46.251 0l169.557-168.81a32.47 32.47 0 0 0 0-45.974z" fill="#FF9C00"/></svg><span>下载助手</span></div>`);
            if (pageNum === 'home') {
                const fallbacks = [
                    panInfo.btn.home,
                    '[class*="header--"] [class*="actions--"]',
                    '[class*="file-list-header"] [class*="action"]',
                    'header [class*="upload"]',
                ];
                const tryInject = () => {
                    for (const sel of fallbacks) {
                        let $el = $(sel);
                        if ($el.length && $('.pl-button').length === 0) {
                            $el.append($button);
                            return true;
                        }
                    }
                    return false;
                };
                if (!tryInject()) {
                    fallbacks.forEach(sel => base.listenElement(sel, tryInject));
                }
            }
            this.addPageListener();
        },
        async getPCSLink() {
                    selectedFiles = this.getSelectedList();
                    if (selectedFiles.length === 0) {
                        Swal.close(); return base.renderDownloadPanel([], this);
                    }
                    if (this.isOnlyFolder()) {
                        Swal.close(); return message.error('提示：请打开文件夹后勾选文件！');
                    }
                let tk = base.getStorage('token');
                tk = await base.refreshAliToken(tk);
                if (!tk || !tk.access_token) {
                    Swal.close(); return message.error('提示：请先登录阿里云盘后再下载！');
                }
                try {
                    let authorization = `${tk.token_type} ${tk.access_token}`;
                    const dlQueue = selectedFiles.map(item => base.post(panInfo.pcs[1], {
                        drive_id: item.driveId,
                        file_id: item.fileId,
                    }, {
                        authorization,
                        "content-type": "application/json;charset=utf-8",
                        "referer": "https://www.aliyundrive.com/",
                        "x-canary": "client=windows,app=adrive,version=v6.0.0"
                    }));
                    (await Promise.all(dlQueue)).forEach((res, i) => {
                        if (res && res.url) selectedFiles[i].downloadUrl = res.url;
                    });
                } catch (e) {
                    Swal.close();
                    const m = (e && e.message) || '';
                    if (/AccessTokenInvalid|token/i.test(m)) {
                        return message.error('提示：Token已过期，请刷新网页后重试！');
                    }
                    return message.error('提示：获取下载链接失败（' + m + '），请刷新重试！');
                }
                if (selectedFiles.length > 20) {
                    Swal.close();
                    return message.error('提示：单次最多可勾选 20 个文件！');
                }
                let noUrlSelectList = selectedFiles.filter(v => !Boolean(v.downloadUrl))
                                let queue = [];
                                noUrlSelectList.forEach((item, index) => {
                                    queue.push(this.getRealLink(item.driveId, item.fileId));
                                });
                                const res = await Promise.all(queue);
                                res.forEach((val, index) => {
                                    if (val && typeof val === 'string' && /^https?:/.test(val)) noUrlSelectList[index].downloadUrl = val;
                                });
                                let files = this.normalizeList(selectedFiles);
            base.renderDownloadPanel(files, this);
                                                        },
                                        normalizeList(list) {
            return list.map(v => ({
                filename: v.name || '',
                sizeStr: base.sizeFormat(v.size),
                rawSize: v.size || 0,
                dlink: v.downloadUrl || '',
                isFolder: v.type === 'folder',
                raw: v,
            }));
        },
        async sendLinkToRPC(filename, link) {
            let rpc = base._rpcConfig();
            if (!rpc) return 'fail';
            let url = rpc.url;
                        const UA = navigator.userAgent;
                        let rpcData = {
                            id: new Date().getTime(),
                            jsonrpc: '2.0',
                            method: 'aria2.addUri',
                            params: [`token:${rpc.token}`, [link], {
                                dir: rpc.dir,
                                out: base.safeRpcFilename(filename),
                                header: [`Referer: ${location.origin}/`, `Origin: ${location.origin}`, `User-Agent: ${UA}`]
                            }]
                        };
                        try {
                            let res = await base.post(url, rpcData, {}, '');
                if (res.result) return 'success';
                base.panelNotice('Aria2 拒绝请求：' + ((res.error && res.error.message) || '未知错误（请检查 RPC 密钥与保存路径）'));
                return 'fail';
            } catch (e) {
                base.panelNotice('无法连接 RPC（' + rpc.domain + ':' + rpc.port + '）' + (e && e.message ? '：' + e.message : '') + '，请确认下载器已启动且 RPC 服务已开启');
                return 'fail';
            }
        },
        getSelectedList() {
            try {
                let selectedList = [];
                let tableDom = document.querySelector(panInfo.dom.list);
                if (tableDom) {
                    let reactObj = base.findReact(tableDom, 1);
                    if (reactObj) {
                        let props = reactObj.pendingProps;
                        if (props) {
                            let fileList = props.dataSource || [];
                            let selectedKeys = (props.selectedKeys != null) ? (Array.isArray(props.selectedKeys) ? props.selectedKeys : String(props.selectedKeys).split(',')) : [];
                            fileList.forEach((val) => {
                                if (selectedKeys.includes(val.fileId)) {
                                    selectedList.push(Object.assign({}, val));
                                }
                            });
                        }
                    }
                    return selectedList;
                }

                let gridDom = document.querySelector(panInfo.dom.grid);
                if (!gridDom) return [];
                let gridReact = base.findReact(gridDom, 0);
                if (!gridReact) return [];
                let dataSource = (gridReact.pendingProps || {}).dataSource || [];
                if (!dataSource.length) return [];
                document.querySelectorAll('[class*="node-card-container"]').forEach((card) => {
                    let cb = card.querySelector('input[type=checkbox]');
                    if (!cb || !cb.checked) return;
                    let title = card.getAttribute('title') || '';
                    let hit = dataSource.find((v) => v.name === title);
                    if (hit) selectedList.push(Object.assign({}, hit));
                });
                return selectedList;
            } catch (e) {
                return [];
            }
        },

        detectPage() {
            let path = location.pathname;
            if (/^\/(drive)/.test(path)) return 'home';
            return '';
        },
        isOnlyFolder() {
            for (let i = 0; i < selectedFiles.length; i++) {
                if (selectedFiles[i].type === 'file') return false;
            }
            return true;
        },
        async initPanLinker() {
            base.initDefaultConfig();
            base.addPanLinkerStyle();
            pageNum = this.detectPage();
            panInfo = LOCAL_CONFIG.ali;
            Object.freeze && Object.freeze(panInfo);
            this.addButton();
            base.createTip();
            base.registerMenuCommand();
        }
    };
    let tianyi = {
        site: 'tianyi',
        convertLinkToAria(link, filename, ua) {
            filename = base.fixFilename(filename);
            return encodeURIComponent(`aria2c "${link}" --out "${filename}" -x 16 -s 16 -k 1M`);
        },
        convertLinkToBC(link, filename, ua) {
            let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}ZZ`;
            return encodeURIComponent(`bc://http/${base.e(bc)}`);
        },
        convertLinkToCurl(link, filename, ua) {
            let terminal = base.getValue('setting_terminal_type');
            filename = base.fixFilename(filename);
            return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}"`);
        },
        addPageListener() {
            doc.on('click', '.pl-button', async (e) => {
                if ($(e.target).closest('.g-button-menu, .menu').length) return;
                Swal.showLoading();
                try { await this.getPCSLink(); } catch (err) { Swal.close(); base.renderErrorPanel('获取下载链接失败：' + (err && err.message || '未知错误'), this); } finally { if (document.querySelector('.swal2-popup.swal2-loading')) Swal.close(); }
            });
        },
        _insertBeforeUpload(container, $button) {
            if (container.firstChild) {
                container.insertBefore($button[0], container.firstChild);
            } else {
                container.appendChild($button[0]);
            }
        },
        addButton() {
            if (!pageNum) return;
            let $toolWrap;
            let $button = $(`<div class="tianyi-button pl-button">下载助手</div>`);
            if (pageNum === 'home') {
                            base.listenElement(panInfo.btn.home, () => {
                                let container = document.querySelector(panInfo.btn.home);
                                if (container && $('.pl-button').length === 0) {
                                                    this._insertBeforeUpload(container, $button);
                                                }
                            })
                        }
            this.addPageListener();
        },
        async getToken() {
            let res = await base.getFinalUrl(panInfo.pcs[1], {});
            let accessToken = res.match(/accessToken=(\w+)/)?.[1];
            accessToken && base.setStorage('accessToken', accessToken);
            return accessToken;
        },
        async getFileUrlByOnce(item, index, token) {
            try {
                if (item.downloadUrl) return {
                    index,
                    downloadUrl: item.downloadUrl
                };
                let time = Date.now(),
                    fileId = item.fileId,
                    o = "AccessToken=" + token + "&Timestamp=" + time + "&fileId=" + fileId,
                    url = panInfo.pcs[2] + '?fileId=' + fileId;
                let sign = md5(o).toString();
                let res = await base.get(url, {
                    "accept": "application/json;charset=UTF-8",
                    "sign-type": 1,
                    "accesstoken": token,
                    "timestamp": time,
                    "signature": sign
                });
                if (res.res_code === 0) {
                    return {
                        index,
                        downloadUrl: res.fileDownloadUrl
                    };
                } else if (res.errorCode === 'InvalidSessionKey') {
                    return {
                        index,
                        downloadUrl: '提示：请先登录网盘！'
                    };
                    return {
                        index,
                        downloadUrl: '提示：请先[转存]文件，前往[我的网盘]中下载！'
                    };
                } else {
                    return {
                        index,
                        downloadUrl: '获取下载地址失败，请刷新重试！'
                    };
                }
            } catch (e) {
                return {
                    index,
                    downloadUrl: '获取下载地址失败，请刷新重试！'
                };
            }
        },
        async getPCSLink() {
                    selectedFiles = this.getSelectedList();
                    if (selectedFiles.length === 0) {
                        Swal.close(); return base.renderDownloadPanel([], this);
                    }
                    if (this.isOnlyFolder()) {
                        Swal.close(); return message.error('提示：请打开文件夹后勾选文件！');
                    }
            let token = base.getStorage('accessToken') || await this.getToken();
            if (!token) {
                Swal.close(); return message.error('提示：请先登录网盘！');
            }
            let queue = [];
            selectedFiles.forEach((item, index) => {
                queue.push(this.getFileUrlByOnce(item, index, token));
            });
            const res = await Promise.all(queue);
            res.forEach(val => {
                selectedFiles[val.index].downloadUrl = val.downloadUrl;
            });
            let files = this.normalizeList(selectedFiles);
            base.renderDownloadPanel(files, this);
        },
        normalizeList(list) {
            return list.map(v => ({
                filename: v.fileName || '',
                sizeStr: base.sizeFormat(v.size),
                rawSize: v.size || 0,
                dlink: v.downloadUrl && /^https?:\/\//.test(v.downloadUrl) ? v.downloadUrl : '',
                isFolder: !!v.isFolder,
                raw: v,
            }));
        },
        async sendLinkToRPC(filename, link) {
            let rpc = base._rpcConfig();
            if (!rpc) return 'fail';
            let url = rpc.url;
            let rpcData = {
                id: new Date().getTime(),
                jsonrpc: '2.0',
                method: 'aria2.addUri',
                params: [`token:${rpc.token}`, [link], {
                    dir: rpc.dir,
                    out: base.safeRpcFilename(filename),
                    header: []
                }]
            };
            try {
                let res = await base.post(url, rpcData, {}, '');
                if (res.result) return 'success';
                base.panelNotice('Aria2 拒绝请求：' + ((res.error && res.error.message) || '未知错误（请检查 RPC 密钥与保存路径）'));
                return 'fail';
            } catch (e) {
                base.panelNotice('无法连接 RPC（' + rpc.domain + ':' + rpc.port + '）' + (e && e.message ? '：' + e.message : '') + '，请确认下载器已启动且 RPC 服务已开启');
                return 'fail';
            }
        },
        getSelectedList() {
            try {
                return document.querySelector(".c-file-list").__vue__.selectedList;
            } catch (e) {
                let detail = document.querySelector(".info-detail");
                return detail && detail.__vue__ ? [detail.__vue__.fileDetail] : [];
            }
        },
        detectPage() {
            let path = location.pathname;
            if (/^\/web\/main/.test(path)) return 'home';
            return '';
        },
        isOnlyFolder() {
            for (let i = 0; i < selectedFiles.length; i++) {
                if (!selectedFiles[i].isFolder) return false;
            }
            return true;
        },
        async initPanLinker() {
            base.initDefaultConfig();
            base.addPanLinkerStyle();
            pageNum = this.detectPage();
            panInfo = LOCAL_CONFIG.tianyi;
            Object.freeze && Object.freeze(panInfo);
            this.addButton();
            this.getToken();
            base.createTip();
            base.registerMenuCommand();
        }
    };
    let xunlei = {
        site: 'xunlei',
        _homeSelectors: [
            '.FileMenu__container--yB0l1',
            '.FileMenu__menus--HFKwO',
            '.file-menu',
            '.source-list-menu',
        ],
        _getAuthCookie() {
            let keys = ['userid', 'deviceid', 'XLA_CI', 'xl_fp_rt'];
            let parts = [];
            for (let k of keys) {
                let v = base.getCookie(k);
                if (v) parts.push(`${k}=${v}`);
            }
            return parts.join('; ').replace(/[\\"`$]/g, '');
        },
        convertLinkToAria(link, filename, ua) {
            filename = base.fixFilename(filename);
            let cookie = this._getAuthCookie();
            let cookieStr = cookie ? ` --header "Cookie: ${cookie}"` : '';
            let uaStr = ` --header "User-Agent: ${navigator.userAgent}"`;
            // 迅雷多 Range 会断开，aria2 只能单线程
            // 迅雷 CDN 认 cookie + UA，缺一个就断连
            return encodeURIComponent(`aria2c "${link}" --out "${filename}" -x 1 -s 1${cookieStr}${uaStr}`);
        },
        convertLinkToBC(link, filename, ua) {
            return base._bc(link, filename, {
                'Cookie': this._getAuthCookie(),
                'User-Agent': ua || navigator.userAgent,
            });
        },
        convertLinkToCurl(link, filename, ua) {
            let terminal = base.getValue('setting_terminal_type');
            filename = base.fixFilename(filename);
            let cookie = this._getAuthCookie();
            let cookieStr = cookie ? ` -b "${cookie}"` : '';
            return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}"${cookieStr} -H "User-Agent: ${navigator.userAgent}"`);
        },
        addPageListener() {
            doc.on('click', '.pl-button', async (e) => {
                if ($(e.target).closest('.g-button-menu, .menu').length) return;
                Swal.showLoading();
                try { await this.getPCSLink(); } catch (err) { Swal.close(); base.renderErrorPanel('获取下载链接失败：' + (err && err.message || '未知错误'), this); } finally { if (document.querySelector('.swal2-popup.swal2-loading')) Swal.close(); }
            });
        },
        _findHomeContainer() {
            if (panInfo.btn && panInfo.btn.home) {
                let el = document.querySelector(panInfo.btn.home);
                if (el) return el;
            }
            for (let sel of this._homeSelectors) {
                let el = document.querySelector(sel);
                if (el) return el;
            }
            return null;
        },
        addButton() {
            if (!pageNum) return;
            let $toolWrap;
            let $button = $(`<div class="xunlei-button pl-button"><i class="xlpfont xlp-download"></i><span style="font-size: 13px;margin-left: 6px;">下载助手</span></div>`);
            if (pageNum === 'home') {
                this._smartListen(() => {
                    let container = this._findHomeContainer();
                    if (container && $('.pl-button').length === 0) {
                        $(container).prepend($button);
                    }
                });
            }
            this.addPageListener();
        },
        _smartListen(callback) {
            const checkInterval = 500;
            function check() {
                setTimeout(check, checkInterval);
                callback();
            }
            check();
        },
        getToken() {
            let credentials = {}, captcha = {};
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (/^credentials_/.test(key)) {
                    credentials = base.getStorage(key);
                }
                if (/^captcha_[\w]{16}/.test(key)) {
                    captcha = base.getStorage(key);
                }
            }
            let deviceid = '';
            try {
                let lsDevice = base.getStorage('deviceid');
                if (lsDevice) {
                    if (typeof lsDevice === 'string' && lsDevice.includes(',')) {
                        let match = /(\w{32})/.exec(lsDevice.split(','));
                        if (match) deviceid = match[1];
                    } else if (typeof lsDevice === 'string') {
                        let match = /(\w{32})/.exec(lsDevice);
                        if (match) deviceid = match[1];
                    }
                }
            } catch (e) {}
            if (!deviceid) {
                let cookieDevice = base.getCookie('peerid') || base.getCookie('deviceid');
                if (cookieDevice) {
                    if (cookieDevice.includes('.') && cookieDevice.length > 32) {
                        let parts = cookieDevice.split('.');
                        if (parts[1] && parts[1].length >= 32) {
                            deviceid = parts[1].substring(0, 32);
                        }
                    }
                    if (!deviceid) {
                        let match = /([0-9a-f]{32})/i.exec(cookieDevice);
                        if (match) deviceid = match[1];
                    }
                }
            }
            if (!deviceid) {
                deviceid = Array.from({length: 32}, () =>
                    Math.floor(Math.random() * 16).toString(16)
                ).join('');
            }
            let token = {
                credentials,
                captcha,
                deviceid
            };
            return token;
        },
        async getFileUrlByOnce(item, index, token) {
            try {
                if (item.downloadUrl) return {
                    index,
                    downloadUrl: item.downloadUrl,
                    mediaLink: item.mediaLink || ''
                };
                let headers = {
                    'content-type': "application/json",
                    'x-device-id': token.deviceid,
                };
                if (token.credentials && token.credentials.access_token) {
                    let tokenType = token.credentials.token_type || 'Bearer';
                    headers['Authorization'] = `${tokenType} ${token.credentials.access_token}`;
                }
                if (token.captcha && token.captcha.token) {
                    headers['x-captcha-token'] = token.captcha.token;
                }
                let res = await base.get(panInfo.pcs[0] + item.id, headers);
                if (res.web_content_link) {
                    let mediaLink = '';
                    if (Array.isArray(res.medias) && res.medias.length > 0) {
                        let media = res.medias.find(m => m && m.link && m.link.url && m.media_name !== '原始画质') || res.medias[0];
                        if (media && media.link && media.link.url) {
                            mediaLink = media.link.url;
                        }
                    }
                    return {
                        index,
                        downloadUrl: res.web_content_link,
                        mediaLink
                    };
                } else if (res.reason) {
                    return {
                        index,
                        downloadUrl: '获取失败：' + (res.reason || res.message || '未知错误')
                    };
                } else {
                    return {
                        index,
                        downloadUrl: '获取下载地址失败，请刷新重试！'
                    };
                }
            } catch (e) {
                return {
                    index,
                    downloadUrl: '获取下载地址失败，请刷新重试！'
                };
            }
        },
        async getPCSLink() {
                    selectedFiles = this.getSelectedList();
                    if (selectedFiles.length === 0) {
                        Swal.close(); return base.renderDownloadPanel([], this);
                    }
                    if (this.isOnlyFolder()) {
                        Swal.close(); return message.error('提示：请打开文件夹后勾选文件！');
                    }
            if (pageNum === 'home') {
                let queue = [];
                let token = this.getToken();
                if (!token.credentials || !token.credentials.access_token) {
                    return message.error('提示：登录凭证获取失败，请先登录网盘后刷新页面！');
                }
                selectedFiles.forEach((item, index) => {
                    queue.push(this.getFileUrlByOnce(item, index, token));
                });
                const res = await Promise.all(queue);
                res.forEach(val => {
                    selectedFiles[val.index].downloadUrl = val.downloadUrl;
                    if (val.mediaLink) selectedFiles[val.index].mediaLink = val.mediaLink;
                });
            } else {
                let dialog = await Swal.fire({
                    toast: true,
                    icon: 'info',
                    title: `提示：请将文件<span class="tag-danger">[保存到网盘]</span>后前往<span class="tag-danger">[我的网盘]</span>中下载！`,
                    showConfirmButton: true,
                    confirmButtonText: '点击保存',
                    position: 'top',
                });
                if (dialog.isConfirmed) {
                    let save = document.querySelector('.saveToCloud');
                    save && save.click();
                    return;
                }
            }
            let files = this.normalizeList(selectedFiles);
            base.renderDownloadPanel(files, this);
        },
        normalizeList(list) {
            return list.map(v => ({
                filename: v.name || '',
                sizeStr: base.sizeFormat(+v.size),
                rawSize: +v.size || 0,
                dlink: v.downloadUrl && /^https?:\/\//.test(v.downloadUrl) ? v.downloadUrl : '',
                mediaLink: v.mediaLink && /^https?:\/\//.test(v.mediaLink) ? v.mediaLink : '',
                isFolder: v.kind === 'drive#folder',
                raw: v,
            }));
        },
        async sendLinkToRPC(filename, link) {
            let rpc = base._rpcConfig();
            if (!rpc) return 'fail';
            let url = rpc.url;
            let authCookie = this._getAuthCookie ? this._getAuthCookie() : '';
            let rpcHeader = authCookie
                ? [`Cookie: ${authCookie}`, `User-Agent: ${navigator.userAgent}`]
                : [];
            let rpcData = {
                id: new Date().getTime(),
                jsonrpc: '2.0',
                method: 'aria2.addUri',
                params: [`token:${rpc.token}`, [link], {
                    dir: rpc.dir,
                    out: base.safeRpcFilename(filename),
                    header: rpcHeader
                }]
            };
            try {
                let res = await base.post(url, rpcData, {}, '');
                if (res.result) return 'success';
                base.panelNotice('Aria2 拒绝请求：' + ((res.error && res.error.message) || '未知错误（请检查 RPC 密钥与保存路径）'));
                return 'fail';
            } catch (e) {
                base.panelNotice('无法连接 RPC（' + rpc.domain + ':' + rpc.port + '）' + (e && e.message ? '：' + e.message : '') + '，请确认下载器已启动且 RPC 服务已开启');
                return 'fail';
            }
        },
        getSelectedList() {
            try {
                let doms = document.querySelectorAll('.SourceListItem__item--XxpOC');
                if (doms.length > 0) {
                    let selectedList = [];
                    for (let dom of doms) {
                        let domVue = dom.__vue__;
                        if (domVue && domVue.info && domVue.selected) {
                            if (domVue.selected.includes(domVue.info.id)) {
                                selectedList.push(domVue.info);
                            }
                        }
                    }
                    if (selectedList.length > 0) return selectedList;
                }
                let allItems = document.querySelectorAll('[class*="SourceListItem__item"]');
                if (allItems.length > 0) {
                    let selectedList = [];
                    for (let dom of allItems) {
                        let domVue = dom.__vue__;
                        if (domVue) {
                            let info = domVue.info || domVue.item || (domVue.$props && domVue.$props.info);
                            let selected = domVue.selected || domVue.fileSelected || (domVue.$props && domVue.$props.selected);
                            if (info && selected && selected.includes(info.id)) {
                                selectedList.push(info);
                            }
                        }
                    }
                    if (selectedList.length > 0) return selectedList;
                }
                let app = document.querySelector('#__nuxt') || document.querySelector('#app');
                if (app && app.__vue__) {
                    let rootVue = app.__vue__;
                    let found = this._findSelectedInVueTree(rootVue, 0);
                    if (found && found.length > 0) return found;
                }
                return [];
            } catch (e) {
                return [];
            }
        },
        _findSelectedInVueTree(vm, depth) {
            if (depth > 8 || !vm) return null;
            try {
                if (vm.fileSelected && vm.listInfo && Array.isArray(vm.fileSelected) && vm.fileSelected.length > 0) {
                    return vm.fileSelected.map(id => vm.listInfo[id]).filter(Boolean);
                }
                if (vm.$children) {
                    for (let child of vm.$children) {
                        let result = this._findSelectedInVueTree(child, depth + 1);
                        if (result && result.length > 0) return result;
                    }
                }
            } catch (e) {}
            return null;
        },
        detectPage() {
            let path = location.pathname;
            if (/^\/$/.test(path)) return 'home';
            return '';
        },
        isOnlyFolder() {
            for (let i = 0; i < selectedFiles.length; i++) {
                if (selectedFiles[i].kind === 'drive#file') return false;
            }
            return true;
        },
        async initPanLinker() {
            base.initDefaultConfig();
            base.addPanLinkerStyle();
            pageNum = this.detectPage();
            panInfo = LOCAL_CONFIG.xunlei;
            Object.freeze && Object.freeze(panInfo);
            this.addButton();
            base.createTip();
            base.registerMenuCommand();
        }
    };
    let quark = {
        site: 'quark',
        convertLinkToAria(link, filename, ua) {
            filename = base.fixFilename(filename);
            return encodeURIComponent(`aria2c "${link}" --out "${filename}" --header "User-Agent: ${panInfo.ua}" --header "Cookie: ${String(document.cookie).replace(/[\\"`$]/g, '')}"`);
        },
        convertLinkToBC(link, filename, ua) {
            // 只带 __pus/__puus 会 412，要给完整 cookie
            return base._bc(link, filename, {
                'Referer': `${location.origin}/`,
                'User-Agent': ua || navigator.userAgent,
                'Cookie': String(document.cookie),
            });
        },
        convertLinkToCurl(link, filename, ua) {
            let terminal = base.getValue('setting_terminal_type');
            filename = base.fixFilename(filename);
            return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}" -A "${panInfo.ua}" -b "${String(document.cookie).replace(/[\\"`$]/g, '')}"`);
        },
        addPageListener() {
            if (this._listenerBound) return;
            this._listenerBound = true;
            window.addEventListener('hashchange', async (e) => {
                let home = 'https://pan.quark.cn/list#/', all = 'https://pan.quark.cn/list#/list/all';
                if (e.oldURL === home && e.newURL === all) return;
                await base.sleep(150);
                if ($('.quark-button').length > 0) return;
                this.addButton();
            });
            doc.on('click', '.pl-button', async (e) => {
                if ($(e.target).closest('.g-button-menu, .menu').length) return;
                Swal.showLoading();
                try { await this.getPCSLink(); } catch (err) { Swal.close(); base.renderErrorPanel('获取下载链接失败：' + (err && err.message || '未知错误'), this); } finally { if (document.querySelector('.swal2-popup.swal2-loading')) Swal.close(); }
            });
        },
        addButton() {
            if (!pageNum) return;
            let $toolWrap;
            let $button = $(`<div class="quark-button pl-button"><svg width="22" height="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#555" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 2-2z"/><path d="M14 8h1.553c.85 0 1.16.093 1.47.267.311.174.556.43.722.756.166.326.255.65.255 1.54v4.873c0 .892-.089 1.215-.255 1.54-.166.327-.41.583-.722.757-.31.174-.62.267-1.47.267H6.447c-.85 0-1.16-.093-1.47-.267a1.778 1.778 0 01-.722-.756c-.166-.326-.255-.65-.255-1.54v-4.873c0-.892.089-1.215.255-1.54.166-.327.41-.583.722-.757.31-.174.62-.267 1.47-.267H11"/><path stroke-linecap="round" stroke-linejoin="round" d="M11 3v10"/></g></svg><b>下载助手</b></div>`);
            if (pageNum === 'home') {
                base.listenElement(panInfo.btn.home, () => {
                    $toolWrap = $(panInfo.btn.home);
                    $('.pl-button').length === 0 && $toolWrap.prepend($button);
                });
            }
        },
        // 夸克不给 token 就派到限速节点，约 30KB/s
        async getAccelToken() {
            const now = Date.now();
            const cached = base.getValue('quark_accel_token');
            if (cached && cached.token && cached.expired_timestamp) {
                if (cached.expired_timestamp > now + 60000) {
                    return cached.token;
                }
            }
            const time = Math.floor(now / 1e3);
            try {
                let res = await base.post(panInfo.pcs[1], {
                    "conversation_id": "300000" + time,
                    "conversation_type": 3,
                    "msg_id": time + "000"
                }, {"content-type": "application/json;charset=utf-8", "Cookie": String(document.cookie), "User-Agent": panInfo.ua});
                if (res && res.code === 0 && res.data && res.data.token) {
                    base.setValue('quark_accel_token', res.data);
                    return res.data.token;
                }
            } catch (e) {}
            return '';
        },
        async getPCSLink() {
                    selectedFiles = this.getSelectedList();
                    if (selectedFiles.length === 0) {
                        Swal.close(); return base.renderDownloadPanel([], this);
                    }
                    if (this.isOnlyFolder()) {
                        Swal.close(); return message.error('提示：请打开文件夹后勾选文件！');
                    }
            let fids = [];
            selectedFiles.forEach(val => {
                fids.push(val.fid);
            });
            if (pageNum === 'home') {
                let token = await this.getAccelToken();
                let res = await base.post(panInfo.pcs[0], {
                    "fids": fids,
                    "speedup_session": "",
                    "token": token
                }, {"content-type": "application/json;charset=utf-8", "Cookie": String(document.cookie), "user-agent": panInfo.ua});
                if (res.code === 31001) {
                    Swal.close(); return message.error('提示：请先登录网盘！');
                }
                if (res.code !== 0) {
                                    return message.error('提示：获取链接失败！');
                                }
                                let files = this.normalizeList(res.data);
            base.renderDownloadPanel(files, this);
                            } else {
                let dialog = await Swal.fire({
                    toast: true,
                    icon: 'info',
                    title: `提示：请将文件<span class="tag-danger">[保存到网盘]</span>后前往<span class="tag-danger">[我的网盘]</span>中下载！`,
                    showConfirmButton: true,
                    confirmButtonText: '点击保存',
                    position: 'top',
                });
                if (dialog.isConfirmed) {
                    let save = document.querySelector('.file-info_r');
                    save && save.click();
                    return;
                }
            }
        },
        normalizeList(list) {
            return list.map(v => ({
                filename: v.file_name || '',
                sizeStr: base.sizeFormat(v.size),
                rawSize: v.size || 0,
                dlink: v.download_url || '',
                isFolder: v.file === false,
                raw: v,
            }));
        },
        async sendLinkToRPC(filename, link) {
            let rpc = base._rpcConfig();
            if (!rpc) return 'fail';
            let url = rpc.url;
            let rpcData = {
                id: new Date().getTime(),
                jsonrpc: '2.0',
                method: 'aria2.addUri',
                params: [`token:${rpc.token}`, [link], {
                    dir: rpc.dir,
                    out: base.safeRpcFilename(filename),
                    header: [`User-Agent: ${panInfo.ua}`, `Cookie: ${String(document.cookie)}`],
                    'user-agent': panInfo.ua,
                    'referer': `${location.origin}/`
                }]
            };
            try {
                let res = await base.post(url, rpcData, {}, '');
                if (res.result) return 'success';
                base.panelNotice('Aria2 拒绝请求：' + ((res.error && res.error.message) || '未知错误（请检查 RPC 密钥与保存路径）'));
                return 'fail';
            } catch (e) {
                base.panelNotice('无法连接 RPC（' + rpc.domain + ':' + rpc.port + '）' + (e && e.message ? '：' + e.message : '') + '，请确认下载器已启动且 RPC 服务已开启');
                return 'fail';
            }
        },
        getSelectedList() {
            try {
                let selectedList = [];
                let reactDom = document.getElementsByClassName('file-list')[0];
                let reactObj = base.findReact(reactDom);
                if (!reactObj) return [];
                let props = reactObj.props;
                if (props) {
                    let fileList = props.list || [];
                    let selectedKeys = props.selectedRowKeys || [];
                    fileList.forEach((val) => {
                        if (selectedKeys.includes(val.fid)) {
                            selectedList.push(Object.assign({}, val));
                        }
                    });
                }
                return selectedList;
            } catch (e) {
                return [];
            }
        },
        detectPage() {
            let path = location.pathname;
            if (/^\/(list)/.test(path)) return 'home';
            return '';
        },
        isOnlyFolder() {
            for (let i = 0; i < selectedFiles.length; i++) {
                if (selectedFiles[i].file) return false;
            }
            return true;
        },
        async initPanLinker() {
            base.initDefaultConfig();
            base.addPanLinkerStyle();
            pageNum = this.detectPage();
            panInfo = LOCAL_CONFIG.quark;
            Object.freeze && Object.freeze(panInfo);
            this.addButton();
            this.addPageListener();
            base.createTip();
            base.registerMenuCommand();
        }
    };
    let yidong = {
        site: 'yidong',
        convertLinkToAria(link, filename, ua) {
            filename = base.fixFilename(filename);
            return encodeURIComponent(`aria2c "${link}" --out "${filename}" -x 16 -s 16 -k 1M`);
        },
        convertLinkToBC(link, filename, ua) {
            let bc = `AA/${encodeURIComponent(filename)}/?url=${encodeURIComponent(link)}ZZ`;
            return encodeURIComponent(`bc://http/${base.e(bc)}`);
        },
        convertLinkToCurl(link, filename, ua) {
            let terminal = base.getValue('setting_terminal_type');
            filename = base.fixFilename(filename);
            return encodeURIComponent(`${terminal !== 'wp' ? 'curl' : 'curl.exe'} -L -C - "${link}" -o "${filename}"`);
        },
        addPageListener() {
            doc.on('click', '.pl-button', async (e) => {
                if ($(e.target).closest('.g-button-menu, .menu').length) return;
                Swal.showLoading();
                try { await this.getPCSLink(); } catch (err) { Swal.close(); base.renderErrorPanel('获取下载链接失败：' + (err && err.message || '未知错误'), this); } finally { if (document.querySelector('.swal2-popup.swal2-loading')) Swal.close(); }
            });
        },
        addButton() {
            if (!pageNum) return;
            let $toolWrap;
            let $button = $(`<div class="yidong-button pl-button">下载助手</div>`);
            if (pageNum === 'home') {
                base.listenElement(panInfo.btn.home, () => {
                    $toolWrap = $(panInfo.btn.home);
                    $('.pl-button').length === 0 && $toolWrap.prepend($button);
                })
            }
            this.addPageListener();
        },
        async getFileUrlByOnce(item, index) {
            try {
                if (item.downloadUrl) return {
                    index,
                    downloadUrl: item.downloadUrl
                };
                if (this.detectPage() === 'home') {
                    let body = {
                        "fileId": item.contentID
                    };
                    let time = new Date(+new Date() + 8 * 3600 * 1000).toJSON().substr(0, 19).replace('T', ' ');
                    let key = base.getRandomString(16);
                    let sign = base.getSign(undefined, body, time, key);
                    let res = await base.post(panInfo.pcs[0], body, {
                        'authorization': base.getCookie('authorization'),
                        'caller': 'web',
                        'content-type': "application/json;charset=UTF-8",
                        'CMS-DEVICE': 'default',
                        'mcloud-channel': '1000101',
                        'mcloud-client': '10701',
                        'mcloud-sign': time + "," + key + "," + sign,
                        'mcloud-version': '7.14.2',
                        'x-deviceinfo': '||9|7.17.0|edge||||windows 10||zh-CN|||',
                        'x-huawei-channelsrc': '10000034',
                        'x-inner-ntwk': '2',
                        'x-m4c-caller': 'PC',
                        'x-m4c-src': '10002',
                        'x-svctype': '1',
                        'x-yun-api-version': 'v1',
                        'x-yun-app-channel': '10000034',
                        'x-yun-channel-source': '10000034',
                        'x-yun-client-info': '||9|7.17.0|edge||||windows 10||zh-CN|||||',
                        'x-yun-module-type': '100',
                        'x-yun-svc-type': '1',
                        'x-yun-url-type': '3',
                    });
                    if (res.success) {
                        return {
                            index,
                            downloadUrl: res.data.url
                        };
                    } else {
                        return {
                            index,
                            downloadUrl: '获取下载地址失败，请刷新重试！'
                        };
                    }
                }
                let res = await base.post(panInfo.pcs[1], `linkId=${vueDom.linkID}&contentIds=${encodeURIComponent(item.path)}&catalogIds=`, {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    });
                    if (res.code === 0) {
                        return {
                            index,
                            downloadUrl: res.data.redrUrl
                        };
                    } else {
                        return {
                            index,
                            downloadUrl: '获取下载地址失败，请刷新重试！'
                        };
                    }
            } catch (e) {
                return {
                    index,
                    downloadUrl: '获取下载地址失败，请刷新重试！'
                };
            }
        },
        async getPCSLink() {
            selectedFiles = this.getSelectedList();
            if (selectedFiles.length === 0) {
                Swal.close(); return base.renderDownloadPanel([], this);
            }
            if (this.isOnlyFolder()) {
                return message.error('提示：勾选的全是文件夹，脚本仅支持下载文件，请打开文件夹后勾选文件！');
            }
            selectedFiles = selectedFiles.filter(v => v && v.contentID);
            if (selectedFiles.length === 0) {
                return message.error('提示：未获取到文件标识，请刷新页面后重试！');
            }
            let queue = [];
            selectedFiles.forEach((item, index) => {
                queue.push(this.getFileUrlByOnce(item, index));
            });
            const res = await Promise.all(queue);
            res.forEach(val => {
                selectedFiles[val.index].downloadUrl = val.downloadUrl;
            });
            let files = this.normalizeList(selectedFiles);
            base.renderDownloadPanel(files, this);
        },
        normalizeList(list) {
            return list.map(v => ({
                filename: v.contentName || v.coName || '',
                sizeStr: base.sizeFormat(v.contentSize || v.coSize),
                rawSize: v.contentSize || v.coSize || 0,
                dlink: v.downloadUrl && /^https?:\/\//.test(v.downloadUrl) ? v.downloadUrl : '',
                isFolder: !!(v.dirEtag || v.caName),
                raw: v,
            }));
        },
        async sendLinkToRPC(filename, link) {
            let rpc = base._rpcConfig();
            if (!rpc) return 'fail';
            let url = rpc.url;
            let rpcData = {
                id: new Date().getTime(),
                jsonrpc: '2.0',
                method: 'aria2.addUri',
                params: [`token:${rpc.token}`, [link], {
                    dir: rpc.dir,
                    out: base.safeRpcFilename(filename),
                    header: []
                }]
            };
            try {
                let res = await base.post(url, rpcData, {}, '');
                if (res.result) return 'success';
                base.panelNotice('Aria2 拒绝请求：' + ((res.error && res.error.message) || '未知错误（请检查 RPC 密钥与保存路径）'));
                return 'fail';
            } catch (e) {
                base.panelNotice('无法连接 RPC（' + rpc.domain + ':' + rpc.port + '）' + (e && e.message ? '：' + e.message : '') + '，请确认下载器已启动且 RPC 服务已开启');
                return 'fail';
            }
        },
        getSelectedList() {
            let normalize = (item, vue) => {
                if (!item || typeof item !== 'object') return null;
                if (!item.owner && vue) {
                    try {
                        let root = vue.$root || vue;
                        let s = root && root.$data;
                        if (s) {
                            let owner = s.owner || s.account ||
                                (s.userInfo && (s.userInfo.account || s.userInfo.phone)) ||
                                (s.globalInfo && (s.globalInfo.account || s.globalInfo.phone)) || '';
                            if (owner) item.owner = owner;
                        }
                    } catch (e) {}
                }
                return item;
            };
            let result = [];
            try {
                let vue = document.querySelector(".main_file_list").__vue__;
                let list = vue.selectList;
                if (Array.isArray(list) && list.length) {
                    result = list.map(val => normalize(val.item, vue)).filter(Boolean);
                    if (result.length) return result;
                }
            } catch (e) {}
            try {
                let vueDom = document.querySelector(".home-page").__vue__;
                let fileList = vueDom._computedWatchers.fileList.value;
                let dirList = vueDom._computedWatchers.dirList.value;
                let selectedFileIndex = vueDom.selectedFile;
                let selectedDirIndex = vueDom.selectedDir;
                let selectFileList = fileList.filter((v, i) => {
                    return selectedFileIndex.includes(i);
                });
                let selectDirList = dirList.filter((v, i) => {
                    return selectedDirIndex.includes(i);
                });
                let list = [...selectFileList, ...selectDirList];
                if (list.length) {
                    result = list.map(v => normalize(v, vueDom)).filter(Boolean);
                    if (result.length) return result;
                }
            } catch (e) {}
            try {
                let containers = document.querySelectorAll('.main_file_list, [class*="file-list"], [class*="fileList"], .file-box, .home-page');
                let markSelectors = ['[class*="selected"]', '[class*="checked"]', 'input[type="checkbox"]:checked'];
                containers.forEach(container => {
                    markSelectors.forEach(sel => {
                        container.querySelectorAll(sel).forEach(dom => {
                            let vue = dom.__vue__ || (dom.parentElement && dom.parentElement.__vue__) ||
                                (dom.closest && dom.closest('[class*="item"]') && dom.closest('[class*="item"]').__vue__);
                            if (!vue) return;
                            let item = vue.item || vue.fileData || vue.info ||
                                (vue.$props && (vue.$props.item || vue.$props.file || vue.$props.data));
                            if (!item && vue.$data) {
                                item = vue.$data.item || vue.$data.fileData || vue.$data.info;
                            }
                            item = normalize(item, vue);
                            if (item && !result.includes(item)) result.push(item);
                        });
                    });
                });
                if (result.length) return result;
            } catch (e) {}
            return [];
        },
        detectPage() {
            let path = location.pathname;
            if (/^\/w/.test(path)) return 'home';
            return '';
        },
        isOnlyFolder() {
            for (let i = 0; i < selectedFiles.length; i++) {
                let v = selectedFiles[i] || {};
                if (v.kind === 'folder' || v.folder === true || v.isFolder === true || v.contentType === 'folder' || v.contentType === 'dir') continue;
                return false;
            }
            return true;
        },
        async initPanLinker() {
            base.initDefaultConfig();
            base.addPanLinkerStyle();
            pageNum = this.detectPage();
            panInfo = LOCAL_CONFIG.yidong;
            Object.freeze && Object.freeze(panInfo);
            this.addButton();
            base.createTip();
            base.registerMenuCommand();
        }
    };
    let main = {
        init() {
            base.migrate();
            if (/(pan|yun).baidu.com/.test(location.host)) {
                baidu.initPanLinker();
            }
            if (/openapi.baidu.com\/oauth/.test(location.href)) {
                baidu.initAuthorize()
            }
            if (/www.(aliyundrive|alipan).com/.test(location.host)) {
                ali.initPanLinker();
            }
            if (/cloud.189.cn/.test(location.host)) {
                tianyi.initPanLinker();
            }
            if (/pan.xunlei.com/.test(location.host)) {
                xunlei.initPanLinker();
            }
            if (/pan.quark.cn/.test(location.host)) {
                quark.initPanLinker();
            }
            if (/(yun|caiyun).139.com/.test(location.host)) {
                yidong.initPanLinker();
            }
        }
    };
    // document-start 时 DOM 未就绪，等 DOMContentLoaded 再初始化
    const startInit = () => main.init();
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startInit, { once: true });
    } else {
        startInit();
    }
})();
