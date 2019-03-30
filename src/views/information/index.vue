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
        <div class="infor">
          <ul class="left">
            <li><a href="###">限时特价</a></li>
            <li><a href="###">热门推荐</a></li>
          </ul>
          <ul class="right">
            <li><a class="selected" href="###">推荐</a></li>
            <li><a href="###">折扣</a></li>
            <li><a href="###">价格</a></li>
          </ul>
        </div>
        <div class="tour-wrapper">
          <figure class="tour" v-for="(item, index) of tourList">
            <img :src="'./static/tour/' + item.img" :alt="item.name">
            <figcaption>
              <article>
                <header>
                  <hgroup>
                    <h2>{{item.name}}</h2>
                    <h3>{{item.desc}}</h3>
                  </hgroup>
                  <ol>
                    <li><mark>交通</mark>{{item.traffic}}</li>
                    <li><mark>团期</mark>{{item.termDate}}</li>
                  </ol>
                  <div class="buy">
                    <div class="price">￥<strong>{{item.price}}</strong><s>￥{{item.oldPrice}}</s></div>
                    <div class="reserve">
                      <a href="###">立即抢购</a>
                    </div>
                  </div>
                  <div class="type">{{item.type}}</div>
                  <div class="disc"><span>{{item.rate}}折</span></div>
                </header>
                <footer>{{item.footerInfo}}，截止于<time>{{item.time}}</time></footer>
              </article>
            </figcaption>
          </figure>
          <div class="more">加载更多...</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import YuHeader from '@/components/header'
  import { tagInfo, hotInfo, boxInfo, tourInfo } from '@/data/information'
  export default {
    name: 'information',
    title: 'Information',
    components: {
      YuHeader
    },
    data() {
      return {
        tagList: [],
        hotList: [],
        boxList: [],
        tourList: []
      }
    },
    created() {
      this.tagList = tagInfo
      this.hotList = hotInfo
      this.boxList = boxInfo
      this.tourList = tourInfo
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
      float left
      width 910px
      .infor
        height 45px
        line-height 45px
        margin 0 0 20px 0
        background-color #eee
        .left
          display inline-block
          float left
          li
            display inline-block
            width 150px
            height 43px
            line-height 43px
            text-align center
            &:first-child
              background-color #fff
              border-top 2px solid #45b800
              position relative
              left 1px
            a
              display block
              color #666
        .right
          display inline-block
          float right
          padding 0 20px 0 0
          li
            display inline-block
            width 60px
            height 45px
            line-height 45px
            font-size 16px
            text-align center
            a
              padding 3px 8px
              color #666
              &.selected, &:hover
                background-color #458b00
                color #fff
      .tour-wrapper
        figure
          position relative
          display inline-block
          width 908px
          margin 0 0 20px 0
          border 1px solid #eee
          img
            float left
          figcaption
            width 528px
            height 230px
            float right
            header
              hgroup
                width 320px
                h2
                  font-size 24px
                  font-weight normal
                  color #333
                  padding 10px 0 10px 25px
                h3
                  font-size 16px
                  font-weight normal
                  color #666
                  line-height 1.5
                  padding 10px 0 10px 25px
              ol
                padding 0 0 0 25px
                line-height 2
                color #666
                li
                  mark
                    background-color #fff
                    border 1px solid #458b00
                    border-radius 4px
                    padding 0 5px
                    color #458b00
              .buy
                position absolute
                top 55px
                right 30px
                .price
                  font-size 20px
                  color #f60
                  strong
                    font-size 36px
                  s
                    font-size 16px
                    color #999
                .reserve
                  margin 10px 0 0 0
                  a
                    display inline-block
                    width 152px
                    height 40px
                    line-height 40px
                    text-align center
                    border-radius 4px
                    font-size 20px
                    color #fff
                    background-color #f60
              .type
                position absolute
                top 0
                left 0
                width 90px
                height 25px
                line-height 25px
                font-size 14px
                text-align center
                color #fff
                background-color #59b200
              .disc
                position absolute
                top 0
                right 0
                width 52px
                height 52px
                background url('~@/assets/disc.png') no-repeat
                span
                  display block
                  width 52px
                  height 52px
                  font-size 14px
                  color #ff7a4d
                  transform rotate(45deg)
                  text-indent 7px
                  padding 5px 0 0 0
            footer
              position absolute
              width 528px
              height 30px
              bottom 0
              line-height 30px
              letter-spacing 1px
              text-indent 25px
              background-color #fafafa
              time
                color #458b00
        .more
          width 200px
          height 50px
          line-height 50px
          font-size 18px
          color #666
          text-align center
          margin 0 auto
          border 1px solid #ccc
          background-color #fafafa
          border-radius 6px
          cursor pointer
</style>