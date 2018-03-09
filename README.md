# SiteServer.UI 用户界面UI库

[![npm version](https://img.shields.io/npm/v/siteserver.svg?style=flat-square)](https://www.npmjs.org/package/siteserver)
[![npm downloads](https://img.shields.io/npm/dm/siteserver.svg?style=flat-square)](http://npm-stat.com/charts.html?package=siteserver)

SiteServer CMS 响应式用户交互组件库，建立在 Bootstrap 最新版本 v4.0之上，采用Sass编写，基于HTML5以及CSS3，完全响应式。

## 介绍

SiteServer.UI 是一个功能齐全的主题样式，包括各种实用组件，这些组件在任何页面上都可以很容易地使用，主题是完全响应和可定制的。

## 浏览器支持

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 8+ ✔ |

## 安装

采用 npm:

```bash
$ npm install siteserver
```

采用 bower:

```bash
$ bower install siteserver
```

采用 cdn:

```html
<link href="https://unpkg.com/siteserver/dist/css/siteserver.min.css" rel="stylesheet" type="text/css" />
```

## 开始使用

SiteServer.UI 基于[Bootstrap样式](getbootstrap.com)以及[ionicons图标集](https://github.com/ionic-team/ionicons)。首先引用Bootstrap，然后是ionicons，然后是我们的CSS。

```html
<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="css/ionicons.min.css" rel="stylesheet" type="text/css" />
<link href="css/siteserver.min.css" rel="stylesheet" type="text/css" />
```

## 代码结构

我们在开发 SiteServer.UI 时遵循现在Web标准和模块化结构，以下部分是 SiteServer.UI 的代码组织结构说明。

### 代码组织

```
├── html files
Src/assets/
├── scss/
│   └── All SCSS files
├── css/
│   └── All css files.
├── fonts/
├── pages/
│   └── All the pages related scripts
├── images/
│   └── All images
├── plugins/
│   └── The plugins files - which are not available through bower
└── js/
    └── All common Javascripts files
```

### CSS & Sass

Sass是一种CSS预处理器，它扩展了CSS语言，添加了允许变量、函数和许多其他技术的特性，这些技术允许您使CSS更容易维护、更易于管理和可扩展。

文件解释如下:

| 文件          | 说明                                           |
| ------------- | :--------------------------------------------- |
| bootstrap.css | Bootstrap v4.0.0，所有页面都使用了此核心文件。 |
| style.scss    | sass版本样式文件                               |
| style.css     | css版本样式文件                                |
| style.min.css | css压缩版本样式文件，生产环境使用              |

### 编译

gulp build

编译后的文件存放于dist文件夹。