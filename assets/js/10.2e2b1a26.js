(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{200:function(t,n,e){"use strict";e.r(n);var a=e(0),r=Object(a.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"html"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),e("pre",[e("code",[t._v("1. web概念概述\n2. HTML\n")])]),t._v(" "),e("h2",{attrs:{id:"web概念概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web概念概述","aria-hidden":"true"}},[t._v("#")]),t._v(" web概念概述")]),t._v(" "),e("pre",[e("code",[t._v("* JavaWeb：\n\t* 使用Java语言开发基于互联网的项目\n\n* 软件架构：\n\t1. C/S: Client/Server 客户端/服务器端\n\t\t* 在用户本地有一个客户端程序，在远程有一个服务器端程序\n\t\t* 如：QQ，迅雷...\n\t\t* 优点：\n\t\t\t1. 用户体验好\n\t\t* 缺点：\n\t\t\t1. 开发、安装，部署，维护 麻烦\n\t2. B/S: Browser/Server 浏览器/服务器端\n\t\t* 只需要一个浏览器，用户通过不同的网址(URL)，客户访问不同的服务器端程序\n\t\t* 优点：\n\t\t\t1. 开发、安装，部署，维护 简单\n\t\t* 缺点：\n\t\t\t1. 如果应用过大，用户的体验可能会受到影响\n\t\t\t2. 对硬件要求过高\n\n* B/S架构详解\n\t* 资源分类：\n\t\t1. 静态资源：\n\t\t\t* 使用静态网页开发技术发布的资源。\n\t\t\t* 特点：\n\t\t\t\t* 所有用户访问，得到的结果是一样的。\n\t\t\t\t* 如：文本，图片，音频、视频, HTML,CSS,JavaScript\n\t\t\t\t* 如果用户请求的是静态资源，那么服务器会直接将静态资源发送给浏览器。浏览器中内置了静态资源的解析引擎，可以展示静态资源\n\t\t2. 动态资源：\n\t\t\t* 使用动态网页及时发布的资源。\n\t\t\t* 特点：\n\t\t\t\t* 所有用户访问，得到的结果可能不一样。\n\t\t\t\t* 如：jsp/servlet,php,asp...\n\t\t\t\t* 如果用户请求的是动态资源，那么服务器会执行动态资源，转换为静态资源，再发送给浏览器\n\n\n\t* 我们要学习动态资源，必须先学习静态资源！\n\n\t* 静态资源：\n\t\t* HTML：用于搭建基础网页，展示页面的内容\n\t\t* CSS：用于美化页面，布局页面\n\t\t* JavaScript：控制页面的元素，让页面有一些动态的效果\n")])]),t._v(" "),e("h2",{attrs:{id:"html-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-2","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),e("pre",[e("code",[t._v('1. 概念：是最基础的网页开发语言\n\t* Hyper Text Markup Language 超文本标记语言\n\t\t* 超文本:\n\t\t\t* 超文本是用超链接的方法，将各种不同空间的文字信息组织在一起的网状文本.\n\t\t* 标记语言:\n\t\t\t* 由标签构成的语言。<标签名称> 如 html，xml\n\t\t\t* 标记语言不是编程语言\n\n2. 快速入门：\n\t* 语法：\n\t\t1. html文档后缀名 .html 或者 .htm\n\t\t2. 标签分为\n\t\t\t1. 围堵标签：有开始标签和结束标签。如 <html> </html>\n\t\t\t2. 自闭和标签：开始标签和结束标签在一起。如 <br/>\n\n\t\t3. 标签可以嵌套：\n\t\t\t需要正确嵌套，不能你中有我，我中有你\n\t\t\t错误：<a><b></a></b>\n\t\t\t正确：<a><b></b></a>\n\n\t\t4. 在开始标签中可以定义属性。属性是由键值对构成，值需要用引号(单双都可)引起来\n\t\t5. html的标签不区分大小写，但是建议使用小写。\n\n\t* 代码：\n\t\t<html>\n\t\t\n\t\t\t<head>\n\t\t\t\t<title>title</title>\n\t\t\t</head>\n\t\t\t\n\t\t\t<body>\n\t\t\t\t<FONT color=\'red\'>Hello World</font><br/>\n\t\t\t\t\n\t\t\t\t<font color=\'green\'>Hello World</font>\n\t\t\t\n\t\t\t</body>\n\t\n\t\t</html>\n\n3. 标签学习：\n\t1. 文件标签：构成html最基本的标签\n\t\t* html:html文档的根标签\n\t\t* head：头标签。用于指定html文档的一些属性。引入外部的资源\n\t\t* title：标题标签。\n\t\t* body：体标签\n\t\t* <!DOCTYPE html>：html5中定义该文档是html文档\n\t2. 文本标签：和文本有关的标签\n\t\t* 注释：\x3c!-- 注释内容 --\x3e\n\t\t* <h1> to <h6>：标题标签\n\t\t\t* h1~h6:字体大小逐渐递减\n\t\t* <p>：段落标签\n\t\t* <br>：换行标签\n\t\t* <hr>：展示一条水平线\n\t\t\t* 属性：\n\t\t\t\t* color：颜色\n\t\t\t\t* width：宽度\n\t\t\t\t* size：高度\n\t\t\t\t* align：对其方式\n\t\t\t\t\t* center：居中\n\t\t\t\t\t* left：左对齐\n\t\t\t\t\t* right：右对齐\n\t\t* <b>：字体加粗\n\t\t* <i>：字体斜体\n\t\t* <font>:字体标签\n\t\t* <center>:文本居中\n\t\t\t* 属性：\n\t\t\t\t* color：颜色\n\t\t\t\t* size：大小\n\t\t\t\t* face：字体\n\n\t\t* 属性定义：\n\t\t\t* color：\n\t\t\t\t1. 英文单词：red,green,blue\n\t\t\t\t2. rgb(值1，值2，值3)：值的范围：0~255  如  rgb(0,0,255)\n\t\t\t\t3. #值1值2值3：值的范围：00~FF之间。如： #FF00FF\n\t\t\t* width：\n\t\t\t\t1. 数值：width=\'20\' ,数值的单位，默认是 px(像素)\n\t\t\t\t2. 数值%：占比相对于父元素的比例\n\n\t\t* 案例：公司简介\n\t\t\t<!DOCTYPE html>\n\t\t\t<html lang="ch">\n\t\t\t<head>\n\t\t\t    <meta charset="UTF-8">\n\t\t\t    <title>黑马程序员简介</title>\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\n\t\t\t<h1>\n\t\t\t    公司简介\n\t\t\t</h1>\n\t\t\t<hr color="#ffd700">\n\t\t\t\n\t\t\t<p>\n\t\t\t<font color="#FF0000">"中关村黑马程序员训练营"</font>是由<b><i>传智播客</i></b>联合中关村软件园、CSDN， 并委托传智播客进行教学实施的软件开发高端培训机构，致力于服务各大软件企业，解决当前软件开发技术飞速发展， 而企业招不到优秀人才的困扰。\n\t\t\t</p>\n\t\t\t\n\t\t\t<p>\n\t\t\t目前，“中关村黑马程序员训练营”已成长为行业“学员质量好、课程内容深、企业满意”的移动开发高端训练基地， 并被评为中关村软件园重点扶持人才企业。\n\t\t\t</p>\n\t\t\t\n\t\t\t<p>\n\t\t\t\n\t\t\t黑马程序员的学员多为大学毕业后，有理想、有梦想，想从事IT行业，而没有环境和机遇改变自己命运的年轻人。 黑马程序员的学员筛选制度，远比现在90%以上的企业招聘流程更为严格。任何一名学员想成功入学“黑马程序员”， 必须经历长达2个月的面试流程，这些流程中不仅包括严格的技术测试、自学能力测试，还包括性格测试、压力测试、 品德测试等等测试。毫不夸张地说，黑马程序员训练营所有学员都是精挑细选出来的。百里挑一的残酷筛选制度确 保学员质量，并降低企业的用人风险。\n\t\t\t中关村黑马程序员训练营不仅着重培养学员的基础理论知识，更注重培养项目实施管理能力，并密切关注技术革新， 不断引入先进的技术，研发更新技术课程，确保学员进入企业后不仅能独立从事开发工作，更能给企业带来新的技术体系和理念。\n\t\t\t</p>\n\t\t\t\n\t\t\t<p>\n\t\t\t\n\t\t\t一直以来，黑马程序员以技术视角关注IT产业发展，以深度分享推进产业技术成长，致力于弘扬技术创新，倡导分享、 开放和协作，努力打造高质量的IT人才服务平台。\n\t\t\t</p>\n\t\t\t\n\t\t\t<hr color="#ffd700">\n\t\t\t\n\t\t\t<font color="gray" size="2">\n\t\t\t    <center>\n\t\t\t        江苏传智播客教育科技股份有限公司<br>\n\t\t\t        版权所有Copyright 2006-2018&copy;, All Rights Reserved 苏ICP备16007882\n\t\t\t    </center>\n\t\t\t</font>\n')])]),t._v(" "),e("p",[t._v("​\t\t\t\t\n")]),t._v(" "),e("pre",[e("code",[t._v('\t3. 图片标签：\n\t\t* img：展示图片\n\t\t\t* 属性：\n\t\t\t\t* src：指定图片的位置\n\n\t\t* 代码：\n\t\t\t \x3c!--展示一张图片 img--\x3e\n\n\t\t    <img src="image/jingxuan_2.jpg" align="right" alt="古镇" width="500" height="500"/>\n\t\t\n\t\t    \x3c!--\n\t\t        相对路径\n\t\t            * 以.开头的路径\n\t\t                * ./：代表当前目录  ./image/1.jpg\n\t\t                * ../:代表上一级目录\n\t\t     --\x3e\n\t\t\n\t\t    <img src="./image/jiangwai_1.jpg">\n\t\t\n\t\t    <img src="../image/jiangwai_1.jpg">\n\t4. 列表标签：\n\t\t* 有序列表：\n\t\t\t* ol:\n\t\t\t* li:\n\t\t* 无序列表：\n\t\t\t* ul:\n\t\t\t* li:\n\t5. 链接标签：\n\t\t* a:定义一个超链接\n\t\t\t* 属性：\n\t\t\t\t* href：指定访问资源的URL(统一资源定位符)\n\t\t\t\t* target：指定打开资源的方式\n\t\t\t\t\t* _self:默认值，在当前页面打开\n\t\t\t\t\t* _blank：在空白页面打开\n\n\t\t* 代码：\n\t\t\t \x3c!--超链接  a--\x3e\n\n\t\t    <a href="http://www.itcast.cn">点我</a>\n\t\t    <br>\n\t\t\n\t\t    <a href="http://www.itcast.cn" target="_self">点我</a>\n\t\t    <br>\n\t\t    <a href="http://www.itcast.cn" target="_blank">点我</a>\n\t\t\n\t\t    <br>\n\t\t\n\t\t    <a href="./5_列表标签.html">列表标签</a><br>\n\t\t    <a href="mailto:itcast@itcast.cn">联系我们</a>\n\t\t\n\t\t    <br>\n\t\t    <a href="http://www.itcast.cn"><img src="image/jiangwai_1.jpg"></a>\n\t6. div和span：\n\t\t* div:每一个div占满一整行。块级标签\n    \t* span：文本信息在一行展示，行内标签 内联标签\n\n\t7. 语义化标签：html5中为了提高程序的可读性，提供了一些标签。\n\t\t1. <header>：页眉\n\t\t2. <footer>：页脚\n\n\n\t8. 表格标签：\n\t\t* table：定义表格\n\t\t\t* width：宽度\n\t\t\t* border：边框\n\t\t\t* cellpadding：定义内容和单元格的距离\n\t\t\t* cellspacing：定义单元格之间的距离。如果指定为0，则单元格的线会合为一条、\n\t\t\t* bgcolor：背景色\n\t\t\t* align：对齐方式\n\t\t* tr：定义行\n\t\t\t* bgcolor：背景色\n\t\t\t* align：对齐方式\n\t\t* td：定义单元格\n\t\t\t* colspan：合并列\n\t\t\t* rowspan：合并行\n\t\t* th：定义表头单元格\n\t\t* <caption>：表格标题\n\t\t* <thead>：表示表格的头部分\n\t\t* <tbody>：表示表格的体部分\n\t\t* <tfoot>：表示表格的脚部分\n')])]),t._v(" "),e("h2",{attrs:{id:"案例：旅游网站首页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#案例：旅游网站首页","aria-hidden":"true"}},[t._v("#")]),t._v(" 案例：旅游网站首页")]),t._v(" "),e("pre",[e("code",[t._v('1. 确定使用table来完成布局\t\n2. 如果某一行只有一个单元格，则使用<tr><td></td></tr>\n3. 如果某一行有多个单元格，则使用\n\t<tr>\n\t\t<td>\n\t\t\t<table></table>\n\t\t</td>\n\t</tr>\n\n4. 代码实现\n\n\t<!DOCTYPE html>\n\t<html lang="en">\n\t<head>\n\t    <meta charset="UTF-8">\n\t    <title>黑马旅游网</title>\n\t</head>\n\t<body>\n\t\n\t    \x3c!--采用table来完成布局--\x3e\n\t    \x3c!--最外层的table，用于整个页面的布局--\x3e\n\t    <table width="100%" align="center">\n\t       \x3c!-- 第1行 --\x3e\n\t        <tr>\n\t            <td>\n\t                <img src="image/top_banner.jpg" width="100%" alt="">\n\t            </td>\n\t        </tr>\n\t\n\t        \x3c!-- 第2行 --\x3e\n\t        <tr>\n\t            <td>\n\t                <table width="100%" align="center">\n\t                    <tr>\n\t                        <td>\n\t                            <img src="image/logo.jpg" alt="">\n\t                        </td>\n\t                        <td>\n\t                            <img src="image/search.png" alt="">\n\t                        </td>\n\t                        <td>\n\t                            <img src="image/hotel_tel.png" alt="">\n\t                        </td>\n\t                    </tr>\n\t                </table>\n\t\n\t            </td>\n\t        </tr>\n\t\n\t        \x3c!-- 第3行 --\x3e\n\t        <tr>\n\t            <td>\n\t                <table width="100%" align="center">\n\t                    <tr bgcolor="#ffd700" align="center" height="45" >\n\t                        <td>\n\t                            <a href="">首页</a>\n\t                        </td>\n\t\n\t                        <td>\n\t                            门票\n\t                        </td>\n\t\n\t                        <td>\n\t                            门票\n\t                        </td>\n\t\n\t                        <td>\n\t                            门票\n\t                        </td>\n\t\n\t                        <td>\n\t                            门票\n\t                        </td>\n\t\n\t                        <td>\n\t                            门票\n\t                        </td>\n\t\n\t                        <td>\n\t                            门票\n\t                        </td>\n\t\n\t                        <td>\n\t                            门票\n\t                        </td>\n\t\n\t                        <td>\n\t                            门票\n\t                        </td>\n\t\n\t                        <td>\n\t                            门票\n\t                        </td>\n\t                    </tr>\n\t                </table>\n\t            </td>\n\t        </tr>\n\t\n\t        \x3c!-- 第4行 轮播图 --\x3e\n\t        <tr>\n\t            <td>\n\t                <img src="image/banner_3.jpg" alt="" width="100%">\n\t            </td>\n\t        </tr>\n\t\n\t        \x3c!-- 第5行 黑马精选--\x3e\n\t        <tr>\n\t            <td>\n\t                <img src="image/icon_5.jpg" alt="">\n\t                黑马精选\n\t                <hr  color="#ffd700" >\n\t            </td>\n\t        </tr>\n\t\n\t        \x3c!-- 第6行 --\x3e\n\t        <tr>\n\t            <td>\n\t                <table align="center" width="95%">\n\t                    <tr>\n\t                        <td>\n\t\n\t                            <img src="image/jiangxuan_1.jpg" alt="">\n\t                            <p>上海飞三亚五天4晚自由行(春节销售+亲子+蜜月+自由行)</p>\n\t                            <font color="red">&yen; 899</font>\n\t                        </td>\n\t\n\t                        <td>\n\t\n\t                            <img src="image/jiangxuan_1.jpg" alt="">\n\t                            <p>上海飞三亚五天4晚自由行(春节销售+亲子+蜜月+自由行)</p>\n\t                            <font color="red">&yen; 899</font>\n\t                        </td>\n\t\n\t                        <td>\n\t\n\t                            <img src="image/jiangxuan_1.jpg" alt="">\n\t                            <p>上海飞三亚五天4晚自由行(春节销售+亲子+蜜月+自由行)</p>\n\t                            <font color="red">&yen; 899</font>\n\t                        </td>\n\t\n\t                        <td>\n\t\n\t                            <img src="image/jiangxuan_1.jpg" alt="">\n\t                            <p>上海飞三亚五天4晚自由行(春节销售+亲子+蜜月+自由行)</p>\n\t                            <font color="red">&yen; 899</font>\n\t                        </td>\n\t                    </tr>\n\t                </table>\n\t            </td>\n\t        </tr>\n\t\n\t        \x3c!-- 第7行 国内游 --\x3e\n\t        <tr>\n\t            <td>\n\t                <img src="image/icon_6.jpg" alt="">\n\t                国内游\n\t                <hr  color="#ffd700" >\n\t            </td>\n\t        </tr>\n\t\n\t        \x3c!-- 第8行 --\x3e\n\t        <tr>\n\t            <td>\n\t                <table align="center" width="95%">\n\t                    <tr>\n\t                        <td rowspan="2">\n\t                            <img src="image/guonei_1.jpg" alt="">\n\t                        </td>\n\t\n\t                        <td>\n\t\n\t                            <img src="image/jiangxuan_2.jpg" alt="" height="100%">\n\t                            <p>上海飞三亚五天4晚自由行(春节销售+亲子+蜜月+自由行)</p>\n\t                            <font color="red">&yen; 699</font>\n\t                        </td>\n\t\n\t                        <td>\n\t\n\t                            <img src="image/jiangxuan_2.jpg" alt="">\n\t                            <p>上海飞三亚五天4晚自由行(春节销售+亲子+蜜月+自由行)</p>\n\t                            <font color="red">&yen; 699</font>\n\t                        </td>\n\t\n\t                        <td>\n\t\n\t                            <img src="image/jiangxuan_2.jpg" alt="">\n\t                            <p>上海飞三亚五天4晚自由行(春节销售+亲子+蜜月+自由行)</p>\n\t                            <font color="red">&yen; 699</font>\n\t                        </td>\n\t                    </tr>\n\t\n\t                    <tr>\n\t                        <td>\n\t\n\t                            <img src="image/jiangxuan_2.jpg" alt="">\n\t                            <p>上海飞三亚五天4晚自由行(春节销售+亲子+蜜月+自由行)</p>\n\t                            <font color="red">&yen; 699</font>\n\t                        </td>\n\t\n\t                        <td>\n\t\n\t                            <img src="image/jiangxuan_2.jpg" alt="">\n\t                            <p>上海飞三亚五天4晚自由行(春节销售+亲子+蜜月+自由行)</p>\n\t                            <font color="red">&yen; 699</font>\n\t                        </td>\n\t\n\t                        <td>\n\t\n\t                            <img src="image/jiangxuan_2.jpg" alt="">\n\t                            <p>上海飞三亚五天4晚自由行(春节销售+亲子+蜜月+自由行)</p>\n\t                            <font color="red">&yen; 699</font>\n\t                        </td>\n\n\n\t                    </tr>\n\t                </table>\n\t            </td>\n\t        </tr>\n\t\n\t        \x3c!-- 第9行 境外游 --\x3e\n\t        <tr>\n\t            <td>\n\t                <img src="image/icon_7.jpg" alt="">\n\t                境外游\n\t                <hr  color="#ffd700" >\n\t            </td>\n\t        </tr>\n\t\n\t        \x3c!-- 第10行 --\x3e\n\t        <tr>\n\t            <td>\n\t                <table align="center" width="95%">\n\t                    <tr>\n\t                        <td rowspan="2">\n\t                            <img src="image/jiangwai_1.jpg" alt="">\n\t                        </td>\n\t\n\t                        <td>\n\t\n\t                            <img src="image/jiangxuan_3.jpg" alt="" height="100%">\n\t                            <p>上海飞三亚五天4晚自由行(春节销售+亲子+蜜月+自由行)</p>\n\t                            <font color="red">&yen; 699</font>\n\t                        </td>\n\t\n\t                        <td>\n\t\n\t                           <img src="image/jiangxuan_3.jpg" alt="">\n\t                            <p>上海飞三亚五天4晚自由行(春节销售+亲子+蜜月+自由行)</p>\n\t                            <font color="red">&yen; 699</font>\n\t                        </td>\n\t\n\t                        <td>\n\t\n\t                           <img src="image/jiangxuan_3.jpg" alt="">\n\t                            <p>上海飞三亚五天4晚自由行(春节销售+亲子+蜜月+自由行)</p>\n\t                            <font color="red">&yen; 699</font>\n\t                        </td>\n\t                    </tr>\n\t\n\t                    <tr>\n\t                        <td>\n\t\n\t                           <img src="image/jiangxuan_3.jpg" alt="">\n\t                            <p>上海飞三亚五天4晚自由行(春节销售+亲子+蜜月+自由行)</p>\n\t                            <font color="red">&yen; 699</font>\n\t                        </td>\n\t\n\t                        <td>\n\t\n\t                           <img src="image/jiangxuan_3.jpg" alt="">\n\t                            <p>上海飞三亚五天4晚自由行(春节销售+亲子+蜜月+自由行)</p>\n\t                            <font color="red">&yen; 699</font>\n\t                        </td>\n\t\n\t                        <td>\n\t\n\t                           <img src="image/jiangxuan_3.jpg" alt="">\n\t                            <p>上海飞三亚五天4晚自由行(春节销售+亲子+蜜月+自由行)</p>\n\t                            <font color="red">&yen; 699</font>\n\t                        </td>\n\n\n\t                    </tr>\n\t                </table>\n\t            </td>\n\t        </tr>\n\t        \x3c!-- 第11行 --\x3e\n\t        <tr>\n\t            <td>\n\t                <img src="image/footer_service.png" alt="" width="100%">\n\t            </td>\n\t        </tr>\n\t\n\t        \x3c!-- 第12行 --\x3e\n\t        <tr>\n\t            <td align="center" bgcolor="#ffd700" height="40">\n\t                <font color="gray" size="2">\n\t                江苏传智播客教育科技股份有限公司\n\t                版权所有Copyright 2006-2018&copy;, All Rights Reserved 苏ICP备16007882\n\t                </font>\n\t            </td>\n\t        </tr>\n\t        \n\t    </table>\n\n\n\t</body>\n\t</html>')])])])},[],!1,null,null,null);n.default=r.exports}}]);