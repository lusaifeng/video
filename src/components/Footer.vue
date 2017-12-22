<template>
  <div class="footer">
    @copyright 上海庚易科技有限公司

    <b-modal ref="myModalRef" hide-footer hide-header>
      <div class="model-login">
        <div class="login-form">
          <div class="login-form-head">
            <h1>登录</h1>
            <div id="logo">
              <a href="/"><img src="../../static/img/logo.png" alt=""></a>
            </div>
          </div>
          <b-form class="login-form-body">
            <div role="group">
              <label :for="user.mobile">手机号:</label>
              <b-form-input :id="user.mobile"
                v-model.trim="user.mobile"
                type="text"
                placeholder="请输入手机号"></b-form-input>
            </div>
            
            <div role="group" class="mt-4">
              <label :for="user.code">验证码:</label>

              <b-row align-h="between">
                <b-col cols="7">
                  <b-form-input :id="user.code"
                    v-model.trim="user.code"
                    type="text"
                    placeholder="请输入验证码" />
                </b-col>
                <b-col cols="5" class="text-right">
                <b-button variant="dark">获取验证码</b-button> 
                </b-col>
              </b-row>
              
            </div>

            <div class="mt-4">
              <b-button variant="danger" size="lg" block>登 录</b-button>
            </div>

            <div class="or"></div>
            
            <b-button variant="success" block href="/">
              <i class="fa fa-weixin"></i> 微信登录
            </b-button>

            <b-button variant="info" block href="/" class="mt-3">
              <i class="fa fa-qq"></i> QQ登录
            </b-button>
          </b-form>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "VFooter",
  data() {
    return {
      user: {
        mobile: "",
        code: ""
      }
    };
  },
  methods: {

  },
  mounted(){
    // this.$refs.myModalRef.show();
  }
};
</script>

<style>

</style>