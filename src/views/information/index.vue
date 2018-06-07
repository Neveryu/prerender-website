<template>
  <div>
    <yu-header></yu-header>
    <div id="container">
      <aside class="sidebar">
        <div class="sidebox recommend">
          <h2>景点推荐</h2>
          <div class="tag">
            <ul>
              <li v-for="item of tagList">{{item}}</li>
            </ul>
          </div>
        </div>
        <div class="sidebox hot">
          <h2>热门旅游</h2>
          <div class="figure">
            <figure v-for="item of hotList">
              <img :src="'/static/hot/' + item.url" :alt="item.title">
              <figcaption>{{item.title}}</figcaption>
            </figure>
          </div>
        </div>
        <div class="sidebox treasure">
          <h2>旅游百宝箱</h2>
        </div>
      </aside>
      <div class="list">
        list
        再看第7章
      </div>
    </div>
  </div>
</template>
<script>
  import YuHeader from '@/components/header'
  import { tag, hotInfo } from '@/data/information'
  export default {
    name: 'information',
    components: {
      YuHeader
    },
    data() {
      return {
        tagList: [],
        hotList: []
      }
    },
    created() {
      this.tagList = tag
      this.hotList = hotInfo
    }
  }
</script>
<style scoped lang="stylus">
  #container
    width 1263px
    height 1200px
    margin 30px auto
    .sidebar
      float right
      width 340px
      height 1200px
      .sidebox
        border 1px solid #eee
        margin 0 0 10px 0
        text-align center
        h2
          font-size 20px
          font-weight normal
          letter-spacing 1px
          text-indent 8px
          height 40px
          line-height 40px
          color #666
          text-align left
        .tag
          a
            width 100px
            height 35px
            line-height 35px
            color #888
        .hot
          figure
            display inline-block
    .list
      float left
      width 900px
      height 1200px
</style>