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
        <form action="###">
          <h2>机票预订</h2>
          <div class="type">
            <p>航班类型：<mark>单程</mark>往返</p>
          </div>
          <div class="form left">
            <p>
              <label for="from-city">出发城市 </label>
              <input type="text" id="from-city" name="from-city" placeholder="城市名">
            </p>
            <p>
              <label for="to-city">返回城市 </label>
              <input type="text" id="to-city" name="to-city" placeholder="城市名">
            </p>
          </div>
          <div class="form right">
            <p>
              <label for="from-date">出发时间 </label>
              <input type="text" id="from-date" name="from-date" placeholder="时间/日期">
            </p>
            <p>
              <label for="to-date">返回时间 </label>
              <input type="text" id="to-date" name="to-date" placeholder="时间/日期">
            </p>
          </div>
          <div class="form button">
            <p>
              <button type="submit" class="submit">订票</button>
            </p>
          </div>
        </form>
        <div class="new">
          <h2>最新机票</h2>
          <ul>
            <li>热门城市：</li>
            <li v-for="(item, index) of hotCityList">{{item}}</li>
          </ul>
          <table>
            <thead>
              <th>路线</th>
              <th>日期</th>
              <th>价格</th>
              <th>税费</th>
              <th>餐食</th>
              <th>航班</th>
              <th>预定</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) of currentTravel">
                <td>{{item.line}}</td>
                <td>{{item.date}}</td>
                <td class="price">￥{{item.price}}</td>
                <td>{{item.rate}}</td>
                <td>{{item.food}}</td>
                <td>{{item.flight}}</td>
                <td><a href="javascript:;" class="reserve">预定</a></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="7"><a href="javascript:;" class="more">加载更多...</a></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import YuHeader from '@/components/header'
  import { tagInfo, hotInfo, boxInfo } from '@/data/information'
  import { hotCity, beijingTravel } from '@/data/ticket'
  export default {
    components: {
      YuHeader
    },
    data() {
      return {
        tagList: [],
        hotList: [],
        boxList: [],
        hotCityList: [],
        currentTravel: []
      }
    },
    created() {
      this.tagList = tagInfo
      this.hotList = hotInfo
      this.boxList = boxInfo
      this.hotCityList = hotCity
      this.currentTravel = beijingTravel
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
      .type
        margin 20px 0 10px 0
        font-size 20px
        mark
          color #fff
          background-color #458b00
          padding 5px 8px
          border-radius 4px
          margin 0 10px 0 16px
      .form
        p
          line-height 3
        input
          width 250px
          height 30px
          font-size 18px
          border 1px solid #ccc
          background-color #fff
          border-radius 4px
          border 1px solid #ccc
          color #666
          padding 5px
          margin 0 0 0 16px
      .left
        display inline-block
        width 43%
      .right
        display inline-block
        width 43%
      .button
        display inline-block
        width 9%
        .submit
          position relative
          display block
          top -28px
          width 90px
          height 90px
          line-height 90px
          text-align center
          border-radius 4px
          font-size 20px
          color #fff
          background-color #f60
          border none
          cursor pointer
      .new
        h2
          margin 20px 0 0 0
        ul
          margin 20px 0 0 0
          li
            display inline-block
            padding 5px 10px
            &:first-child
              padding-left 0
              &:hover
                background-color transparent
                color #666
            &:nth-child(2), &:hover
              background-color #458b00
              color #fff
              border-radius 4px
        table
          margin 20px 0 0 0
          width 100%
          border 1px solid #ddd
          border-collapse collapse
          th
            height 50px
            line-height 50px
            border-bottom 1px solid #ddd
          tr
            &:nth-child(2n)
              background-color #fafafa
            &:hover
              background-color #eee
            td
              text-align center
              height 50px
              line-height 50px
              border-bottom 1px solid #ddd
              &.price
                color #f60
              .reserve
                display inline-block
                width 80px
                height 35px
                line-height 35px
                text-align center
                border-radius 4px
                font-size 18px
                color #fff
                background-color #f60
              .more
                color #666
                cursor pointer
</style>