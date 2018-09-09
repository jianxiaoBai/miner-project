<template>
  <div>
    <div class="home-head">
      <div class="home-banner">
      </div>
      <div class="home-introduce">
        <div><img src="~/assets/img/tag.png" alt="">&nbsp;&nbsp;矿机云算力托管费用包括电费、运费、安装费、管理费等，收费为69美元/台/月</div>
        <div><img src="~/assets/img/tag.png" alt="">&nbsp;&nbsp;首批购买用户暂免首月托管费</div>
        <div><img src="~/assets/img/tag.png" alt="">&nbsp;&nbsp;全球唯一 TRUE 币矿场，最强算力无可替代</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" scpoed>
.home-head {
  background white
  // height 500px
  width 100%
  padding 60px
  .home-banner {
    background-image url('~/assets/img/banner.jpg')
    background-repeat no-repeat
    background-size 100% 100%
    width 70%
    height 500px
    margin 0 auto
  }
  .home-introduce {
    margin 20px auto
    width 70%
    background-color #FAFAFA
    // background-color red
    text-align center
    border-radius 50px
    padding 10px
    img {
      width 20px
      vertical-align middle
    }
    div {
      font-weight bold
      line-height 30px
    }
  }
}
</style>
