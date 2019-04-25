<template>
  <div>
    <div class="recommend-title">周末去哪里</div>
    <ul>
      <li class="item" v-for="i in list" :key="i.id">
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
  props:{
    list:Array
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
