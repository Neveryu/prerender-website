<template>
  <div>
    <yu-header></yu-header>
    <div id="container">
      <aside class="sidebar">
        <div class="sidebox recommend">
          <h2>景点推荐</h2>
          <div class="tag">
            <a href="javascript:;" v-for="item of tagList">{{item}}</a>
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
          <div class="box">
            <a href="javascript:;" :class="'trea' + (index+1)" v-for="(item, index) of boxList">{{item.name}}</a>
          </div>
        </div>
      </aside>
      <div class="list">
        list
        再看第8章
      </div>
    </div>
  </div>
</template>
<script>
  import YuHeader from '@/components/header'
  import { tag, hotInfo, boxInfo } from '@/data/information'
  export default {
    name: 'information',
    components: {
      YuHeader
    },
    data() {
      return {
        tagList: [],
        hotList: [],
        boxList: []
      }
    },
    created() {
      this.tagList = tag
      this.hotList = hotInfo
      this.boxList = boxInfo
    }
  }
</script>
<style scoped lang="stylus">
  #container
    width 1263px
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
          background-color #fafafa
          text-align left
        .tag
          text-align center
          padding 10px 0
          a
            display inline-block
            width 100px
            height 35px
            line-height 35px
            margin 2px 0 2px 4px
            color #999
            background-color #eee
            text-align left
            text-indent 8px
            &:hover
              background-color #458b00
              color #fff
      .hot
        .figure
          padding 10px 0
          figure
            display inline-block
            padding 4px
            color #666
      .treasure
        .box
          text-align center
          padding 10px 0
          a
            display inline-block
            width 150px
            height 40px
            line-height 40px
            margin 2px 0 2px 4px
            color #999
            background-color #eee
            text-align left
            text-indent 35px
            &.trea1
              background #eee url('/static/box/trea1.png') no-repeat 10px center
            &.trea2
              background #eee url('/static/box/trea2.png') no-repeat 10px center
            &.trea3
              background #eee url('/static/box/trea3.png') no-repeat 10px center
            &.trea4
              background #eee url('/static/box/trea4.png') no-repeat 10px center
    .list
      float left
      width 910px
      height 1200px
</style>