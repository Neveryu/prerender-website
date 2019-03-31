<template>
  <div id="headline">
    <div class="center">
      <hgroup>
        <h2>旅游资讯</h2>
        <h3>介绍各种最新的旅游信息、资讯要闻、景点攻略等</h3>
      </hgroup>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'yu-header'
  }
</script>
<style scoped lang="stylus">
  #headline
    width 100%
    min-width 1263px
    height 300px
    background linear-gradient(to bottom right, rgba(0, 0, 0, .7), rgba(0, 0, 0, 0)), url('~@/assets/headline.jpg') center no-repeat
    .center
      width 1263px
      height 300
      margin 0 auto
      hgroup
        padding 100px 0 0 50px
        color #fff
        h2
          font-size 36px
          letter-spacing 1px
        h3
          font-size 20px
          letter-spacing 1px
</style>