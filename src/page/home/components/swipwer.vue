<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if = "showswiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
   props:{
        list:Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop:true
      },

    };
  },
  computed: {
    showswiper(){
      return this.list.length
    }
  },
};
</script>
<style scoped>
/*
 >>> 样式进行穿透 , 让他不受scoped 的限制
  */
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}
.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 31.25%;
  background-color: #ccc;
}
.swiper-img {
  width: 100%;
}
</style>
