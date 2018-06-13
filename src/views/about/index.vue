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
      <div class="list about">
        <section>
          <h2>关于我们</h2>
          <p>Yu 旅行社旅游网创立于 2018 年 01 月，以“让旅游更简单”为使命，为消费者提供由北京、上海、广州、深圳等64 个城市出发的旅游产品预订服务，产品全面，价格透明，全年 365 天 24 小时 400 电话预订，并提供丰富的后续服务和保障。</p>
          <p>目前，Yu 旅行社旅游网提供 8 万余种旅游产品供消费者选择，涵盖跟团、自助、自驾、邮轮、酒店、签证、景区门票以及公司旅游等，已成功服务累计超过400 万人次出游。</p>
          <p>同时基于 Yu 旅行社旅游网全球中文景点目录以及中文旅游社区，可以更好地帮助游客了解目的地信息，妥善制定好出游计划，并方便地预订旅程中的服务项目。</p>
        </section>
        <p>&nbsp;</p>
        <section>
          <h2>联系方式</h2>
          <address>
            <ul>
              <li>Yu 旅行社股份有限公司</li>
              <li>地址：广东省深圳市南山区海水西路南海街道666号</li>
              <li>邮编：12345678</li>
              <li>电话：010-8888***888</li>
              <li>传真：010-6666***666</li>
            </ul>
          </address>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import YuHeader from '@/components/header'
  import { tagInfo, hotInfo, boxInfo } from '@/data/information'
  export default {
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
      this.tagList = tagInfo
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
      p
        line-height 2
        margin 20px 0
      address
        line-height 1.6
        margin 20px 0
        font-style normal
</style>