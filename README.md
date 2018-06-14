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
```
npm install
npm run build
```

Now check the new `dist` directory for your prerendered static files!

To view the rendered files, you can `npm run prod` if you haven't already and run it in the dist directory.

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

```bash
npm install
npm run dev
```
