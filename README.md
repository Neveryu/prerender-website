# A beautiful website with tour

Vue.js 2.0 + vue-router Prerender SPA Example

Demonstrates usage of Vuejs 2.0 with Vue Router and Webpack 3. Build will generate 6 static routes at the following paths:

- `/`
- `/home`
- `/information`
- `/ticket`
- `/scenery`
- `/about`

## Build
``` bash
npm install
npm run build
```

Now check the new `dist` directory for your prerendered static files!

To view the rendered files, you can
``` bash
npm run prod
```

Now visit the following routes in your browser (note the trailing slash):

- [http://localhost:9999/](http://localhost:9999/)
- [http://localhost:9999/home](http://localhost:9999/home)
- [http://localhost:9999/information/](http://localhost:9999/information/)
- [http://localhost:9999/ticket/](http://localhost:9999/ticket/)
- [http://localhost:9999/scenery/](http://localhost:9999/scenery/)
- [http://localhost:9999/about/](http://localhost:9999/about/)

## Development

To edit the `prerender-spa-plugin` configuration, look for `new PrerenderSPAPlugin` in the plugins section of `webpack.config.js`.

If you're using a router or have more than one page to prerender, edit the `routes` array under that config object.

``` bash
npm install
npm run dev
```

## Tip

- 1.1 在开发过程中(`npm run dev`)，`vue-router` 请务必使用 `history` 模式。
- 2.1 如果你的项目是部署在根目录下的话，那么你可以直接打包(`npm run build`)
，然后进行部署。
- 2.2 如果你的项目要部署在子目录下的话，那么你可能要注意了，这个时候你的 `vue-router` 不应该使用 `history` 模式，与此同时，`publicPath` 也应修改为 `./`


## Note
在写这个项目的时候也记录了几个知识点：[关于本项目中的知识点](./project-note.md)

## Communication

欢迎加入 QQ 群，共同学习讨论，QQ 群：[685486827](//shang.qq.com/wpa/qunwpa?idkey=32da7a18744756b0d8ffdd05b84999afecb5265dbad0fb119033e122abe803f3) ，<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=32da7a18744756b0d8ffdd05b84999afecb5265dbad0fb119033e122abe803f3">一键加群</a>

<img src="https://neveryu.github.io/images/qq-group.png" alt="vue-music" width="250">



