<template>
  <div>
    <div class="recommend-title">周末去哪里</div>
    <ul>
      <li class="item" v-for="i in recommendList" :key="i.id">
        <div class="item-class-wapper">
          <img class="item-img" :src="i.imgUrl">
        </div>
        <div class="itme-info">
          <p class="item-title">{{i.title}}</p>
          <p class="item-desc">{{i.desc}}</p>
        
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
          title: "北京赏花好地方",
          desc: "乱花渐欲迷人眼，京城赏花大搜索"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
          title: "北京赏花好地方",
          desc: "乱花渐欲迷人眼，京城赏花大搜索"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
          title: "北京赏花好地方",
          desc: "乱花渐欲迷人眼，京城赏花大搜索"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
          title: "北京赏花好地方",
          desc: "乱花渐欲迷人眼，京城赏花大搜索"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
          title: "北京赏花好地方",
          desc: "乱花渐欲迷人眼，京城赏花大搜索"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* @import'~styles/mixins.styl'; */
.recommend-title {
  line-height: 0.8rem;
  background-color: #eee;
  margin-top: 0.2rem;
  padding-left: 0.1rem;
}
.item {
  height: 4.1rem;
}
.item-class-wapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 30.9%;
}
.item-img {
  width: 100%;
}
.item-info {

}
.item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
  padding-left: 0.1rem;

}
.item-desc {
  line-height: 0.6rem;
  font-size: 0.28rem;
  color: #999;
  padding-left: 0.1rem;

}
</style>