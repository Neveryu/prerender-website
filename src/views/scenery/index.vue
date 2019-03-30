<template>
  <div>
    <yu-header></yu-header>
    <div id="container">
      <aside class="sidebar">
        <div class="sidebox recommend">
          <h2>景点推荐</h2>
          <div class="tag">
            <ul>
              <li v-for="(item, index) of tagList"><a href="javascript:;">{{item}}</a></li>
            </ul>
          </div>
        </div>
        <div class="sidebox hot">
          <h2>热门旅游</h2>
          <div class="figure">
            <figure v-for="item of hotList">
              <img :src="'./static/hot/' + item.url" :alt="item.title">
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
        <section>
          <h2>风景欣赏</h2>
          <figure v-for="(item, index) of sceneryList">
            <img :src="'./static/scenery/' + item.url" :alt="item.title">
            <figcaption>{{item.title}}</figcaption>
          </figure>
        </section>
        <div class="more">加载更多...</div>
      </div>
    </div>
  </div>
</template>

<script>
  import YuHeader from '@/components/header'
  import { tagInfo, hotInfo, boxInfo } from '@/data/information'
  import { sceneryInfo } from '@/data/scenery'
  export default {
    title: 'Scenery',
    components: {
      YuHeader
    },
    data() {
      return {
        tagList: [],
        hotList: [],
        boxList: [],
        sceneryList: []
      }
    },
    created() {
      this.tagList = tagInfo
      this.hotList = hotInfo
      this.boxList = boxInfo
      this.sceneryList = sceneryInfo
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
        ul
          li
            display inline-block
            width 100px
            height 35px
            line-height 35px
            margin 2px 0 2px 4px
            background-color #eee
            a
              display block
              text-align left
              text-indent 8px
              color #999
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
      width 910px
      color #666
      font-size 20px
      h2
        height 40px
        line-height 40px
        border-bottom 1px dashed #999
        padding 0 0 10px 0
        font-weight normal
        font-size 30px
      figure
        display inline-block
        width 435px
        padding 4px
        margin 15px 10px 15px 0
        border 1px solid #ddd
        figcaption
          text-align center
      .more
        width 200px
        height 50px
        line-height 50px
        text-align center
        margin 0 auto
        border 1px solid #ccc
        background-color #fafafa
        border-radius 6px
        cursor pointer
        font-size 18px
        color #666
</style>