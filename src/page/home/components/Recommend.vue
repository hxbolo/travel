<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item" v-for="i in recommendList" :key="i.id">
        <img class="item-img" :src="i.imgUrl">
        <div class="itme-info">
          <p class="item-title">{{i.title}}</p>
          <p class="item-desc">{{i.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg",
          title: "哈哈哈哈",
          desc: "ooooo"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg",
          title: "哈哈哈哈",
          desc: "噢噢噢噢"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg",
          title: "哈哈哈哈",
          desc: "噢噢噢噢"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg",
          title: "哈哈哈哈",
          desc: "噢噢噢噢"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg",
          title: "哈哈哈哈",
          desc: "噢噢噢噢"
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
  display: flex;
  height: 1.9rem;
}
.item-img {
  /* min-width: 0 ; */
  width: 1.7rem;
  height: 1.7rem;
  padding: 0.1rem;
}
.itme-info {
  flex: 1;
  padding: 0.1rem;
}
.item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
}
.item-desc {
  line-height: 0.6rem;
  font-size: 0.28rem;
  color: #999;
}
.item-button {
  background-color: #ff9300;
  padding: 0 0.2rem;
  border-radius: 0.06rem;
  color: #fff;
}
</style>