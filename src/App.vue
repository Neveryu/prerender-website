<template>
  <div id="app">
    <header id="header">
      <div class="center">
        <h1 class="logo">带你去旅行</h1>
        <nav class="link">
          <h2 class="none">网站导航</h2>
          <ul>
            <li v-for="menu of menus" :class="isActive(menu.path) ? 'active' : '' ">
              <router-link :to="menu.path">{{menu.name}}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <router-view></router-view>
    <yu-footer></yu-footer>
  </div>
</template>

<script>
import YuFooter from '@/components/footer'
export default {
  name: 'app',
  components: {
    YuFooter
  },
  data() {
    return {
      menus: [
        { path: '/home', name: '首页'},
        { path: '/information', name: '旅游咨询'},
        { path: '/ticket', name: '机票订购'},
        { path: '/scenery', name: '风景欣赏'},
        { path: '/about', name: '公司简介'}
      ]
    }
  },
  methods: {
    isActive(route) {
      return route === this.$route.path || route === this.$route.fullPath
    }
  },
  watch: {
    $route() {
      // console.log(this.$route)
    }
  }
}
</script>

<style scoped lang="stylus">
  #header
    position: relative
    width 100%
    min-width 1263px
    height 70px
    background-color #333
    box-shadow 0 1px 10px rgba(0, 0, 0, .3)
    z-index 9999
    .center
      width 1263px
      height 70px
      margin 0 auto
      .logo
        width 240px
        height 70px
        float left
        text-indent -9999px
        background-image url('~@/assets/logo1.png')
        background-size contain
        background-repeat no-repeat
      .link
        float right
        width 650px
        height 70px
        line-height 70px
        color #eee
        .none
          display none
        li
          float left
          width 120px
          text-align center
          a
            display block
            color #eee
            &:hover
              background-color #000
        li.active
          a
            background-color #000
</style>
