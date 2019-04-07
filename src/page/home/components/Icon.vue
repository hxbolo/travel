<template>
  <div class="icons">
    <swiper>
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
  data() {
    return {
      iconList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "一日游"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "上海必有"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          desc: "动植物园"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
          desc: "踏青赏花"
        },
        {
          id: "0006",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/91a810441506568937171df66f754375.png",
          desc: "顾春赏樱"
        },
        {
          id: "0007",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
          desc: "世界公园"
        },
        {
          id: "0008",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
          desc: "野生动物园"
        },
        {
          id: "0009",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/91a810441506568937171df66f754375.png",
          desc: "世界公园"
        }
      ]
    };
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item,index) => {
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
}
.icon-img {
  position: absolute;
  left: 0;
  /* height: 0; */
  right: 0;
  box-sizing: border-box;
}
.icon-img .icon-img-content {
  width: 84%;
  display: block;
  margin: 0 auto;
}
.icon-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.44rem;
  text-align: center;
  line-height: 0.44rem;
  color: #333;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;

}
</style>