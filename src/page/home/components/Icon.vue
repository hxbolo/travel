<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index ">
        <div class="icon" v-for="item  of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-info">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcon",
  props:{
    list:Array
  },
  data() {
    return {
      swiperOption:{
        autoPlay:false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item,index) => {
        const page  = Math.floor(index/8)
        if(!pages[page]){
          pages[page] =[]
        }
        pages[page].push(item)
      })
      return pages
    }
  },
};
</script>

<style lang="" scoped>
.icon >>> .seiper-container {
  height: 0;
  padding-bottom: 50%;
  background-color: #cdc;
}

.icon {
  overflow: hidden;
  position: relative;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  margin-top: .1rem;
}
.icon-img {
  position: absolute;
  left: 0;
  /* height: 0; */
  right: 0;
  box-sizing: border-box;
}
.icon-img .icon-img-content {
  width: 70%;
  display: block;
  margin: 0 auto;
}
.icon-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.64rem;
  text-align: center;
  line-height: 0.44rem;
  color: #333;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;

}
</style>
