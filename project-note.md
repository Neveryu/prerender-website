# 关于这个项目中的一些知识点

0、 有了预渲染，我们可以解决很多方面的 `SEO` 问题，但有时候我们也会需要 `meta` 信息的变化，比如 `title`，`meta keywords` 或者是 `link`；那么这里我们可以使用 `vue-meta-info`，一个可以动态设置 `meta` 信息的 `Vue` 插件，如果需要单页面 `SEO`，可以和 `prerender-spa-plugin` 形成更好的配合。

`vue-meta-info` 是一个基于 `Vue 2.0` 的插件，它会让你更好的管理你的 `app` 里的 `meta` 信息。你可以直接在组件内设置 `metaInfo` 便可以自动挂载到你的页面中。如果你需要随着页面的变化，自动更新你的 `Title`、`meta`等信息，那么用此插件非常合适。

1、本项目使用的是 `stylus` 来写样式，关于 `webpack` 中如何配置加载 `.styl` 格式的文件（使用了 `vue-style-loader`）：
```
{
  test: /\.styl$/,
  loader: 'vue-style-loader!css-loader!stylus-loader'
}
```

2、Logo 采用的是 h1 标签，一般是为了让搜索引擎更好的抓取关键字，我们建议一个页面只有一个 h1，而且是最重要的关键词放在里面。在首页上，最重要的关键词就是网站的名称。当然，如果在其他页面，比如新闻网站的单个新闻，最重要的应该是新闻标题，网站的名称就其次了。

3、HTML5 大纲算法（HTML5 Outliner）
它的用途是为用户提供一份页面的信息结构目录。比如我们经常使用的手册就是一个非常好的大纲结构。

合理的使用 HTML5 元素标签，可以生成一个非常清晰的文档大纲，我们可以通过各种工具去查看当前页面，比如谷歌和火狐的插件可以查看当前的 HTML5 大纲。这里我们推荐使用一个服务器端的测试工具：HTML 5 Outliner，网址如下：

测试工具：[https://gsnedders.html5.org/outliner](https://gsnedders.html5.org/outliner)

如果你的页面在这里测试，大纲都比较清晰，那么 HTML5 页面是比较规范的。

第一个标题是 根，应该是在 `body` 下：

```
// 增加 body 标题，解决大纲问题
<body>
  <h1>Body 大标题</h1>
  ...
</body>
```

4、section 和 div
div 元素在 HTML5 之前就是非常常用的标签，它本身没有任何语义，用来页面布局和 CSS 样式以及 JS 调用。

- 如果是页面布局，且不是 header、footer 之类的专属区域，都应该使用 div；
- 如果只是单纯的对一个端内容进行 CSS 样式定义，那么也应该使用 div；
- 如果想对一段内容进行 JS 控制，那么也应该使用 div。

html5 中，section 并不是用来取代 div 的。它是具有语义的文档标签。表示一段文档中的章节，比如包含一个标题和一个段落，而大纲规范中，至少要包含一个标题。

```
// section 至少需要一个 h1 ~ h6
<section>
  <h2>Never Yu</h2>
  <p><a href="https://neveryu.github.io/neveryu/">https://neveryu.github.io/neveryu/</a></p>
</section>
```

- header 元素不需要强制标题 h1 ~ h6，如果有标题，算 body 的。这样主大纲标题就有了；
- section 和 nav 元素大纲要求有标题 h1 ~ h6，但 section 必须有才规范，而 nav 如果没有标题，也是合理的。当然，添加上标题会让大纲更加好看，页面中可以隐藏。


`section`、`nav`、`body` 标签都是需要标题的，`div`、`header` 标签不需要标题。

5、关于多个 `a` 标签更规范的写法
比如：
```
// 松散的 <a> 标签
<a href="###">item1</a>
<a href="###">item2</a>
<a href="###">item3</a>
```
这样写使用多个标签有什么问题？具体如下：

- 从语义不明确，如果外部包含 ul 可以理解为标签列表
- 从 css 布局排版上，ul 作为一个整体，更容易统一排版
- 从 seo 角度考虑，大量 a 标签有可能会被判定堆积关键字嫌疑，从而导致网站降权，用 ul 包含判断则让搜索引擎判定为有条例的列表，对搜索引擎更加友好

```
// 改成这种形式
<ul>
    <li><a href="###">item1</a></li>
    <li><a href="###">item2</a></li>
    <li><a href="###">item3</a></li>
</ul>
```

6、关于 Node 中 `resolve` 和 `join` 的区别

> 以下为我个人见解（能让我明白就行），官方介绍请自行 google

6.1 `path.join`

`path.join()` 方法可以连接任意多个路径字符串。要连接的多个路径可做为参数传入。
用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是 `/` ，Windows系统是 `\`。

```
path.join(__dirname, 'dist/static')
```

其实就是字符串的拼接，对于 `./` 和 `../` 会进行正常的路径变化，对于 `/baz` 这样的以 `/` 开头的目录，会直接拼接。

6.2 `path.resolve`

`path.resolve()` 总是返回一个以相当于当前的工作目录的绝对路径。

```
path.resolve(__dirname, './static')
```

`path.resolve()` 可以简单的理解为对每个参数依次执行 `cd` 命令，最后执行 `pwd` 命令就是结果。【所以，谨慎使用 `/` 开头的路径】

---

7、
在 `main.js` 中：
```
mounted () {
// You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
}
```
这个是必须的，因为只有这里触发了事件 `render-evnet`，`prerender-spa-plugin` 才会开始预渲染。

因为我们在 `PrerenderSPAPlugin` 插件中配置了：`renderAfterDocumentEvent: 'render-event'`；所以这两个地方一定要对应上。

8、关于项目开发以及部署，最重要的说明：

- 1.1 在开发过程中(`npm run dev`)，`vue-router` 请务必使用 `history` 模式。
- 2.1 如果你的项目是部署在根目录下的话，那么你可以直接打包(`npm run build`)
，然后进行部署。
- 2.2 如果你的项目要部署在子目录下的话，那么你可能要注意了，这个时候你的 `vue-router` 不应该使用 `history` 模式，与此同时，`publicPath` 也应修改为 `./`