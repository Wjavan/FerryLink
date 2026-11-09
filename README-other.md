# 🚀 FerryLink

一个免费开源的 **网盘直链下载油猴脚本**，支持 Windows / Mac / Linux，兼容 IDM、XDown、Aria2、Motrix、终端等主流下载器。

---

## 📖 简介

【FerryLink】是一款 Tampermonkey 用户脚本，注入百度网盘、阿里云盘、天翼云盘、迅雷云盘、夸克网盘、中国移动云盘页面，自动识别并解析文件的真实下载地址。支持通过 HTTP 直链、Aria2 RPC、JSON-RPC、cURL 等多种方式推送到你选择的下载器，告别官方客户端限速。

> ⚠️ 本脚本仅解析下载链接，不突破网盘限速，建议配合超级会员使用。

---

## ✨ 功能特性

- 🎯 **多网盘支持** — 百度 · 阿里 · 天翼 · 迅雷 · 夸克 · 移动 · 城通
- ⚡ **多种协议** — HTTP 直链 · 转码（迅雷） · Aria2 · JSON-RPC · cURL · 比特彗星
- 🔧 **兼容主流下载器** — IDM、XDown、Aria2、NDM、Motrix、浏览器、终端
- 🔒 **配置内嵌本地** — 所有设置写入油猴存储，不依赖第三方服务器
- 🎨 **自定义主题** — 7 种预设颜色可选
- 📦 **批量下载** — 一次性获取多个文件直链，一键复制全部

---

## 🛠️ 下载器适配

| 下载器 | 推荐模式 |
| --- | --- |
| IDM / XDown | API 下载 |
| Aria2 / Motrix | RPC 或 aria2 命令 |
| 终端 | cURL 命令 |
| 浏览器 | API 直接下载 |

---

## 📥 安装方法

1. 安装 [Tampermonkey（篡改猴）](https://www.tampermonkey.net/) 扩展（支持 Chrome / Edge / Firefox）
2. 进入扩展管理页，开启左下角 **「开发人员模式」**
3. 打开篡改猴详情，启用 **「允许用户脚本」** 和 **「允许访问文件 URL」**
4. 回到本页面，点击右上角 **「安装此脚本」** 按钮
5. Tampermonkey 弹出安装确认后点击 **安装** 即可

---

## 💡 使用方法

1. 登录对应网盘网页版
2. 进入网盘个人主页
3. 在文件列表勾选要下载的文件
4. 点击页面出现的 **「下载助手」** 按钮
5. 选择下载模式（API / Aria2 / RPC / cURL / BC），复制或推送

---

## ⚙️ 配置说明

油猴菜单 → **「设置」** 中可配置：RPC 主机 / 端口 / 路径 / 密钥、保存路径、终端类型、主题颜色。

---

## 📝 注意事项

- ⏰ 下载直链具有**时效性**，过期后请重新获取
- 🐢 部分网盘对直链下载**有限速**，属官方限制，本脚本无法突破
- 🔒 脚本**仅解析下载链接**，不存储、不转发任何用户数据
- 📄 请勿用于非法用途

---

## 🔗 相关链接

| 链接 | 地址 |
| --- | --- |
| [GitHub 仓库](https://github.com/Wjavan/FerryLink) | 主仓库|
| [GreasyFork](https://greasyfork.org/zh-CN/scripts/595544) | GreasyFork安装 |
| [ScriptCat](https://scriptcat.org/zh-CN/script-show-page/8398) | ScriptCat 安装 |

---

## 💬 反馈

遇到问题请在 [GitHub Issues](https://github.com/Wjavan/FerryLink/issues) 提交，请附上网盘类型、浏览器、脚本版本等信息，便于定位。

---

## 📜 许可

基于 [油小猴](https://www.youxiaohou.com/)「网盘直链下载助手」二次修改，遵循 **GPL-3.0** 开源协议。
