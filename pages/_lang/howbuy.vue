<template>
  <div class="howbuy">
    <div class="howbuy-title">{{ $t('PurchaseFlow')}}</div>
    <div>
      <ul>
        <li v-for="(item, index) in $t('buyList')" :key="index">
          <div class="subhead">{{ index + 1 }}. {{ item.title }}</div>
          <div class="state">{{ item.content }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="stylus">
.howbuy {
  width: 60%;
  // background: red;
  margin: 30px auto;

  .howbuy-title {
    text-align: center;
    font-size: 24px;
    line-height: 30px;
    font-weight: bold;
  }

  .state {
    line-height: 40px;
    margin-left: 20px;
    font-size: 16px;
  }

  .subhead {
    font-size: 20px;
    line-height: 30px;
  }
}
</style>
