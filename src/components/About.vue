<template>
  <div class="container-full">
    <v-header />
    <div class="main">
      
      <div class="container">
        <h1 class="new-video-title"><i class="fa fa-youtube-play"></i> 关于我们</h1>
        <b-row class="about">
          <b-col>
            <h2>- 关于视频</h2>
            <div class="ml-5 mt-3">
              <p>视频内容：全部从实际工作需求出发，深度讲解每一个知识点，让所有看过视频的学员都可以写出高效、高质的代码。</p>
              <p>案例下载地址：<a href="https://github.com/lusaifeng">https://github.com/lusaifeng</a></p>
            </div>
            <div class="or"></div>
            <h2>- 关于会员</h2>
            <div class="ml-5 mt-3">
              <p>成为会员期间可以观看本网站所有视频，不受任何限制，希望每位学员可以学到全站所有知识！随着课程的增多，我们会不定期的更新会员价格，也会不定时的搞一些抢购活动（此活动对于有过会员记录的学员优先享受），会员时间可以累加，比如一次性购买三个季度。</p>
            </div>
            <div class="or"></div>
            <h2>- 关于公司</h2>
            <div class="ml-5 mt-3">
              <p>公司名称：上海庚易软件科技有限公司</p>
              <p>联系人：小路老师</p>
              <p>
                <span class="pull-left">微信号：</span><img src="../../static/img/wx-1.jpg" width="200">
              </p>
              <p>联系电话：18516695787</p>
              
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
    <v-footer />
  </div>
</template>
<script>
import VHeader from "./Header";
import VFooter from "./Footer";
export default {
  name: "About",
  components: {
    VHeader,
    VFooter
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>

</style>