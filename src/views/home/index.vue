<template>
  <div>
    <div id="search">
      <div class="center"></div>
      <input type="search" class="search" placeholder="请输入旅游景点或城市">
      <button class="button">搜索</button>
    </div>
    <div id="tour">
      <section class="center">
        <h2>热门旅游</h2>
        <p>国内旅游、国外旅游、自助旅游、自驾旅游、油轮签证、主题旅游等各种最新热门旅游推荐</p>
      </section>
      <figure v-for="(tourItem, index) of tourData" :key="index">
        <img :src="'/static/tour/' + tourItem.url" alt="">
        <figcaption>
          <strong class="title">&lt; {{ tourItem.title }} &gt;</strong>
          包团特惠，超丰富景点，升级1晚国五，无自费，更赠送600元/成人自费券
          <div>
            <em>满意度：{{ tourItem.degree }}</em>
            <span>¥{{ tourItem.price }}</span>
          </div>
        </figcaption>
      </figure>
    </div>
  </div>  
</template>

<script>
  import tourObj from '@/data/home'
  export default {
    data() {
      return {
        tourData: []
      }
    },
    created() {
      this.tourData = tourObj
    }
  }
</script>

<style scoped lang="stylus">
  #search
    position relative
    width 100%
    min-width 1263px
    height 600px
    background #f5f7f9 url('~@/assets/search.jpg') center no-repeat
    .center
      position absolute
      top 50%
      left 50%
      width 600px
      height 60px
      margin -40px 0 0 -300px
      border-radius 10px
      background-color #000
      opacity .6
    .search
      position absolute
      top 50%
      left 50%
      width 446px
      height 52px
      margin -36px 0 0 -296px
      padding 0 10px
      font-size 24px
      border 1px solid #666
      border-radius 10px
      color #666
      background-color #eee
      outline none
    .button
      position absolute
      top 50%
      left 50%
      width 120px
      height 52px
      margin -36px 0 0 175px
      padding 0 10px
      font-size 24px
      font-weight bold
      border 1px solid #666
      border-radius 10px
      color #666
      background-color #eee
      outline none
      cursor pointer
  #tour
    width 1263px
    height 1200px
    margin 30px auto
    text-align center
    background-color #eee
      h2
        margin 10px 0
        font-size 45px
        letter-spacing 2px
        color #666
      p
        color #666
    figure
      display inline-block
      width 380px
      margin 15px 12px
      padding 4px
      border 1px solid #ddd
      border-radius 4px
      img
        vertical-align middle
      figcaption
        line-height 1.5
        letter-spacing 1px
        color #777
        text-align left
        .title
          color #333
          font-weight normal
</style>