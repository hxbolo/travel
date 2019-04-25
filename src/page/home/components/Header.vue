<template>
  <div>

    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe62a;</div>
      </div>
      <div class="header-input">
        <div class="iconfont search-icon">&#xe62f;</div>
        <input type="search" placeholder="去哪儿啊啊啊啊啊">
      </div>
      <div class="header-right">城市</div>
      <div class="iconfont down-icon">&#xe65a;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props:{
    city:String
  }
};
</script>

<style scoped >
  .header{
    height: .86rem;
    display: flex;
    background-color: #00bcd4;
    color: #fff;
  }
  .back-icon{
    text-align: center;
  }
  .header-left{
    width: .64rem;
    float: left;
    line-height: .86rem;
    margin-left: .0.18rem;

  }
  .search-icon{
    font-size: 22px;
    display: inline;
    text-align: center;
    line-height: .64rem;
    margin-left: .066667rem /* 5/75 */;

  }
  .header-input{
    flex: 1;
    height: .64rem;
    background: #fff;
    margin-top: .12rem;
    margin-left: .106667rem /* 8/75 */;
    color: #ccc;
    border-radius: .1rem;

  }
  .header-input input{
    color: #ccc;
    margin-bottom: .133333rem /* 10/75 */;
    font-size: .24rem /* 18/75 */;
    padding-left:.066667rem /* 5/75 */;

  }
  .header-right{
    width: .666667rem /* 50/75 */;
    float: right;
    text-align: center;
    line-height: .86rem;

  }
  .down-icon{
    font-size: .133333rem /* 10/75 */;
    text-align: center;
    line-height: .86rem;


  }


</style>
