<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <home-recommend></home-recommend>
    <HomeWeekend></HomeWeekend>
     
  </div>
</template>

<script>

import HomeHeader from './components/Header'
import HomeSwiper from './components/swipwer'
import HomeIcon from './components/Icon'
import HomeRecommend  from'./components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
 name: 'Home',
 components:{
   HomeHeader,
   HomeSwiper ,
   HomeIcon,
   HomeRecommend,
   HomeWeekend 
 },

}
</script>

<style >
  
</style>