<template>
  <div class="safety-container">
    <div class="page">
      <h2 class="page-header">&#23433;&#20840;&#20013;&#24515;</h2>
      <div class="page-content">
        <div class="c-tile-list">
          <div class="c-tile-list__item">
            <div class="item-thumbnail">
              <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path  d="M11.647 8.69v2.178L18 14.914V18H0v-3.086l6.353-3.941V8.691a3.536 3.536 0 0 1-1.059-2.52V3.6C5.294 1.612 6.954 0 9 0c2.047 0 3.706 1.612 3.706 3.6v2.571c0 .981-.404 1.87-1.059 2.52z"
                    fill="#A5A5A5" fill-rule="evenodd"></path>
                </svg>
            </div>
            <div class="item-inner account">
              <h3>我的账户</h3>
              <p>
                <span>绑定手机: {{ data.mobile }}</span>
              </p>
              <p>
                <span>认证地址: {{ data.bind_address }}</span>
                <!-- <button type="button" class="el-button right el-button--default el-button--mini">
                  <span>&#21435;&#32465;&#23450;
                  </span>
                </button> -->
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { apiUser } from '~/api'

  export default {
    data () {
      return {
        data: {}
      }
    },
    mounted () {
      apiUser().then(({ data }) => {
        this.data = data;
      })
    }
  }
</script>

<style lang="stylus" scpoed>
  .safety-container {
    /*! CSS Used from: https://hash.hc.top/_nuxt/app.4188da40ee5b0a0b9632a89578998921.css */
    .page-header {
      font-size: 24px;
      line-height: 24px;
      padding: 20px 30px;
      border-bottom: 1px solid #F5F5F7;
      color: #303137;
    }
    .page-content {
      padding: 30px;
    }
    .c-tile-list {
      background: #FDFDFD;
      border: 1px solid #EDEEF0;
      padding: 0 30px;
    }
    .c-tile-list__item {
      position: relative;
      padding-top: 30px;
      padding-bottom: 20px;
      padding-left: 35px;
      border-bottom: 1px solid #EDEEF0;
    }
    .c-tile-list__item:last-child {
      border-bottom: 0;
    }
    .c-tile-list__item .item-thumbnail {
      position: absolute;
      margin-top: -1px;
      left: 0;
      font-size: 18px;
    }
    .c-tile-list__item .item-thumbnail .el-icon-success {
      color: #67BE2F;
    }
    .c-tile-list__item .item-thumbnail .el-icon-warning {
      color: #FFB764;
    }
    .c-tile-list__item .item-inner {
      display: inline-block;
      p {
        text-align left
      }
    }
    .c-tile-list__item .item-inner.account {
      display: block;
    }
    .c-tile-list__item .item-inner.account p {
      line-height: 32px;
      color: #303137;
    }
    .c-tile-list__item .item-inner.account button {
      margin-top: 0;
    }
    .c-tile-list__item .item-inner h3 {
      font-size: 16px;
      color: #303137;
      letter-spacing: 0.89px;
      line-height: 16px;
      position: relative;
      margin-bottom: 12px;
    }
    .c-tile-list__item .item-inner p {
      font-size: 14px;
      color: #999;
      letter-spacing: 0.35px;
      line-height: 19px;
    }
    .c-tile-list__item button {
      margin-top: 7px;
    }

  }

</style>
