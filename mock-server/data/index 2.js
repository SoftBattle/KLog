const ps1 = [
  {
    pid: "tep1",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "文章管理平台",
    subTitle: "dewdfewfewfwe dfwefdwe few ",
    banners: ["/favicon.png", "dhwyudhw.png"],
    tags: ["js"],
    views: 100,
    ctime: 114218327832,
    mtime: 114356676767,
  },
  {
    pid: "tep2",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "霸主Java跌落神坛背后，云原生都做了什么？",
    subTitle: "霸主Java跌落神坛背后，云原生都做了什么？ ",
    banners: [
      "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29c239c24e934d588fadd76ce38812c3~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?",
    ],
    tags: ["技术"],
    views: 10,
    ctime: 114218327800,
    mtime: 114356676760,
  },
  {
    pid: "tep3",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "elasticsearch与mysql概念对比",
    subTitle: "dewdfewfewfwe dfwefdwe few ",
    banners: [
      "https://img-blog.csdnimg.cn/6ef578b3e6f9411fa79a39d85ef038fb.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQFdpdGhpbg==,size_20,color_FFFFFF,t_70,g_se,x_16",
    ],
    tags: ["elasticsearch", "mysql"],
    views: 1000,
    ctime: 1142183277500,
    mtime: 1143566767707,
  },
  {
    pid: "tep4",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "MaHua有哪些功能？",
    subTitle: "MaHua有哪些功能？ ",
    banners: ["http://mahua.jser.me/mahua-logo.jpg"],
    tags: ["编辑"],
    views: 1000,
    ctime: 114218327830,
    mtime: 114356676760,
  },
  {
    pid: "tep5",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "windows安装MySQL5.7",
    subTitle: "windows安装MySQL5.7 ",
    banners: [
      "https://img-blog.csdnimg.cn/8e59a5d92e9c44b79a5e24edf397e145.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAbm9uZ2N1bnFx,size_20,color_FFFFFF,t_70,g_se,x_16",
    ],
    tags: ["mysql"],
    views: 200,
    ctime: 114218327802,
    mtime: 114356676707,
  },
  {
    pid: "tep6",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "算法记录",
    subTitle:
      "你好！ 这是你第一次使用 **Markdown编辑器** 所展示的欢迎页。如果你想学习如何使用Markdown编辑器, 可以仔细阅读这篇文章，了解一下Markdown的基本语法知识。 ",
    banners: ["https://www.csdn.net"],
    tags: ["算法"],
    views: 150,
    ctime: 114218327032,
    mtime: 114356676067,
  },
  {
    pid: "tep7",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "CSS in JS 简介",
    subTitle: "CSS in JS 简介 ",
    banners: ["https://www.ruanyifeng.com/blogimg/asset/2017/bg2017040605.jpg"],
    tags: ["js"],
    views: 1050,
    ctime: 114218327802,
    mtime: 114356676707,
  },
  {
    pid: "tep8",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "OpenCV-Python图像模糊处理",
    subTitle: "OpenCV-Python图像模糊处理 ",
    banners: [
      "https://img-blog.csdnimg.cn/img_convert/82d0898289de9a243e82a6656d0c8ce0.png",
    ],
    tags: ["cv"],
    views: 10000,
    ctime: 114218327932,
    mtime: 114356679767,
  },
  {
    pid: "tep9",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "淘宝回应服务器崩了",
    subTitle: "dddd ",
    banners: [
      "https://img-blog.csdnimg.cn/55f794af16d7418cb0ef724d7c81c13d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBASVTnrqHnkIblnIg=,size_15,color_FFFFFF,t_70,g_se,x_16",
    ],
    tags: ["回应"],
    views: 10100,
    ctime: 114218327842,
    mtime: 114356676757,
  },
  {
    pid: "tep10",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "solidity：1. 变量和常量",
    subTitle: "solidity：1. 变量和常量 ",
    banners: [
      "https://img-blog.csdnimg.cn/baafbd0c30c04d2bbc2d67d4784e1b9d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5a2Z57u_5aaC5Y-2772e,size_20,color_FFFFFF,t_70,g_se,x_16",
    ],
    tags: ["solidity"],
    views: 1100,
    ctime: 114218327822,
    mtime: 114356676757,
  },
  {
    pid: "tep11",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "区块链项目研究--Amaya Finance--1",
    subTitle: "区块链项目研究--Amaya Finance--1 ",
    banners: [
      "https://img-blog.csdnimg.cn/img_convert/31ecfaaec75d58dbb6b9f285f57e9c47.png",
    ],
    tags: ["区块链"],
    views: 10005,
    ctime: 114218327732,
    mtime: 114356676667,
  },
  {
    pid: "tep12",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "WLAN基本知识之802.11标准",
    subTitle: "WLAN基本知识之802.11标准 ",
    banners: [
      "https://img-blog.csdnimg.cn/20210613220749564.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5Njg5NzEx,size_16,color_FFFFFF,t_70",
    ],
    tags: ["WLAN"],
    views: 1100,
    ctime: 114218327835,
    mtime: 114356676764,
  },
  {
    pid: "tep13",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "云计算的未来在哪里",
    subTitle: "云计算的未来在哪里 ",
    banners: [
      "https://img-blog.csdnimg.cn/img_convert/a4700e517313a5dbe25266b6fd91387d.png",
    ],
    tags: ["科技"],
    views: 500,
    ctime: 114218327862,
    mtime: 114356676747,
  },
  {
    pid: "tep14",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "Tomcat就是这么简单",
    subTitle: "Tomcat就是这么简单 ",
    banners: [
      "https://img-blog.csdnimg.cn/f1428274a944470fb70d468a1eb367cf.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQXJjaGllX2phdmE=,size_13,color_FFFFFF,t_70,g_se,x_16",
    ],
    tags: ["科技"],
    views: 1500,
    ctime: 114218327831,
    mtime: 114356676766,
  },
  {
    pid: "tep15",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "JVM学习之-运行时数据区（Runtime data area）",
    subTitle: "JVM学习之-运行时数据区（Runtime data area） ",
    banners: [
      "https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxNy85LzQvZGQzYjE1YjNkODgyNmZhZWFlMjA2Mzk3NmZiOTkyMTM_aW1hZ2VWaWV3Mi8wL3cvMTI4MC9oLzk2MC9mb3JtYXQvd2VicC9pZ25vcmUtZXJyb3IvMQ",
    ],
    tags: ["JVM"],
    views: 1100,
    ctime: 114218327732,
    mtime: 114356676667,
  },
];

const de1 = [
  {
    pid: "tep1",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "文章管理平台",
    subTitle: "dewdfewfewfwe dfwefdwe few ",
    banners: ["/favicon.png", "dhwyudhw.png"],
    content: `# readme

## 1 启动

* 安装mongoDB，并启动

* 启动RKBlog-server
\`\`\`shell
# 进入server目录
npm i
npm run start
npm run serve

\`\`\`

* 安装项目依赖与启动

\`\`\`shell
yarn
yarn start
\`\`\`



* 打包编译

\`\`\`shell
yarn build
\`\`\`



## 2 说明

### 2.1 目录结构

\`\`\`tree
├─assets					静态资源
│  ├─img					图片
│  └─styles					样式文件
├─components				项目组件
│  ├─Article				文章
│  │  ├─ArticleItem			首页文章项
│  │  └─UserArticleItem		用户页文章项
│  ├─Button					按钮组件
│  ├─DropDown				下拉菜单组件
│  ├─Footer					底栏
│  ├─Header					顶栏
│  ├─Input					输入组件，暂未使用
│  ├─Nav					导航组件，暂未使用
│  ├─Tag					文章标签组件
│  ├─TipBtn					提示按钮组件
│  ├─ToolBtn				工具按钮组件
│  └─Upload					图片上传组件
├─data						常量数据
├─hooks						自定义钩子
├─interface					类型与接口
├─pages						页面
│  ├─App					路由
│  ├─Article				文章相关
│  │  ├─Add					文章添加
│  │  ├─Edit				文章编辑
│  │  └─View				文章预览
│  ├─Home					首页
│  ├─NotFound				404页面
│  ├─Search					搜索页
│  ├─Sign					登录与注册
│  │  ├─SignIn				登录
│  │  └─SignUp				注册
│  └─Space					用户页
├─services					项目api
├─store						状态管理
└─utils						工具
\`\`\`

### 2.2 项目功能

见**[文档](./docs/srs.md)**.

示例账户：

\`\`\`
account: admin
pwd: r12345
\`\`\`

**注意**：*本项目虽然依赖了\`antd\`，但是除了分页组件\`Pagination\`与全局提示组件\`message\`外，其他组件均为使用（为此可以使用自己的组件，以及更好的书写样式），所以在项目表单部分的交互有些许简陋，如登录注册等，不过我已实现了一个提示组件\`TipBtn\`(被圆圈包裹的倒置感叹号，鼠标悬停即可显示提示信息)以及invalid样式，在用户输入时提示用户输入满足要求的表单数据。*

### 2.3 效果展示

1. 登录（注册页效果与登录页类似，在此不再展示）

 ![登录-1](docs/imgs/登录-1.png)

 ![登录-2](docs/imgs/登录-2.png)

 ![登录-3（移动端）](docs/imgs/登录-3（移动端）.png)

2. 主页

 ![个人空间-1](docs/imgs/个人空间-1.png)

 ![个人空间-2](docs/imgs/个人空间-2.png)

 ![个人空间-3（移动端）](docs/imgs/个人空间-3（移动端）.png)

 ![个人中心-4（移动端）](docs/imgs/个人中心-4（移动端）.png)

 ![个人主页-5（文章删除与编辑）](docs/imgs/个人主页-5（文章删除与编辑）.png)

3. 首页

 ![首页-1](docs/imgs/首页-1.png)

 ![首页-2](docs/imgs/首页-2.png)

4. 搜索

 ![搜索-1](docs/imgs/搜索-1.png)

 ![搜索-2](docs/imgs/搜索-2.png)

5. 文章

 ![文章编辑-1](docs/imgs/文章编辑-1.png)

 ![文章查看-1](docs/imgs/文章查看-1.png)

 ![文章添加-1](docs/imgs/文章添加-1.png)
 
6. 顶栏

 ![顶栏-移动端](docs/imgs/顶栏-移动端.png)

 ![顶栏-展开-移动端](docs/imgs/顶栏-展开-移动端.png)

## 开发日记

### 08-09

1. 完成登录与注册页面的开发；

2. 按需引入antd样式遇到问题，尝试使用以前的配置解决，但均无法解决。思考再三，想起\`getStyleLoaders\`不兼容less5.0.0以后的版本，而以前的解决方法是：

\`\`\`js
options: {
 lessOptions: {
    javascriptEnabled: true
 }
}
\`\`\`

而5.0.0前版本的对应配置为：

\`\`\`js
options: {
 javascriptEnabled: true
}
\`\`\`

3. 构建space与主页框架。


### 08-10

1. 调试服务器文章相关api，修改前端配置，解决参数无法读取的问题。

\`\`\`json
// header中的
\'Content-Type\':\ 'application/json\';
// 直接上传对象，不用stringfy
\`\`\`
详情见[koa-body处理请求](https://juejin.cn/post/6844903618244509703)

2. 调试bytemd部分代码，实现图片上传与预览功能。

3. 添加ArticleItem.


### 08-11

1. 构建主页结构，实现部分功能。（按时间排序的功能还没做）

2. 构建预览页，调整了样式。

3. 自定义几个钩子，实现部分逻辑复用。

4. 明日计划：完成文章编辑页与新建页，实现主页排序，架设个人主页。

### 08-16

一个不小心，中间掉了五天没写，不要问为啥没写，问就是写代码太投入（其实是在边写代码边摸鱼看比赛，然后事情一多就忘了）。
五天中的前三天主要精力集中在大页面的搭建上，也就是建毛坯房。后两天主要工作是调节样式与交互上的一些细节问题，添加了很多动画，将很多重复的部分提取为组件放置到components中；以及debug，根据需求修改服务器代码，因为原服务器代码部分功能不能很好的满足需求（就在刚刚，郑永可在群里说解决了这些问题————唉，要是早点就好了，我就不用自己改了）。
现在是8月16号的晚上11点53分，我刚刚改好登录与注册界面的样式。
看着这个页面，我会想起一周前刚开始写它的时候的情形————在网上到处看设计图找灵感，企图写一个灵动的页面，最终我花了将近一天的时间来抠这个界面，最后还是不满意。而现在，它被改得面目全非，简直妈都不认识。想到这里，我忍不住笑了。

好了，简言之，就是项目的大体工作已经完成，在此记录一下。



### 08-17

今日完善许多之前未考虑到的小问题，有样式上的，也有逻辑上的。

最终效果见项目readme 章节2.3。

我宣布，这个项目就此完结，鼓掌！`,
    star: true,
    tags: ["js"],
    views: 100,
    ctime: 114218327832,
    mtime: 114356676767,
  },
  {
    pid: "tep2",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "霸主Java跌落神坛背后，云原生都做了什么？",
    subTitle: "霸主Java跌落神坛背后，云原生都做了什么？ ",
    banners: [
      "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29c239c24e934d588fadd76ce38812c3~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?",
    ],
    content: `
  ### 10 月的 TIOBE 编程语言排行榜发布了最新一期榜单，雄踞榜首多年的 Java 终于让出了榜首位置，Python 成功登顶。一时间，对于 Python 的吹捧与对 Java 的看衰持续引发热议。“世界上只有两种编程语言，一种广为诟病，另一种没人用”。C++之父的这句名言用来形容 Java 同样合适，作为企业级的编程语言，Java 不仅在中国互联网大厂中有着广泛的应用，在世界范围内更是有着庞大的生态和就业机会。
  ### 编程语言之争是技术圈经久不衰的话题，国内开发者培训业务多了起来以后，关于编程语言的话题炒作更是此起彼伏。但雄踞榜首多年，Java 的下滑也并非空穴来风，而是有其深刻的历史背景所在。这个背景，或许就是云原生时代的来临。
  ### 以容器为代表的云原生技术或者说理念，有着弹性可扩展、松耦合、容错性好、易于管理、解放运维、可频繁变更的优势，这极大地降低了开发部署的门槛，让云计算大大地往前、向下走了一步。这本该是一次编写，到处运行的 Java 优势所在。但 Java 的其他特性，比如语法稍显啰嗦、面向大规模、长时间服务端应用设计，在云原生时代的微服务化趋势下，又有所偏差。
  ### 因此，在云计算和运维等方面，Java 已经不再是企业的首选语言，这个位置开始被 Go 语言所取代。但 Java 作为一门诞生 25 年之久的老牌编程语言，一方面具备规模庞大的开发者社区，Java 虚拟机技术也跑在世界上的云端虚拟化环境的各个角落，另一方面也在持续地优化自身以适应新的时代需求。
`,
    star: true,
    tags: ["技术"],
    views: 10,
    ctime: 114218327800,
    mtime: 114356676760,
  },
  {
    pid: "tep3",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "elasticsearch与mysql概念对比",
    subTitle: "dewdfewfewfwe dfwefdwe few ",
    banners: [
      "https://img-blog.csdnimg.cn/6ef578b3e6f9411fa79a39d85ef038fb.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQFdpdGhpbg==,size_20,color_FFFFFF,t_70,g_se,x_16",
    ],
    content: `
  ##一、文档和字段
  elasticsearch是面向文档（Document）存储的，可以是数据库中的一条商品数据，一个订单信息。文档数据会被序列化为json格式后存储在elasticsearch中：
  而Json文档中往往包含很多的字段（Field），类似于数据库中的列。
  ##二、索引和映射
  索引（Index），就是相同类型的文档的集合。

  例如：

  所有用户文档，就可以组织在一起，称为用户的索引；

  所有商品的文档，可以组织在一起，称为商品的索引；

  所有订单的文档，可以组织在一起，称为订单的索引；

  因此，我们可以把索引当做是数据库中的表。

  数据库的表会有约束信息，用来定义表的结构、字段的名称、类型等信息。因此，索引库中就有映射（mapping），是索引中文档的字段约束信息，类似表的结构约束。

  因此在企业中，往往是两者结合使用

  `,
    star: true,
    tags: ["elasticsearch", "mysql"],
    views: 1000,
    ctime: 1142183277500,
    mtime: 1143566767707,
  },
  {
    pid: "tep4",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "MaHua有哪些功能？",
    subTitle: "MaHua有哪些功能？ ",
    banners: ["http://mahua.jser.me/mahua-logo.jpg"],
    content: `
  ##MaHua是什么?
一个在线编辑markdown文档的编辑器

##MaHua有哪些功能？

* 方便的\`导入导出\`功能
  *  直接把一个markdown的文本文件拖放到当前这个页面就可以了
  *  导出为一个html格式的文件，样式一点也不会丢失
* 编辑和预览\`同步滚动\`，所见即所得（右上角设置）
* \`VIM快捷键\`支持，方便vim党们快速的操作 （右上角设置）
* 强大的\`自定义CSS\`功能，方便定制自己的展示
* 有数量也有质量的\`主题\`,编辑器和预览区域
* 完美兼容\`Github\`的markdown语法
* 预览区域\`代码高亮\`
* 所有选项自动记忆

##有问题反馈
在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流

* 邮件(dev.hubo#gmail.com, 把#换成@)
* 微信:jserme
* weibo: [@草依山](http://weibo.com/ihubo)
* twitter: [@ihubo](http://twitter.com/ihubo)

##捐助开发者
在兴趣的驱动下,写一个\`免费\`的东西，有欣喜，也还有汗水，希望你喜欢我的作品，同时也能支持一下。
##感激
感谢以下的项目,排名不分先后
##关于作者
  `,
    star: true,
    tags: ["编辑"],
    views: 1000,
    ctime: 114218327830,
    mtime: 114356676760,
  },
  {
    pid: "tep5",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "windows安装MySQL5.7",
    subTitle: "windows安装MySQL5.7 ",
    banners: [
      "https://img-blog.csdnimg.cn/8e59a5d92e9c44b79a5e24edf397e145.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAbm9uZ2N1bnFx,size_20,color_FFFFFF,t_70,g_se,x_16",
    ],
    content: `
  1.下载
  我用的是 mysql-5.7.33-winx64.msi
  2.一路安装，安装路径为
  3.进入bin目录，按住shift右击，选择在此处开启命令行
  4.安装初始化MySQL
  mysqld --initialize-insecure --user=mysql
  运行完成后，没有回显，不用管，继续进行下一步
  5.安装mysql服务
  mysqld --install
  会提示Service successfully installed.
  `,
    star: true,
    tags: ["mysql"],
    views: 200,
    ctime: 114218327802,
    mtime: 114356676707,
  },
  {
    pid: "tep6",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "算法记录",
    subTitle:
      "你好！ 这是你第一次使用 **Markdown编辑器** 所展示的欢迎页。如果你想学习如何使用Markdown编辑器, 可以仔细阅读这篇文章，了解一下Markdown的基本语法知识。 ",
    banners: ["https://www.csdn.net"],
    content: `
  # 算法记录

你好！ 这是你第一次使用 **Markdown编辑器** 所展示的欢迎页。如果你想学习如何使用Markdown编辑器, 可以仔细阅读这篇文章，了解一下Markdown的基本语法知识。

## 新的改变

我们对Markdown编辑器进行了一些功能拓展与语法支持，除了标准的Markdown编辑器功能，我们增加了如下几点新功能，帮助你用它写博客：
1. **全新的界面设计** ，将会带来全新的写作体验；
2. 在创作中心设置你喜爱的代码高亮样式，Markdown **将代码片显示选择的高亮样式** 进行展示；
3. 增加了 **图片拖拽** 功能，你可以将本地的图片直接拖拽到编辑区域直接展示；
4. 全新的 **KaTeX数学公式** 语法；
5. 增加了支持**甘特图的mermaid语法[^1]** 功能；
6. 增加了 **多屏幕编辑** Markdown文章功能；
7. 增加了 **焦点写作模式、预览模式、简洁写作模式、左右区域同步滚轮设置** 等功能，功能按钮位于编辑区域与预览区域中间；
8. 增加了 **检查列表** 功能。
[^1]: [mermaid语法说明](https://mermaidjs.github.io/)

## 功能快捷键

撤销：<kbd>Ctrl/Command</kbd> + <kbd>Z</kbd>
重做：<kbd>Ctrl/Command</kbd> + <kbd>Y</kbd>
加粗：<kbd>Ctrl/Command</kbd> + <kbd>B</kbd>
斜体：<kbd>Ctrl/Command</kbd> + <kbd>I</kbd>
标题：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd>
无序列表：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd>
有序列表：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd>
检查列表：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd>
插入代码：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd>
插入链接：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd>
插入图片：<kbd>Ctrl/Command</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd>
查找：<kbd>Ctrl/Command</kbd> + <kbd>F</kbd>
替换：<kbd>Ctrl/Command</kbd> + <kbd>G</kbd>

## 合理的创建标题，有助于目录的生成

直接输入1次<kbd>#</kbd>，并按下<kbd>space</kbd>后，将生成1级标题。
输入2次<kbd>#</kbd>，并按下<kbd>space</kbd>后，将生成2级标题。
以此类推，我们支持6级标题。有助于使用\`TOC\`语法后生成一个完美的目录。

## 如何改变文本的样式

*强调文本* _强调文本_

**加粗文本** __加粗文本__

==标记文本==

~~删除文本~~

> 引用文本

H~2~O is是液体。

2^10^ 运算结果是 1024.

## 插入链接与图片

链接: [link](https://www.csdn.net/).

图片: ![Alt](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hdmF0YXIuY3Nkbi5uZXQvNy83L0IvMV9yYWxmX2h4MTYzY29tLmpwZw)

带尺寸的图片: ![Alt](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hdmF0YXIuY3Nkbi5uZXQvNy83L0IvMV9yYWxmX2h4MTYzY29tLmpwZw =30x30)

居中的图片: ![Alt](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hdmF0YXIuY3Nkbi5uZXQvNy83L0IvMV9yYWxmX2h4MTYzY29tLmpwZw#pic_center)

居中并且带尺寸的图片: ![Alt](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hdmF0YXIuY3Nkbi5uZXQvNy83L0IvMV9yYWxmX2h4MTYzY29tLmpwZw#pic_center =30x30)

当然，我们为了让用户更加便捷，我们增加了图片拖拽功能。

## 如何插入一段漂亮的代码片

去[博客设置](https://mp.csdn.net/console/configBlog)页面，选择一款你喜欢的代码片高亮样式，下面展示同样高亮的 \`代码片\`.
\`\`\`javascript
// An highlighted block
var foo = 'bar';
\`\`\`

## 生成一个适合你的列表

- 项目
- 项目
  - 项目

1. 项目1
2. 项目2
3. 项目3

- [ ] 计划任务
- [x] 完成任务

## 创建一个表格
一个简单的表格是这么创建的：
项目     | Value
-------- | -----
电脑  | $1600
手机  | $12
导管  | $1

### 设定内容居中、居左、居右
使用\`:---------:\`居中
使用\`:----------\`居左
使用\`----------:\`居右
| 第一列       | 第二列         | 第三列        |
|:-----------:| -------------:|:-------------|
| 第一列文本居中 | 第二列文本居右  | 第三列文本居左 |

### SmartyPants
SmartyPants将ASCII标点字符转换为“智能”印刷标点HTML实体。例如：
|    TYPE   |ASCII                          |HTML
|----------------|-------------------------------|-----------------------------|
|Single backticks|\`'Isn't this fun?'\`            |'Isn't this fun?'            |
|Quotes          |\`"Isn't this fun?"\`            |"Isn't this fun?"            |
|Dashes          |\`-- is en-dash, --- is em-dash\`|-- is en-dash, --- is em-dash|

## 创建一个自定义列表
Markdown
:  Text-to-HTML conversion tool

Authors
:  John
:  Luke

## 如何创建一个注脚

一个具有注脚的文本。[^2]

[^2]: 注脚的解释

##  注释也是必不可少的

Markdown将文本转换为 HTML。

*[HTML]:   超文本标记语言

## KaTeX数学公式

您可以使用渲染LaTeX数学表达式 [KaTeX](https://khan.github.io/KaTeX/):

Gamma公式展示 $\Gamma(n) = (n-1)!\quad\forall
n\in\mathbb N$ 是通过欧拉积分

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> 你可以找到更多关于的信息 **LaTeX** 数学表达式[here][1].

## 新的甘特图功能，丰富你的文章

\`\`\`mermaid
gantt
      dateFormat  YYYY-MM-DD
      title Adding GANTT diagram functionality to mermaid
      section 现有任务
      已完成               :done,    des1, 2014-01-06,2014-01-08
      进行中               :active,  des2, 2014-01-09, 3d
      计划一               :         des3, after des2, 5d
      计划二               :         des4, after des3, 5d
\`\`\`
- 关于 **甘特图** 语法，参考 [这儿][2],

## UML 图表

可以使用UML图表进行渲染。 [Mermaid](https://mermaidjs.github.io/). 例如下面产生的一个序列图：

\`\`\`mermaid
sequenceDiagram
张三 ->> 李四: 你好！李四, 最近怎么样?
李四-->>王五: 你最近怎么样，王五？
李四--x 张三: 我很好，谢谢!
李四-x 王五: 我很好，谢谢!
Note right of 王五: 李四想了很长时间, 文字太长了<br/>不适合放在一行.

李四-->>张三: 打量着王五...
张三->>王五: 很好... 王五, 你怎么样?
\`\`\`

这将产生一个流程图。:

\`\`\`mermaid
graph LR
A[长方形] -- 链接 --> B((圆))
A --> C(圆角长方形)
B --> D{菱形}
C --> D
\`\`\`

- 关于 **Mermaid** 语法，参考 [这儿][3],

## FLowchart流程图

我们依旧会支持flowchart的流程图：
\`\`\`mermaid
flowchat
st=>start: 开始
e=>end: 结束
op=>operation: 我的操作
cond=>condition: 确认？

st->op->cond
cond(yes)->e
cond(no)->op
\`\`\`

- 关于 **Flowchart流程图** 语法，参考 [这儿][4].

## 导出与导入

###  导出
如果你想尝试使用此编辑器, 你可以在此篇文章任意编辑。当你完成了一篇文章的写作, 在上方工具栏找到 **文章导出** ，生成一个.md文件或者.html文件进行本地保存。

### 导入
如果你想加载一篇你写过的.md文件，在上方工具栏可以选择导入功能进行对应扩展名的文件导入，
继续你的创作。
`,
    star: true,
    tags: ["算法"],
    views: 150,
    ctime: 114218327032,
    mtime: 114356676067,
  },
  {
    pid: "tep7",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "CSS in JS 简介",
    subTitle: "CSS in JS 简介 ",
    banners: ["https://www.ruanyifeng.com/blogimg/asset/2017/bg2017040605.jpg"],
    content: `
  CSS in JS 简介
============

作者： [阮一峰]

日期： [2017年4月 5日]

1、

以前，网页开发有一个原则，叫做["关注点分离"]

它的意思是，各种技术只负责自己的领域，不要混合在一起，形成耦合。对于网页开发来说，主要是三种技术分离。


> *   HTML 语言：负责网页的结构，又称语义层
> *   CSS 语言：负责网页的样式，又称视觉层
> *   JavaScript 语言：负责网页的逻辑和交互，又称逻辑层或交互层

简单说，就是一句话，不要写"行内样式"（inline style）和"行内脚本"（inline script）。比如，下面代码就很糟糕（查看[完整代码](http://jsbin.com/wagizup/1/edit?html,output)）。

>     
>     <h1 style="color:red;font-size:46px;"  onclick="alert('Hi')">
>       Hello World
>     </h1>
>     

2、

出现以后，这个原则不再适用了。因为，React 是组件结构，强制要求把 HTML、CSS、JavaScript 写在一起。

上面的例子使用 React 改写如下（查看[完整代码](http://jsbin.com/xicelin/1/edit?html,js,output)）。

>     
>     const style = {
>       'color': 'red',
>       'fontSize': '46px'
>     };
>     
>     const clickHandler = () => alert('hi'); 
>     
>     ReactDOM.render(
>       <h1 style={style} onclick={clickHandler}>
>          Hello, world!
>       </h1>,
>       document.getElementById('example')
>     );
>     

上面代码在一个文件里面，封装了结构、样式和逻辑，完全违背了"关注点分离"的原则，很多人不适应。

但是，这有利于组件的隔离。每个组件包含了所有需要用到的代码，不依赖外部，组件之间没有耦合，很方便复用。所以，随着 React 的走红和组件模式深入人心，这种"关注点混合"的新写法逐渐成为主流。


3、

表面上，React 的写法是 HTML、CSS、JavaScript 混合在一起。但是，实际上不是。现在其实是用 JavaScript 在写 HTML 和 CSS。

React 在 JavaScript 里面实现了对 HTML 和 CSS 的封装，我们通过封装去操作 HTML 和 CSS。也就是说，网页的结构和样式都通过 JavaScript 操作。

4、

React 对 HTML 的封装是 [JSX 语言] ，这个在各种 React 教程都有详细介绍，本文不再涉及了，下面来看 React 对 CSS 的封装。

React 对 CSS 封装非常简单，就是沿用了 DOM 的 [style 属性对象]，这个在前面已经看到过了。

>     
>     const style = {
>       'color': 'red',
>       'fontSize': '46px'
>     };
>     

上面代码中，CSS 的\`font-size\`属性要写成\`fontSize\`，这是 JavaScript 操作 CSS 属性的[约定](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)。

由于 CSS 的封装非常弱，导致了一系列的第三方库，用来加强 React 的 CSS 操作。它们统称为 CSS in JS，意思就是使用 JS 语言写 CSS。根据不完全统计，各种 CSS in JS 的库至少有[47种](https://github.com/MicheleBertoli/css-in-js)。老实说，现在也看不出来，哪一个库会变成主流。



你可能会问，它们与"CSS 预处理器"（比如 Less 和 [Sass]，包括 PostCSS）有什么区别？回答是 CSS in JS 使用 JavaScript 的语法，是 JavaScript 脚本的一部分，不用从头学习一套专用的 API，也不会多一道编译步骤。

5、

上周，我看到一个新的 CSS in JS 库，叫做 [polished.js](https://polished.js.org/)。它将一些常用的 CSS 属性封装成函数，用起来非常方便，充分体现使用 JavaScript 语言写 CSS 的优势。



我觉得这个库很值得推荐，这篇文章的主要目的，就是想从这个库来看怎么使用 CSS in JS。

首先，加载 polished.js。

>     
>     const polished = require('polished');
>     

如果是浏览器，插入下面的脚本。

>     
>     <script src="https://unpkg.com/polished@1.0.0/dist/polished.min.js">
>     </script>
>     

\`polished.js\`目前有50多个方法，比如\`clearfix\`方法用来清理浮动。

>     
>     const styles = {
>       ...polished.clearFix(),
>     };
>     

上面代码中，\`clearFix\`就是一个普通的 JavaScript 函数，返回一个对象。

>     
>     polished.clearFix()
>     // {
>     //  &::after: {
>     //    clear: "both",
>     //    content: "",
>     //    display: "table"
>     //  }
>     // }
>     

"展开运算符"（\`...\`）将\`clearFix\`返回的对象展开，便于与其他 CSS 属性混合。然后，将样式对象赋给 React 组件的\`style\`属性，这个组件就能清理浮动了。

>     
>     ReactDOM.render(
>       <h1 style={style}>Hello, React!</h1>,
>       document.getElementById('example')
>     );
>     

从这个例子，大家应该能够体会\`polished.js\`的用法。

6、

下面再看几个很有用的函数。

\`ellipsis\`将超过指定长度的文本，使用省略号替代（查看[完整代码](https://jsbin.com/heyuri/edit?js,output)）。

>     
>     const styles = {
>       ...polished.ellipsis('200px')
>     }
>     
>     // 返回值
>     // {
>     //   'display': 'inline-block',
>     //   'max-width': '250px',
>     //   'overflow': 'hidden',
>     //   'text-overflow': 'ellipsis',
>     //   'white-space': 'nowrap',
>     //   'word-wrap': 'normal'
>     // }
>     

\`hideText\`用于隐藏文本，显示图片。

>     
>     const styles = {
>       'background-image': 'url(logo.png)',
>       ...polished.hideText(),
>     };
>     
>     // 返回值
>     // {
>       'background-image': 'url(logo.png)',
>       'text-indent': '101%',
>       'overflow': 'hidden',
>       'white-space': 'nowrap',
>     }
>     

\`hiDPI\`指定高分屏样式。

>     
>     const styles = {
>      [polished.hiDPI(1.5)]: {
>        width: '200px',
>      }
>     };
>     
>     // 返回值
>     //'@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
>     // only screen and (min--moz-device-pixel-ratio: 1.5),
>     // only screen and (-o-min-device-pixel-ratio: 1.5/1),
>     // only screen and (min-resolution: 144dpi),
>     // only screen and (min-resolution: 1.5dppx)': {
>     //  'width': '200px',
>     //}
>     

\`retinaImage\`为高分屏和低分屏设置不同的背景图。

>     
>     const styles = {
>      ...polished.retinaImage('my-img')
>     };
>     
>     // 返回值
>     //   backgroundImage: 'url(my-img.png)',
>     //  '@media only screen and (-webkit-min-device-pixel-ratio: 1.3),
>     //   only screen and (min--moz-device-pixel-ratio: 1.3),
>     //   only screen and (-o-min-device-pixel-ratio: 1.3/1),
>     //   only screen and (min-resolution: 144dpi),
>     //   only screen and (min-resolution: 1.5dppx)': {
>     //    backgroundImage: 'url(my-img_2x.png)',
>     //  }
>     

7、

\`polished.js\`提供的其他方法如下，详细用法请参考[文档](https://polished.js.org/docs/)。

上面代码使用 Ramda 函数库完成组合运算。Ramda 的用法可以参考我写的[教程](https://www.ruanyifeng.com/blog/2017/03/ramda.html)。

（正文完）

==========

【主讲人】

吕正东博士，曾任职于微软亚洲研究院、华为诺亚方舟实验室等著名研究机构，长期从事机器学习及人工智能的研究，在深度学习、自然语言处理和半监督学习等领域卓有建树，是深度学习领域（尤其是自然语言处理方向）具有世界顶尖水平并享有国际声誉的科学家和技术专家。

【活动内容】

*   深度学习在自然语言处理方面的新进展
*   深度学习是否会主导自然语言处理
*   自然语言处理和人工智能的下一个大事件
*   我为什么创立深度好奇
*   自由提问时间

【时间】

4月6日晚上8点



（完）



相关文章
----

*   **2021.09.07: [《C 语言入门教程》发布了](https://www.ruanyifeng.com/blog/2021/09/c-language-tutorial.html)**
  
  向大家报告，我写了一本《C 语言入门教程》，已经上线了，欢迎访问。
  
*   **2021.08.26: [最适合程序员的笔记软件](https://www.ruanyifeng.com/blog/2021/08/best-note-taking-software-for-programmers.html)**
  
  程序员的笔记软件，应该满足下面几个条件。
  
*   **2021.05.10: [软件工程的最大难题](https://www.ruanyifeng.com/blog/2021/05/scaling-problem.html)**
  
  一、引言 大学有一门课程《软件工程》，研究如何组织和管理软件项目。
  
*   **2020.12.13: [《SSH 入门教程》发布了](https://www.ruanyifeng.com/blog/2020/12/ssh-tutorial.html)**
  
  SSH 是登录 Linux 服务器的必备工具，只要你在做互联网开发，多多少少都会用到它。
  `,
    star: true,
    tags: ["js"],
    views: 1050,
    ctime: 114218327802,
    mtime: 114356676707,
  },
  {
    pid: "tep8",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "OpenCV-Python图像模糊处理",
    subTitle: "OpenCV-Python图像模糊处理 ",
    banners: [
      "https://img-blog.csdnimg.cn/img_convert/82d0898289de9a243e82a6656d0c8ce0.png",
    ],
    content: `
  其实我们平时在深度学习中所说的卷积操作，在 opencv 中也可以进行，或者说是类似操作。那么它是什么操作呢？它就是图像的[模糊（滤波）处理](https://blog.csdn.net/weixin_40922285/article/details/102801633)。

均值滤波
----

使用 opencv 中的\`cv2.blur(src, ksize)\`函数。其参数说明是：

*   \`src\`: 原图像
*   \`ksize\`: 模糊核大小

原理：它只取内核区域下所有像素的平均值并替换中心元素。3x3 标准化的盒式过滤器如下所示：

![3×3标准过滤器](https://img-blog.csdnimg.cn/20191029161721268.png)

*   特征：核中区域贡献率相同。
*   作用：对于椒盐噪声的滤除效果比较好。

  # -*-coding:utf-8-*-
  """
  File Name: image_deeplearning.py
  Program IDE: PyCharm
  Date: 2021/10/17
  Create File By Author: Hong
  """
  import cv2 as cv
  
  
  def image_blur(image_path: str):
      """
      图像卷积操作：设置卷积核大小，步距
      :param image_path:
      :return:
      """
      img = cv.imread(image_path, cv.IMREAD_COLOR)
      cv.imshow('input', img)
      # 模糊操作（类似卷积），第二个参数ksize是设置模糊内核大小
      result = cv.blur(img, (5, 5))
      cv.imshow('result', result)
  
      cv.waitKey(0)
      cv.destroyAllWindows()
  
  
  if __name__ == '__main__':
      path = 'images/2.png'
      image_blur(path)
  

结果展示：

![均值滤波](https://img-blog.csdnimg.cn/img_convert/82d0898289de9a243e82a6656d0c8ce0.png)

高斯滤波
----

高斯滤波使用的是\`cv2.GuassianBlur(img, ksize,sigmaX,sigmaY)\`函数。

说明：\`sigmaX\`,\`sigmaY\`分别表示 X,Y 方向的标准偏差。如果仅指定了\`sigmaX\`，则\`sigmaY\`与\`sigmaX\`相同；如果两者都为零，则根据内核大小计算它们。

*   特征：核中区域贡献率与距离区域中心成正比，权重与高斯分布相关。
  
*   作用：高斯模糊在从图像中去除高斯噪声方面非常有效。
  

  def image_conv(image_path: str):
      """
      高斯模糊
      :param image_path:
      :return:
      """
      img = cv.imread(image_path, cv.IMREAD_COLOR)
      cv.imshow('img', img)
      # 高斯卷积（高斯滤波）， 可以设置ksize，必须为奇数，不为0时，后面的步骤不起作用；也可以设置成（0，0），然后通过sigmaX和sigmaY计算标准偏差
      result = cv.GaussianBlur(img, (0, 0), 15)
      cv.imshow('result', result)
  
      cv.waitKey(0)
      cv.destroyAllWindows()
  
  
  if __name__ == '__main__':
      path = 'images/2.png'
      image_conv(path)
  

结果展示：

![高斯滤波](https://img-blog.csdnimg.cn/img_convert/693f33642b6de431af13af0eff9e3317.png)

高斯双边滤波
------

双边滤波（模糊）使用的是\`cv2.bilateralFilter(img,d, sigmaColor, sigmaSpace)\`函数。

说明：\`d\`为邻域直径，\`sigmaColor\`为空间高斯函数标准差，参数越大，临近像素将会在越远的地方越小。

\`sigmaSpace\`灰度值相似性高斯函数标准差，参数越大，那些颜色足够相近的的颜色的影响越大。

双边滤波是一种非线性的滤波方法，是结合图像的空间邻近度和像素值相似度的一种折衷处理，同时考虑空间与信息和灰度相似性，达到保边去噪的目的，具有简单、非迭代、局部处理的特点。之所以能够达到保边去噪的滤波效果是因为滤波器由两个函数构成：一个函数是由几何空间距离决定滤波器系数，另一个是由像素差值决定滤波器系数。

*   特征：处理耗时。
*   作用：在滤波的同时能保证一定的边缘信息。

  # 边缘保留滤波器——高斯双边模糊
  def image_bifilter(image_path: str):
      """
      高斯双边模糊
      :param image_path: 图片文件
      :return: 无返回值
      """
      img = cv.imread(image_path, cv.IMREAD_COLOR)
      cv.imshow('input', img)
      # 第三个参数是设置色彩、第四个参数是设置图像坐标
      result = cv.bilateralFilter(img, 0, 50, 10)
      cv.imshow('result', result)
  
      cv.waitKey(0)
      cv.destroyAllWindows()
  
  
  if __name__ == '__main__':
      path = 'images/2.png'
      image_bifilter(path)
  

结果展示：

![双边滤波](https://img-blog.csdnimg.cn/img_convert/21372e6c69eb64b2b7fb75de27923191.png)

> > 获取更多计算机视觉内容，请关注微信公众号 **”AI 与计算机视觉“。**
  `,
    star: true,
    tags: ["cv"],
    views: 10000,
    ctime: 114218327932,
    mtime: 114356679767,
  },
  {
    pid: "tep9",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "淘宝回应服务器崩了",
    subTitle: "dddd ",
    banners: [
      "https://img-blog.csdnimg.cn/55f794af16d7418cb0ef724d7c81c13d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBASVTnrqHnkIblnIg=,size_15,color_FFFFFF,t_70,g_se,x_16",
    ],
    content: `10月20日晚8点，淘宝双11提前开启预售，多达1400万款商品集体打折，其中1000个品牌旗舰店的爆款商品全部补贴到5折。

不过大量网友反映，给淘宝客服的消息发不出去，5G、Wi-Fi都不行，还以为是网络问题，结果发现是淘宝服务器给整崩溃了，“淘宝崩了”的话题也迅速窜上热搜。

对此，淘宝也是颇为“无奈”，感慨“原来不熬夜的你们这么猛吗”。

淘宝/天猫卖家一站式工作台官方表示，由于消费者的热情过于火爆，20点10分左右，部分消费者反馈淘宝崩了，商家反馈千牛崩了，经过紧急修复，相关问题已于20点27分得到解决。

网友更是神评不断：

－ 你还是改成12点吧，不能熬夜的我就不会花到快破产。

－ 改个时间吧，清醒的人最荒唐。`,
    star: true,
    tags: ["回应"],
    views: 10100,
    ctime: 114218327842,
    mtime: 114356676757,
  },
  {
    pid: "tep10",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "solidity：1. 变量和常量",
    subTitle: "solidity：1. 变量和常量 ",
    banners: [
      "https://img-blog.csdnimg.cn/baafbd0c30c04d2bbc2d67d4784e1b9d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5a2Z57u_5aaC5Y-2772e,size_20,color_FFFFFF,t_70,g_se,x_16",
    ],
    content: `
  
一 . Solidity 支持三种类型的变量：

*   状态变量 – 变量值永久保存在合约存储空间中的变量。
*   局部变量 – 变量值仅在函数执行过程中有效的变量，函数退出后，变量无效。
*   全局变量 – 保存在全局命名空间，用于获取区块链相关信息的特殊变量。

1.  状态变量
  
      contract Test {
          string public name;
          
          function setName(string memory _n) public {
                   name = _n;    
          }
      }
      
  
2.  局部变量
  
      contract Test {
          function get()public pure returns(uint){
                  uint a = 1;
                  uint b = 2;
                  return a+b;
          }
      }
      
  
3.  全局变量
  
      contract Test {
          function get()public view returns(uint){
                  return block.number;
          }
      }
      
  
  更多的全局变量：  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/baafbd0c30c04d2bbc2d67d4784e1b9d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5a2Z57u_5aaC5Y-2772e,size_20,color_FFFFFF,t_70,g_se,x_16)
  

二. Solidity 支持两种类型的常量：

*   constant – 可修饰字符串、值类型，对于constant 常量, 他的值在编译时确定。
*   immutable – 可修饰值类型，对于immutable 常量, 他的值在部署时确定。

​ ps：使用constant 和immutable 可以节省gas

  contract A {
   
   string constant s1 = "abc";
  // string immutable s2 = "abc";  //error
   uint public immutable a;
   address public immutable owner = msg.sender;
   
  // uint[3] constant a = [1,2,3];   //error
  
   constructor(uint _a){
       a = _a;
   }
  
  }
  `,
    star: true,
    tags: ["solidity"],
    views: 1100,
    ctime: 114218327822,
    mtime: 114356676757,
  },
  {
    pid: "tep11",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "区块链项目研究--Amaya Finance--1",
    subTitle: "区块链项目研究--Amaya Finance--1 ",
    banners: [
      "https://img-blog.csdnimg.cn/img_convert/31ecfaaec75d58dbb6b9f285f57e9c47.png",
    ],
    content: `写作目的：记录我从零开始学习一个区块链项目，并且分析项目的可行性。

目标项目：Amaya Finance

这是我关于Amaya Finance的第一篇文章。以后会加后续文章的链接进来

Amaya Finance项目简介：波卡顶级生态借贷协议，核心产品包含多链部署借贷协议AmaraLend，资产跨链协议AmaraLink等。AmaraLend beta已经部署Moonbeam测试网，并计划正式上线Moonriver。

Amara的短期目标是成为波卡生态最流行的借贷市场，并将尽可能多的资产通过跨链桥引入波卡生态。

![](https://img-blog.csdnimg.cn/img_convert/31ecfaaec75d58dbb6b9f285f57e9c47.png)

在未来几篇文章，我将做如下的解释以方便我们理解Amaya Finance项目的优越性：

1.  波卡生态系统目前组成简介
  
2.  借贷市场各项目简介以及对比
  
3.  长尾资产的解读
  
4.  Amaya Finance跨链协议的解读和与主流跨链协议的对比。
  

获取项目信息的方式：知乎、链闻、非小号、巴比特。

项目落地的难点：学术界和产业界的隔阂，区块链的技术的实现需要有专业人员，但是懂这些技术的专业人员专门从事区块链的很少，比如零知识证明、聚合签名、原子跨链交换等，说到底还是专业人才的缺乏，专业人员的缺乏主要是由于行业的前景还不够明朗造成的，对毕业生来说，从事区块链行业是充满机遇和挑战的。

参考文献：

\[1\] [Amara-Explore DeFi Boundaries for New Possibilities](https://www.amara.link/index.html "Amara-Explore DeFi Boundaries for New Possibilities")

\[2\][Amara Finance - 专栏 - 链闻 ChainNews 第2页](https://www.chainnews.com/u/955434020099.htm?page=2 "Amara Finance - 专栏 - 链闻 ChainNews 第2页")

\[3\][https://github.com/AmaraFinance/Amara-White-Paper](https://github.com/AmaraFinance/Amara-White-Paper "https://github.com/AmaraFinance/Amara-White-Paper")',
  star: true,
  tags: ['区块链'],
  views: 10005,
  ctime: 114218327732,
  mtime: 114356676667
},
{
  pid: 'tep12',
  author: {
    uid: 'cmll', // 作者id
    nickname: 'cmLily', // 作者昵称
    avatar: '/avatar/me.jpg',
    follow: false
  },
  title: 'WLAN基本知识之802.11标准',
  subTitle: 'WLAN基本知识之802.11标准 ',
  banners: ['https://img-blog.csdnimg.cn/20210613220749564.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5Njg5NzEx,size_16,color_FFFFFF,t_70'],
  content:'### 文章目录

*   *   [WLAN技术基础](#WLAN_1)
  *   *   [1.4 802.11标准介绍](#14_80211_2)
      *   *   [1.4.1 IEEE 802.11协议族成员](#141_IEEE_80211_3)
          *   [1.4.2 IEEE 802.11标准与WiFi的世代](#142_IEEE_80211WiFi_10)
          *   [1.4.3 802.11a/b/g差异](#143_80211abg_20)
          *   [1.4.4 802.11n](#144_80211n_23)
          *   [1.4.5 802.11n关键技术](#145_80211n_38)
          *   [1.4.6 IEEE 802.11ac标准](#146_IEEE_80211ac_40)
          *   [1.4.7 IEEE 802.ax标准（又称WiFi 6）](#147_IEEE_802axWiFi_6_47)
          *   [1.4.8 WiFi 6理论速率计算](#148_WiFi_6_59)
      *   [1.5 WLAN的关键技术](#15_WLAN_62)
      *   *   [1.5.1 IEEE 802 与TCP/IP对等模型](#151_IEEE_802_TCPIP_63)
          *   [1.5.2 802.11物理层技术](#152_80211_69)
          *   [1.5.3 OFDM](#153_OFDM_74)
      *   [1.6 WLAN基本概念](#16_WLAN_87)
      *   *   [1.6.1 BSS和BSA](#161_BSSBSA_88)
          *   [1.6.2 VAP](#162_VAP_95)
          *   [1.6.3 DS](#163_DS_99)
          *   [1.6.4 ESS（扩展服务集）](#164_ESS_104)
      *   [1.7 WLAN组网架构即典型组网方案](#17_WLAN_117)
      *   *   [1.7.1 FAT AP架构（胖AP）](#171_FAT_APAP_118)
          *   [1.7.2 AC+FIT架构（瘦AP）](#172_ACFITAP_122)
          *   [1.7.3 瘦AP组网方式](#173_AP_129)
          *   [1.7.4 VLAN与IP规划](#174_VLANIP_167)
          *   [1.7.5 业务VLAN和SSID的映射关系](#175_VLANSSID_171)
          *   [1.7.6 IP地址规划](#176_IP_188)

WLAN技术基础
--------

### 1.4 802.11标准介绍

#### 1.4.1 IEEE 802.11协议族成员

*   IEEE 805.11无线工作组制定的规范分两部分：  
  一是802.11物理层相关标准  
  二是802.11MAC层相关标准
  
*   物理层主要是定义了无线协议的工作频段，调制编码方式及最高速度的支持；MAC层主要是做无线网络里面的一些功能，或者是一些具体协议的体现，如QOS是对网络做一个限速，Mesh技术，无线安全标准。  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210613220749564.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5Njg5NzEx,size_16,color_FFFFFF,t_70)
  

#### 1.4.2 IEEE 802.11标准与WiFi的世代

*   2018年10月，WiFi联盟对不同WiFi标准指定了新的命名，802.11ax被命名为WiFi 6，WiFi 4之前不做时代命名。
  
*   如图所示，基本上所有的标准都是使用OFDM技术，唯有WiFi 6 差异较大， 它的编码方式、空间流数、信道带宽都异于WiFi 4，WiFi 4是四个空间流，WiFi 6 可以做到12条空间流，
  

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210613221009655.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5Njg5NzEx,size_16,color_FFFFFF,t_70)

*   OFDM(Orthogonal Frequency Division Multiplexing)即正交频分复用技术，实际上OFDM是MCM(Multi Carrier Modulation)，多载波调制的一种。通过频分复用实现高速串行数据的并行传输, 它具有较好的抗多径衰弱的能力，能够支持多用户接入。
  
*   OFDM技术由MCM（Multi-Carrier Modulation，多载波调制）发展而来。OFDM技术是多载波传输方案的实现方式之一，它的调制和解调是分别基于IFFT和FFT来实现的，是实现复杂度最低、应用最广的一种多载波传输方案。
  

#### 1.4.3 802.11a/b/g差异

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210613221800403.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5Njg5NzEx,size_16,color_FFFFFF,t_70)

#### 1.4.4 802.11n

*   802.11n是无线传输标准协议，它是划时代的技术。它的目标在于改善先前的两项无线网上标准，包括802.11a与802.11g，在网上流量上的不足。
  
*   它的最大传输速度理论值为600Mbit/s，与先前的54Mbit/s相比有大幅提升，传输距离也会增加。
  
*   IEEE 802.11工作组于2002年成立了高吞吐量（HT）研究组着手制定新一代标准，并于2009年正式颁布基于MIMO-OFDM的802.11n标准，其最显著的是在速率上较之前有了突破性的进展。  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210613222052511.png)
  
*   802.11采用多项新技术，带来了全新的用户体验，极大推动了WLAN产业的发展，也使得WiFi的概念深入人心，到现在仍有大量的802.11n终端在网使用。
  
*   802.11n技术实现了大带宽，给WiFi带来了更大的应用场景。
  
*   802.11n带来了许多全新技术，802.11n结合物理层和MAC层的优化，来充分提高WLAN技术的吞吐，物理层技术设计的MIMO非常关键，使用MIMO-OFDM 40Mhz、Short GI技术，从而将物理层吞吐提高到600Mbps。
  
*   GI是指由于多径效应的影响，信息将通过多条路径传递，可能会发生彼此碰撞，导致ISI干扰，为此802.11a g标准，要求在发送信息符号时，必须保证在信息符号间，存在0.8us的时间间隔，这个间隔被称为Guard Interval。
  
*   802.11n除了物理层优化，还对MAC协议层进行了优化，采用Block Ack块确认，帧聚合等技术，大大提高了MAC的效率。如果不对MAC层协议进行优化，仅仅物理层优化，就好比是修建了宽敞的马路，但是没有做好车道的规划，依然快不起来。  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210613222730494.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5Njg5NzEx,size_16,color_FFFFFF,t_70)
  

#### 1.4.5 802.11n关键技术

#### 1.4.6 IEEE 802.11ac标准

*   IEEE 802.11ac标准的颁布，使得WLAN技术正式迈入千兆领域，但是该标准仅支持工作在5Ghz频段。
*   2.4Ghz的干扰对他来说都不生效。之前说到的2.4G信道设备，蓝牙、红外都不会对5G网络产生影响，  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210613224515691.png)  
  802.11n突破了原有WiFi标准带宽的瓶颈，它在802.11n基础上，增加了空间流数从4到8，信道从40Mhz增加至160Mhz，更定义了MU-MIMO技术，支持下行多用户并行传输。


#### 1.4.7 IEEE 802.ax标准（又称WiFi 6）

*   IEEE 802.11ax，WiFi联盟称为WiFi 6，又称为高效率无线局域网，是无线局域网标准，11ax支持2.4Ghz 和 5Ghz频段，兼容802.11a/b/g/n/ac。  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210613225758768.png)  
  802.11ax为了实现更大带宽，采纳了大多数802.11ac技术之上，又重新定义了OFDMA调制与复用技术，支持更窄的子载波间隔，并使用了1024-QAM调制模式，同时还引入上行MU-MIMO技术，使得WiFi 6 AP的整机理论速率突破10Gbps的同时，进一步提升高密场景下的吞吐量和服务质量。  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210613230047212.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5Njg5NzEx,size_16,color_FFFFFF,t_70)  
  OFDMA DL/UL技术：OFDM即正交频分复用；A access接入的意思，适用于多用户同时进行；  
  MU-MIMO DL/UL：增加支持上行  
  1024-QAM：编码技术达到1024-QAM，编码效率变高。  
  基本服务器着色：既属于物理层，又属于MAC层，它在物理层增加了 Color的字段，却提供MAC层的功能，作用就是解决同频干扰的问题。通过着色，让终端区分开来两个AP，以达到提升效率作用。  
  目标唤醒时间：不同手机对应不同需求，如果不用WiFi模块，可休眠该模块，使用时在激活，既灵活使用，又节约设备供电。  
  双NAV机制：数据传输过程中，用于控制是否进行传输，协商与调制的工作机制。

#### 1.4.8 WiFi 6理论速率计算

理解：空间流数量影响传输速率，子载波编码bit数即每个子载波能传输多少个bit，编码率越高越好，有多少个有效的子载波数用来承载数据传输的子载波数量。  


### 1.5 WLAN的关键技术

#### 1.5.1 IEEE 802 与TCP/IP对等模型

*   WLAN是一种基于 IEEE 802.11标准的无线局域网技术。
*   802.11标准聚焦在TCP/IP对等模型的下两层：  
  数据链路层：实现各种技术，如信道接入、寻址、数据帧校验、错误检测、安全机制等。  
  物理层：负责在空口（空中接口）传输比特流，例如频段。  
  

#### 1.5.2 802.11物理层技术



*   802.11所采用的无线电物理层使用了三种不同的技术：  
  跳频、直接序列、正交频复用（目前主要使用正交频复用，即OFDM）

#### 1.5.3 OFDM

*   OFDM是一种特殊的多载波调制技术，其主要思想是将信道分成若干正交子信道，将高速数据信号转换成并行的低速子数据流，调制到在每个子信道上进行传输。各子载波相互正交，扩频调制后的频道可以互相重叠，不但减少了子载波间的干扰，还提高了频谱利用率。
*   当一个子载波到达波峰的时候，另一个子载波幅度为0，即为两个子载波正交无干扰。
*   OFDM之所以能够使用相互重叠的子载波，主要是因为定义了副载波，因此可以轻易区分彼此。  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/2021061409531645.png)  
  信号分三个副载波，每个副载波波峰均为数据编码用，如图圆点。这些副载波之间经过刻意设计，彼此保持正交关系。每个副载波的波峰，此时其它两个副载波的振幅均为0。

OFDM 5Ghz信道

5Ghz信道有52个子载波，每个子载波有312.5Khz，有48个信道传输数据，4个信道用来做相位参考。  

OFDM子信道调制技术使用QAM（QAM是Quadrature Amplitude Modulation的缩写，中文译名为“正交振幅调制”），QAM同时利用了载波的振幅和相位来传递信息。

### 1.6 WLAN基本概念

#### 1.6.1 BSS和BSA

*   组成WLAN的基本单元是基本服务集（BSS），BSS包含一个固定的AP和多个终端。
*   AP是BSS的中心，位置固定，AP在哪，BSS就在哪，而终端分布在AP周围，位置相对AP不固定
*   AP的覆盖范围称为基本服务区域（BSA），终端可以自由进出BSA，进入BSA的终端才可以和AP通信。
*   SSID相当于无线网络的名称，也是无线网络的身份标识，SSID的作用是便于用户辨识。
*   BSSID是AP的身份标识，它也是通常所说的MAC地址；  
  

*   VAP，即虚拟AP，AP通常支持创建多个虚拟AP（Virtual Access Point），每个VAP对应1个BSS。
*   家用路由器也可以释放两个，2.4G和5G信号。  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210619203058422.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5Njg5NzEx,size_16,color_FFFFFF,t_70)

#### 1.6.3 DS

DS（Distribution system ,DS）称为BSS的分布式系统，BSS解决了1个区域内多个终端无线通信，但终端通信往往分散在各个地方，甚至地球另一端，这需要AP连接到更大的网络，就是AP的上行网络，它把不同区域的BSS连起来，让终端可以通信。  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210619203333699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5Njg5NzEx,size_16,color_FFFFFF,t_70)

#### 1.6.4 ESS（扩展服务集）

*   BSS覆盖范围一般是15M，为了覆盖更大面积，可以用多个BSS来扩展。
*   为了消除用户对BSS变化的感知，需要让每个BSS使用相同的SSID，这样用户走到哪，都是同一个WLAN。
*   扩展服务集要求：  
  1、两个独立BSS的AP一定要连接到同一个分布式系统  
  2、两个SSDI一定要相同  
  3、两个BSS一定要有重叠的覆盖区域。

ESS主要提供漫游服务，意思从一个AP移动到另一个AP的覆盖范围，网络不中断。

这种扩展BSS的范围方式称为扩展服务集（Extend services set，ESS），它以BSS为自由单位，让WLAN部署极为灵活。

*   扩展服务集标识（ESSID，即各BSS相同的SSID成了ESS的身份标识，用于对终端通告一个连续的WLAN。  
  

### 1.7 WLAN组网架构即典型组网方案

#### 1.7.1 FAT AP架构（胖AP）

*   FAT AP（胖AP）架构，又称为自治式网络架构
*   胖AP架构无需部署集中控制设备（AC），但企业规模大，FAT数量多，且独立工作，缺少统一管理，维护FAT AP十分麻烦，因此，对企业而言，不推荐使用FAT AP架构。  
 

#### 1.7.2 AC+FIT架构（瘦AP）

*   AC：负责WLAN的接入控制、转发和统计、AP的配置监控、漫游管理、AP的网管代理、安全控制。
*   FIT AP：负责802.11报文的加解密、802.11物理层功能、接受AC的管理、空口的统计等。
*   AC和AP之间使用的通信协议是CAPWAP
*   相比于FAT AP架构，AC+FIT架构配置和部署更容易、安全性更高、更新和扩展容易。（升级和扩展仅需在AC上操作一次，非常容易）  
 

#### 1.7.3 瘦AP组网方式

*   二层与三层组网：  
  二层组网：AC与AP在同一广播域，AP通过本地广播可以找到AC，这种方式组网、配置、管理简单，适用于小范围组网，小型企业网络，不适合大型企业复杂、精细化的WLAN组网。
  
*   建议：AP不超过200台可以考虑本组网方式。  
  
  AC与AP不在同一网段，中间网络必须保证AP与AC之间路由可达，需要进行额外配置才能使得AP发现AC，组网灵活、易扩展。  
  这种方式适用于中、大型网络，以大型园区为例，每栋楼都会部署AP进行无线覆盖，AC仅放在核心机房进行统一管控，这样AC和FIT AP间必须采用较为复杂的三层网络。  
  
  
*   直连式与旁挂式组网：  
  直连式组网：  
  AC同时扮演无线控制器和汇聚交换机功能，AP数据业务和管理业务都由AC集中转发和处理，适用于中小规模网络部署。同时负担有线、无线网络数据，压力较大，不建议使用。  
  
  旁挂式组网：  
  旁挂式组网是指旁挂在现有网络，仅处理AP的管理业务，不做AP的数据业务处理，适用于网络改造、新建大、中型园区网络场景。  
  
  
*   CAPWAP协议
  
*   CAPWAP（无线接入点控制和配置协议）：本协议定义了如何对AP进行管理、业务配置，即AC通过CAPWAP隧道来实现对AP的集中管控。
  
*   CAPWAP隧道功能：  
  1、AP对AC的自动发现  
  2、AP与AC间的状态维护  
  3、AC通过CAPWAP隧道对AP进行管理，业务配置下发  
  4、采用隧道转发模式时，AP将STA发出的数据通过CAPWAP隧道实现与AC间的交互。  
  
  
*   数据转发方式：  
  1、 直接转发：  
  用户数据报文到达AP后，不经过CAPWAP隧道封装而直接转发到上层网络，AC只对AP进行管理，业务数据都是由本地直接转发。优势：数据流量不经过AC，AC负担小，万兆园区网推荐方案。  
  
  2、 隧道转发：  
  业务数据报文由AP统一封装后到达AC实现转发，AC不但进行对AP管理，还作为AP流量的转发枢纽。  
  用户的数据报文经过CAPWAP隧道封装后，再有AC转发到上层网络。优势：数据流和管理流全部经过AC，可以更容易对无线用户实施安全控制策略。流量从汇聚在进入AC，大流量建议使用直接转发的方式。  
  
  AC+FIT AP 组网特点对比  
  !
  

#### 1.7.4 VLAN与IP规划

*   WLAN中VLAN分：管理VLAN和业务VLAN，管理VLAN负责传输CAPWAP隧道转发的报文，包括管理报文和CAPWAP隧道转发的业务数据报文；而业务VLAN负责传输业务数据报文，业务VLAN可以划分成多个，20个跑A部门，30个跑B部门，还可以基于业务性质、基于员工级别划分
*   需要注意的是，管理VLAN和业务VLAN分离，业务VLAN应该根据实际业务与SSID匹配映射关系。  
  
#### 1.7.5 业务VLAN和SSID的映射关系

SSID : VLAN = 1 : 1  
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021061922504136.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5Njg5NzEx,size_16,color_FFFFFF,t_70)  
企业需对区域A和区域B进行WLAN覆盖，希望用户搜索到1个SSID，并采用相同的数据转发控制策略，则SSID和VLAN只需要规划一个。

SSID : VLAN = 1 :N

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210619225216860.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5Njg5NzEx,size_16,color_FFFFFF,t_70)

企业需要对区域A和区域B进行WLAN覆盖，希望用户搜索到WLAN只有1个SSID，同时采用不同的数据转发控制策略，则可规划一个SSID，两个VLAN对应不同区域，此时，SSID : VLAN = 1 : 2。

SSID : VLAN = N : M

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210619225514954.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5Njg5NzEx,size_16,color_FFFFFF,t_70)  
企业需要对区域A和B进行WLAN覆盖，用户搜索到WLAN即可了解地点信息等，同时采用不同的数据转发控制策略，则可规划两个SSID，两个VLAN。

#### 1.7.6 IP地址规划

AC的源IP：用于管理AP，一般由手工配置，AP的IP地址，用于AC进行CAPWAP通信，由于AP数量较多，一般使用DHCP服务器动态分配地址，终端IP，建议用DHCP分配地址，对固定无线终端（如无线打印机）可以静态配置。  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210619225933955.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5Njg5NzEx,size_16,color_FFFFFF,t_70)`,
    star: true,
    tags: ["WLAN"],
    views: 1100,
    ctime: 114218327835,
    mtime: 114356676764,
  },
  {
    pid: "tep13",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "云计算的未来在哪里",
    subTitle: "云计算的未来在哪里 ",
    banners: [
      "https://img-blog.csdnimg.cn/img_convert/a4700e517313a5dbe25266b6fd91387d.png",
    ],
    content: `
------------------------------











做过开发，搞过运维，又在在云计算行业折腾了几年，不说自己技术怎样、怎样……，暂且说说笔者在当前公司做云计算这几年的些许感悟，兴许可以给正在从事运维或者运维相关工作的同学一点启发，如果可以刚巧帮助到大家什么的话那自然更好。



前几年云计算刚刚出现之时，包括笔者在内很多人对云计算仅限于知道有这么个东西，至于它什么都是一脸懵逼。今天看来，不说我们就是有些大佬们当时对云计算的未来也是不甚明了。



当时极少数大佬对云计算的未来充满信心，典型代表马云。马云认为云计算是一种分享，数据的处理、存储然后跟分享的机制，马云当时甚至声称如果阿里未来不做云计算，阿里未来会死掉。

![640?wx_fmt=png](https://img-blog.csdnimg.cn/img_convert/53cdd1925b3a1a665d1940882a1e8766.png)



同一个会议中，另一个大佬马化腾认为，云计算可能需要过几百年、一千年后，到阿凡达中描绘的那个时代时才有可能实现，马化腾觉得当时做云计算还是显得过早，并为此举了一个例子： 比如现在研究局部的IDC，1万台或者几万台组成的超大IDC，集装箱里面插几千个主板、海量CPU、内存统一作为计算处理的一个任务，在这种局部上去做仍是一种非常的大的挑战。



![640?wx_fmt=png](https://img-blog.csdnimg.cn/img_convert/517b5b7e386735e3380bf8cf9d830bc9.png)

当时大佬李彦宏对云计算的未来更是直接表示了自己的悲观，李彦宏表示，云计算不客气的讲，就是新瓶装旧酒，没有新东西。未来会有越来越多的基于云计算的这种互联网应用出来，但是想用云计算方式赚点钱会比较累。

![640?wx_fmt=png](https://img-blog.csdnimg.cn/img_convert/f8710747aa3175a4f8fea9faae3af0c2.png)



云计算发展的最初几年大家认为马云眼光独到，预测的很准，由于阿里云的先发优势、重金投入等原因，阿里云坐上了国内云计算第一把交椅。但今天看来国内各个云计算大厂貌似离产生盈利还有一段距离，仔细一想这几年云计算的发展好像更符合李彦宏的预测。  

**这几年随着云计算的蓬勃发展，逛论坛时经常能看到类似下面的段子：“云计算淘汰运维，SDN 淘汰网工，IT行业只剩下码农和码农了……”**

严格来讲这个命题是一个伪命题，实际工作中并不是所有的应用都适合上云，也不是所有的应用都必须使用SDN网络方案。如一些规模不大且自身已有服务器的企业，这种场景一般使用自己现有服务就已经可以满足需求了；或者公司的一些核心业务，如重要客户信息、资金处理相关信息等重要信息可能就不会选择放到云上；或者很多企业会将自己一部分的业务跑在云上，一部分的业务跑在自己的机器上；或者企业中用到的很多基础工具都是定制的工具，云环境提供的通用的产品不满足企业的需求。

**如此一列举不需要使用云计算的场景貌似还是蛮多的**。

但上面的场景只是一部分的场景，在笔者从事云计算行业这几年看来，偏互联网领域企业在选择部署环境时可能更多的还是选择云环境，因为云环境目前几乎提供了企业在开发、测试、部署时需要的一切组件。如计算环境(云服务器、容器服务等)，存储环境(NAS文件存储、常规磁盘分布式存储、全SSD分布式存储、针对海量小文件的对象存储等)，网络环境(如VPC网络、各种高速通道等)，数据库环境(包括mysql、pg、sqlserver等关系型数据库，mongo、redis等非关系型数据库)，各种缓存组件，消息中间件组件，负载均衡组件，监控服务，日志服务，访问控制服务等，可谓应有尽有。

下面我们以一个例子来看下云计算对常规运维的影响。

在此我们以一个创业公司为例，假设该创业公司为一个互联网公司，且已经完成自己应用的第一版的开发，部署架构以常见的lnmp为例，具体如下：

![640?wx_fmt=png](https://img-blog.csdnimg.cn/img_convert/73e7f72925f978c5149ceae501ab3266.png)



现在需要发布到线上，如果公司打算采用非云环境，那么从开始部署到上线大概需要经历的过程如下：



(1) 购买服务器若干台，此过程可能需要耗费几周的时间。

(2) 按照自己的需要为服务器重装系统。

(3) 虚拟化操作，虚出3台虚拟机，当然直接用物理布的话此步省略。

(4) 打通机器之间的网络。

(5) 购买外网IP。

(6) 购买域名，需要注册域名服务商账号后购买。

(7) 域名备案，此过程一般需要3周左右。

(8) 部署应用：vm1部署nginx，vm2部署php-fpm、应用，vm3部署数据库MySQL。

(9) 应用对外发布。



上面架构虽然简单，但整个部署上线过程可能需要3周以上的时间，即使备案和购买服务器同时进行，也需要花费约3周的时间。  



虽然没有考虑nginx的高可用、应用的负载均衡、应用的动静分离、数据库的主从读写分离、数据库定期备份、监控告警、故障演练等情况，部署期间负载运维的同学已经有很多的事情可做。



如果再加上前面没添加的高可用等配置，运维同学可谓忙的不亦乐乎，后期业务量上来后可能还需要添加入口nginx数目，增加消息队列、数据库缓存、静态文件缓存加速等组件，运维同学需要做的事情越来越多，运维角色在公司技术团队中也越来越重要。



上面是采用自购服务器搭建的方式，下面我们说下采用云平台搭建的方式，具体部署过程如下：



(1) 注册云平台账号。

(2) 云平台购买云服务器(虚拟机或者物理机)，只需要填写下机器的名称，选择下操作系统类型，选择下机器的规格，购买数量，确认后几秒钟即可完成服务器准备。相比自购机器此过程耗费的时间基本可以忽略不计。

(3) 购买负载均衡，过程和购买云服务器一样，只需要填写必要的信息即可。且此过程一般会自动为我们分配一个外网IP，不需要我们自己再去联系购买外网IP。

(4) 购买数据库实例，过程和购买云服务类似，填写下实例名称，数据库类型(包括数据库类别和实例类型，数据库类别如: mysql、sqlserver等，类型如单点数据库、主从版数据库、金融版的数据库等)，规格等信息后直接新建即可。云平台一般还会系统数据的自动备份功能。

(5) 网络，可以为VPC网络也可为经典网络，根据实际需要创建即可。

(6) 购买域名，大部分云厂商都提供此服务，不需要再另外注册域名服务商账号，直接在当前云厂商平台购买即可。

(7) 域名备案，直接在当前云平台备案即可，此过程一般在1周以内即可完成。

(8) 部署应用，自购服务器时我们需要自己部署负载均衡、web server、数据库服务，此处我们只需要部署自己的web server(部分云厂商会提供大部分常见应用运行的环境的镜像，web server也不需要自己部署)即可，负载均衡和数据库服务使用上文中已经新建好的即可。

(9) 应用对外发布。



以上即为采用云平台部署的大致的过程，除了备案需要约一周的时间和部署应用需要几十分钟外，其他基本不耗费时间。且云平台的各个组件一般都已经为我们做了高可用，如负载均衡、数据库等，这部分也可为我们节省一些时间、人力、物力。另外诸如各个组件的告警管理、日志管理等云平台一般也都会提供一般直接使用即可。



上面过程中负载均衡、web server、数据库的部署等操作只需要按照控制台界面的提示进行信息填写或者选择即可。基本不需要专门的运维知识即可将整个应用上线运行起来。



以上是对云环境和非云环境部署时运维操作的一个大致的对比。实际工作中很多公司运维岗位分的很细，诸如：基础设施运维、网络运维、应用运维、系统运维、数据库运维等，以上岗位的工作大部分云平台已经替我们做好了，且云厂商提供的功能会越来越完善，因此常规运维工作会被越来越弱化，比如原先需要5个应用运维，现在可能只需要1个即可，这个可以看做云计算对运维岗位影响的一个缩影。

上面说完了云计算对常规运维岗位的影响，那么常规运维同学怎样才能在公司自立呢？下面我们说下云计算背景下对从事或者有意从事常规运维工作同学的几点学习建议：

(1) 自动化运维，包括应用的自动化部署等。

(2) 编程，不会编程的运维不是好运维，至少要熟悉shell、python(最好再学习下Django、Flask框架)两种常用语言，有余力可再学习一门公司常用的开发语言，这样可帮助我们排查一些应用引起的问题。

(3) 网络，不是建议去考证。网络是基石，复杂系统理解了网络一般也就理解了一大半。建议常见的经典书籍过几遍，如《TCP/IP详解》3卷(第二卷顺便把C语言学了)等。

(4) 数据库，如mysql、pg等，不是简单的主从搭建，数据备份，简单sql操作。建议深入学习下数据库索引和各种锁，另外学习下数据库的内部的工作机制，如存储引擎InnoDB的内部原理，这样帮助我们排查一些复杂数据库问题，对于数据库优化也会有很大提升。

(5) 缓存，如redis、memcached等，可选择一个深入学习。

(6) Nosql，至少掌握MongoDB，学习下js编程。

(7) 消息队列，最常见的如RabbitMQ、Kafka等。

(8) Openstack，云时代运维必须掌握，openstack模块很多，一般熟悉常见的几个模块即可。

(9) 容器，容器已经成为云时代常见的应用载体，至少需要学习下kubernetes、Docker、Helm、Harbor。

(10)  微服务，了解常见微服务框架，工作原理，如Spring Cloud，学习Service Mesh。

(11)  迈出自己熟悉的一亩三分地，紧跟技术发展，活到老，学到老。

![640?wx_fmt=png](https://img-blog.csdnimg.cn/img_convert/3722674082a58fed10ee03f11aee5367.png)  
`,

    star: true,
    tags: ["科技"],
    views: 500,
    ctime: 114218327862,
    mtime: 114356676747,
  },
  {
    pid: "tep14",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "Tomcat就是这么简单",
    subTitle: "Tomcat就是这么简单 ",
    banners: [
      "https://img-blog.csdnimg.cn/f1428274a944470fb70d468a1eb367cf.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQXJjaGllX2phdmE=,size_13,color_FFFFFF,t_70,g_se,x_16",
    ],
    content: `什么是Tomcat
=========

Tomcat简单的说就是一个运行JAVA的网络服务器，底层是Socket的一个程序，它也是JSP和Serlvet的一个容器。

为什么我们需要用到Tomcat
===============

如果你学过html，css，你会知道你写的页面只能自己访问，别人不能远程访问你写的页面，Tomcat就是提供能够让别人访问自己写的页面的一个程序

配置Tomcat
========

运行Tomcat需要JDK的支持【Tomcat会通过JAVA_HOME找到所需要的JDK】。

*   新建JAVA_HOME环境变量【路径是JDK的主目录】  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/f1428274a944470fb70d468a1eb367cf.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQXJjaGllX2phdmE=,size_13,color_FFFFFF,t_70,g_se,x_16)
  
*   进入Tomcat目录下的bin中启动startup.bat，以下是成功启动Tomcat的页面。  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/9001ae31342f407eaf4f04553a0978b8.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQXJjaGllX2phdmE=,size_19,color_FFFFFF,t_70,g_se,x_16)
  
*   在浏览器地址栏输入http://localhost:8080,如果能够出现Tomcat页面，说明配置成功了！
  

**注意**：如果在使用Tomcat时出现了Error deploying web application directory web222,很大原因就是jdk和tomcat的版本不匹配。目前，jdk8不能匹配tomcat7.0，所以要降低jdk版本【换成JDK7】

**当然也有可能不是一帆风顺能够直接启动Tomcat，不能正常启动Tomcat会有以下情况**

1.  JAVA_HOME配置错误
  
2.  端口被占用了  
  第一种方法：在cmd输入netstat -anb查看谁占用了该端口【Tomcat默认的是8080】,在进程中关闭它  
  第二种方法：主动改变tomcat的端口, 到tomcat主目录下的conf/server.xml文件中修改,把8080端口改成是8088或者是其他的‘  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/bb54000d2051480c86223acb2054be37.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQXJjaGllX2phdmE=,size_20,color_FFFFFF,t_70,g_se,x_16)
  

相关术语介绍
======

![在这里插入图片描述](https://img-blog.csdnimg.cn/8322ac29226d4af9ae64059ab6bf7aaf.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQXJjaGllX2phdmE=,size_14,color_FFFFFF,t_70,g_se,x_16)

tomcat结构目录
==========

![在这里插入图片描述](https://img-blog.csdnimg.cn/a377944bada94b82a17eedbf63612191.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQXJjaGllX2phdmE=,size_20,color_FFFFFF,t_70,g_se,x_16)

目录的简单介绍
=======

1.  bin：启动和关闭tomcat的bat文件
2.  conf：配置文件  
  server.xml该文件用于配置server相关的信息，比如tomcat启动的端口号，配置主机(Host)  
  web.xml文件配置与web应用（web应用相当于一个web站点）  
  tomcat-user.xml配置用户名密码和相关权限.
3.  lib：该目录放置运行tomcat运行需要的jar包
4.  logs：存放日志，当我们需要查看日志的时候，可以查询信息
5.  webapps：放置我们的web应用
6.  work工作目录：该目录用于存放jsp被访问后生成对应的server文件和.class文件

webapps目录的详细说明
==============

在webapps中建立了web1目录，下面放置我们的html文件，jsp文件，图片等等，则web1就被当做web应用管理起来【tomcat6.0以后的版本才支持】

例子：在webapps下创建一个web站点，在web站点下创建一个html文件，访问html文件  
![在这里插入图片描述](https://img-blog.csdnimg.cn/c2b3209600254c38819b00d1a6fd2b47.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQXJjaGllX2phdmE=,size_20,color_FFFFFF,t_70,g_se,x_16)

web站点的目录是有规范的  
![在这里插入图片描述](https://img-blog.csdnimg.cn/d1293ea43c0a44219043b0bc1ebc31f1.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQXJjaGllX2phdmE=,size_20,color_FFFFFF,t_70,g_se,x_16)  
为什么要这样设置web站点目录呢？

*   需求：我有多个html文件，想把其中的一个html文件作为我web站点的首页。
*   如果没有WEB-INF目录下的web.xml文件支持，是无法解决我的需求的
*   这个规范是约定熟成的。

下面将web站点下的helloword2.xml文件作为站点的首页

*   新建一个WEB-INF目录  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/cea1cc11734b4067ad6c4eba6380060c.png)
*   在WEB-INF目录下创建一个web.xml  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/9fe1aac28e974cfc96c446a40c747615.png)
*   web.xml我们不可能会写，所以可以在webapps目录下其他的站点中抄一份过来【复制ROOT/WEB-INF/web.xml的文件到自己的站点中】
*   在web.xml中添加以下代码

        <welcome-file-list>
              <welcome-file>helloword2.html</welcome-file>
        </welcome-file-list>
  

![在这里插入图片描述](https://img-blog.csdnimg.cn/0dd7fde8836342a694b69e969dc7b785.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQXJjaGllX2phdmE=,size_20,color_FFFFFF,t_70,g_se,x_16)

*   访问web站点【helloword2.html已经是web站点的首页了，所以不需要指定资源访问了】  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/0e1bf5d0ce7c4801bfd8c740c8967a4d.png)

配置虚拟目录
======

为什么需要配置虚拟目录？
------------

*   如果把所有web站点的目录都放在webapps下，可能导致磁盘空间不够用，也不利于对web站点目录的管理【如果存在非常多的web站点目录】
*   把web站点的目录分散到其他磁盘管理就需要配置虚拟目录【默认情况下，只有webapps下的目录才能被Tomcat自动管理成一个web站点】
*   把web应用所在目录交给web服务器管理，这个过程称之为虚拟目录的映射

配置虚拟目录方法一：
==========

*   在其他盘符下创建一个web站点目录，并创建WEB-INF目录和一个html文件。  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/6b20e9bd748f4d6aa4e126492457fa4e.png)
*   找到Tomcat目录下/conf/server.xml文件  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/0e5b57f076e44e138dfe273589e89e19.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQXJjaGllX2phdmE=,size_20,color_FFFFFF,t_70,g_se,x_16)
*   在server.xml中的节点下添加如下代码。path表示的是访问时输入的web项目名，docBase表示的是站点目录的绝对路径

  <Context path="/web1" docBase="D:\web1"/>
  

![在这里插入图片描述](https://img-blog.csdnimg.cn/21fe6e6212524ddf9e350d7efb2664b0.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQXJjaGllX2phdmE=,size_20,color_FFFFFF,t_70,g_se,x_16)

*   访问配置好的web站点  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/c07f67bd7dec4296a047afd062019cb2.png)

配置虚拟目录方法二：
==========

*   进入到confCatalinalocalhost文件下，创建一个xml文件，该文件的名字就是站点的名字。  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/2f1736abf3c44348893ea693e9e58a91.png)
*   xml文件的代码如下，docBase是你web站点的绝对路径

  <?xml version="1.0" encoding="UTF-8"?> 
  <Context 
      docBase="D:\web1" 
      reloadable="true"> 
  </Context> 
  

*   访问web站点下的html资源  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/32d0204461194b74988e71af8fb177ae.png)

配置临时域名
======

访问Tomcat服务器有好几种方式

*   使用localhost域名访问【localhost代表本机】
*   使用ip地址127.0.0.1访问【该ip地址也是本机】
*   使用机器名称访问【只限用于本机上或者局域网】
*   使用本机IP地址访问【在cmd中输入ipconfig可以查询到本机IP地址】
*   还可以为机器配置临时域名

配置临时域名步骤
========

*   打开到C:WindowsSystem32driversetc下，找到hosts文件  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/897a13acc8ce4ade8ad48ee7ee8a8c9d.png)
*   在hosts文件下配置临时域名  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/85bef5c7c0524f3cb057ec0d46896dab.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQXJjaGllX2phdmE=,size_20,color_FFFFFF,t_70,g_se,x_16)

设置虚拟主机
======

什么是虚拟主机？
--------

多个不同域名的网站共存于一个Tomcat中

为什么需要用到虚拟主机？
------------

例子：我现在开发了4个网站，有4个域名。如果我不配置虚拟主机，一个Tomcat服务器运行一个网站，我就需要4台电脑才能把4个网站运行起来。

配置虚拟主机的步骤
=========

*   在tomcat的server.xml文件中添加主机名

        <Host name="zhongfucheng" appBase="D:\web1">
                      <Context path="/web1" docBase="D:\web1"/>
        </Host>
  

![在这里插入图片描述](https://img-blog.csdnimg.cn/38ae1246a4af47b891f250561c877adf.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQXJjaGllX2phdmE=,size_20,color_FFFFFF,t_70,g_se,x_16)

*   访问虚拟主机下的web站点  
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/1b010fdc18ff477a92ccff065577134a.png)

Tomcat体系结构
==========

![在这里插入图片描述](https://img-blog.csdnimg.cn/9e01f2a1b01e4f9e8a898a222875aea8.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQXJjaGllX2phdmE=,size_20,color_FFFFFF,t_70,g_se,x_16)

浏览器访问WEB资源的流程图
==============

![在这里插入图片描述](https://img-blog.csdnimg.cn/343551522e044c479dcdf3f4be1994fa.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQXJjaGllX2phdmE=,size_20,color_FFFFFF,t_70,g_se,x_16)

练习
==

在浏览器输入http//:zhongfucheng直接显示到页面

分析：

1.  需要配置虚拟主机
2.  把8080端口改成80
3.  设置web站点首页
4.  映射虚拟目录为
`,
    star: true,
    tags: ["科技"],
    views: 1500,
    ctime: 114218327831,
    mtime: 114356676766,
  },
  {
    pid: "tep15",
    author: {
      uid: "cmll", // 作者id
      nickname: "cmLily", // 作者昵称
      avatar: "/avatar/me.jpg",
      follow: false,
    },
    title: "JVM学习之-运行时数据区（Runtime data area）",
    subTitle: "JVM学习之-运行时数据区（Runtime data area） ",
    banners: [
      "https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxNy85LzQvZGQzYjE1YjNkODgyNmZhZWFlMjA2Mzk3NmZiOTkyMTM_aW1hZ2VWaWV3Mi8wL3cvMTI4MC9oLzk2MC9mb3JtYXQvd2VicC9pZ25vcmUtZXJyb3IvMQ",
    ],
    content: `**   一、运行时数据区的认识**![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxNy85LzQvZGQzYjE1YjNkODgyNmZhZWFlMjA2Mzk3NmZiOTkyMTM_aW1hZ2VWaWV3Mi8wL3cvMTI4MC9oLzk2MC9mb3JtYXQvd2VicC9pZ25vcmUtZXJyb3IvMQ)
==============================================================================================================================================================================================================================

线程共享和线程私有的区域
------------

> 名词解释：**PC程序计数器    VMS 虚拟机栈  NMS 本地方法栈** 

![](https://img-blog.csdnimg.cn/e7c5ff13677b41faa166f3d20fadb63b.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAVHl1SW4=,size_20,color_FFFFFF,t_70,g_se,x_16) 从上图可以大致的了解到线程私有区域的构成，接下来就对里面的每一个部分展开描述一下：

（1）程序计数器（PC）
------------

**        内存空间小，线程私有**。字节码解释器工作是就是通过改变这个计数器的值来选取下一条需要执行指令的字节码指令，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖计数器完成。

      **程序计数器线程私有的理解：**由于Java 虚拟机的多线程是通过线程轮流切换并分配处理器执行时间的方式来实现的，在任何一个确定的时刻，一个处理器（对于多核处理器来说是一个内核）只会执行一条线程中的指令。因此，为了线程切换后能恢复到正确的执行位置，每条线程都需要有一个独立的程序计数器，各条线程之间的计数器互不影响，独立存储。

      如果线程正在执行的是一个Java 方法，这个计数器记录的是正在执行的虚拟机字节码指令的地址；如果正在执行的是Native 方法，这个计数器值则为空（Undefined）。

      **此内存区域是唯一一个在Java 虚拟机规范中没有规定任何OutOfMemoryError（OOM） 情况的区域。**

（2）虚拟机栈（VM Stack）
-----------------

      描述的是 Java 方法执行的内存模型：每个方法在执行时都会床创建一个栈帧(Stack Frame)用于存储局部变量表、操作数栈、动态链接、方法出口等信息。每一个方法从调用直至执行结束，就对应着一个栈帧从虚拟机栈中入栈到出栈的过程。

**虚拟机栈中可能出现的异常：**

*   **StackOverflowError：线程请求的栈深度大于虚拟机所允许的深度。**
*   **OutOfMemoryError：如果虚拟机栈可以动态扩展，而扩展时无法申请到足够的内存。**

### 1、**栈帧（Stack Frame）**

      栈帧（Stack Frame）是用于支持虚拟机进行**方法调用和方法执行**的数据结构。它是虚拟机栈的栈元素。栈帧存储了方法的局部变量表、操作数栈、动态连接和方法返回地址等信息。**每一个方法从调用开始至执行完成的过程，都对应着一个栈帧在虚拟机里面从入栈到出栈的过程。**

      在编译程序代码的时候，栈帧中需要多大的局部变量表内存，多深的操作数栈都已经完全确定了。因此一个栈帧需要分配多少内存，不会受到程序运行期变量数据的影响，而仅仅取决于具体的虚拟机实现。

![](https://img-blog.csdnimg.cn/60ddd2ecc7354718aed0fe59c5815d73.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAVHl1SW4=,size_20,color_FFFFFF,t_70,g_se,x_16)

      如上图所示，**当前栈桢总是指向栈顶【在活动线程中，只有位于栈顶的栈帧才是有效的，称为当前栈帧，与这个栈帧相关联的方法称为当前方法。】执行引擎运行的所有字节码指令都只针对当前栈帧进行操作。**

![](https://img-blog.csdnimg.cn/a427fde0cf7a47918100ac0630a4c2fc.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAVHl1SW4=,size_20,color_FFFFFF,t_70,g_se,x_16)

### 2、**局部变量表（Local Variable Table）**

      存放了编译期可知的各种基本数据类型（boolean、byte、char、short、int、float、long、double）、对象引用（reference 类型，它不等同于对象本身，根据不同的虚拟机实现，它可能是一个指向对象起始地址的引用指针，也可能指向一个代表对象的句柄或者其他与此对象相关的位置）和returnAddress 类型（指向了一条字节码指令的地址）。其中64 位长度的long 和double 类型的数据会占用2 个局部变量空间（槽 Slot），其余的数据类型只占用1 个槽。【从这里也反映了一个槽的大小是4字节】局部变量表所需的内存空间在编译期间完成分配，当进入一个方法时，这个方法需要在帧中分配多大的局部变量空间是完全确定的，在方法运行期间不会改变局部变量表的大小。由于局部变量表是建立在线程的栈上，是线程的私有数据，因此**不存在数据安全问题。【这当然可以说是废话】**

**【需要了解什么是编译期和运行期的可以看一下下面这篇博客：**[Java 编译期与运行期，别傻傻分不清楚！ - Java技术栈 - 博客园](https://www.cnblogs.com/javastack/p/13397621.html "Java 编译期与运行期，别傻傻分不清楚！ - Java技术栈 - 博客园")】

![](https://img-blog.csdnimg.cn/img_convert/8ed3d59d99e3ea3e0c085e8fcd9d3660.png)

      **局部变量表中的变量只在当前方法调用中有效**。在方法执行时,虚拟机通过使用局部变量表完成参数值到参数变量列表的传递过程。**当方法调用结束后,随着方法栈帧的销毁,局部变量表也会随之销毁**。

### 最后提一些局部变量表中的拓展知识：

### ** 1、Slot（槽）复用**

      为了尽可能节省栈帧空间，局部变量表中的Slot是可以重用的，也就是说当PC计数器的指令指向已经超出了某个变量的作用域（执行完毕），那这个变量对应的Slot就可以交给其他变量使用。【**如果当前字节码PC计数器的值已经超出了某个变量的作用域，那这个变量对应的Slot就可以交给其他变量使用。**】

*   优点 ： 节省栈帧空间。 
*   缺点 ： 影响到系统的垃圾收集行为。（如大方法占用较多的Slot，执行完该方法的作用域后没有对Slot赋值或者清空设置null值，垃圾回收器便不能及时的回收该内存。） ->  注意：垃圾回收是在堆和方法区的，栈中没有垃圾回收

  public class A {     public static void main(String[] args) {        int a = 0;        {            int b = 0;            b = a + 1;        }        // 变量c使用之前已经销毁的变量b的slot        int c = a + 1;    }}

### ** 2.扩展**

      如果**当前栈帧是由构造方法或者实例方法创建的，那么该对象引用this将会存放在index为0的slot处，其余的参数按照参数表顺序继续排列**。如果需要访问局部变量表中一个64bit的局部变量值时，只需要使用前一个索引即可。(比如：访问long或double类型变量)【下面是一段简单的测试代码】

  public class A {     public void test(){        int a = 10;        String b = "hello";    } }

![](https://img-blog.csdnimg.cn/5f3077f704024b528d9f15c1e4180327.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAVHl1SW4=,size_20,color_FFFFFF,t_70,g_se,x_16)

### 3、**动态链接（Dynamic Linking）**

      每个栈帧都包含一个指向运行时常量池中该栈帧所属方法的引用，持有这个引用是为了支持方法调用过程中的动态连接（Dynamic Linking）。在类加载阶段中的解析阶段会将符号引用转为直接引用，这种转化也称为静态解析。另外的一部分将在每一次运行时期转化为直接引用。这部分称为动态连接。【比如: \`invokedynamic\`指令。】

      在Java源文件被编译到字节码文件中时，所有的变量和方法引用都作为符号引用(symbolic Reference)保存在class文件的常量池里。比如：描述一个方法调用了另外的其他方法时，就是通过常量池中指向方法的符号引用来表示的，**那么动态链接的作用就是为了将这些符号引用转换为调用方法的直接引用。**

![](https://img-blog.csdnimg.cn/77c27031ff0646058ef30042727df43d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAVHl1SW4=,size_20,color_FFFFFF,t_70,g_se,x_16)

### 4、**方法返回地址（Return Address）**

       方法返回地址（Return Address）（方法正常退出或者异常退出的定义）---- 存放调用该方法的pc寄存器的值。

当一个方法开始执行后，只有2种方式可以退出这个方法 ：

*   ​ 方法返回指令 （return）： 执行引擎遇到一个方法返回的字节码指令，这时候有可能会有返回值传递给上层的方法调用者，这种退出方式称为正常完成出口。
*   异常退出 ： 在方法执行过程中遇到了异常，并且没有处理这个异常，就会导致方法退出。

      一般来说，方法正常退出时，调用者的PC计数器的值可以作为返回地址，栈帧中会保存这个计数器值。而方法异常退出时，返回地址是要通过异常处理器表来确定的，栈帧中一般不会保存这部分信息。

### 5、**操作数栈（Operand Stack）**：（表达式栈）

      操作数栈，主要用于保存计算过程的中间结果,同时作为计算过程中变量临时的存储空间。操作数栈就是JVM执行引擎的一个工作区，当一个方法刚开始执行的时候，一个新的栈帧也会随之被创建出来，这时这个方法的操作数栈是空的。      

       某些字节码指令将值压入操作数栈，其余的字节码指令将操作数取出栈。使用它们后再把结果压入栈。比如:执行复制、交换、求和等操作。

  【下面是一个简单的代码讲解以及字节码的具体分析】

  public class A {    /*         0 bipush 15   操作数 byte 15 入栈         2 istore_1    操作数出栈，局部变量表索引为 1的位置存储 int 15         3 bipush 8    操作数入栈 byte 8         5 istore_2    操作数出栈，局部变量表索引为 2的位置存储 int 8         6 iload_1     从局部变量表对应索引处获取值，入栈         7 iload_2     从局部变量表对应索引处获取值，入栈         8 iadd        15 和 8 出栈求和，再入栈         9 istore_3    将计算结果存储再局部变量表索引为 3位置 int 23        10 sipush 800        13 istore 4        15 return     */    public static void main(String[] args) {        byte i = 15;        int j = 8;        int k = i + j;         int m = 800;    }}

![](https://img-blog.csdnimg.cn/3df01ba85c794429b6c15e7f31d60e9d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAVHl1SW4=,size_20,color_FFFFFF,t_70,g_se,x_16)

简单的拓展问题

1、方法中定义的局部变量是否线程安全?

> 如果只有一个线程可以操作此数据，则必是线程安全的。如果有多个线程操作此数据，则此数据是共享数据。如果不考虑同步机制的话，会存在线程安全问题。

2、分配的栈内存越大越好么？

> 不是，一定时间内降低了OOM概率，但是会挤占其它的线程空间，因为整个虚拟机的内存空间是有限的。

（3）本地方法栈（Native Method Stack）
-----------------------------

      本地方法栈（Native Method Stacks）与虚拟机栈所发挥的作用是非常相似的，其区别不过是虚拟机栈为虚拟机执行Java 方法（也就是字节码）服务，而本地方法栈则是为虚拟机使用到的Native （本地）方法服务。虚拟机规范中对本地方法栈中的方法使用的语言、使用方式与数据结构并没有强制规定，因此具体的虚拟机可以自由实现它。甚至有的虚拟机（譬如Sun HotSpot 虚拟机）直接就把本地方法栈和虚拟机栈合二为一。与虚拟机栈一样，本地方法栈区域也会抛出StackOverflowError 和OutOfMemoryError异常。

**         【方法区与堆内存在下一篇博客再进行讲解。】本篇主要记录博主在学习java虚拟机过程的笔记以及自己的总结，内容及配图来源《深入理解java虚拟机（第三版）-JVM高级特性与最佳实践 》，书的作者是：周志明老师。文章中的图片主要是尚硅谷JVM课程学习的图片，有兴趣的可以去 blibli 搜索学习。`,
    star: true,
    tags: ["JVM"],
    views: 1100,
    ctime: 114218327732,
    mtime: 114356676667,
  },
];

const ps2 = [
  {
    pid: "tep01",
    author: {
      uid: "cmkk",
      nickname: "cmKangkang",
      avatar: "http://img.jj20.com/up/allimg/tx19/260321310627894.jpg",
      follow: false,
    },
    title: "2021赛季F1车队介绍",
    subTitle: "2021赛季F1车队介绍",
    banners: [
      "https://pic2.zhimg.com/80/v2-e867691facbca1a3d2ea38424b832cb9_720w.jpg",
    ],
    tags: ["F1", "f1", "赛车"],
    views: 33,
    ctime: 1612391580,
    mtime: 1620102780,
  },
  {
    pid: "tep02",
    author: {
      uid: "cmkk",
      nickname: "cmKangkang",
      avatar: "http://img.jj20.com/up/allimg/tx19/260321310627894.jpg",
      follow: false,
    },
    title: "烈日灼心影评",
    subTitle: "烈日灼心电影简短的观后感",
    banners: ["https://inews.gtimg.com/newsapp_bt/0/13161770907/1000"],
    tags: ["电影", "影评", "烈日灼心"],
    views: 50,
    ctime: 1612927320,
    mtime: 1613052660,
  },
  {
    pid: "tep03",
    author: {
      uid: "cmkk",
      nickname: "cmKangkang",
      avatar: "http://img.jj20.com/up/allimg/tx19/260321310627894.jpg",
      follow: false,
    },
    title: "有感而发",
    subTitle: "暂时取名叫《我们》吧",
    banners: [
      "https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/2e2eb9389b504fc21f5a3568eedde71190ef6d52.jpg",
    ],
    tags: ["散文"],
    views: 12,
    ctime: 1559795040,
    mtime: 1559805840,
  },
  {
    pid: "tep04",
    author: {
      uid: "cmkk",
      nickname: "cmKangkang",
      avatar: "http://img.jj20.com/up/allimg/tx19/260321310627894.jpg",
      follow: false,
    },
    title: "旅行青蛙攻略",
    subTitle: "没错，这个游戏也有攻略",
    banners: [
      "https://pic3.zhimg.com/80/v2-fdbc1804ee7c991d615bfe4a3191c53a_720w.jpg",
    ],
    tags: ["游戏", "旅行青蛙", "攻略"],
    views: 2660,
    ctime: 1530861840,
    mtime: 1551020460,
  },
  {
    pid: "tep05",
    author: {
      uid: "cmkk",
      nickname: "cmKangkang",
      avatar: "http://img.jj20.com/up/allimg/tx19/260321310627894.jpg",
      follow: false,
    },
    title: "表白文案分享",
    subTitle: "希望各位有一天能用上~",
    banners: ["https://img95.699pic.com/photo/40128/5460.jpg_wh860.jpg"],
    tags: ["文案", "恋爱"],
    views: 139,
    ctime: 1599782700,
    mtime: 1602374700,
  },
  {
    pid: "tep06",
    author: {
      uid: "cmkk",
      nickname: "cmKangkang",
      avatar: "http://img.jj20.com/up/allimg/tx19/260321310627894.jpg",
      follow: false,
    },
    title: "鱿鱼游戏为什么这么火？",
    subTitle: "",
    banners: [
      "https://pic1.zhimg.com/v2-957863c5124a6a3fd60b97cb9c77ee16_1440w.jpg?source=172ae18b",
    ],
    tags: ["鱿鱼游戏", "解说"],
    views: 4009,
    ctime: 1634739000,
    mtime: 1634739000,
  },
  {
    pid: "tep07",
    author: {
      uid: "cmkk",
      nickname: "cmKangkang",
      avatar: "http://img.jj20.com/up/allimg/tx19/260321310627894.jpg",
      follow: false,
    },
    title: "什么是比特币？",
    subTitle: "对新手小白的扫盲攻略",
    banners: [
      "https://pic3.zhimg.com/80/v2-e848af3f5a802765d8bd575cb4e28646_720w.jpg",
    ],
    tags: ["比特币"],
    views: 5112,
    ctime: 1600611000,
    mtime: 1624198200,
  },
  {
    pid: "tep08",
    author: {
      uid: "cmkk",
      nickname: "cmKangkang",
      avatar: "http://img.jj20.com/up/allimg/tx19/260321310627894.jpg",
      follow: false,
    },
    title: "人工智能概念简介",
    subTitle: "面对发展如火如荼的人工智能行业，你有多少了解？",
    banners: [
      "https://upload-images.jianshu.io/upload_images/1409498-1d3372ce405a1c96.png",
    ],
    tags: ["人工智能", "大数据", "机器学习"],
    views: 2000,
    ctime: 1605881400,
    mtime: 1608739200,
  },
  {
    pid: "tep09",
    author: {
      uid: "cmkk",
      nickname: "cmKangkang",
      avatar: "http://img.jj20.com/up/allimg/tx19/260321310627894.jpg",
      follow: false,
    },
    title: "什么是显卡挖矿",
    subTitle: "3090又双叒叕供不上货啦！",
    banners: [
      "https://pic1.zhimg.com/v2-eebb799f639ec92008089a08cbf6b5f5_1440w.jpg",
    ],
    tags: ["虚拟货币", "大数据", "挖矿"],
    views: 1398,
    ctime: 1614583380,
    mtime: 1630480980,
  },
  {
    pid: "tep10",
    author: {
      uid: "cmkk",
      nickname: "cmKangkang",
      avatar: "http://img.jj20.com/up/allimg/tx19/260321310627894.jpg",
      follow: false,
    },
    title: "笑话大全",
    subTitle: "博君一笑",
    banners: [
      "https://bpic.588ku.com/element_origin_min_pic/19/04/09/7efe6fdab3bfcc7fdd8f053229abfd4a.jpg",
    ],
    tags: ["笑话"],
    views: 799,
    ctime: 1580370240,
    mtime: 1580370240,
  },
  {
    pid: "tep11",
    author: {
      uid: "cmkk",
      nickname: "cmKangkang",
      avatar: "http://img.jj20.com/up/allimg/tx19/260321310627894.jpg",
      follow: false,
    },
    title: "阅读金庸小说的顺序",
    subTitle: "个人体会，阅读指南",
    banners: [
      "https://www.duoduwang.com/ueditor/php/upload/image/20191211/1576028830524968.jpg",
    ],
    tags: ["金庸"],
    views: 132,
    ctime: 1611966120,
    mtime: 1611966120,
  },
  {
    pid: "tep12",
    author: {
      uid: "cmkk",
      nickname: "cmKangkang",
      avatar: "http://img.jj20.com/up/allimg/tx19/260321310627894.jpg",
      follow: false,
    },
    title: "从算力、数据、算法、工程化等维度看AI的未来",
    subTitle: "建议先读<人工智能概念简介>",
    banners: [
      "https://library.linkbricks.com/wp-content/uploads/2020/10/ai_istock-935226186_v2.jpg",
    ],
    tags: ["人工智能", "数据"],
    views: 667,
    ctime: 1617063720,
    mtime: 1617250920,
  },
  {
    pid: "tep13",
    author: {
      uid: "cmkk",
      nickname: "cmKangkang",
      avatar: "http://img.jj20.com/up/allimg/tx19/260321310627894.jpg",
      follow: false,
    },
    title: "单机游戏推荐",
    subTitle: "忙碌的工作之余也不要忘记犒劳自己！",
    banners: [
      "https://pic1.zhimg.com/v2-132d58721b20a6eab6d00f82ca284635_r.jpg?source=1940ef5c",
    ],
    tags: ["游戏推荐", "单机游戏"],
    views: 3114,
    ctime: 1626847203,
    mtime: 1626847203,
  },
  {
    pid: "tep14",
    author: {
      uid: "cmkk",
      nickname: "cmKangkang",
      avatar: "http://img.jj20.com/up/allimg/tx19/260321310627894.jpg",
      follow: false,
    },
    title: "游戏开发必备技能Q&A",
    subTitle: "游戏开发必备技能Q&A",
    banners: [
      "https://wallpaperm.cmcm.com/scene/preview_img/37feb61d1b793beab10a97f6acf4b0f8_preview.jpg",
    ],
    tags: ["游戏开发"],
    views: 2699,
    ctime: 1586533743,
    mtime: 1611283743,
  },
  {
    pid: "tep15",
    author: {
      uid: "cmkk",
      nickname: "cmKangkang",
      avatar: "http://img.jj20.com/up/allimg/tx19/260321310627894.jpg",
      follow: false,
    },
    title: "java后端学习路线",
    subTitle: "只做罗列，详细信息可自行搜索",
    banners: [
      "http://limoographic.com/wp-content/uploads/2017/11/Java-Logo-LimooGraphic.jpg",
    ],
    tags: ["程序开发", "学习心得"],
    views: 1024,
    ctime: 1611283743,
    mtime: 1611370143,
  },
];

const de2 = [
  {
     pid: 'tep01',
    author: {
      uid: 'cmkk',
      nickname: 'cmKangkang',
      avatar: 'http://img.jj20.com/up/allimg/tx19/260321310627894.jpg',
      follow: false
    },
    title: '2021赛季F1车队介绍',
    subTitle: '2021赛季F1车队介绍',
    banners: ['https://pic2.zhimg.com/80/v2-e867691facbca1a3d2ea38424b832cb9_720w.jpg'],
    content: `# 2021赛季F1车队介绍

## 2021赛季F1车队介绍

本文希望能通过对于2021赛季F1的十支车队进行一个历史溯源，来简单地介绍一下各支车队的情况，也为新车迷朋友选择主队提供一些参考。本文的数据主要参考的都是F1官网（[http://www.formula1.com](https://link.zhihu.com/?target=http%3A//www.formula1.com)），如有错误欢迎指出。
**P.S. 本文将按字母序介绍车队。**

---

1.阿尔法罗密欧（Alfa Romeo Racing ORLEN）

国籍：瑞士

引擎商：法拉利

冠名商：波兰国营石油公司

领队：弗雷德里克·瓦塞尔

技术总监：扬·蒙肖

2021赛季新车：C41

2021赛季车手阵容：7-基米·莱科宁（芬兰），99-安东尼奥·吉奥维纳兹（意大利）

**队史主要荣誉：**

1个分站赛冠军（08加拿大站-罗伯特·库比卡）

1个杆位（08巴林站-罗伯特·库比卡）

5个最快圈速（08马来西亚站-尼克·海德菲尔德，08德国站-尼克·海德菲尔德，12中国站-小林可梦伟，12摩纳哥站-塞尔吉奥·佩雷兹，13西班牙站-埃斯特班·古特雷斯）

阿尔法罗密欧的前身并非那个与之同名的F1创始车队，而是1993年加入F1的索伯车队。索伯车队的高光时刻是宝马时代的2008赛季，波兰新星罗伯特·库比卡在经历了2007赛季的巨大事故之后成功振作起来，在巴林站拿到个人和队史的首个杆位，并在加拿大站拿到了个人和队史的首个分站赛冠军，最终和同样发挥不错的队友德国车手尼克·海德菲尔德（4次分站赛亚军）共同为车队拿下了年度季军。

2010赛季索伯车队转用法拉利引擎，定位逐渐向法拉利二队转变，成绩常年徘徊于中下游，并在2019赛季改由阿尔法罗密欧冠名，将基米·莱科宁、查尔斯·勒克莱尔互换位置，之后就形成了莱科宁+吉奥维纳兹的车手阵容并固定至今。2019赛季和2020赛季均排名第八位，而就季前测试来看，C41对C39的提升有限，车手阵容无变化的阿尔法罗密欧大概率仍然难以冲击中游集团。

---

2.阿尔法托利（Scuderia AlphaTauri Honda）

国籍：意大利

引擎商：本田

领队：弗朗兹·托斯特

技术总监：乔迪·埃金顿

2021赛季新车：AT02

2021赛季车手阵容：10-皮埃尔·加斯利（法国），22-角田裕毅（日本）

**队史主要荣誉：**

2个分站赛冠军（08意大利站-塞巴斯蒂安·维特尔，20意大利站-皮埃尔·加斯利）

1个杆位（08意大利站-塞巴斯蒂安·维特尔）

1个最快圈速（16西班牙站-丹尼尔·科维亚特）

阿尔法托利的前身是1985年参加F1的米纳尔迪车队，作为赛事的中下游车队，米纳尔迪车队30年间并没有什么高光的表现，队伍在所参加的321场大奖赛中只获得了31个赛事积分，但是却是包括世界冠军费尔南多·阿隆索在内的许多著名车手走进F1赛事的第一站。

2006赛季红牛正式入主米纳尔迪车队，并将其更名为STR（Scuderia Toro Rosso）车队，定位为红牛车队的青年队，中国车迷往往称其为“红牛二队”或“小红牛”。2008赛季的意大利站见证了塞巴斯蒂安·维特尔这颗德国新星的冉冉升起，成功拿下“pole to win”的维特尔使得德国国歌和意大利国歌相继奏响，让车迷仿佛看到了舒马赫的影子，许多车迷也因此对于STR车队产生了好感。STR车队为马克斯·维斯塔潘、皮埃尔·加斯利、丹尼尔·科维亚特等红牛青训车手提供了F1比赛的机会。2020赛季，红牛以旗下服装品牌阿尔法托利为其重新命名，并明确了将其作为红牛车队的“姊妹车队”而非“第二车队”，但车迷仍然习惯称其为“红牛二队”。2020赛季意大利站，被红牛车队下放的皮埃尔·加斯利代表阿尔法托利成功拿下分站赛冠军，其他分站赛同样表现不俗，最终帮助车队排名赛季第七。

2021赛季阿尔法托利保留了发挥出色的皮埃尔·加斯利，同时迎来了2020赛季F2年度季军、00后车手角田裕毅。季前测试期间角田裕毅发挥抢眼，展现自身实力的同时也展现了AT02不俗的短距离速度，如果能够改进赛车的长距离速度发挥，阿尔法托利有望在新赛季获得中游的一席之地。

---

3.Alpine（Alpine F1 Team）

国籍：英国

引擎商：雷诺

领队：戴维·布里维奥

技术总监：帕特·弗莱/雷米·塔芬

2021赛季新车：A521

2021赛季车手阵容：14-费尔南多·阿隆索（西班牙），31-埃斯特班·奥康（法国）

**队史主要荣誉：**

2个世界冠军（2005、2006）

20个分站赛冠军

20个杆位

15个最快圈速

Alpine车队是以雷诺旗下的子公司为主体构建的。雷诺车队在2002赛季正式开启了F1之旅，在2005赛季和2006赛季车队战绩达到顶峰，西班牙车手费尔南多·阿隆索一骑绝尘，成功拿下车手两连冠，并帮助雷诺拿下车队两连冠以及上述主要荣誉中的大部分。随后雷诺在中游徘徊，并在2008赛季遭受了“撞车门”风波（为帮助阿隆索夺得分站赛冠军，车队下令另一位车手小皮奎特故意撞车引发安全车的事件），后于2011赛季退出F1，仅提供引擎供应。2016赛季，雷诺车队重返F1，但直到2020赛季战绩均难言满意。

2021赛季，Alpine车队登场亮相，丹尼尔·里卡多转投迈凯伦，雷诺则从印地赛车场请回了曾经帮助车队建立王朝的费尔南多·阿隆索，搭档青年车手埃斯特班·奥康。从季前测试来看，A521发挥稳定，短长距离均有出色表现，“新人车手”阿隆索宝刀不老，综合来看车队极有可能较前几个赛季取得突破。

---

4.阿斯顿马丁（Aston Martin Cognizant F1 Team）

国籍：英国

引擎商：梅赛德斯

冠名商：高知特资讯技术公司

领队：奥马尔·萨福诺尔

技术总监：安德鲁·格林

2021赛季新车：AMR21

2021赛季车手阵容：5-塞巴斯蒂安·维特尔（德国），18-兰斯·斯托罗尔（加拿大）

**队史主要荣誉：**

1个分站赛冠军（20萨基尔站-塞尔吉奥·佩雷兹）

1个杆位（20土耳其站-兰斯·斯托罗尔）

阿斯顿马丁的前身要追溯到2018赛季的印度力量车队，2019赛季改名赛点车队，这两个赛季车队均排名第七。而随着饱受争议的\“w10青春版\”的进入，2020赛季由两位车手分别创造了队史的首杆和首冠，并最终带回了赛季第四名。

2021赛季，上赛季地球组冠军佩大师远赴火星组，与少爷斯托罗尔搭档的变成了四冠王维特尔。就季前测试来看，这支充满了新元素的车队前景并不明朗，稳定性将会是车队冲击中上游位次的最大敌人。

---

5.法拉利（Scuderia Ferrari Mission Winnow）

国籍：意大利

引擎商：法拉利

冠名商：菲利普·莫里斯公司

领队：马蒂亚·比诺托

技术总监：恩里克·卡迪尔/恩里克·瓜尔蒂耶里

2021赛季新车：SF21

2021赛季车手阵容：16-查尔斯·勒克莱尔（摩纳哥），55-卡洛斯·塞恩斯（西班牙）

**队史主要荣誉：**

16个世界冠军（1961、1964、1975、1976、1977、1979、1982、1983、1999、2000、2001、2002、2003、2004、2007、2008）

239个分站赛冠军

221个杆位

253个最快圈速

法拉利是F1赛事硕果仅存的元老车队，他们从未缺席任何一个F1赛季，拥有着悠久的历史、无数的荣誉和以迈克尔·舒马赫为代表的一众优秀车手，和舒马赫一样，法拉利同样是F1的代名词。

在上个世纪60年代，法拉利曾夺得过两次世界冠军，随后一直沉寂到尼基·劳达的到来，奥地利人帮助法拉利拿下了1975-1977赛季的车队三连冠。1979赛季，南非人约迪·歇科特拿下了迄今非洲车手的唯一一个车手总冠军，也开启了法拉利的下降之路，虽然1982赛季和1983赛季法拉利仍然夺得了车队总冠军，但是车手总冠军均已丧失，而自1984赛季开始直到1998赛季，F1进入了迈凯伦大战威廉姆斯的时代，法拉利一冠难求。直到1999赛季迈克尔·舒马赫的出色发挥，终于帮助法拉利夺得了久违的车队总冠军，也正式开启了舒马赫五连冠和法拉利六连冠的统治时期。

2006赛季，迈克尔·舒马赫宣布退役。2007赛季，基米·莱科宁勇夺世界冠军，法拉利重夺冠军奖杯；2008赛季，虽然刘易斯·汉密尔顿拿下车手总冠军，但基米·莱科宁和菲利佩·马萨的出色发挥也帮助法拉利完成车队两连冠，这是法拉利迄今最后一个世界冠军。

2009赛季到2019赛季，法拉利仍旧待在火星组，保持着冲击杆位和分站赛冠军的实力；直到2020赛季，车辆研发、内部关系、工作环境乃至策略制定都出现了问题，而这也导致了车队巨大危机的爆发。全年无分站赛冠军和杆位，甚至没有领跑过任何一圈，车队排名赛季第六，两名车手分列第8、第13，战绩出奇惨淡。

2021赛季，塞巴斯蒂安·维特尔转投阿斯顿马丁，前迈凯伦车手卡洛斯·塞恩斯与查尔斯·勒克莱尔搭档。就季前测试来看，sf21虽较sf1000有提升（毕竟sf1000没什么下降空间），但仍然很难回到冲击杆位和分站赛冠军的水准，而且看得出来，卡洛斯·塞恩斯仍需要适应期。

---

6.哈斯（Haas F1 Team）

国籍：美国

引擎商：法拉利

领队：冈瑟·斯泰纳

技术总监：西蒙·雷斯塔

2021赛季新车：VF-21

2021赛季车手阵容：47-米克·舒马赫（德国），9-尼基塔·马泽平（俄罗斯）

**队史主要荣誉：**

2个最快圈速（18新加坡站-凯文·马格努森，19新加坡站-凯文·马格努森）

哈斯2016赛季加入F1。作为低成本车队的代表，如上所述，哈斯并没有很多拿得出手的成绩，但是哈斯确实代表着低成本运作F1车队的一种方式。凭借相对低成本的研发投入和相对低薪资但经验丰富的两位车手，哈斯车队在2018赛季勇夺赛季第五。其中在奥地利大奖赛趁着梅奔双退，维斯塔潘和两名法拉利车手斗得火热，罗曼·格罗斯让和凯文·马格努森悄咪咪地四五带回，罗曼·格罗斯让的第四名也是目前哈斯车队队史最好的分站赛成绩。

2019赛季开始，竞争愈加激烈的F1使得哈斯车队无所适从，加上\“哈斯三宝\”（领队和两位车手）之间的微妙关系，使得2019赛季和2020赛季，哈斯都仅仅排在威廉姆斯前头，位居赛季第九。

2021赛季，哈斯成为唯一一支换掉两位车手的车队，他们选用了2020赛季的F2总冠军、迈克尔·舒马赫之子米克·舒马赫，以及赞助商老板之子尼基塔·马泽平组成新赛季车手阵容。就季前测试来看，VF-21的提升有限，哈斯又是唯一一个启用两名一年级生的车队，因此新赛季能否战胜威廉姆斯可以说已经成为了一个挑战。

---

7.迈凯伦（McLaren F1 Team）

国籍：英国

引擎商：梅赛德斯

领队：安德里亚斯·赛德尔

技术总监：詹姆斯·凯伊

2021赛季新车：MCL35M

2021赛季车手阵容：3-丹尼尔·里卡多（澳大利亚），4-兰多·诺里斯（英国）

**队史主要荣誉：**

8个世界冠军（1974、1984、1985、1988、1989、1990、1991、1998）

182个分站赛冠军

155个杆位

158个最快圈速

迈凯伦车队1966赛季加入F1，是如今围场中历史长度仅次于法拉利的车队，同法拉利一样拥有着许多荣誉和辉煌。1974赛季，巴西车手埃默松·费迪帕尔蒂在迈凯伦拿下车手总冠军，也让迈凯伦的队徽第一次刻上了F1总冠军奖杯。随后几年，迈凯伦保持着较强的冲击力，并由英国车手詹姆斯·亨特拿下1976赛季的车手总冠军，但重回车队巅峰是在10年后。1984赛季的尼基·劳达和1985赛季的阿兰·普罗斯特帮助车队连续两年包揽年度双冠，随后威廉姆斯回敬一个车队两连冠。之后的1988-1991四个赛季是迈凯伦王朝时期，“车神”埃尔顿·塞纳和“教授”阿兰·普罗斯特帮助车队拿下四连冠，力压威廉姆斯。

1992赛季开始，威廉姆斯彻底爆发，他们六年五冠强力压制了迈凯伦，直到1998赛季才由芬兰人米卡·哈基宁帮助迈凯伦重新夺回了车队冠军，这也是迈凯伦车队迄今为止最后的一个车队冠军。

21世纪前十年，迈凯伦的战绩不俗，虽然没有车队冠军，但是2008年刘易斯·汉密尔顿仍然带回了一个珍贵的车手总冠军。2013赛季之后，迈凯伦逐渐陷入沉寂，排名常年在中游浮动，直到2020赛季，才终于在车队团结一致的努力下，重回前三名。

2021赛季，卡洛斯·塞恩斯转投跃马，丹尼尔·里卡多将与未来之星兰多·诺里斯搭档参赛。MCL35M在季前测试中表现优异，短距离测试甚至与梅奔分庭抗礼，丹尼尔·里卡多也融入迅速，这让已经走上复兴之路的迈凯伦车队充满了再进一步的可能。

---

8.梅赛德斯（Mercedes-AMG Petronas F1 Team）

国籍：德国

引擎商：梅赛德斯

冠名商：马来西亚国有石油公司

领队：托托·沃尔夫

技术总监：詹姆斯·埃里森

2021赛季新车：W12

2021赛季车手阵容：44-刘易斯·汉密尔顿（英国），77-瓦尔特利·博塔斯（芬兰）

**队史主要荣誉：**

7个世界冠军（2014、2015、2016、2017、2018、2019、2020）

106个分站赛冠军

118个杆位

75个最快圈速

梅赛德斯的前身可以追溯到1970赛季加入F1的泰瑞尔车队。泰瑞尔车队参赛第二年就拿到了车队总冠军。在F1持续运营了近二十年后，泰瑞尔车队于1999赛季更名英美车队，并在2004赛季斩获车队亚军；2006赛季，英美车队更名为本田车队；2009赛季，本田车队更名为布朗GP车队，并依靠简森·巴顿和鲁本斯·巴里切罗的出色发挥斩获了车队总冠军；2010赛季，梅赛德斯横空出世。

2010-2013赛季，是红牛车队的统治时期，在这个阶段，梅赛德斯车队拿到了一次车队亚军、两次第四和一次第五，总体来看位于中上游；2014赛季，围场开始被梅赛德斯支配。凭借雄厚的研发资金和人才储备、完善的车队组织体系以及一流车手的出色发挥，梅赛德斯车队在2014-2020赛季取得了史无前例的车队七连冠，打破了舒马赫在法拉利创造的六连冠记录。

2021赛季，梅赛德斯车队仍旧以七冠王刘易斯·汉密尔顿搭配芬兰车手瓦尔特利·博塔斯，稳定的阵容加上依旧出色的w12，新赛季车队具备冲击八连冠的实力。考虑到季前测试梅赛德斯习惯性摆烂，所以不能将季前测试结果太当回事，不过也能看出新赛季车队可能会遇到红牛的顽强阻击。

---

9.红牛（Red Bull Racing）

国籍：奥地利

引擎商：本田

领队：克里斯蒂安·霍纳

技术总监：皮埃尔·瓦赫

2021赛季新车：RB16B

2021赛季车手阵容：33-马克斯·维斯塔潘（荷兰），11-塞尔吉奥·佩雷兹（墨西哥）

**队史主要荣誉：**

4个世界冠军（2010、2011、2012、2013）

64个分站赛冠军

63个杆位

68个最快圈速

红牛的前身可以追溯到1997赛季加入F1的斯图尔特车队，该车队由世界冠军杰基·斯图尔特建立；2000赛季，斯图尔特车队被收购，改名为美洲虎车队。两支车队成绩均在围场中下游。2005赛季，红牛车队正式成立。

不过成立初期，红牛车队远非如今的火星组选手。在2005-2008赛季期间，红牛车队一直位列中游，甚至2008赛季最终排在了自家青年队STR车队后面；2009赛季，红牛车队一举拿下年度亚军，为辉煌时代吹响了号角；2010赛季-2013赛季，凭借F1最年轻的世界冠军塞巴斯蒂安·维特尔的四连冠，红牛车队拿到了车队四连冠，建立了红牛王朝；2014赛季到2020赛季，红牛也是为数不多能对梅赛德斯车队产生压力的车队。

2021赛季，红牛放弃了表现不佳的自家青训车手亚历山大·阿尔本，转而选择了新科地球组冠军塞尔吉奥·佩雷兹搭档马克斯·维斯塔潘。车手阵容得到了优化，RB16B在季前测试也表现不俗，因此新赛季最有可能阻挡梅赛德斯前进脚步的依然还是红牛车队。

---

10.威廉姆斯（Williams Racing）

国籍：英国

引擎商：梅赛德斯

领队：西蒙·罗伯特斯

技术总监：弗朗索瓦·泽维尔·德迈森

2021赛季新车：FW43B

2021赛季车手阵容：63-乔治·拉塞尔（英国），6-尼古拉斯·拉提菲（加拿大）

**队史主要荣誉：**

9个世界冠军（1980、1981、1986、1987、1992、1993、1994、1996、1997）

114个分站赛冠军

129个杆位

133个最快圈速

1978赛季加入F1的威廉姆斯拥有围场历史上第二多的车队总冠军，仅次于法拉利。1980赛季，威廉姆斯加入F1的第三年就斩获了车队总冠军，阿兰·琼斯也拿下了当年的车手总冠军；1981赛季，威廉姆斯完成车队两连冠。随后四个赛季威廉姆斯成绩略有下滑，1986-1987赛季，威廉姆斯再次拿下两连冠。之后的迈凯伦四连冠时期，威廉姆斯也对迈凯伦保持着压力，并终于在1992赛季到1997赛季期间六年拿下五冠，缔造了威廉姆斯车队最辉煌的时期。

1998赛季之后，威廉姆斯虽然再也没有拿到过车队总冠军或车手总冠军，但是也并非直接断崖式下跌，直到2005赛季，威廉姆斯车队都一直保持着不错的排名；2006-2013赛季，威廉姆斯则成了中下游区域的常客；2014-2017赛季，威廉姆斯车队排名回升，但是因此放弃的“付费车手”赞助和加大的投入使得车队财政压力巨大，不得不在2018赛季进入最低成本运作状态，因此2018-2020赛季威廉姆斯车队稳居围场倒数第一，甚至在2020赛季队史首次赛季0积分收官。

2020赛季，叱咤围场四十余年的威廉姆斯家族正式退出，在感谢威廉姆斯父女两代人对赛车运动付出的同时，威廉姆斯车队也将逐渐获得新的资本注入，这对这支老牌车队而言未尝不是一件好事。2021赛季，继续沿用拉塞尔+拉提菲阵容的威廉姆斯加上季前测试表现优于哈斯VF-21的FW43B，相信威廉姆斯车队有望超越哈斯摆脱倒数第一的名次，并一步步走向复兴之路。
`,
    star: false,
    tags: ['F1', 'f1', '赛车'],
    views: 33,
    ctime: 1612391580,
    mtime: 1620102780
  },
  {
    pid: 'tep02',
    author: {
      uid: 'cmkk',
      nickname: 'cmKangkang',
      avatar: 'http://img.jj20.com/up/allimg/tx19/260321310627894.jpg',
      follow: false
    },
    title: '烈日灼心影评',
    subTitle: '烈日灼心电影简短的观后感',
    banners: ['https://inews.gtimg.com/newsapp_bt/0/13161770907/1000'],
    content: `# 烈日灼心影评

## 烈日灼心电影简短的观后感

电影从一桩灭门惨案开始，就在七年前，福建西陇发生一起惨绝人寰的灭门惨案，某别墅内一家五口同日惨死，在社会上引起极大的震动。如果按照破案的路数推进的话，这明显就是一个悬疑片或者警匪片。好的是，故事没有这样铺陈，而是从几个嫌疑人的现在生活开启，他们尽管是“杀人犯”，但是都希望“改邪归正”，都希望有正常人的生活，而现实中，他们也做到了，分别有了属于自己的“工作”。尤其是邓超饰演的辛小丰，竟然混进来协警的队伍中，这无疑是一个巨大的讽刺。

王小波在他的小说《我的阴阳两界》中写道，很多人生活在一个阴阳的世界中，一个是阴的，就是自己的阴暗面，这里只有自己知道内容，都是不得见人的内容，比如你的违法乱纪的事情；而你又生活在阳的一面，这里你可以公开身份。所以《烈日灼心》更是如此，当嫌疑人杨自道（郭涛饰演）、辛小丰（邓超饰演）、陈比觉（高虎饰演）逍遥法外。如今，这三个人都在厦门过活，杨当起了出租车司机，小丰加入了协警队伍，因意外变成傻子的陈则带着三人捡来的女孩尾巴栖息在亲戚的渔场中。可见，阴阳两界，对于他们来说多么合适！

但是，情节的变化就是惊心动魄的，当拥有丰富办案经验的伊谷春（段奕宏饰演）调到小丰所在的队伍担任警长。伊颇为器重能力卓越的小丰，但嗅觉灵敏的他也隐隐觉出这个男子和当年的灭门惨案有所关联。所以，警觉的起来，都让警队队长和协警辛小丰之间的关系变得微妙十足。你可以想象一下，当你是个杀人犯，但进入到协警队，队长还对自己十分警惕，这其中的关系如何处理？是不是可以“灼心”来形容呢？而就是在这里，我们看到了邓超演技的爆棚。

而郭涛饰演的道哥，却结识了警队队长的妹妹小夏（王珞丹饰演）。如果按照世俗的逻辑，爱情总是疯狂的，道哥和小夏之间可以有爱情，可以有婚姻，但是由于道哥的杀人犯嫌疑人身份，让这两个人的爱情从开始就充满了不确定性。尽管，王珞丹的裸背一度成为这部电影的“亮点”，但是却不能够改变这部电影悲剧的现实。最后，道哥的落网，小夏的悲伤，都是小说已经确定基调的内容，电影只是一种衬托吧！

苦海无边，回头是岸。一失足成千古恨。其实，《烈日灼心》里，观众很多时候都在纳闷，他们是杀人犯，却将那个小孩留下养着，从来都是不离不弃，这到底阐述人性的哪个环节呢？小编觉得，复杂性应该是最好的回答。他们曾经是杀人犯，自己都觉得罪不可赦，但是却也有“良心”，更是有属于自己的内心世界，在这个世界里，他们经常和自己对话，在那个小房间里，就是全部的记录。

在高楼上貌似追赶凶犯的那场戏，当警队队长命悬一线的时候，很多人想的是辛小丰放手，那么，警队队长死了，犯罪嫌疑人也就死无对证了。但是，没有放手，已经注定了“主旋律”的结局。本片根据须一瓜的长篇小说《太阳黑子》改编，而在几个嫌疑人都被注射死刑的时候，就应该结尾了，可惜往后的内容都成了狗尾续貂，这才是最大的“败笔”。

段奕宏的出演，邓超的演技，郭涛的放浪，还有那个傻子，其实《烈日灼心》希望传递的信息，总是那样“法网恢恢，疏而不漏”，这是主旋律需要的，更是法治社会需要的。好的是让观众看到了邓超等人的演技，看到了王珞丹的“献身”，这些都是这部电影堪称“良心电影”的标签，错误的就是无限度的延长其内容。要知道，在关键时刻结尾，永远都比冗长来的有效。
`,
    star: true,
    tags: ['电影', '影评', '烈日灼心'],
    views: 50,
    ctime: 1612927320,
    mtime: 1613052660
  },
  {
    pid: 'tep03',
    author: {
      uid: 'cmkk',
      nickname: 'cmKangkang',
      avatar: 'http://img.jj20.com/up/allimg/tx19/260321310627894.jpg',
      follow: false
    },
    title: '有感而发',
    subTitle: '暂时取名叫《我们》吧',
    banners: ['https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/2e2eb9389b504fc21f5a3568eedde71190ef6d52.jpg'],
    content: `# 有感而发

## 我们

两个人，一个温柔了时光，一个惊艳了岁月。可惜了，时光岁月都是无情的撕书人，我们的情纸都被它们撕碎。

　　我们的世界简单如白，复杂如茎，丝丝缕缕。

　　在我们还没有足够的能力去对付每天的千变万化的年龄，在我们还分不清这个社会的善与恶的年龄，当我们被人间险恶、人情冷暖恐吓的时候就会想和醉汉一样，不怕世事。还在时光中赖着不肯离开的，不去告别，不要清醒，只是不想到最后只能拿着照片思念，或许是盯着一闪一闪的屏幕发呆，无言。只怪那场遇见，没有预演，没先看过典例，在每一次的沉默中慢慢的耗尽，到现在，只剩下一个人的回忆。

　　我们，都需要朋友，也希望邂逅完美不散的宴席，但那终究是最初的想法，就好似美丽的童话，因为天下无不散的宴席，也没有永远好吃的便饭。曾经有过的热情就像这流过的河水，一去不复返，河水也中不免有泥沙，好比我们避免不了摩擦，笑如清水，伤如泥水。我们天天对着一面最明亮的镜子照却不敢承认那里面就是自己。

　　还在脑海里挥之不去的面孔是最初的我们。那时小小的我们，腼腆、怯弱，看见人群的地方便以为是家，所以都不约而同的敲响那扇未知的大门，遇见，相知。那些美丽的画面，那些清涩的时光，都呼啸而过，还不小心被卡在了时光老站台的一段暗格里，取不出，碰不着。

　　有哭有笑、有打有闹、三五成群是我们所有人的青春回忆。也许我们有着无数次的擦肩，却不曾说过一句话;也许我们很熟悉彼此的名字，但在别人说起的时候却装作不认识;也许我们都帮助过彼此，但再见面时连微笑也不会有。我们都有自己小小的梦想，也在默默的努力着;我们都被嘲笑过、挨过打，但我们有自己小小的信仰，永远不将就、不妥协。

　　那些过往的人，很好。时间在我们的旅程中镌刻了斑驳的足记。我相信，各自犯下的错也被各自留下的记忆代替，但现在想来，那时候所谓的错只是一点也不成熟，因为我们只有一双手没办法同时把零食分给所有人，我们只有一张嘴没办法同时帮两个人说好话。现在的我们变了，或“好”或“坏”，(“好”只是更加的为别人着想了，“坏”只是学会了保护自己)那是因为年少的我们做一个又一个认为简单而又平凡的决定。学会了思考、冷静、选择，是因为害怕了才离开，是因为后悔了才想弥补遗憾。我们是拥有这世间最高级的思想，但有时候却连自己在做什麽都不知道。想过去了解，想过去接受，可……那些都只是因为我们不够大罢了，所以谁也犯不着怪谁。

　　很辛运，那些以往。旧水长流驻心头，剪不断，理还乱。

　　曾经的邂逅……谢谢

　　有时光，被锁住，有情，被释放

　　枯黄的树叶，也有雨露的滋润，即便已取不到什么作用，但洗不掉那上面记载的点点滴滴，我们都会记得的点点滴滴。

　　———成长路上，避免不了磨难，但我们也会收获快乐。也许你会听进前辈们的忠告，也许现在不会明白，有些道理也确实是自己经历了才会记忆深刻。所谓的朋友、姐妹哥们都会是成长路上的难关，你放得好，就走的好，也会走的远。
`,
    star: false,
    tags: ['散文'],
    views: 12,
    ctime: 1559795040,
    mtime: 1559805840
  },
  {
    pid: 'tep04',
    author: {
      uid: 'cmkk',
      nickname: 'cmKangkang',
      avatar: 'http://img.jj20.com/up/allimg/tx19/260321310627894.jpg',
      follow: false
    },
    title: '旅行青蛙攻略',
    subTitle: '没错，这个游戏也有攻略',
    banners: ['https://pic3.zhimg.com/80/v2-fdbc1804ee7c991d615bfe4a3191c53a_720w.jpg'],
    content: `# 旅行青蛙攻略

## 没错这个游戏也有攻略

关于方向，商城食物水乡南，大海东，北地北，大漠西。粉色：华夫饼、包子、玉佩、红围巾、低纸伞、中等睡垫。绿色：草莓饼、海苔、纸船、竹筒、中级纸伞、高级睡垫。蓝色：桂花糕、沙拉饼、葫芦、高级纸伞、低级围巾。黄色：蛋包饭、彩椒蛋饼、蓝围巾、高级水壶、低级睡垫、

没有纸船的颜色。粉，华夫饼 包子 玉佩 竹筒 中伞 高睡。绿，草莓 海苔 低围 葫芦 高伞。蓝，桂花糕 沙拉 蓝围 高水 低睡。黄，蛋包饭 椒蛋饼 红围 低伞 中睡

兑换里的，绿白红蓝，东西南北，食物和护身符一样的。

关于抽奖，欧，切记蛙在家抽，一白二彩色可以继续抽，

非酋：蛙不在家，5次4白，或天灵灵称号，第一次非白抽了就停手。

花生：黄蜂蜜~萤火虫/刺猬，绿芥末~刺猬/萤火虫，土黄椒盐~壁虎，红五香~刺猬，原味~萤火虫，我估计是一种对2个随机。

果汁，黄菠萝~刺猬，红草莓，绿甜椒~壁虎，粉苹果

抽奖船，红~刺猬

关于食物，你购买了之后点准备的时候，他就会有显示它的具体的内容和作用。50出门的时间最长。每次必出一整天，但是收益也比较低，亏本没特产，图片也不好

关于护身符，玉佩还是很重要的，这个可以收益增多，照片也变多，每次3-4张，

关于四叶草，一天去掉半夜的那一次，正常来讲是140个。从游戏开始到你买了40个淘宝的订单了之后。一共可以得到1-10的购物有礼总共有2000多，淘宝订单有一分钱的，您们懂，刷装备还挺快的。

关于装备，围巾就只能增添亮色，不能开地图，所以从高到低买的，玉佩，雨伞，水壶，游戏开始最好就是把玉佩先买了。然后再攒其他的最高级的装备，原则上是哪个贵就买哪个先。尽量买齐装备，

把桌子的空格全部填满，等娃回来自己随机选择，旅游出稀有卡的可能性更大，如果没填满，就会按左右顺序放入背包，如果我变动蛙选的任意一种，可能蛙不喜欢，他就只给我一些树枝屋顶的图，然后就玩找茬

至于食物，10/30可以赚1-4，80/100每次必定亏本，但是它的特产特别多，物品可能也会丰富，照片也多，100是80基础上加可能出纪念品。

关于来拜访的朋友，纪念品，越贵的食物，出珍品的可能性越大，我都是一百出的。

拥有3个珍品，出猫头鹰，6个出松鼠。

特产招待小伙伴，赚26~70，或者1个四叶草（喜欢），有时候喜欢不喜欢吃，给的都很随机？我是哪个多给哪个就不给他喜欢吃的

关于7类濒危动物的猜想，四个方向承包了一个到两个动物，或者是7种动物七种食物。关于滚滚，食物用包子，称号散步，其他蛙自选，我现在食物一般都是一个一百，另外一个便宜，如果青蛙能选一百的，那滚滚的就可能性大一点。我的蛙2次后才出，我还是很注意让蛙有不同的地方选择。散步散了1天多，

关于称号，查看更换，在青蛙在家的时候点他身上，再点称号

一只蛙的旅行，第一次出门必得，且默认

不归家的蛙，第一次夜不归宿回来得到

流浪的蛙，旅行次数，地点随机

说走就走的旅行家，旅行次数达到一定出，快出门，时间不长，好照片不多，常重复

冒险大王，旅行次数更多一些出？好东西多，可以脱贫致富

鉴赏名家，收集齐非地区特产的所有蔬菜，或者所有珍品，忘记了

天灵灵地灵灵，抽奖20次左右出，在外时间随机，纪念品几率高，新照片小伙伴多，但是不稀有，在家抽奖会从欧皇变非酋，从第二次出非白到第四次出非白。

好天气，散个步，出门时间中等，好照片挺多，稀有多？纪念品不多

`,
    star: true,
    tags: ['游戏', '旅行青蛙', '攻略'],
    views: 2660,
    ctime: 1530861840,
    mtime: 1551020460
  },
  {
    pid: 'tep05',
    author: {
      uid: 'cmkk',
      nickname: 'cmKangkang',
      avatar: 'http://img.jj20.com/up/allimg/tx19/260321310627894.jpg',
      follow: false
    },
    title: '表白文案分享',
    subTitle: '希望各位有一天能用上~',
    banners: ['https://img95.699pic.com/photo/40128/5460.jpg_wh860.jpg'],
    content: `# 表白文案分享

### 超甜的表白情话文案,希望各位有一天能用上（坏笑）

你是我一生只会遇见一次的惊喜。

因为你，我的心脏总是忙个不停。

我喜欢你，怕别人窥探，怕别人得知。

有一个喜欢的人真是太好了，在我的世界正在崩塌的时候还是想为了你努力一把。

这个世界乱糟糟的，而你干干净净，可以悬在我的心上，作太阳和月亮。

一定要，爱着点什么。它让我们变得坚韧，宽容，充盈。业余的，爱着。

花了十几年学的语文，我会用我学的所有去表达对你的欢喜。

我这个人哦，满身阴暗，还总想着给你一点阳光。

只要有你记得我，被其他人忘记都无所谓。

我想你了，不是随便说说的那种想，是在刚刚那个瞬间想跑着去见你的那种想。

但是你知道吗，爱是想象力，对方是载体，是你赋予它意义。

你的目光落在我身上的时候，我就希望我能变好一点，再好一点。我想要成为发光的存在，想要你有一天会因为我而骄傲。

喜欢有很多种吧，无论是哪一种我都想给你。

想你有两种方式 眼内 心底 见你有两种方式 看你 抱你

等夕阳掉进了海里，我就背上你，去寻摸一池的星星。

我不能给你无尽的财富，但我可以给你无尽的花朵。

我之所以这么待你，是因为我愿意。若能以此换回同样的诚心，固然可喜，若是没有，我也没有什么可后悔的。

我知道你心事如宇宙，浩渺无边，你的每一段人生都如同星云般璀璨绚烂。可我想打通到你心中的虫洞，哪怕只能拥抱万千星云其中的一颗。所以我把以后的每一天都定为“摘星计划”的一部分。

有的人好到什么程度呢？我愿意永远做他满天星辰中微不足道的那一颗。

其实……暗恋一个人的滋味其实没那么糟。那不仅仅是浅层情欲的寄托，也是……我自己的信仰。

为了他而努力，为了他而变好。

在蹒跚前行，踉跄倒地的时候，心里想着的这个人是我跌倒一千次以后，复爬起一千次的动力。

我想对着你碎碎念，分享我的各种无关紧要的小事，分享我的昨天今天明天， 但是我不能，不能让你知道我有这么牵挂你。 ​​​

你帮助了迷路了的我，如果能实现，我想带你去看绚丽的山岚、去看秀丽的溪谷，这份心情，人类是如何称呼的呢？

或许我永远无法和你在一起，但我的心永远追随你。

我宁愿游荡在你的身边，做七天的野鬼，跟随你，就算落进最黑暗的地方，我的爱，也不会让我成为永远的孤魂。

如果你能欣赏我的的奇奇怪怪，那你就和我一样可爱。

你陪我走过你的梦境，且告诉我该何时归返。

我盼望行过万里山河也盼望与你
`,
    star: true,
    tags: ['文案', '恋爱'],
    views: 139,
    ctime: 1599782700,
    mtime: 1602374700
  },
  {
    pid: 'tep06',
    author: {
      uid: 'cmkk',
      nickname: 'cmKangkang',
      avatar: 'http://img.jj20.com/up/allimg/tx19/260321310627894.jpg',
      follow: false
    },
    title: '鱿鱼游戏为什么这么火？',
    subTitle: '',
    banners: ['https://pic1.zhimg.com/v2-957863c5124a6a3fd60b97cb9c77ee16_1440w.jpg?source=172ae18b'],
    content: `# 鱿鱼游戏为什么那么火？

要说最近什么电视剧最火，那《鱿鱼游戏》一定榜上有名！

《鱿鱼游戏》是一部由Netflix出品，在韩国上线的**惊悚悬疑电视剧。**它讲述了一群人生失意的人为了获得456亿韩元而参加的**六个生死逃杀游戏的故事**。参与者会被关在游戏地点，进行游戏，层层筛选，直到最后产生一个胜利者。筛选用的六个游戏意想不到的全是“儿童游戏”，其中包括“一二三 木头人”、“椪糖”、“拔河”、“打弹珠”、“玻璃桥”和“鱿鱼游戏”。

**这样的一部电视剧不论是在韩国还是在中国都造成了极高的讨论度。**

那究竟是什么给了它那样高的热度，让全网进行挑战呢？

---

**好奇心“害死猫”**

在电视剧中，导演对悬念的拿捏非常到位。**如果我们不看到最后，根本猜不到剧情的走向会怎样发展。**毕竟谁能想到那个患了脑瘤，实力最弱的老爷爷才是终极boss呢，谁又能想到在那个在和男主对决时没死的老爷爷竟然在最后身患绝症而亡呢。

而导演设计的这些悬念恰好的利用了我们的好奇心。**好奇心，其实也就是我们对于更广泛的信息的渴望。**它是我们天性的一个组成部分，以至于我们忘了他在生活中的普遍性。

我们读书，看电视，看电影甚至是听音乐的时候好奇心都在时刻发挥着作用。它本是一种高尚的驱动力，但事实上人们经常把它贬低为危险，比如我们常说的好奇心害死猫。**而导演正是利用了我们的好奇心让我们迫不及待的往下看。**

**冷知识：好奇心可以促进学习。**

---

**“我越看越喜欢”**

曝光效应，也叫多看效应。**它指的就是我们对于一个东西的喜爱程度的发展建立在我们对它有多熟悉。简单来说，我们对一个东西越熟悉，我们就越喜欢这个东西。**

举个例子。你有没有经历过在第一遍听抖音神曲的时候并不喜欢它，但是在听了很多次之后，你发现你真的很喜欢这首歌，其中最明显的表现就是无时无刻不经意的哼唱它。

来自1992年的一个研究同样也展示了这个效应。研究人员找到四位外表相似的女性，让她们分别参与一定数量的大学课堂。其中一位女士不参加，一位参加五次，一位参加十次，最后一位女士参加十五次。她们进入课堂只是旁听讲座，不与学生进行任何互动。在学期结束的时候，把每位女士的照片放给学生看，让他们给这些女士打分。最终结果也十分令人震惊，他们对于见过的女士的评分比没见过的女士要积极15倍。

一时间，全网都在刷\“鱿鱼效应\”，\“糖饼\”，\“拔河\”等等一系列和它相关的内容。**有多少人开始并没有在意它，但是看得多了就逐渐感兴趣了起来，甚至还对制作糖饼有些跃跃欲试？**

**他都那么做了，我是不是也该这样？**

从众心理是一种社会影响，**简单来说就是人们改变自己的行为，想法，信仰又或者是态度以加入他们所属或想要加入的群体。**这种变化是为了应对真实的或想象的群体压力。它可以表现为明显的社会压力，同时也可以表现为无意识的改变。

很多人喜欢将自己视为一个独立的个体，但实际上人是社会生物。人们更倾向于渴望被接受或者融入，从众可以说是一种人类的本能。

虽然从众有的时候会被嘲笑，但它有好也有坏的一面。从某种意义上讲，从众可以给人们提供一种归属感和群体认同感，并且鼓励人们遵守道德标准。然而它也会起到负面作用，比如激发一个人黑暗思想引发大规模暴动。

而在《鱿鱼游戏》的爆火中，从众心理应该有为它贡献一些热度。比如说当一些博主发布了和鱿鱼游戏有关的视频且获得热度后，会有一批博主仿造它。**然后会有越来越多的博主倾向于去发这样的视频，网上关于\“鱿鱼游戏\”的热度越来越高。**

又或者是当你在和朋友聊天的时候，**“鱿鱼游戏”频繁的出现在她/他的嘴中。**而你会为了有共同话题又或者是其他的原因去了解“鱿鱼游戏”，并喜欢或假装喜欢上它。
`,
    star: true,
    tags: ['鱿鱼游戏', '解说'],
    views: 4009,
    ctime: 1634739000,
    mtime: 1634739000
  },
  {
    pid: 'tep07',
    author: {
      uid: 'cmkk',
      nickname: 'cmKangkang',
      avatar: 'http://img.jj20.com/up/allimg/tx19/260321310627894.jpg',
      follow: false
    },
    title: '什么是比特币？',
    subTitle: '对新手小白的扫盲攻略',
    banners: ['https://pic3.zhimg.com/80/v2-e848af3f5a802765d8bd575cb4e28646_720w.jpg'],
    content: `# 什么是比特币？

### 1.比特币简介

提起比特币，许多人都觉得既玄乎又难懂，还可能觉得像骗局，看到比特币暴涨暴跌，许多人因此暴富暴贫，又惊疑不已。那么比特币到底是个什么玩意呢？我现在从一个小白的角度出发，用尽量通俗简洁的语言来解释一下。

2008年11月1日，一个真实身份至今未知的神秘人化名中本聪(Satoshi Nakamoto)，发表了一篇论文**《比特币：一种点对点的电子现金系统》**（也称比特币白皮书），陈述了他颠覆性的设想。中本聪开发出了比特币系统的程序代码并开源共享，2009年1月3日，比特币第一个区块由中本聪挖出，而后一直绵延至今。

比特币价格从**10000个币买2个披萨**（2010年5月22日），涨到**1个币10000美元**（2020年2月10日），凭空制造出上千亿美元的市值，形成了一个遍布全球却没有管理中心的社区，自发运行11年并不断壮大，堪称世界奇迹。**比特币里涉及的加密技术、分布式账本、智能合约、共识机制、防伪防篡改、去中心化等技术和思想，被统称为区块链技术，在金融、物联网、保险、公益等领域有着相当大的应用前景。**中本聪本人，则事了拂衣去，深藏身与名，再也找不着了。

正如白皮书《比特币：一种点对点的电子现金系统》所示，**比特币并不是纸币或者金币银币那样独立的个体，它是一套电子现金系统，与支付宝有一定类似之处，比特币存在于网络上，可以不经过任何中心机构就完成全球转账。比特币也不是一个一个使用的，最小的单位是“聪”，一个比特币等于一亿聪**。比特币的发行、支付、验证，完全是自成一系的，与法币并无联系。**比特币是一种总量有限，无国界，无发行中心，无管理中心，遍布全球，自由流通的全新货币**，更确切地说，比特币是一套**在全世界运行的程序**，是许多份**遍布全球但又完全一致的账本**，是一个**价值传输网络，它对货币、金融、互联网乃至人类组织形式的影响，都是颠覆性的。**

有史以来第一次，货币不再由少数人掌控的权力机构操纵发行；有史以来第一次，人民可以用一串符号或单词来保存财富，抵御通胀，走遍世界都可以使用；有史以来第一次，价值可以在全世界自由流通，全球人民的经济联系，从来没有如此紧密过；有史以来第一次，全世界有了一种公正客观的超主权自由货币；有史以来第一次，人类做到了在无中心管理状态下行动的统一；有史以来第一次，法治真正代替了人治；有史以来第一次，人人平等真正实现了，就算是最高统治者，也必须严格遵守规则，服从人民的共识。

此物一出天下反，一个崭新的世界出现在我们面前。

### 2.比特币与支付宝

我们用支付宝付款时，需要先扫对方的二维码，或者输入对方帐号，然后填好付款金额，再通过密码或者刷脸等方式验证身份。支付宝验证身份无误后，把双方账户余额的数字增减一下，这笔支付就完成了。

在这个过程中，并没有实物货币转移，只不过是我们发出付款信息，支付宝验证身份后改下账本就完事了。支付宝保证账本公正可靠，不会消失，不会被篡改，同时我们能用密码等方式控制我们的账户，确保只有自己授权才能支付。

这样，**只需满足这两点：1.有一个公正可靠、无法篡改、记录着各个账户资金往来的账本；2.只有用户自己授权才能支付。其实根本无需实物货币，我们照样可以付款收款，往自己的账户里存钱。** **比特币的付款与支付宝很像，也是扫一下对方比特币地址的二维码，或者输入地址，再输入比特币数额进行转账就行。** 但它们有一个很大的区别：支付宝是由一个大公司来运营的，用户之间收付款都是由支付宝公司来记账的，而比特币却没有这样一个公司，谁都可以来记账。**每隔一段时间，账单就会被某一记账者汇集到一起打包，接到之前的账本上，这个打包就被称为区块，从前往后整个账本形成的链就称为区块链。**遍历整个区块链，就能知道每个账户的余额。

### 3.比特币的运作与发行

**比特币是一个价值传输网络，参与比特币系统运作的人(包括用户)，就是网络中一个个节点，节点彼此等权，没有中心，相互之间连接完全自由，各自保存着完全一致的比特币账本，运行着遵循相同规则的比特币程序。任何人都可以加入比特币网络，新加入比特币网络的节点，都可以向原有节点要一份比特币账本。**

用比特币付款，需要向比特币网络广播付款信息(这里的“广播”意思是向比特币网络中多个节点发送付款信息)，收到信息的节点验证信息后会继续广播，一传十，十传百，转瞬间付款信息就会传遍全网，然后由某一记账者记入区块链账本中。

那么，为什么就有人来记比特币的账呢？既然谁都可以记账，那又以谁的账为准呢？怎么确保账本的真实性呢？比特币又是怎么发行出来的呢？

首先，按照比特币的规则，记账是有奖励的。一部分奖励是账单里用户出的手续费，手续费以比特币支付，这个手续费由用户自己定，可高可低，给得高，记账者就倾向于先记这笔手续费高的账。另一部分奖励则是区块奖励，打包一个区块，就获得一定的区块奖励。按照比特币的规则，区块奖励起初为50个比特币，每出210000个区块后，奖励减半，差不多每4年减半一次。**区块奖励一方面调动了大家去记账，另一方面也完成了比特币的发行。**按照上述规则，我们可以通过这个式子计算比特币的总量，就是210000×50×（1+1/2+1/4+……），总共2100万个。**区块奖励和手续费是记账者按照比特币的规则自己记给自己的。**

有了奖励，而且奖励颇丰，大家当然抢着去记账。为确定以谁的账本为准，**比特币有个最长链原则，谁的区块链账本最长，就以谁的账本为准。制造区块需要进行大量计算，最长链实际就是凝聚着最大工作量的链。最长链也是最新的账本，记录着最多的账单。**

记账者把账单收集起来(记账者会先验证账单真伪，还会验证付款者有无足够的币进行支付)，打包成一个区块。区块由区块头和区块体组成，区块头里有个记账者自定的随机数，有个难度目标，还有些别的信息。记账者换上不同的随机数，对区块头进行哈希运算，得到区块头的哈希值，算出的一个个哈希值就像生成了一个个随机数一样，大小毫无规律，谁先试出小于难度目标的哈希值，他就将该哈希值对应的区块加在区块链上，广播给别人，这时候他的链就更长了，大家验证区块无误后，就都以他的区块账本为准，并继续广播该区块至全网。表明以该区块为准的方式，就是将该区块头哈希值纳入自己要计算的下一个区块头中。

这个区块头和区块体是什么关系呢？区块体里记录了具体的账单，包括记账者自己所得区块奖励和手续费的账单。区块头则相当于该区块的身份信息，里面有版本号、上一个区块头的哈希值、时间戳、难度目标、随机数，还有一个Merkle树根哈希值，Merkle树根哈希值由区块体里的账单经过一系列哈希运算得到，相当于区块体里那些账单的摘要信息，只要账单稍有变化，Merkle树根哈希值就会大不相同。同样，只要区块头稍有变化，区块头哈希值就会大不相同。**通过Merkle树根哈希值，区块体和区块头紧密联系在了一起，账单无法篡改；区块头的哈希值前后衔接，又保证了区块链环环相扣，无法篡改。**

这个哈希运算和哈希值是怎么回事呢？哈希算法又被称为摘要算法，输入任何数据，经过哈希运算后，都会得到一个固定长度的输出值，称为该输入数据的哈希值，一个输入数据的哈希值是唯一且确定的。哈希运算还有两大特点。第一，哈希运算的结果，就像生成了一个随机数一样，只要输入数据稍有变动，哈希值就会大不相同，比如输入一本书的内容，只要多加一个字，哈希值就会面目全非。第二，哈希运算不可逆，输入数据后可以很快算出哈希值，但给出哈希值，就没法反推它的输入数据。反推输入数据在逻辑上也是不可能的，因为输入数据无限，哈希值有限，一个哈希值对应着多个输入数据。

哈希运算和哈希值有各种类型，争夺比特币记账权时算的哈希值是个256位的二进制数。按照比特币的规则，区块头哈希值须小于难度目标，记账者换上不同随机数，对区块头进行哈希运算，算出哈希值就像生成随机数一样，每个数位都可能是0或1，总共有2^256种可能，要求算出的哈希值比难度目标小，就好比在这2^256个数中随机抽出一个数，要求其小于难度目标。算出的哈希值比难度目标小的概率是：难度目标/2^256。要试出比难度目标小的哈希值，平均试验次数为：2^256/难度目标。

算出的哈希值前面数位0越多，值就越小，所以也可以不太严谨地认为，算出的哈希值前面若干数位都是0，就可以满足小于难度目标的要求。例如，哈希值前面70位都为0就小于难度目标(此时难度目标的值是2^186)。算出哈希值就像生成随机数一样，每个数位上出现1和0的概率各是1/2，一次就试出前面70位都是0的哈希值，概率是1/2^70(也可以通过2^186/2^256算得)，想增大试出的概率只能做更多哈希运算。全世界想获得比特币奖励的人都会加入比特币网络，收集账单，打包成区块，进行哈希运算，全世界总共要计算2^70次才有一次机会(不同的人打包的区块里账单不一样，Merkle树根哈希值不一样，即使不同的人输入的随机数一样，计算出的区块头哈希值还是不一样，这样就能避免大家出现重复计算的情况，保证全世界平均计算2^70次，算出一次前面70位都是0的哈希值)。谁先试出了前面70位都是0的哈希值，他就立马将该哈希值对应的区块广播出去。大家一接收到该区块，验证无误后，就继续广播该区块，并以此为准，在此基础上继续收集账单继续计算，争夺下一个区块的记账权。**区块链就这样在大家的齐心协力下不断延长，全网的节点都有一份相同且实时更新的区块链账本。验证、广播、记账等过程，都是由各个节点的比特币程序根据比特币规则自动执行的。**

**这种试出符合要求的哈希值并获得记账权和比特币奖励的行为，被称为挖矿，专门进行这种计算的机器，就称为矿机，干挖矿这行的人，就叫矿工，记账的手续费，就叫矿工费。**

至于难度目标到底是多少，则是由比特币的程序每隔2016个区块就自动调节一次的，根据之前出块速度和之前难度目标反推全网算力，再根据全网算力设置一个合适的难度目标，让全网平均**10分钟**能出一个块。这样一来，**谁的计算能力强，谁在单位时间内计算次数多，谁就有更大的概率试出符合要求的哈希值，获得记账权和比特币奖励，这种共识机制也被称为工作量证明(PoW)**。在工作量证明的机制下，挖矿需要耗费巨大电力。

世界各地的矿工竞相寻找便宜的电力，修建矿场，布置矿机，就形成了目前浩浩荡荡的挖矿局面。由于现在全网算力很高，挖矿难度很大，单枪匹马已经很难挖到矿了，于是大家把算力集中到一个个矿池，矿池更容易挖到矿，然后再按各自贡献的算力大小相应分配收益。

可以看出，**比特币的区块链账本是传遍了全网的，保存在全网的，大家都验证过了的，区块链通过Merkle树根哈希值和区块头哈希值环环相扣，累积了巨大的工作量，账本真实可靠，无法篡改，无法销毁。比特币用于转账或支付只需发出一条信息就行了，不用经过任何中心机构，可以轻易地全世界流通。**

我们也可以看出，想试出哈希值有多么困难，只要求哈希值前面70位是零，都要试上2^70≈1.18×10^21次才有一次机会，若想试出整个哈希值，全世界所有超级计算机计算能力翻一亿倍，一起算上几万亿年，也试不出来。这些算法，就是比特币安全性的保障。

**4.比特币的数字签名与安全问题**

我们用支付宝付款时，需要输入密码或通过其它方式验证身份，借以控制自己的账户。对于比特币，如何证明你发出的支付信息是你发出的呢？如何确保发出的信息不被篡改呢？换言之，如何控制自己的比特币呢？这就涉及到一种叫数字签名的技术了。

**与银行开户不同，比特币的账户无需申请注册，可随机生成。**首先，我们可以随机生成一个私钥，私钥也是一个256位的二进制数。抛256次硬币，正面朝上记成1，反面朝上记成0，这样也能随机生成一个私钥。然后用椭圆曲线数字签名算法(ECDSA)对私钥进行运算，生成公钥，再对公钥进行哈希运算，就得到了地址。私钥生成公钥的过程也是不可逆的，从公钥无法反推私钥，想试出私钥得试到天荒地老。**用椭圆曲线数字签名算法生成的公钥可以配合私钥，进行非对称加密。**

非对称加密是什么意思呢？我们先来了解一下对称加密，对称加密中，加密解密的密钥都是一样的。比如有一条信息是1234567，我们用密钥9对它进行加密，1234567×9就得到了密文11111103，解密的时候11111103÷9就解密出了1234567，加密解密的密钥都是9（当然实际的加密解密过程肯定比我这个例子复杂得多）。但在非对称加密中，加密解密的密钥则互不相同。

比特币里，私钥可以用来加密信息，而公钥则用来解密该信息。**比特币里没有人的概念，只有地址的概念，提到你有多少个比特币，其实是说你的地址上有多少个比特币。**那要怎么才能控制你地址上的币呢？就要靠私钥。公钥和地址都可以公开，但私钥一定不能泄露。

比如小明要给小强一个比特币，小明的比特币地址是A，小强的比特币地址是B，小明就要将“A地址给B地址一个比特币”这条账单进行哈希运算，得到的哈希值再用A地址的私钥加密，加密得到的密文连同A地址的公钥、“A地址给B地址一个比特币”这条账单一起，广播出去。收到该信息的人会进行检查，计算公钥得到地址，判断该信息中公钥和地址是否对应，再用公钥把密文解密成哈希值，同时也对账单进行哈希运算，得到另一个哈希值。这时候比较一下两个哈希值，如果哈希值相同，就说明这条信息确实是地址的主人发出的，也没有被篡改。

如果有人伪造了\“A地址给B地址一个比特币\”这一信息，首先，伪造信息里A的公钥不能变，因为公钥可以推算出地址，变了公钥推算出的地址就会与A不符，别人立马就能发现这是假消息了。其次，伪造者没有A地址的私钥，他伪造的账单哈希值密文必然与真实密文不同，这时候别人用公钥解密，解密出的哈希值也必然不同于用账单计算出的哈希值，这条信息就肯定不真实。还有一种情况是信息内容遭到篡改，比如把信息篡改成“A地址给B地址十个比特币”，这种情况下，账单变了，但公钥和账单哈希值密文都没变。按上面的思路分析一遍，你也会发现，篡改信息会导致两个哈希值相异。

可以看出，**私钥犹如地址对应的一支独一无二的签字笔，能签出独一无二的签名，证明你是对应地址的主人，所以我们也把该过程称为数字签名。** 你用私钥签名了，你这个地址的付款信息才会被别人接受。要是你丢了私钥，你就无法使用地址上的币，尽管你地址上有多少币都是清清楚楚地记录在区块链账本上的。要是别人知道了你的私钥，他就可以转走你地址上的币，比特币的世界里，是只认私钥不认人的。所以，说私钥安全性重于泰山也不为过。

不过，私钥并不像登录时输入的密码，它本身是可以完全不触网的，完全可以在离线状态下对付款信息签名（其实就是用私钥加密付款信息的哈希值），然后把付款信息和签名信息发送到网上即可，别人也无法从签名反推私钥，这是由椭圆曲线数字签名算法的性质决定的。**比特币的“钱包”，存放的不是币而是私钥，所谓的\“冷钱包\”就是不联网的钱包，可以有效防御黑客盗取私钥。用比特币钱包付款时输入的密码，实际上起到的作用是授权调用私钥进行签名，而非是私钥本身。**

由于地址之类信息用二进制表示非常长，比特币采取了一种叫Base58的编码方式，将二进制数转换成58进制数表示，所以我们看到的地址之类信息就是一串大小写字母和数字的组合。

为便于记忆及管理私钥，人们又设计出了助记词，助记词一般是12个单词，出自2048个常见单词构成的词库，助记词对应着一个随机生成的种子，是种子一种易于记忆的形式。种子可生成一个主私钥，主私钥可通过确定性的、不可逆的算法，生成多个币种的子私钥，子私钥又可继续生成孙私钥……子子孙孙无穷匮也。这样，用一组助记词就可以统一管理多个币种的多个私钥，省去了很多麻烦，这样的加密货币钱包，被称为HD钱包（分层确定性钱包）。不要以为助记词只有12个词就不安全，2048^12≈5.4×10^39是个天文数字，指望随机输入助记词碰巧试出一个有币的地址，是根本不可能的。

需要补充的是，比特币记账实际上是UTXO（未花费的交易输出）模型，比特币的账户余额实际上是地址上的UTXO总和。**UTXO模型类似于不断销毁用掉的旧币又不断创造可用的新币**，感兴趣的朋友可以深入了解UTXO模型，这里不再赘述了。

### **5.比特币的分叉与演变**

如前文所述，比特币账本遍布全球各地，为保持账本统一，比特币有个最长链原则，以最长的区块链账本为准。

**在最长链原则下，比特币网络中的节点来去自由，不需要知道其它节点的状态，也不需要任何仲裁机构或管理中心，网络出现延迟或暂时中断也没关系，只要遵循最长链原则，就能在全世界对账本达成共识。由于最长链凝聚着全世界所有算力的巨大工作量，并且还在不断延长，想重新制造出一条最长链取代原链以修改信息，是极为困难乃至不可能的，这就维护了区块链的不可篡改性。**

**根据博弈关系，节点也会接受最长链，竞相延长最长链，尽力广播最长链上的区块。比特币系统从第一个区块挖出开始，就再也无法停止，一直自发运行下去，日夜不息地记录着全球各地用户的账单。**

如果A、B两人几乎同时挖出了新块并广播全网，两边的区块链账本都是一样长，有人先收到A的区块，就以A链为准，有人先收到B的区块，就以B链为准，A、B的区块链都有人支持，这时区块链就会短暂地分叉成两条一样长的链，直到有一方的队伍又挖出了新块，另一方的人发现对方的链更长了，就会马上转而支持对方，以对方的账本为准继续挖矿，这样就能保证有一条最长的链作为大家公认的账本。

只要全网50%以上的算力是诚实的，诚实的算力就能生成一条最长链，可以放心地以这条链为准。

如果有作恶者掌握了50%以上的算力，能独自生成最长的链，是否就可以胡作非为了呢？比如给自己记更多的区块奖励，伪造一条别人给自己的转账。

其实，由于区块链账本要接受各节点验证，作恶者若是违反规则、做假账，他的账本就会遭到一致拒绝，更不会被继续传播，最长链原则是建立在真实基础上的。作恶者没有别人的私钥，花不了别人的钱，也破坏不了比特币的规则，他能干的坏事，只有“双花”，即把自己的一笔钱花了两次。

双花是怎么进行的呢？比如，作恶者有10个比特币，他付了这10个比特币给商家，买到了商品，该付款信息已经记录到了区块链里。**正常情况下，在同一条链上，是不可能进行双花的，因为花出去的比特币记录在区块链上，用过就没有了。**但是，作恶者有全网过半算力，他在记录他付款信息的区块前面，重新开始挖矿，就可以重新制造出一条更长的链，这条更长的链没有违反比特币规则或者做假账，大家就转而以这条链为准了(**比特币的程序会根据最长链原则自动切换账本**)。但是，在这条链里，作恶者略去了之前的付款记录，把刚才花掉的10个比特币又花了一次，或者转移到自己的另一个地址上。这样，原来的付款记录就失效了，商家就损失了商品又没拿到钱。

作恶者也可以先制造出双花攻击的长链但不广播出去，同时在原链上付款买东西，待拿到商品之后再放出攻击链逆转原链，撤销自己的付款。

双花也有可能在作恶者算力不到50%的情况下发生，作恶者运气好的话，也有可能多出几个区块，在短时间内领先原链。但这样做的话，一旦跑不过原链，自己挖出的区块就无人承认，白费算力和电力。

实际上，双花是相当困难的，若想确保双花成功，就要掌握全网过半算力，看看遍布全球隆隆作响的矿场就知道成本有多大了。如果真的掌握了全网过半算力，就可以挖出大量区块，为何不好好挖矿，赚大把合法的钱，却要搞双花赖一点小钱呢？双花还可能导致市场恐慌，币价下跌，使作恶者的比特币和矿机双双贬值，作恶者还会遭到一致谴责和惩罚，双花其实是一种经济上不理智的做法。

双花也只能撤销作恶者自己的付款，不会破坏整个比特币系统，若作恶者在他制造出的最长链里，删掉了原链上其他人的账单，也只需将这些账单重新打包进区块即可。

网络出现严重延迟或中断的时候，区块可能同步不及时，通信不畅的节点挖矿各自为政，区块链就可能发生分叉。作恶者发出两笔相冲突的双花账单，也可能分别被不同节点打包造成双花。

账单被打包进区块后，后续确认的区块越多，想要双花逆转该链就越困难，所以对于大额交易，为防万一，收款方一般需要多等几个区块确认。但是，小额交易或亲友间交易也可以零确认支付，不用等到账单被打包进区块，等上几秒让账单传遍全网即可。若有作恶者在付款后又发出一条双花账单，正常情况下，节点收到两笔相冲突的双花账单时，会打包先收到的账单。

比特币允许接受与原链上账单有冲突的双花攻击链，是因为现实环境是非常复杂的，网络可能出现延迟或中断，不同节点获取信息的先后顺序可能不同，A收到的攻击链，可能对于B就是原链。如果拒绝攻击链的话，可能造成区块链分裂无法统一，甚至作恶者还可以利用网络延迟中断，故意发出两笔有冲突的双花账单，一旦两笔账单分别被不同节点打包，节点互不接受对方账本，就可以恶意制造分裂。

而只以最长链为准的情况下，节点不用知道其它节点的账本情况，也不用管其它节点的工作状态，也不需要任何仲裁机构，只要做好自己的事，遵从最长链原则，全网账本就能自动达成统一，网络延迟中断也只可能导致新挖出的少数区块同步不及时，之前的账本还是会保持一致。**这也是比特币设计上的巧妙之处，用一个简单的最长链原则，就让全世界原本一盘散沙的人，在复杂多变的环境中齐心协力，达成了一致。**

前面已经提到，**如果不同的人对记账有不同做法，就会引起区块链分叉，分叉前的账本是完全一样的，但分叉后的账本就会随着记账方式变化而变化**。如果只是因为同时出块造成分叉，很快大家就会遵循最长链原则，丢弃一条链，保留一条链。但如果因为一些不可调和的矛盾，双方不能达成共识，各记各的账，这时候就会有两条链并行发展，这就相当于比特币分裂成了两个版本。

现实中，比特币现金（BCH）就是这样从比特币（BTC）中分叉出来的，当然，也有人说，BCH才是真正的比特币，也不无道理。

这是怎么一回事呢？**比特币是一套在全世界运行的程序，比特币的规则都写在代码里，这些规则最早都是中本聪定下的。**既然是程序，随便怎么修改升级都没有问题，哪怕改掉区块奖励减半规则，改掉2100万比特币上限也行。问题不在于能不能改程序，而在于别人会不会认你的新规则，会不会用你这套程序。**中本聪的构思巧夺天工，让比特币发展到了如此庞大的局面，大家都愿意接受，于是比特币的核心规则至今无人能改，这就是共识的力量。**

中本聪隐退后，Core开发团队接替了他的工作，对比特币基本没有大的改动。比特币起初的区块大小上限是1M，随着用户越来越多，1M区块明显已经不够用了，交易愈加拥堵，手续费随之飙升，已不适合用作现金了，扩容问题迫在眉睫。但对于如何扩容，Core开发团队和大区块派起了严重冲突，Core开发团队主张采取隔离见证（相当于把签名信息移出区块，间接扩容）和闪电网络（相当于在主干道上架桥分流交通压力），大区块派主张直接扩大区块（相当于直接拓宽道路）。Core派坚持1M上限不能改，指责大区块会阻碍个人运行比特币全节点(**全节点保存比特币完整账本，进行验证及广播，是比特币网络运行的基础，有些全节点同时也在挖矿，称为挖矿节点，与全节点相对的是数量更多的轻节点，轻节点只保存与自己相关的信息，依靠全节点运行，普通用户用的轻量级比特币钱包就是轻节点**)，影响比特币的去中心化，指责直接扩大区块会造成比特币社区分裂，大区块派指责Core派违背了中本聪隐退前就提出过的直接扩大区块的扩容方案，指责隔离见证和闪电网络扩容效果差，安全性不好。双方争执难下，最后，扩大了区块的比特币现金（BCH）与比特币（BTC）分道扬镳，以分叉的方式解决了分歧。比特币现金起初简称BCC，后来更名为BCH。

BCH致力于实现白皮书中“电子现金”的构想，推进零确认支付的发展，并试图在BCH上引入更多拓展功能，而BTC则转型为\“数字黄金\”，所以，也有许多人认为BCH才是真正的比特币。BCH开了分叉BTC的先河，各种各样的分叉币接踵而至，但由于这些币往往预挖圈钱或者过于随意，大多已经式微了。

后来，一个自称中本聪的澳洲人CSW（他因屡次大放厥词又无法证明自己是中本聪，被人戏称为澳本聪）提出了一系列激进主张，要继续扩大BCH的区块，乃至扩展为无限区块，承载海量数据，还要锁死BCH底层协议，做出符合中本聪愿景的比特币。最终BSV又从BCH中分叉了出来。

**分叉是比特币自我演变的途径。**如果比特币社区成员一致更改某规则，比特币就相当于进行了一次升级；如果大家都不更改规则，比特币就不会发生变化；如果一部分人更改规则，另一部分人不改规则，比特币就会分叉。理论上，只要有算力，分叉就可以随便进行，但没人支持没人买，分叉币就是在自娱自乐，毫无价值。**市值就是衡量分叉币认可度的指标。**

**现在比特币的三大分支BTC、BCH、BSV，分别代表了谨慎保守、温和渐进、激进发展三个方向，探索不同的道路，也为比特币保留了更多生命的火种。**谁是正确的，谁就能得到更多人支持，就会有更大市值。这也是区块链的魅力所在：**行动守规则，遇事要商量，实在谈不拢就分叉，用市值来投票，如果做得更好，得到更多人支持，市值自然也会上涨。**

人是有路径依赖的，追求稳定的，厌恶风险的，但凡现有的路还能走得下去，面对一条不确定但可能更好的路线，往往还是持保守态度，涉及钱财时更是如此。这也就是为何BCH未能战胜又慢又堵的BTC的原因，但未来会如何，就说不准了。

由于分叉前的区块链账本是完全一样的，分叉前拥有BTC的人，分叉后也会拥有同样多的BCH。但分叉的结果往往并不是1+1=2，而是1+1＜1，因为分叉意味着分歧和不稳定，会带来对未来不确定性的担忧。BSV分叉BCH时还进行了一场算力大战，角逐最长链，双方两败俱伤，币值暴跌。

### **6.比特币的价值与未来**

不可否认的是，许多人买比特币是想赚钱，但目前比特币的价格让人望而生畏。比特币的价格是否已经到顶了呢？比特币到底应该值多少钱呢？

如前文所述，比特币是一种很好的储值品，保管和交易也很方便。以同样作为储值品的黄金为例，黄金市值约为8万多亿美元，比特币总市值若与黄金相当，其价格当为**40万美元**一个。

比特币也是一种完全受控于自己的避险资产，全世界财富总值约为360万亿美元，若所有人把哪怕1%的资产配置成比特币，比特币价格也将达到约**17万美元**一个。

2018年的全球汇款总额突破了6800亿美元，随着国际之间交流增加，数额还会上升，比特币若占据了该市场，也会价值不菲。

美元是各国之间广泛使用的货币，是事实上的世界货币，流通中的美元市值约为1.5万亿美元，若比特币市值与流通中的美元市值相当，每个比特币应值**7.1万美元**。

比特币和区块链有可能成为第二次互联网革命，改变合约、保险、公证、监管等事务，深刻影响到互联网和金融的方方面面。若比特币市值等于全球互联网公司的市值10万亿美元，比特币价格当为**47万美元**一个。

比特币是兼具以上多重价值的，叠加之下，比特币未来该值多少钱，不可估量。

比特币目前还是一种比较小众的投资，接触它的人并不多，或者只是听说而不理解，全世界比特币用户不过2000多万人。根据梅特卡夫定律，网络的价值与网络用户数的平方成正比，比特币还有多大成长空间，可想而知。

此外，**上述推测的价格只是按当前美元购买力衡量的价格，实际上，由于美元超发贬值和人类财富总量增加，比特币日后价格还会高于这些推测价格**。但是，由于目前比特币市值还太小，炒作氛围又浓，价格经常暴涨暴跌，要冷静看待。

我这里说的比特币，并不特指BTC，实际上是泛指比特币系列的BTC、BCH、BSV等等，谁的路线是正确的，谁未来就会有巨大的市值，无论谁成功了，都是比特币的成功。

分析一下比特币的价格走势。比特币很有用且不会死，就有理解它，认同它的人，这些人买它用它，坚定持有它，使比特币有一个最低的支撑价，暴跌也跌不到底。随着法币超发贬值和世界财富的累积，总量有限、可以储值的比特币即使没有任何新人买入，都会不断升值。理解认同比特币的人不会减少，只会增多，进一步促进了比特币的升值。这种升值效果可以从每次熊市暴跌后的最低价看出——每次的最低价都比上次高，比特币就这样波动上涨。每一次上涨，都会带来更多的支持者，打脸看衰比特币的人，并迫使他们接受这种结果，转变自己的立场，否则只能眼睁睁看着自己吃亏。这就好比过去几十年里，国内无数看衰房价的人，除了一次次被打脸，不得不付出更大代价买房外，毫无办法。**比特币以这样势不可挡的方式不断发展壮大，等市值上升到一定程度，比特币被全球广泛接受，改变世界，推动人类文明进步，就是水到渠成的事了。**

**真正理解认同比特币的人支撑了比特币的最低价，币价上涨吸引来的投机者炒出了比特币的最高价，泡沫破裂后，比特币跌到支撑价，这个支撑价一次比一次高，比特币就这样一轮一轮地上涨。比特币区块奖励四年减半，供应量减少导致价格上涨，受此影响，牛市与之合拍，比特币就又呈现出四年一个牛熊周期的特点。随着市值升高，比特币每轮牛市上涨速度逐渐放慢，泡沫逐渐减少，牛市时间逐渐延长，波动逐渐缩小。**

越来越多的人理解比特币，认同比特币需要时间，比特币难以在短期内涨到前述高价，但未来会如何，我们拭目以待。

**比特币保护平民财富不被通货膨胀掠夺，捍卫私人财产不受暴力侵犯，实现了价值的自由流通，让天下没有难付的钱，拉近了全世界人民的经济距离，给了世界一种公正客观的超主权自由货币，限制了滥发法币的政府，剥夺了暴政的权威，打破了霸权的金融封锁，带给了人类一种崭新的社会组织形式，用数学和代码的法治，代替了依靠权力的人治。**

我相信比特币会像互联网一样改变世界，我也有幸能见证并亲身参与这场激动人心的货币革命。像许许多多第一次理解了比特币的人一样，我惊喜不已，激动万分，就像牛顿发现了万有引力，哥伦布发现了新大陆。像许多比特币布道者一样，我深感把比特币通俗易懂地介绍给人们，是我的使命，于是尽了一点绵薄之力，苦心孤诣写出这篇科普文，希望能有些用。也希望币圈的朋友，多关注一下比特币的原理和意义，长期持有比特币，而非把币圈当成一个大赌场。
`,
    star: true,
    tags: ['比特币'],
    views: 5112,
    ctime: 1600611000,
    mtime: 1624198200
  },
  {
    pid: 'tep08',
    author: {
      uid: 'cmkk',
      nickname: 'cmKangkang',
      avatar: 'http://img.jj20.com/up/allimg/tx19/260321310627894.jpg',
      follow: false
    },
    title: '人工智能概念简介',
    subTitle: '面对发展如火如荼的人工智能行业，你有多少了解？',
    banners: ['https://upload-images.jianshu.io/upload_images/1409498-1d3372ce405a1c96.png'],
    content: `# 人工智能概念简介

#### 1. 什么是人工智能

人工智能（ArtificialIntelligence），英文缩写为AI。是计算机科学的一个分支。人工智能是对人的意识、思维的信息过程的模拟。人工智能不是人的智能，但能像人那样思考、也可能超过人的智能。数学常被认为是多种学科的基础科学，数学也进入语言、思维领域，人工智能学科也必须借用数学工具。

人工智能实际应用：机器视觉，指纹识别，人脸识别，视网膜识别，虹膜识别，掌纹识别，专家系统，自动规划，智能搜索，定理证明，博弈，自动程序设计，智能控制，机器人学，语言和图像理解，遗传编程等。人工智能目前也分为：强人工智能(BOTTOM-UPAI)和弱人工智能(TOP-DOWNAI)，有兴趣大家可以自行查看下区别。

#### 2. 什么是机器学习

机器学习(MachineLearning,ML)，是人工智能的核心，属于人工智能的一个分支。机器学习理论主要是设计和分析一些让计算机可以自动\“学习\”的算法。机器学习算法是一类从数据中自动分析获得规律，并利用规律对未知数据进行预测的算法。所以机器学习的核心就是数据，算法（模型），算力（计算机运算能力）。

机器学习应用领域十分广泛，例如：数据挖掘、数据分类、计算机视觉、自然语言处理(NLP)、生物特征识别、搜索引擎、医学诊断、检测信用卡欺诈、证券市场分析、DNA序列测序、语音和手写识别、战略游戏和机器人运用等。

机器学习就是设计一个算法模型来处理数据，输出我们想要的结果，我们可以针对算法模型进行不断的调优，形成更准确的数据处理能力。但这种学习不会让机器产生意识。

机器学习的工作方式

选择数据：将你的数据分成三组：训练数据、验证数据和测试数据。

模型数据：使用训练数据来构建使用相关特征的模型。

验证模型：使用你的验证数据接入你的模型。

测试模型：使用你的测试数据检查被验证的模型的表现。

使用模型：使用完全训练好的模型在新数据上做预测。

调优模型：使用更多数据、不同的特征或调整过的参数来提升算法的性能表现。

机器学习的分类

基于学习策略的分类

1. 机械学习(Rotelearning)
2. 示教学习(Learningfrominstruction或Learningbybeingtold)
3. 演绎学习(Learningbydeduction)
4. 类比学习(Learningbyanalogy)
5. 基于解释的学习(Explanation-basedlearning,EBL)
6. 归纳学习(Learningfrominduction)

基于所获取知识的表示形式分类

1. 代数表达式参数
2. 决策树
3. 形式文法
4. 产生式规则
5. 形式逻辑表达式
6. 图和网络
7. 框架和模式（schema）
8. 计算机程序和其它的过程编码
9. 神经网络

10、多种表示形式的组合

综合分类

1. 经验性归纳学习(empiricalinductivelearning)
2. 分析学习（analyticlearning）
3. 类比学习
4. 遗传算法（geneticalgorithm）
5. 联接学习
6. 增强学习（reinforcementlearning）

学习形式分类

1. 监督学习(supervisedlearning)
2. 非监督学习(unsupervisedlearning)

注：细分的话还有半监督学习和强化学习。当然，后面的深度学习也有监督学习、半监督学习和非监督学习的区分。

监督学习（SupervisedLearning）是指利用一组已知类别的样本调整分类器的参数，使其达到所要求性能的过程，也称为监督训练或有教师学习。也就是我们输入的数据是有标签的样本数据（有一个明确的标识或结果、分类）。例如我们输入了50000套房子的数据，这些数据都具有房价这个属性标签。

监督学习就是人们常说的分类，通过已有的训练样本（即已知数据以及其对应的输出）去训练得到一个最优模型（这个模型属于某个函数的集合，最优则表示在某个评价准则下是最佳的）。再利用这个模型将所有的输入映射为相应的输出，对输出进行简单的判断从而实现分类的目的。就像我输入了一个人的信息，他是有性别属性的。我们输入我们的模型后，我们就明确的知道了输出的结果，也可以验证模型的对错。

举个例子，我们从小并不知道什么是手机、电视、鸟、猪，那么这些东西就是输入数据，而家长会根据他的经验指点告诉我们哪些是手机、电视、鸟、猪。这就是通过模型判断分类。当我们掌握了这些数据分类模型，我们就可以对这些数据进行自己的判断和分类了。

在监督式学习下，输入数据被称为\“训练数据\”，每组训练数据有一个明确的标识或结果，如对防垃圾邮件系统中\“垃圾邮件\”\“非垃圾邮件\”，对手写数字识别中的\“1\“，\”2\“，\”3\“，\”4\“等。在建立预测模型的时候，监督式学习建立一个学习过程，将预测结果与“训练数据”的实际结果进行比较，不断的调整预测模型，直到模型的预测结果达到一个预期的准确率。

监督式学习的常见应用场景如分类问题和回归问题。常见监督式学习算法有决策树（ID3，C4.5算法等），朴素贝叶斯分类器，最小二乘法，逻辑回归（LogisticRegression），支持向量机（SVM），K最近邻算法（KNN，K-NearestNeighbor），线性回归（LR，LinearRegreesion），人工神经网络（ANN，ArtificialNeuralNetwork），集成学习以及反向传递神经网络（BackPropagationNeuralNetwork）等等。


非监督学习（UnsupervisedLearing）是另一种研究的比较多的学习方法，它与监督学习的不同之处，在于我们事先没有任何训练样本，而需要直接对数据进行建模。是否有监督（Supervised），就看输入数据是否有标签（Label）。输入数据有标签（即数据有标识分类），则为有监督学习，没标签则为无监督学习（非监督学习）。在很多实际应用中，并没有大量的标识数据进行使用，并且标识数据需要大量的人工工作量，非常困难。我们就需要非监督学习根据数据的相似度，特征及相关联系进行模糊判断分类。

半监督学习（Semi-supervisedLearning）是有标签数据的标签不是确定的，类似于：肯定不是某某某，很可能是某某某。是监督学习与无监督学习相结合的一种学习方法。半监督学习使用大量的未标记数据，以及同时使用标记数据，来进行模式识别工作。当使用半监督学习时，将会要求尽量少的人员来从事工作，同时，又能够带来比较高的准确性。

在此学习方式下，输入数据部分被标识，部分没有被标识，这种学习模型可以用来进行预测，但是模型首先需要学习数据的内在结构以便合理的组织数据来进行预测。半监督学习有两个样本集，一个有标记，一个没有标记。分别记作Lable={(xi,yi)}，Unlabled={(xi)}，并且数量,L<<U。

注：

单独使用有标记样本,我们能够生成有监督分类算法

单独使用无标记样本,我们能够生成无监督聚类算法

两者都使用,我们希望在1中加入无标记样本,增强有监督分类的效果;同样的,我们希望在2中加入有标记样本,增强无监督聚类的效果

一般而言,半监督学习侧重于在有监督的分类算法中加入无标记样本来实现半监督分类，也就是在1中加入无标记样本，增强分类效果。

应用场景包括分类和回归，算法包括一些对常用监督式学习算法的延伸，这些算法首先试图对未标识数据进行建模，在此基础上再对标识的数据进行预测。如自训练算法(self-training)、多视角算法(Multi-View)、生成模型（EnerativeModels）、图论推理算法（GraphInference）或者拉普拉斯支持向量机（LaplacianSVM）等。

#### 3. 什么是深度学习

深度学习（Deep Learning），恰恰就是通过组合低层特征形成更加抽象的高层特征（或属性类别）。例如，在计算机视觉领域，深度学习算法从原始图像去学习得到一个低层次表达，例如边缘检测器、小波滤波器等，然后在这些低层次表达的基础上，通过线性或者非线性组合，来获得一个高层次的表达。此外，不仅图像存在这个规律，声音也是类似的。比如，研究人员从某个声音库中通过算法自动发现了20种基本的声音结构，其余的声音都可以由这20种基本结构来合成！

在进一步阐述深度学习之前，我们需要了解什么是机器学习（Machine Learning）。机器学习是人工智能的一个分支，而在很多时候，几乎成为人工智能的代名词。简单来说，机器学习就是通过算法，使得机器能从大量历史数据中学习规律，从而对新的样本做智能识别或对未来做预测。

而深度学习又是机器学习研究中的一个新的领域，其动机在于建立可以模拟人脑进行分析学习的神经网络，它模仿人脑的机制来解释数据，例如，图像、声音和文本。深度学习之所以被称为“深度”，是因为之前的机器学习方法都是浅层学习。深度学习可以简单理解为传统神经网络（Neural Network）的发展。大约二三十年前，神经网络曾经是机器学习领域特别热门的一个方向，这种基于统计的机器学习方法比起过去基于人工规则的专家系统，在很多方面显示出优越性。深度学习与传统的神经网络之间有相同的地方，采用了与神经网络相似的分层结构：系统是一个包括输入层、隐层（可单层、可多层）、输出层的多层网络，只有相邻层节点（单元）之间有连接，而同一层以及跨层节点之间相互无连接。这种分层结构，比较接近人类大脑的结构（但不得不说，实际上相差还是很远的，考虑到人脑是个异常复杂的结构，很多机理我们目前都是未知的）。
`,
    star: true,
    tags: ['人工智能', '大数据', '机器学习'],
    views: 2000,
    ctime: 1605881400,
    mtime: 1608739200
  },
  {
    pid: 'tep09',
    author: {
      uid: 'cmkk',
      nickname: 'cmKangkang',
      avatar: 'http://img.jj20.com/up/allimg/tx19/260321310627894.jpg',
      follow: false
    },
    title: '什么是显卡挖矿',
    subTitle: '3090又双叒叕供不上货啦！',
    banners: ['https://pic1.zhimg.com/v2-eebb799f639ec92008089a08cbf6b5f5_1440w.jpg'],
    content: `# 什么是显卡挖矿

日前ETH价格突破4000美金冲击5000美金关口遇阻回落新高再一次把显卡挖矿送上了热门，最近几天真的越来越多人来询问显卡挖矿是什么、怎么挖矿、ETH2.0 还能不能挖矿等问题。

所以这次小编特意给大家整理了一份显卡挖矿指南，要把所有知识盲点一扫而光。

**01**

**挖矿是什么**

挖矿通常指利用矿机生产加密货币的过程。具体来说就是通过电脑 CPU（内存)、GPU（显卡)或专业矿机参与网络记账，并根据记账形成工作量证明（POW)，从而获得相应区块奖励的过程。常见的通过挖矿可以获得的加密货币有 BTC(比特币)、ETH(以太坊)、ETC(以太经典)等。

**02**

**显卡矿机挖矿与 ASIC （专业芯片）矿机挖矿有什么区别？**

矿机是加密货币挖矿的前提条件，现存的矿机主要分为显卡矿机和 ASIC 矿机两类。
显卡矿机，顾名思义，是由计算机显卡组装而成。其主要硬件包含：显卡（一般是一台矿机 6 张或 8 张显卡）、主板、电源、硬盘（建议使用 60G 以上 SSD 硬盘）、CPU、内存、延长线、转接线、显示器、鼠标、键盘等。显卡矿机需要我们自己配置一台 PC 来运行挖矿程序，其中显卡性能决定了挖矿速度和算力，主板和电源很大程度上决定了矿机运行的稳定程度。 反观 ASIC 矿机（Application Specific Integrated Circuit）则采用集成电路（芯片）作为算力核心，将特定加密货币算法集成于芯片之内，从而大大提高了运算效率。通常这样的专业 ASIC 矿机只支持一种算法，只可以挖同算法的币种。

举个例子，比特大陆 S19 ASIC 矿机每块算力板上共有 77 枚芯片，三块算力板共 228 枚芯片，额定算力为 110T。而如今最好的 3090 系列显卡单张算力也就在 120M 左右，按照1T=1000G=1000,000M来换算，算力差距简直是天壤之别。 所以总结来看，专业 ASIC 矿机虽然只支持一种算法，只可以挖一种币，但是算力大，维护起来也更方便。而 GPU 显卡矿机，虽然可以挖多种币，残值也高，但是算力低，维护难度大也确实是弱项。

**03**

**以太坊生态为何要用显卡挖矿？**

目前绝大多数的显卡矿机都在以太坊网络中挖矿获利。虽然显卡矿机和 ASIC 矿机都可以在以太坊网络中挖矿获得 ETH。但是总体来讲当前以太坊挖矿还是显卡的天下，ASIC 矿机所占份额非常小。以太坊网络之所以没有发展出类似 BTC 一样的大算力 ASIC 矿机，主要是由于 ETH 的特殊挖矿机制决定的。

在 ETH 挖矿过程中，会产生一个 DAG 文件，该文件需要一直被调用，因此必须有专门的存储空间放置。这个对于存储空间的硬性需求导致即使生产出了 ASIC 芯片，其挖矿性能也不能达到指数级的算力增长。 自从以太坊网络 2016 年 6 月份引入 Dagger-Hashimoto 算法以来，DAG 文件大小从 1GB 开始以每年约 520MB 的速度增加到了现在的 4.2G-4.3G。而显卡的超大显存对于容纳 DAG 文件简直具有天然优势。因此，由于 ASIC 大算力矿机开发受限，目前在以太坊生态中显卡矿机占有绝对比例。但随着以太坊 ASIC 矿机在效率、成本方面的优化以及芯片技术的突破，像芯动 A11 等大算力的 ASIC 矿机的问世终究还是会挤占显卡矿机在以太坊网络中的比重。

**显卡高残值**

显卡矿机本质上是一台安装有多个显卡的计算机，其显卡在挖矿结束时仍旧可以在二手市场上出售，或者安装在电脑上使用。因此矿工也可以获得比较高的矿机残值，通常来讲显卡矿机经过两年挖矿之后依旧能有**10-30%**的残值。

**静态回本周期相对较短**

除了高残值，相对较短的静态回本周期也是矿工们选用显卡挖矿的重要因素。静态回本周期是指矿工按照当前币价和挖矿难度计算出来的一个回本时间周期。我们以 **1660Super 8 显卡矿机**为例，矿机整体算力为 250M，以当前难度和币价计得挖矿收益为** 200-500 元**每天不等，按照市场上 **1660S矿机**当前购入价为 37000元计算最快**80-90天**就可实现回本。如果再算上显卡矿机的残值，理论上回本周期会进一步缩短。

**05**

**以太坊 2.0，还能不能显卡挖矿？**

**以太坊 2.0** 就像是一把悬在显卡矿工头上的达摩克利斯之剑，让想进入显卡挖矿领域的矿工犹豫不决，害怕以太坊 2.0 进展过快导致显卡还未回本就已经不能挖矿了。目前以太坊信标链已经启动，这意味着目前以太坊网络同时有两条链，PoW 和 PoS两种共识机制。那么什么时候 PoW 链并入 PoS 链，ETH 就不能挖矿了呢？其实这个过程还需要很长时间。现在很多人说年底就不能挖了，这个打算最坏也是年底了，以目前的时间来计算，回本绰绰有余。

我们看一下 **ETH 升级**的几个阶段：

**Phase 0：** 启动以 PoS 为共识机制的信标链

**Phase 1：** 数据分片，引入分片链

**Phase 1.5：** ETH1（PoW 链）并入 ETH2（PoS 链）

**Phase 2：** 继续执行分片机制，各条分片链正式执行各项功能

我们可以看出，在 Phase 1.5 实施后，以太坊才不能继续挖矿，在 Phase 1.5 实施前，以太坊还是可以正常挖矿的。据外界和以太坊核心开发人员普遍认为这个过程可能还需要 **1-2 年**的时间。所以矿工入局以太坊挖矿目前无需过度在意以太坊向 2.0 阶段的过渡。

**06**

**以太坊显卡挖矿的风险**

我们都知道 **ETH 挖矿收益=ETH 挖币数量*ETH 币价**。
**以太坊挖矿难度**和** ETH 币价**是计算**显卡挖矿回本周期**和**衡量挖矿收益**最为重要的指标。接下来我们就从这两个方面看看显卡挖矿的风险。

**币价下跌风险**
币价下跌挖矿收益减少，挖矿回本周期也将延长。由于许多矿工害怕高位进场，所以我们经常会建议客户**在币价高位时进行套保**。所谓**套保**就是把未来某个周期，比如三个月的币产量进行质押，然后向币印这样的中心机构借出等量的币，在市场迅速售出，锁定收益的过程。
待矿工挖矿出等量的币，付上一点利息还给借币方就可以了。

**挖矿难度暴涨风险**
在套保过后即便币价下跌矿工依旧可以安心挖矿，此时最害怕的就是**难度暴涨**。如果**全网挖矿难度暴涨**就会导致每台显卡矿机挖币**产量减少**，**收益下降**，那么你归还你借出的币就可能需要更长的时间。那未来短期之内难度暴涨的可能性存在吗？首先从数据方面来看，以太坊全网算力最近确实**有比较明显的涨幅**，但是短期内由于显卡矿机供应不足、以及**芯动A11**可能在丰水期之前都不会大批交货，全网算力基本会呈现一个**缓慢上涨**的趋势。

另外由于**ETH转PoS机制**带来挖矿的不确定性，很有可能会出现一个ETH转PoS的真空期，ETH矿工收益也并不会衰减。即便以太网完全转向PoS机制挖矿后，显卡矿机还可以去挖**其他种类的加密货币，例如ETC（以太坊经典），** 所以综合以上几方面来看，只要**做好风险防控**、**配合上套保工具**，目前入局显卡挖矿应该是一个相对不错的时机。
`,
    star: true,
    tags: ['虚拟货币', '大数据', '挖矿'],
    views: 1398,
    ctime: 1614583380,
    mtime: 1630480980
  },
  {
    pid: 'tep10',
    author: {
      uid: 'cmkk',
      nickname: 'cmKangkang',
      avatar: 'http://img.jj20.com/up/allimg/tx19/260321310627894.jpg',
      follow: false
    },
    title: '笑话大全',
    subTitle: '博君一笑',
    banners: ['https://bpic.588ku.com/element_origin_min_pic/19/04/09/7efe6fdab3bfcc7fdd8f053229abfd4a.jpg'],
    content: `1. 刘关张三人结义后在桃园喝酒，三人喝的差不多了后，大哥刘备说，喝的差不多了吧，咱们来日方长……张飞赶紧说，大哥你喝多了吧，二哥叫云长

3. 嫦娥的兔子生病了，于是嫦娥把兔子抱到月老那里。月老看了看兔子
   说：没救了，月兔，还有没有什么遗言?月兔说：我只希望在死前吃到一根没有腥味的胡萝卜。

3. 在家里卫生间发现一瓶过期的洗面奶。在网上搜了一下：洗面奶过期了，怎么废物利用?;老婆蹦出一条最佳答案：给老公用。

5. 有一个人叫真罗嗦，娶了个老婆叫要你管，生了个儿子叫麻烦。有一天麻烦不见了!夫妻俩就去报案。警察问爸爸：请问这位男士你叫啥名字?爸爸说:真罗嗦。警察很生气，然后 他又问妈妈叫啥名字。妈妈说:要你管。警察非常生气的说:你们要干什么?夫妻俩说：找麻烦

6. 说有一只企鹅，他的家离北极熊家特别远，要是靠走的话，得走20年才能到。有一天，企鹅在家里呆着特别无聊，准备去找北极熊玩，与是他出门了，可是走到路的一半的时候发现自己忘记锁门了，这就已经走了10年了，可是门还是得锁啊，于是企鹅又走回家去锁门。锁了门以后，企鹅再次出发去找北极熊，等于他花了40年才到了北极熊他们家，然后企鹅就敲门说：“北极熊北极熊，企鹅找你玩来了!”结果北极熊开门以后你猜他说什么……“还是去你家玩吧”

6. 小白兔蹦蹦跳跳到面包房，问：“老板，你们有没有一百个小面包啊?”

老板：“啊，真抱歉，没有那么多”

　　这样啊。“小白兔垂头丧气地走了。

　　第二天，小白兔蹦蹦跳跳到面包房，”老板，有没有一百个小面包啊?“

　　老板：”对不起，还是没有啊“

　　”这样啊。“小白兔又垂头丧气地走了。

　　第三天，小白兔蹦蹦跳跳到面包房，”老板，有没有一百个小面包啊?“

　　老板高兴的说：”有了，有了，今天我们有一百个小面包了!“

　　小白兔掏出钱：”太好了，我买两个!“

7、小明说：阿康，问你”有一只鲨鱼吃下了一颗绿豆，结果它变成了什么?“

　　阿康说：我不知道，答案是什么?

　　小明说：嘿!嘿，答案是”绿豆沙(绿豆鲨)“，你很笨喔。

8、老师问一同学怎么减少白色污染?

　　同学答：把饭盒做成蓝色。

9. 有个人，他肠胃不好。一天，他来到胃病医院看病，对医生说：”我吃什么拉什么，吃西瓜拉西瓜，吃黄瓜拉黄瓜?“

　　医生想了想，对他说：”我看你只有吃屎了。“

10、飞机上，一位空中小姐问一个小女孩说：”为什么飞机飞这么高都不会撞到星星呢?“

　　小女孩回答到：”我知道，因为星星会“闪”啊!“

11、有一只北极熊和一只企鹅在一起耍，企鹅把身上的毛一根一根地拔了下来，拔完之后，对北极熊说：”好冷哦!“北极熊听了，也把自己身上的毛一根一根地拔了下来，转头对企鹅说：”果然很冷!“

12、有一个面包，走着走着肚子饿了，于是就把自己吃了。

13、Q：非洲食人族的酋长吃什么?

　　A：人啊!

　　Q：那有一天，酋长病了，医生告诉他要吃素，那他吃什么?

　　A：吃植物人!

14、美国人：你看过木头做的杯子吗?

　　中国人：没有!

　　美国人：那为什麽你们中国字的”杯“是木字旁?

　　中国人：”杯“字旁边不是有个”不“字吗!也就是说它不是木头做的。

15、小白+小白=?

　　小白兔(TWO)～!

16、Q：胖子从12楼掉下来会变什么?

　　A：死胖子。
`,
    star: false,
    tags: ['笑话'],
    views: 799,
    ctime: 1580370240,
    mtime: 1580370240
  },
  {
    pid: 'tep11',
    author: {
      uid: 'cmkk',
      nickname: 'cmKangkang',
      avatar: 'http://img.jj20.com/up/allimg/tx19/260321310627894.jpg',
      follow: false
    },
    title: '阅读金庸小说的顺序',
    subTitle: '个人体会，阅读指南',
    banners: ['https://www.duoduwang.com/ueditor/php/upload/image/20191211/1576028830524968.jpg'],
    content: `# 阅读金庸小说的顺序

根据多年来反复读金庸的经验，个人有如下看法。

**首先，对于不同的作品，按照创作时间顺序来看**。即先看《书剑恩仇录》，然后看《碧血剑》，再看《射雕英雄传》等，最后看鹿鼎记。

按照这种顺序来读，可以非常清楚地看到，随着时间的推移，金庸的文笔、创作技巧和思想观念等的成长和变化。

例如，开山之作《书剑恩仇录》中的满汉观念和对乾隆的春秋笔法，与封笔之作《鹿鼎记》中对同为满人皇帝的康熙的赞美，就形成了鲜明的对比。

**其次，对于同一部作品，按照版本的先后顺序来看**。即先看连载版（如果有兴趣且找得到），再看三联版，然后看新修版。

按照这种顺序来读，也可以非常清楚地看到金庸先生随着年龄的增长，对一些问题看法的变化。而这些变化，按照第一种顺序读的时候或许发现不了。

例如，在最初版的《笑傲江湖》里，令狐冲的小师妹的闺房中有一句诗：“当时若爱韩公子，埋骨成灰恨休”。而在后来的版本中，金庸先生将这一句诗删除了。

再比如，在新修版《天龙八部》中，段誉想清楚了自己对王语嫣的感情，不再像旧版中那样无条件傻傻地痴迷，并且最终他们俩没有在一起。这些都体现了先生晚年时候新的感情观和人生体会。

当然，除了以上两种主要顺序以外，还有其他一些读法也可以考虑。

例如，**按照朝代来读**。金庸的小说一般是放在历史背景中创作的。那么，对宋代历史感兴趣的朋友，可以先看《天龙八部》《射雕英雄传》《神雕侠侣》。对明朝历史（包括元末明初以及明亡清兴）的朋友，可以先读《倚天屠龙记》《碧血剑》《鹿鼎记》。对清朝历史感兴趣的朋友，可以先读《书剑恩仇率》《鹿鼎记》《雪山飞狐》《飞狐外传》《连城诀》。

另外，**也可以按照系列来读**。例如，《射雕英雄传》《神雕侠侣》《倚天屠龙记》是一个系列，即“射雕三部曲”。另外，《书剑恩仇率》《雪山飞狐》《飞狐外传》也是一个系列，《鹿鼎记》和《连城诀》也因吴六奇而有一些联系。
`,
    star: true,
    tags: ['金庸'],
    views: 132,
    ctime: 1611966120,
    mtime: 1611966120
  },
  {
    pid: 'tep12',
    author: {
      uid: 'cmkk',
      nickname: 'cmKangkang',
      avatar: 'http://img.jj20.com/up/allimg/tx19/260321310627894.jpg',
      follow: false
    },
    title: '从算力、数据、算法、工程化等维度看AI的未来',
    subTitle: '建议先读<人工智能概念简介>',
    banners: ['https://library.linkbricks.com/wp-content/uploads/2020/10/ai_istock-935226186_v2.jpg'],
    content: `# 从算力、数据、算法、工程化等维度看AI的未来

2020年是不寻常的一年，全球的健康、贸易、经济、文化、政治和科技领域，无不发生着深刻的变化。笔者所在的科技领域，也恰逢现代人工智能（简称AI）发展10周年。前10年，人工智能技术得到了长足的发展，但也留下许多问题有待解决。

那么，未来AI技术将会如何发展呢？本文将结合学术界、工业界的研究成果，以及笔者个人研究见解，从算力、数据、算法、工程化4个维度，与读者一起探索和展望AI发展的未来。

**一、数据**

**我们首先分析数据的发展趋势。** 数据对人工智能，犹如食材对美味菜肴，过去10年，数据的获取无论是数量，还是质量，又或者是数据的种类，均增长显著，支撑着AI技术的发展。未来，数据层面的发展会有哪些趋势呢，我们来看一组分析数据。

首先，世界互联网用户的基数已达到十亿量级，随着物联网、5G技术的进一步发展，会带来更多数据源和传输层面的能力提升，因此可以预见的是，数据的总量将继续快速发展，且增速加快。参考IDC的数据报，数据总量预计将从2018年的33ZB（1ZB=106GB），增长到2025年的175ZB。

其次，数据的存储位置，业界预测仍将以集中存储为主，且数据利用公有云存储的比例将逐年提高

以上对于未来数据的趋势，可以总结为：**数量持续增长；云端集中存储为主；公有云渗透率持续增长。站在AI技术的角度，可以预期数据量的持续供给是有保证的。**

另一个方面，AI技术需要的不仅仅是原始数据，很多还需要标注数据。标注数据可分为自动标注、半自动标注、人工标注3个类别。

那么，标注数据未来的趋势会是怎样的？

我们可从标注数据工具市场的趋势窥探一二，人工标注数据在未来的5年~10年内，大概率依然是标注数据的主要来源，占比超过75%。

通过以上数据维度的分析与预测，我们可以得到的判断是，数据量本身不会限制AI技术，但是人工标注的成本与规模很可能成为限制AI技术发展的因素，这将倒逼AI技术从算法和技术本身有所突破，有效解决对数据特别是人工标注数据的依赖。

**二、算力**

我们再来看看算力。**算力对于AI技术，如同厨房灶台对于美味佳肴一样，本质是一种基础设施的支撑。**

算力指的是实现AI系统所需要的硬件计算能力。半导体计算类芯片的发展是AI算力的根本源动力，好消息是，虽然半导体行业发展有起有落，并一直伴随着是否可持续性的怀疑，但是半导体行业著名的“摩尔定律”已经经受住了120年考验，相信未来5年~10年依然能够平稳发展。

不过，值得注意的是，摩尔定律在计算芯片领域依然维持，很大原因是因为图形处理器（GPU）的迅速发展，弥补了通用处理器（CPU）发展的趋缓，如图6所示，从图中可以看出GPU的晶体管数量增长已超过CPU，CPU晶体管开始落后于摩尔定律。

当然，半导体晶体管数量反映整体趋势可以，但还不够准确地反映算力发展情况。对于AI系统来说，浮点运算和内存是更直接的算力指标，下面具体对比一下GPU和CPU这2方面的性能，如图7所示。可以看出，**GPU无论是在计算能力还是在内存访问速度上，近10年发展远超CPU，很好的填补了CPU的性能发展瓶颈问题。**

另一方面，依照前瞻产业研究院梳理的数据，就2019年的AI芯片收入规模来看，GPU芯片拥有27%左右的份额，CPU芯片仅占17%的份额。可以看到，GPU已成为由深度学习技术为代表的人工智能领域的硬件计算标准配置，形成的原因也十分简单，现有的AI算法，尤其在模型训练阶段，对算力的需求持续增加，而GPU算力恰好比CPU要强很多，同时是一种与AI算法模型本身耦合度很低的一种通用计算设备。

除了GPU与CPU，其他计算设备如ASIC、FGPA等新兴AI芯片也在发展，值得行业关注。**鉴于未来数据大概率仍在云端存储的情况下，这些芯片能否在提高性能效率的同时，保证通用性，且可以被云厂商规模性部署，获得软件生态的支持，有待进一步观察。**

**三、算法**

现在我们来分析算法。AI算法对于人工智能，就是厨师与美味佳肴的关系。过去10年AI的发展，数据和算力都起到了很好的辅助作用，但是不可否认的是，**基于深度学习的算法结合其应用取得的性能突破，是AI技术在2020年取得里程碑式发展阶段的重要原因。**

那么，AI算法在未来的发展趋势是什么呢？这个问题是学术界、工业界集中讨论的核心问题之一，一个普遍的共识是，延续过去10年AI技术的发展，得益于深度学习，但是此路径发展带来的算力问题，较难持续。

1. 根据OpenAI最新的测算，训练一个大型AI模型的算力，从2012年开始计算已经翻了30万倍，即年平均增长11.5倍，而算力的硬件增长速率，即摩尔定律，只达到年平均增速1.4倍；另一方面，算法效率的进步，年平均节省约1.7倍的算力。这意味着，随着我们继续追求算法性能的不断提升，每年平均有约8.5倍的算力赤字，令人担忧。一个实际的例子为今年最新发布的自然语义预训练模型GPT-3，仅训练成本已达到约1300万美元，这种方式是否可持续，值得我们思考。
2. MIT最新研究表明，对于一个过参数化（即参数数量比训练数据样本多）的AI模型，满足一个理论上限公式：公式表明，其算力需求在理想情况下，大于等于性能需求的4次方，从2012年至今的模型表现在ImageNet数据集上分析，现实情况是在9次方的水平上下浮动，意味着现有的算法研究和实现方法，在效率上有很大的优化空间。
3. 按以上数据测算，人工智能算法在图像分类任务（ImageNet）达到1%的错误率预计要花费1亿万亿（10的20次方）美元，成本不可承受。

结合前文所述的数据和算力2个维度的分析，相信读者可以发现，未来标注数据成本、算力成本的代价之高，意味着数据红利与算力红利正在逐渐消退，人工智能技术发展的核心驱动力未来将主要依靠算法层面的突破与创新。就目前最新的学术与工业界研究成果来看，笔者认为AI算法在未来的发展，可能具有以下特点：

**（1）先验知识表示与深度学习的结合**

纵观70多年的人工智能发展史，符号主义、连接主义、行为主义是人工智能发展初期形成的3个学术流派。如今，以深度学习为典型代表的连接主义事实成为过去10年的发展主流，行为主义则在强化学习领域获得重大突破，围棋大脑AlphaGo的成就已家喻户晓。

值得注意的是，原本独立发展的3个学派，正在开始以深度学习为主线的技术融合，比如在2013年，强化学习领域发明了DQN网络，其中采用了神经网络，开启了一个新的研究领域称作深度强化学习（Deep Reinforcement Learning）。

那么，符号主义类算法是否也会和深度学习进行融合呢？一个热门候选是图网络（Graph Network）技术，这项技术正在与深度学习技术相融合，形成深度图网络研究领域。图网络的数据结构易于表达人类的先验知识，且是一种更加通用、推理能力更强（又称归纳偏置）的信息表达方法，这或许是可同时解决深度学习模型数据饥渴、推理能力不足以及输出结果可解释性不足的一把钥匙。

**（2）模型结构借鉴生物科学**

**深度学习模型的模型结构由前反馈和反向传播构成，与生物神经网络相比，模型的结构过于简单。** 深度学习模型结构是否可以从生物科学、生物神经科学的进步和发现中吸取灵感，从而发现更加优秀的模型是一个值得关注的领域。另一个方面，如何给深度学习模型加入不确定性的参数建模，使其更好的处理随机不确定性，也是一个可能产生突破的领域。

**（3）数据生成**

AI模型训练依赖数据，这一点目前来看不是问题，但是AI模型训练依赖人工标注数据，是一个头痛的问题。利用算法有效解决或者大幅降低模型训练对于人工标注数据的依赖，是一个热点研究领域。实际上，在人工智能技术发展过程中一直若隐若现的美国国防部高级研究计划局（DARPA），已经将此领域定为其AI3.0发展计划目标之一，可见其重要程度。

**（4）模型自评估**

现有的AI算法，无论是机器学习算法，还是深度学习算法，其研发模式本质上是通过训练闭环（closed loop）、推理开环（open loop）的方式进行的。是否可以通过设计模型自评估，在推理环节将开环系统进化成闭环系统也是一个值得研究的领域。在通信领域，控制领域等其他行业领域的大量算法实践表明，采用闭环算法的系统在性能和输出可预测性上，通常均比开环系统优秀，且闭环系统可大幅降低性能断崖式衰减的可能性。**闭环系统的这些特性，提供了对AI系统提高鲁棒性和可对抗性的一种思路和方法。**

**四、工程化**

上文已经对人工智能数据、算力、算法层面进行了梳理和分析，最后我们看看工程化。工程化对于人工智能，如同厨具对于美味佳肴一样，是将数据、算力、算法结合到一起的媒介。

**工程化的本质作用是提升效率，即最大化利用资源，最小化减少信息之间的转换损失。** 打一个简单的比喻，要做出美味佳肴，食材、厨房灶台、厨师都有，但是唯独没有合适的厨具，那么厨师既无法发挥厨艺（算法），又无法处理食材（数据），也无法使用厨房灶台的水电气（算力）。因此，可以预见，工程化未来的发展，是将上文提到的算力与算法性能关系，从现在的9次方，逼近到理论上限4次方的重要手段之一。

过去10年，AI工程化发展，已形成一个明晰的工具链体系，近期也伴随着一些值得关注的变化,总结来说，AI工程化正在形成从用户端到云端的，以Python为编程语言的一整套工具链，其3个重要的特点为：**远程编程与调试，深度学习与机器学习的GPU加速支持，以及模型训练与推理工具链的解耦。** 与此同时，产业链上游厂商对开源社区的大量投入，将为中下游企业和个人带来工具链的技术红利，降低其研发门槛和成本，笔者认为微软、脸书、英伟达3家上游厂商主推的开源工具链尤其值得关注。
`,
    star: true,
    tags: ['人工智能', '数据'],
    views: 667,
    ctime: 1617063720,
    mtime: 1617250920
  },
  {
    pid: 'tep13',
    author: {
      uid: 'cmkk',
      nickname: 'cmKangkang',
      avatar: 'http://img.jj20.com/up/allimg/tx19/260321310627894.jpg',
      follow: false
    },
    title: '单机游戏推荐',
    subTitle: '忙碌的工作之余也不要忘记犒劳自己！',
    banners: ['https://pic1.zhimg.com/v2-132d58721b20a6eab6d00f82ca284635_r.jpg?source=1940ef5c'],
    content: `# 15款单机小品游戏推荐

写在前面：**这十五款游戏大多短小精悍，小在精致，大在意蕴悠长。排名先后以本人喜爱程度为准**，但存在大量并列情况。**这之中对配置几乎毫无要求的游戏，我会略去其最低配置信息。**

---

### 1.兄弟：双子传说（Brothers - A Tale of Two Sons）

**双人解谜+看风景+看剧情。**适合双人挑一个下午，听制作者娓娓道来，其中**魔幻、新奇、感动**，滋味历历在目。流程3小时。

最低配置: 内存: 2 GB RAM；显卡: NVIDIA GeForce 8600 /ATI Radeon HD 2600

### 2.画中世界（Gorogoa）

别具一格的解密游戏，画面精美，每一张都是壁纸。Demo在2012年就出了，抵不住精雕细琢，5年后才出正式版。流程较短，3~4小时。

### 3.疑案追声（Unheard）

最近几天玩的。腾讯旗下Next Studios 工作室出品，国产解谜游戏里让我眼前一亮的一作。听声辨案，整体和分割的剧情都很有意思。多线叙事和海明威“冰山理论”的优势在这里得到近乎完美而毫无节制的展现。昆汀？盖里奇？或者宁浩？**当你想用十条线的上帝视角讲一个故事再将其交汇于一处而不乱，只有这样能做到了**（《云图》其实已经开始乱的不行了）。

本作可以说在现有《盲景》《她的故事》等的基础上开辟了新的玩法、新的领域。我们也得以一窥这种玩法的磅礴生命力：极低成本，只依赖剧本优秀程度，微吃声优; 灵活多变，能够进一步衍生出更多种玩法。

算上前两个DLC，流程约5~10小时。两个免费DLC不可不玩，《黑面观音》DLC则可酌情考虑入手。

### 4.深入（Inside）

横版过关。Meta元素近几年出奇的火，上面某作、本作以及后面的几款多少都有点meta的影子。不再剧透。

这一作几乎无可挑剔，**无论是操作性、画面、玩法、物理真实性还是剧情，全方位继承并超越前作《地狱边境（LIMBO）》**，正如《传送门2》之于《传送门1》，只是解谜要素稍少了些。我很是疑心2017年的《小小梦魇》从2016年的它身上学到了许多。顺提，这游戏是我昨晚连并前作一口气从下午6点打到凌晨3点打通的，但地狱边境更为压抑，可以不玩。

流程约4小时。最低配置:内存: 4 GB RAM，显卡: NVIDIA GT 630 / 650m, AMD Radeon HD6570 or equivalent。

### 5.空洞骑士

类魂横版过关游戏。操作手感极佳但也很难。**关键在于”不贪刀“和”跑酷“。** 杰作无须赘述。

### 6.机械迷城（Machinarium）

经典解谜之作。**整个故事单纯如京派沈从文《边城》里的翠翠，只能归入童话一类，不可深究。** 再次安利给大家。

流程约6小时。

### 7.这是我的战争（This war of mine）

**反战思想深刻的横版建造经营/生存游戏。** 如果谁要说战地、使命召唤系列的反战思想只是一套说辞和概念，那《这是我的战争》则成功从每一个毛孔中像渗血一样渗透这种人类的最低声下气的诉求。

### 8.骑马与砍杀:战团（Mount & Blade: Warband）

老游戏，**集即时战略、模拟经营与格斗于一身，从当强盗、当士兵到当封臣再到当国王。** 笔记本也带的动。易上瘾。近些日子小火一把的国产游戏《部落与弯刀》很明显身上就有它的影子。缺点在于UI等过陈旧，但不影响游戏性。推荐配置：内存：1GB；图形：NVIDIA GeForce FX 5200, ATI Radeon 9600, 或更好。流程20小时起步。

### 9.传送门（Portal）

**“G胖不会数3”的出处之一。** 第一人称射击（不是枪战）+解密。剧情、配乐、画面均是顶尖，其中剧情涉及人工智能浪漫主义。**很难想象，这是一款2007年也即13年前的游戏！如果在我还没玩到这款游戏的平行世界里，有人诓我说这是今年的独立游戏黑马，我也绝对不起丝毫怀疑。3D眩晕者慎买。《传送门2》需要的配置要比1稍高些，除这一问题外，《传送门2》没理由不玩。两作流程加起来约18小时。《传送门1》所需最低配置大概是1GB 内存，Intel HD 3000。

### 10.杀戮尖塔（Slay the spire）

**Rougelike卡牌游戏。** 叠甲、叠毒、回合杀、无线抽卡……是兄弟就来爬塔！体验个差不多约30~60小时。

### 11. 一次机会（OneShot）

**像素风，剧情第一，言语难描述的精妙，不便多说。** 指导一个小孩穿过神秘的世界，去完成复活死去已久的太阳的使命。这个世界知道你的存在。相比于题材多少有些相似的《晶体管》《量子破碎》《艾希》等等一众作品，这一部无疑是画质最差但叙事最完整、情节最精彩的一部。通关约需6小时。

### 12.致命框架合集（FRAMED Collection）

第一部要胜于第二部，但买合集来一起玩就好了。**创意玩法，非常优秀的设计。带感的bgm和连贯的动作，内容俗套，但表现形式和手法绝不俗套的剧情。** 请君试之！总时数约4小时。

### 13.隐形守护者/潜伏之赤途

隐形守护者，交互式电影游戏。又一国产游戏佳作，剧情上乘，其前作《潜伏之赤途》同样可堪一玩（橙光没了，去贴吧里找资源即可）。通关约10小时。由于主播形式火热，这游戏体量不大，梗却不胜枚举，包括纯子酱、斧王、刚正不阿、冰清玉洁……好！另外，永远喜欢庄晓曼的人请排队。

### 14.特工A：伪装游戏(Agent A: A puzzle in disguise)

又一款别具特色的解谜游戏，略冷门（印象中老番茄玩过），但风格我很喜欢。**转场有趣，剧情无厘头**（男主像是在和女间谍调情……），细节上和解谜的精细程度上可以再优化，而重复度可再降低。 通关约需5小时。

### 15.超级食肉男孩（Super Meat Boy）

《以撒的结合》团队老游戏，**平台跳跃，手柄操作手感极佳。**
`,
    star: true,
    tags: ['游戏推荐', '单机游戏'],
    views: 3114,
    ctime: 1626847203,
    mtime: 1626847203
  },
  {
    pid: 'tep14',
    author: {
      uid: 'cmkk',
      nickname: 'cmKangkang',
      avatar: 'http://img.jj20.com/up/allimg/tx19/260321310627894.jpg',
      follow: false
    },
    title: '游戏开发必备技能Q&A',
    subTitle: '游戏开发必备技能Q&A',
    banners: ['https://wallpaperm.cmcm.com/scene/preview_img/37feb61d1b793beab10a97f6acf4b0f8_preview.jpg'],
    content: `**Q：游戏程序员有哪些分类？**

游戏程序员有明显分类。最简单的分类，就只有客户端与服务端。

如果细分就很多了： 游戏脚本编程、引擎开发、计算机图形工程师、技术美术、服务器架构工程师、游戏算法工程师等等。

**Q：成为一名游戏程序员需要具备哪些编程基础？**

在游戏开发中，用到的语言比较多，但各个岗位侧重的方向不同。

**图形接口语言**：OpenGL，DirectX，Shader

**常见引擎底层语言**：C++

**常用脚本语言**：Lua，JS

**常用服务器开发**：C++，JAVA，Python 等都可。

**Q：游戏程序员需要学习什么编程知识？**

首先比较通用的：

算法构建与数据结构，游戏业务知识，网络通信，面向对象，计算机操作系统。

然后根据各个岗位的侧重：

客户端方向要单独学习常用游戏引擎、计算机图形学 。

服务端方向需要深入掌握数据库、多线程编程等知识。

**Q：游戏程序员如何选择游戏开发平台和编程语言？**

以国内现在的环境来看，做手机游戏对就业来说可选择的机会比较多。因为国情的原因，几乎不太可能做主机游戏。主机游戏要在国内过审并上线，太难。所以这类公司会比较少。目前开发主机游戏的公司大都是做独立游戏的公司。手机游戏这几年发展得很快，学习iOS和 Android 这两个平台，对就业的帮助会很大。做手机游戏的话，现在用得比较多的几个引擎有：Unity3D，虚幻，Cocos Creator，这几个都是用 C++/C# + Lua 来进行开发的。还有用 H5 游戏发布成手机游戏的。现在用得多的引擎有：LayaAir，白鹭，Cocos Creator，用的语言主要是 TypeScript、ActionScript。除了这几个引擎和语言，还需要了解下 OC/Swift(iOS)，Java(Android)。

**Q：独立游戏开发者和游戏行业从业人员有哪些区别？如果是独立游戏开发者还需要学习什么？**

独立游戏开发者对技术要求会更全一些。因为一般独立游戏的开发团队，人员都比较少，常需要一人身兼多职，就需要他什么都懂一些。但技能的深度上，还是游戏行业的人员会要求高一些，细分的职业，就是要在某个技术上深入的挖掘，做到极致。独立游戏开发者，除了要学习编程的技术，还要对游戏有自己的理解，对设计游戏也要有一定的认识。还需要有创造力，独立游戏里的独立，指的就是有创新，做与传统游戏不一样的游戏的含义的。

关于创造力，我有个故事：我自己也常会想到一些点子，想着做成游戏还不错。就会把点子记下来。后来我从一个做独立游戏的朋友那里知道，他说他会要求自己每天至少要想一个创新的点子并记录下来。原来我感觉我想到就记下来已经很努力了，原来有人比我努力得多得多。

## **游戏程序员面试篇**

**Q：现在游戏行业的发展如何？从事游戏程序员的前景怎么样？**

游戏行业的发展一直处于整体上升，局部波动的情况。并且随着马太效应的加强，头部公司的发展前景肯定是更加明朗的。在个人待遇以及升职空间上，相较于其他行业也是更有优势的。

**Q：面试游戏程序员需要具备哪些能力？**

对面试程序员的学生来说。最基本的是需要对编程有一定的认识，对常用的开发工具有一定的认识，最好是做过一些小游戏或者小工具。学习能力是很重要的，先说刚出社会的新人，很多知识了解得还不全面，需要大量的学习来提高自己的能力，再则是程序这东西是在不停地发展的，你不学习新的东西就会被时代抛弃。十年前的技术现在已经过时，几乎没有公司在使用了，如果抱着自认为不错的技术就不再学习了，十年后就发现自己什么也不会了。而是否喜欢游戏，一般不会做为选择的标准，但如果自己喜欢游戏，才会对游戏有自己的理解，才会做得更精细。

**Q：三七互娱目前自研的游戏有哪些？**

三七互娱至今已先后成功研发了《大天使之剑》、《永恒纪元》、《斗罗大陆》、《精灵盛典：黎明》等 20 余款游戏，产品总流水超 500 亿。

**Q：游戏开发的面试流程是什么样的？面试三七互娱需要做哪些准备？**

游戏开发的面试流程主要是简历筛选 - 笔试 - 面试，面试一般是 1 - 3 轮。技术面试，主要考察对于面试岗位相关技术的掌握程度和运用程度，除此之外，对于游戏开发的基本流程的认知和对工作的认知，也是非常重要的一点。

在简历上，当然是希望能够突出和岗位匹配度高的学习经历或者实习经历，如果没有的话，可以尽可能突出在游戏经历以及游戏分析上。具体评判标准要根据不同岗位来定夺。大部分玩游戏的同学，可以挑选 1 - 3 款 MMORPG 类的游戏，做出自己对于游戏研发或者游戏运营过程中的一些案例分析，也会非常加分。
`,
    star: true,
    tags: ['游戏开发'],
    views: 2699,
    ctime: 1586533743,
    mtime: 1611283743
  },
  {
    pid: 'tep15',
    author: {
      uid: 'cmkk',
      nickname: 'cmKangkang',
      avatar: 'http://img.jj20.com/up/allimg/tx19/260321310627894.jpg',
      follow: false
    },
    title: 'java后端学习路线',
    subTitle: '只做罗列，详细信息可自行搜索',
    banners: ['http://limoographic.com/wp-content/uploads/2017/11/Java-Logo-LimooGraphic.jpg'],
    content: `* **第一阶段:** Java 基础，包括 Java 语法，面向对象特征，常见API，集合框架。(基础）
* **第二阶段:** Java API：输入输出，多线程，网络编程，反射注解等，Java 的精华部分。(重点)
* **第三阶段:** 数据库 SQL 基础，包括增删改查操作以及多表查询。Oracle Mysql 二选一吧。(我的项目都是用的 Mysql
* **第四阶段:** JDBC 编程:包括 JDBC 原理， JDBC 连接库， JDBC API，虽然现在 Hibernate 比 JDBC 要方便许多，但是 JDBC 技术仍然在使用， JDBC 思想尤为重要。
* **第五阶段:** JDBC 深入理解高级特性：包括数据库连接池，存储过程，触发器， CRM 思想(高级)这个比较不好懂，有时间的可以学习。
* **第六阶段:** Servlet 开发，从此开始踏入 JavaWeb 开发的重要一步，包括XML， Tomcat 服务器的安装使用操作， HTTP 协议简单理解，Servlet API 等， Java Web 开发的基础。(重要)
* **第七阶段:** JSP 开发: JSP 语法和标签，自定义标签， EL , JSTL 库了解以及 MVC 三层架构的设计模式理念。
* **第八阶段:** 三大框架- Spring 、 SpringMVC 、 MyBatis ， JavaWeb 的精华部分(重要)
* **第九阶段:** 当学习完这些知识后，你就可以深层次的学习一些企业框架， Maven 、 redis 、 log4j 等等。

## 转 研发技术成长路线

**Java研发技术成长路线**

作为一名Java研发者，深感Java技术的学习是一个漫长过程，从一名Java菜鸟开始，加之持之以恒的耐心和脚踏实地的精神，不间断理论的学习，不停止技术实践，终成为一名技术佼佼者。引用一句名言，就是：“古今之成大事者，不惟有超世之才，亦必有坚韧不拔之志。”

鉴于个人心得体会，把Java技术学习路线暂分成以下五个阶段，每一阶段会涉及到很多其他的相关技术，五个阶段学习顺序不一定完全遵循，但可根据自身学习进度进行相应调整。

在开始介绍五个阶段之前划定一下学习要求用词

**精通：** 深入的研究和认识，很好的问题解决能力；

**熟练：** 具备系统的知识和应用能力，较好完成相关工作；

**掌握：** 具备基本知识结构，可以运用完成相关工作；

**理解：** 初步认识，有相关学习经验。

**第一阶段：JavaSE从入门到高级**

这个阶段是所有Java入门学习者必经阶段，也是入门阶段，一定要多花时间，夯实基础。精通Java基础知识；精通面向对象；熟练常用工具API；熟练IDE工具使用；

掌握和理解Java高级。

**第二阶段：JavaEE之JavaWeb**

这个阶段是所有已经学习过Java基础知识，想要继续学习B/S应用开发学习者必经第2阶段，也是JavaWeb入门与深入阶段，更加需要花大量时间，夯实基础，才能在后续开发框架的学习中如鱼得水，本阶段学习要求：掌握JavaWeb前端基础HTML，CSS；熟练JavaWeb前端基础JavaScript，jQuery；精通JavaWeb基础Servlet相关技术；精通JavaWeb进阶Jsp相关技术；掌握JavaWeb高级相关技术；精通JavaWeb之JDBC相关技术

**第三阶段：JavaEE之主流开发框架**

这个阶段是所有已经学习过Javaweb基础技术的开发者，想要继续学习B/S应用开发主流框架学习者必经第3阶段，只有能够熟练运用这些开发框架，才能够更好的胜任日常工作中的开发，当然也是对自身技术实力的一种扩充，可以说是Java后端开发者的必备技能。本阶段学习要求：熟练运用Struts2；精通Spring；精通SpringMVC；熟练Hibernate；熟练Mybatis；熟练Maven；熟练SSH框架和SSM框架；

**第四阶段：JavaEE之其他开发框架与技术**

这个阶段中提到的其他框架技术，是日常工作所进行的项目中会用到的一些技术框架，虽说学习技术在精，但是在精通常规技术的同时能够熟练运用一些开发的框架，会让自己有更加充实的感觉。这阶段的要求是熟练运用Mongdb,Oracle,Bootstrap，Easy Ui，其他技术框架能够掌握即可，在使用的时候多查资料。

**第五阶段：JavaEE之分布式框架**

这个阶段一般是针对参加工作2-3年以后，想要在技术上继续深造，可以选择1-2个方向深入研究下去，切记只浮于表面，要知道想要某一门技术成为你的技术优势，你对这门技术的掌握程度要超过绝大部分人才行，要想与众不同，体现出与别人的差异性，你要选择一个感兴趣或者擅长的领域深入钻研下去，成为该领域的专家，那时的你才算是优秀的，不可替代的。想要成为分布式缓存框架的专家，你就应该先研究国内外主流的缓存框架，这一般需要较长时间，最终能够推出自己的缓存框架作品，独挡一面，这才是领域专家。

技术研究的道路漫漫修远，合理规划自身的发展路线，有较清晰明确的人生规划，我相信每一个坚持不懈，积极进取的人都可以实现自己的梦想，成为赢家。
`,
    star: true,
    tags: ['程序开发', '学习心得'],
    views: 1024,
    ctime: 1611283743,
    mtime: 1611370143
  }
]

const fs = require('fs')

const infoList = JSON.stringify([...ps1, ...ps2])
const detailList = JSON.stringify([...de1, ...de2])
try {
  const d1 = fs.writeFileSync('./info-list.json', infoList)
  const d2 = fs.writeFileSync('./detail-list.json', detailList)
  console.log('写入成功')
} catch (e) {
  console.log(e)
}