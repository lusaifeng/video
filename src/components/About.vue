<template>
  <div class="container-full">
    <v-header />
    <div class="main">
      
      <div class="container">
        <h1 class="new-video-title"><i class="fa fa-youtube-play"></i> 关于我们</h1>
        <b-row class="about">
          <b-col>
            <p>公司名称：上海庚易软件科技有限公司</p>
            <p>联系人：小路老师</p>
            <p>
              <span class="pull-left">微信号：</span><img src="../../static/img/wx-1.jpg" width="200">
            </p>
            <p>联系电话：18516695787</p>
            <p>案例下载地址：<a href="https://github.com/lusaifeng">https://github.com/lusaifeng</a></p>
          </b-col>
        </b-row>
      </div>
    </div>
    <v-footer />
  </div>
</template>
<script>
import VHeader from './Header'
import VFooter from './Footer'
export default {
  name: "About",
  components: {
    VHeader,
    VFooter
  },
  data() {
    return {

    }
  },
  methods: {}
};
</script>

<style>

</style>