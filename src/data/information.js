const tagInfo = ['曼谷(12)', '东京(5)', '西双版纳(8)', '漓江(16)', '呼伦贝尔(4)', '首尔(9)', '巴厘岛(15)', '土耳其(22)', '夏威夷(5)', '巴厘岛(11)', '毛里求斯(7)', '吉普岛(4)', '希腊(18)', '法瑞意(8)', '马尔代夫(9)', '新西兰(16)', '埃及(11)', '迪拜(14)', '斯里兰卡(7)', '麦哈顿(3)', '大阪(15)']

const hotInfo = [
  {
    url: 'hot1.jpg',
    title: '曼谷-芭提雅6日游'
  },
  {
    url: 'hot2.jpg',
    title: '马尔代夫双鱼6日游'
  },
  {
    url: 'hot3.jpg',
    title: '海南双飞5日游'
  },
  {
    url: 'hot4.jpg',
    title: '富山大阪东京8日游'
  },
  {
    url: 'hot5.jpg',
    title: '法瑞意德12日游'
  },
  {
    url: 'hot6.jpg',
    title: '巴厘岛6日半游'
  },
  {
    url: 'hot7.jpg',
    title: '塞舌尔迪拜9日游'
  },
  {
    url: 'hot8.jpg',
    title: '花样土耳其10日游'
  }
]

const boxInfo = [
  {
    logo: 'trea1',
    name: '天气预报'
  },
  {
    logo: 'trea2',
    name: '火车票查询'
  },
  {
    logo: 'trea3',
    name: '航空查询'
  },
  {
    logo: 'trea4',
    name: '地铁线路查询'
  }
]

const tourInfo = [
  {
    img: 'tour1.jpg',
    name: '曼谷-芭提雅6日游',
    desc: '包团特惠，超丰富景点，升级1 晚国五，无自费，赠送600元成人券...',
    traffic: '春秋航空，杭州出发，无需转机',
    termDate: '11/01、11/03、11/08...',
    price: 2864,
    oldPrice: 3999,
    type: '国内长线',
    rate: 4.7,
    footerInfo: '本团游属于个人游，你自己去玩吧',
    time: delay30Time()
  },
  {
    img: 'tour2.jpg',
    name: '马尔代夫6日自助游',
    desc: '双鱼岛Olhuveli4晚，上海出发，机+酒 包含:早晚餐+快艇...',
    traffic: '春秋航空,杭州出发,无需转机',
    termDate: '11/01、11/03、11/08...',
    price: 8039,
    oldPrice: 9980,
    type: '出境长线',
    rate: 7.7,
    footerInfo: '本团游属于个人游，你自己去玩吧',
    time: delay30Time()
  },
  {
    img: 'tour3.jpg',
    name: '海南双飞5日游',
    desc: '含盐城接送，全程挂牌四星酒店，一价全含，零自费“自费项目”免费送...',
    traffic: '春秋航空,杭州出发,无需转机',
    termDate: '11/01、11/03、11/08...',
    price: 2709,
    oldPrice: 3280,
    type: '自助旅游',
    rate: 6.5,
    footerInfo: '本团游属于个人游，你自己去玩吧',
    time: delay30Time()
  },
  {
    img: 'tour4.jpg',
    name: '富山-大阪-东京8日游',
    desc: '暑期亲子，2天自由，无导游安排自费项目，全程不强迫购物...',
    traffic: '春秋航空,杭州出发,无需转机',
    termDate: '11/01、11/03、11/08...',
    price: 9499,
    oldPrice: 9999,
    type: '自助旅游',
    rate: 8.8,
    footerInfo: '本团游属于个人游，你自己去玩吧',
    time: delay30Time()
  },
  {
    img: 'tour5.jpg',
    name: '法瑞意德12日游',
    desc: '4至5星，金色列车，少女峰，部分THE MALL...',
    traffic: '春秋航空,杭州出发,无需转机',
    termDate: '11/01、11/03、11/08...',
    price: 9199,
    oldPrice: 9999,
    type: '国内短线',
    rate: 9.2,
    footerInfo: '本团游属于个人游，你自己去玩吧',
    time: delay30Time()
  },
  {
    img: 'tour6.jpg',
    name: '巴厘岛6日半自助游',
    desc: '蓝梦出海，独栋别墅，悦榕庄下午茶，纯玩...',
    traffic: '春秋航空,杭州出发,无需转机',
    termDate: '11/01、11/03、11/08...',
    price: 6488,
    oldPrice: 8460,
    type: '国内短线',
    rate: 7.6,
    footerInfo: '本团游属于个人游，你自己去玩吧',
    time: delay30Time()
  },
  {
    img: 'tour7.jpg',
    name: '塞舌尔迪拜9日自助游',
    desc: '一游两国，4晚塞舌尔，2晚迪拜，香港EK往返...',
    traffic: '春秋航空,杭州出发,无需转机',
    termDate: '11/01、11/03、11/08...',
    price: 9669,
    oldPrice: 9999,
    type: '游轮观光',
    rate: 9.6,
    footerInfo: '本团游属于个人游，你自己去玩吧',
    time: delay30Time()
  },
  {
    img: 'tour8.jpg',
    name: '花样姐姐土耳其9日游',
    desc: '最高立减3000！中餐六菜一汤+土耳其当地美食满足您挑剔味蕾...',
    traffic: '春秋航空,杭州出发,无需转机',
    termDate: '11/01、11/03、11/08...',
    price: 9999,
    oldPrice: 9999,
    type: '游轮观光',
    rate: 10,
    footerInfo: '本团游属于个人游，你自己去玩吧',
    time: delay30Time()
  },
  {
    img: 'tour9.jpg',
    name: '大阪-京都-箱根双飞6日游',
    desc: '盐城直飞，不走回头路，境外无自费，超值之旅...',
    traffic: '春秋航空,杭州出发,无需转机',
    termDate: '11/01、11/03、11/08...',
    price: 5284,
    oldPrice: 8437,
    type: '国内短线',
    rate: 6.8,
    footerInfo: '本团游属于个人游，你自己去玩吧',
    time: delay30Time()
  },
]

function delay30Time() {
  let _time = new Date().getTime() + 24 * 3600000 * 30
  let time = new Date(_time)
  let year = time.getFullYear()
  let month = padLeftZero(time.getMonth() == 11 ? 12 : (time.getMonth() + 1))
  let day = time.getDate()
  return `${year}-${month}-${day}`
}

function padLeftZero(str) {
  str = str.toString()
  return ('00' + str).substr(str.length)
}

export { tagInfo, hotInfo, boxInfo, tourInfo }