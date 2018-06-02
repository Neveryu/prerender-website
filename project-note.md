# 关于这个项目中的一些知识点

1、本项目使用的是 `stylus` 来写样式，关于 `webpack` 中如何配置加载 `.styl` 格式的文件（使用了 `vue-style-loader`）：
``` javascript
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

``` html
// section 至少需要一个 h1 ~ h6
<section>
  <h2>Never Yu</h2>
  <p><a href="https://neveryu.github.io/neveryu/">https://neveryu.github.io/neveryu/</a></p>
</section>
```

- header 元素不需要强制标题 h1 ~ h6，如果有标题，算 body 的。这样主大纲标题就有了；
- section 和 nav 元素大纲要求有标题 h1 ~ h6，但 section 必须有才规范，而 nav 如果没有标题，也是合理的。当然，添加上标题会让大纲更加好看，页面中可以隐藏。


`section`、`nav`、`body` 标签都是需要标题的，`div`、`header` 标签不需要标题。

5、





