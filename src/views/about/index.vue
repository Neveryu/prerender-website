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
              <li>地 址：广东省深圳市南山区海水西路南海街道666号</li>
              <li>电 话：010-8888***888</li>
              <li>传 真：010-6666***666</li>
              <li>QQ群：<a class="qq-group" target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=32da7a18744756b0d8ffdd05b84999afecb5265dbad0fb119033e122abe803f3">685486827</a></li>
            </ul>
          </address>
        </section>
        <p>&nbsp;</p>
        <section>
          <h2>交流学习</h2>
          <img src="~@/assets/qq-group.png" width="250" alt="">
        </section>
        <p>&nbsp;</p>
        <section>
          <h2>更多内容</h2>
          <ul class="about-me">
            <li>
              <a class="y-btn s-irregularLineMove" href="https://neveryu.github.io/neveryu/" target="_blank">我的首页</a>
              <a class="y-btn s-irregularDoubleLineMoveTwo" href="https://neveryu.github.io/" target="_blank">博客</a>
              <a class="y-btn s-irregularColorMove" href="https://blog.csdn.net/csdn_yudong" target="_blank">CSDN</a>
            </li>
            <li class="y-li s-irregularShadowMove">
              <a href="https://github.com/neveryu" target="_blank">GitHub：https://github.com/neveryu</a>
            </li>
            <li class="y-li s-svgline">
              <svg viewBox="0 0 180 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect class="shape" height="16" width="180"></rect>
              </svg>
              <a href="https://github.com/Neveryu/vue-cms" target="_blank">用 Vue 构建的后台系统：https://github.com/Neveryu/vue-cms</a>
            </li>
            <li class="y-li s-svgMutiLine">
              <svg viewBox="0 0 180 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect class="shape" height="16" width="180"></rect>
              </svg>
              <a href="https://github.com/Neveryu/prerender-website" target="_blank">本项目 GitHub 地址：https://github.com/Neveryu/prerender-website</a>
            </li>
          </ul>
        </section>
        <p>&nbsp;</p>
        <section>
          <h2>有缘再见</h2>
          <p>调研完 Vue 的预渲染，如果你对 Vue 的服务端渲染，仍然有需求，请移步：</p>
          <ul class="about-me">
            <li class="y-li s-svgline">
              <svg viewBox="0 0 180 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect class="shape" height="16" width="180"></rect>
              </svg>
              <a href="https://github.com/Neveryu/vue-ssr-lessons" target="_blank">Vue 服务端渲染课程：https://github.com/Neveryu/vue-ssr-lessons</a>
            </li>
          </ul>
          <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=548109162&auto=0&height=66"></iframe>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import YuHeader from '@/components/header'
  import { tagInfo, hotInfo, boxInfo } from '@/data/information'
  export default {
    title: 'About',
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
      p, img
        line-height 2
        margin 20px 0
      address
        line-height 1.6
        margin 20px 0
        font-style normal
        a.qq-group
          color: red
      .about-me
        margin 20px 0
        .y-li
          position relative
          height 64px
          line-height 64px
          margin 35px 35px
          text-align center
          overflow hidden
          a
            color #42b983
        .s-irregularShadowMove
          border 1px solid #42b983
          &:hover
            text-shadow 0 0 20px rgba(255, 255, 255, 0.5)
            box-shadow inset 0 0 20px rgba(66, 185, 131, .5), 0 0 20px rgba(255, 255, 255, 0.2)
          &:before
            content ""
            position absolute
            height 200px
            width 20px
            background rgba(66, 185, 131, .5)
            transform translate(-50%, -30%) rotate(45deg)
            transition 1.5s all cubic-bezier(.2, 1, .25, 1)
            left -35%
          &:hover:before
            left 135%
        .s-svgMutiLine
          height 80px
          line-height 80px
          .shape
            fill transparent
            stroke-width .5px
            stroke red
            stroke-dasharray 100 230
            stroke-dashoffset 100
            transition all 1s  
          a
            position absolute
            line-height 80px
            top 0
            left 150px
            transition all .5s
          &:hover
            .shape
              stroke #42b983
              stroke-dasharray 50 0
              stroke-dashoffset 0
              stroke-width .5px
            a
              color red
        .s-svgline
          height 80px
          line-height 80px
          .shape
            fill transparent
            stroke-width .5px
            stroke red
            stroke-dasharray 100 230
            stroke-dashoffset 100
            transition all 1s  
          a
            position absolute
            line-height 80px
            top 0
            left 150px
            transition all .5s
          &:hover
            .shape
              stroke #42b983
              stroke-dasharray 488
              stroke-dashoffset 0
              stroke-width .5px
            a
              color red
        .y-btn
          position relative
          display inline-block
          height 64px
          line-height 64px
          margin 0 35px
          text-align center
          color #42b983
          cursor pointer
          transition .2s all
        .s-irregularLineMove
          width 180px
          &:before
            content ""
            position absolute
            right 0
            bottom 0
            width 0
            height 1px
            background-color #42b983
            transition .2s all
          &:hover:before
            left 0
            width 100%
        .s-irregularDoubleLineMoveTwo
          width 180px
          &:before
            content ""
            position absolute
            right 0
            bottom 0
            width 0
            height 1px
            background-color #42b983
            transition .2s all
          &:hover:before 
            left 0
            width 100%
          &:after 
            content ""
            position absolute
            width 180px
            height 1px
            top 0
            left 0
            background-color #42b983
            transform scale3d(0, 1, 1)
            transition .2s transform
            transform-origin 0 0
          &:hover:after 
            transform scale3d(1, 1, 1)
            transform-origin 100% 100%
        .s-irregularColorMove
          width 180px
          border 1px solid #42b983
          &:before
            content ""
            position absolute
            right 0
            bottom 0
            width 0
            height 100%
            background-color #42b983
            transition .2s all
            z-index -1
          &:hover
            color #fff
          &:hover:before
            left 0
            width 100%
</style>