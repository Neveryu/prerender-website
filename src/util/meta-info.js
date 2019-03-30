function getTitle(vm) {
  const { title } = vm.$options
  if(title) {
    return typeof title === 'function' ? title.call(vm) : title
  }
}

const metaInfoMixin = {
  metaInfo: {
    meta: [{
      name: 'keywords',
      content: 'Vue, vue-router, vue-meta-info, prerender-spa-plugin, 预渲染'
    }],
    link: [{
      rel: 'assets',
      href: 'https://github.com/Neveryu/prerender-website'
    }]
  },
  mounted() {
    const title = getTitle(this)
    if(title) {
      document.title = `Yu Vue 旅行社 | ${ title }`
    }
  }
}

export default metaInfoMixin
