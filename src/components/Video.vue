<template>
  <div class="container-full">
    <v-header />
    <div class="main">
      
      <b-row>
        <b-col lg="8">
          <div class="watch">
            <h1 class="video-title">
              视频标题
              <b-button class="no-buy" @click="buyThis" v-show="isBuy == false" variant="warning">
                &yen; <span>6.6</span> 立即购买
              </b-button>
            </h1>
            <div class="video" v-show="isBuy">
              <d-player :video="video"
                :autoplay="autoplay"
                :contextmenu="contextmenu"
                :screenshot="false"
                @play="play"
                ref="player">
              </d-player>
            </div>
            
            <div id="comments" class="post-comments">
              <h3 class="post-box-title">课程简介</h3>
              <p>BAT企业级真实项目为基础</p>
              <p>ES6+ 开发完备的电商网站账号体系SDK</p>
              <p>直接在实战中运用ES6+ 语法，提升自己的开发效率和代码可维护性</p>    

              <h3 class="post-box-title"><span>{{comments.length}}</span> 条评论</h3>
              <ul class="comments-list">
                <li v-for="(item, index) in comments" :key="index">
                  <div class="post_author">
                    <div class="img_in">
                      <img :src="item.img" alt="">
                    </div>
                    <a href="#" class="author-name">{{item.username}}</a>
                    <time>{{item.time}}</time>
                  </div>
                  <p>{{item.content}}</p>
                
                  <ul class="children">
                    <li v-for="(children, index) in item.children" :key="index">
                      <div class="post_author">
                          <div class="img_in">
                            <img :src="children.img" alt="">
                          </div>
                          <a href="#" class="author-name">{{children.username}}</a>
                          <time>{{children.time}}</time>
                      </div>
                      <p>{{children.content}}</p>
                    </li>
                  </ul>
                </li>
              </ul>


              <h3 class="post-box-title">评论</h3>
              <form>
                  <textarea class="form-control" rows="4" id="Message" placeholder="请输入您的评论内容..."></textarea>
                  <button type="button" id="contact_submit" class="btn btn-dm">提交评论</button>
              </form>
            </div>
          </div>
        </b-col>
        <b-col lg="4">
          <div class="related-video">
            <h1 class="video-title">本章课程</h1>
            <div class="related-video-item" v-for="item in videos" :key="item.name">
              <router-link :to="item.url">
                <div class="thumb">
                  <small class="time">{{item.time}}</small>
                  <img :src="item.img" >
                </div>
                <span class="title">{{item.title}}</span>
              </router-link>
            </div>
          </div>
        </b-col>
      </b-row>

    </div>

    <v-footer />

    <b-modal ref="BuyModel" hide-footer hide-header>
      <div class="buy-head">
        <h1>购买</h1>
        <div id="logo">
          <a href="/"><img src="../../static/img/logo.png" alt=""></a>
        </div>
      </div>
      <div class="buy"> 
        <b-card title="Vue $emit 细节解说"
          img-src="../../static/img/v1.png"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
          <p class="card-text">
            <b-form-group>
              <b-form-radio-group id="buyType" 
                v-model="selected" 
                :options="buyTypes" 
                name="buyType">
              </b-form-radio-group>
            </b-form-group>
          </p>
          <b-button href="#" variant="warning" class="pull-right">&yen;6.6 支付</b-button>
        </b-card>
      </div>
    </b-modal>

  </div>
</template>
<script>
import VHeader from "./Header";
import VFooter from "./Footer";
import DPlayer from 'vue-dplayer'
export default {
  name: "Video",
  components: {
    VHeader,
    VFooter,
    DPlayer
  },
  data() {
    return {
      isBuy: true,
      video: {
        url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
      },
      autoplay: true,
      player: null,
      contextmenu: [],
      videos: [
        {
          img: '../../static/img/v1.png',
          time: '20:21',
          url: '/video',
          title: 'Vue $emit 细节解说',
          view: 12321,
          update: '2017-10-23'
        },
        {
          img: '../../static/img/v1.png',
          time: '20:21',
          url: '/video',
          title: '7天学会HTML排版',
          view: 12321,
          update: '2017-10-23'
        },
        {
          img: '../../static/img/v1.png',
          time: '20:21',
          url: '/video',
          title: '7天学会HTML排版',
          view: 12321,
          update: '2017-10-23'
        },
        {
          img: '../../static/img/v1.png',
          time: '20:21',
          url: '/video',
          title: '7天学会HTML排版',
          view: 12321,
          update: '2017-10-23'
        },
        {
          img: '../../static/img/v1.png',
          time: '20:21',
          url: '/video',
          title: '7天学会HTML排版',
          view: 12321,
          update: '2017-10-23'
        },
        {
          img: '../../static/img/v1.png',
          time: '20:21',
          url: '/video',
          title: '7天学会HTML排版',
          view: 12321,
          update: '2017-10-23'
        },
        {
          img: '../../static/img/v1.png',
          time: '20:21',
          url: '/video',
          title: '7天学会HTML排版',
          view: 12321,
          update: '2017-10-23'
        }
      ],
      comments: [
        {
          img: '../../static/img/c1.jpg',
          username: '杰克逊',
          time: '2017-10-16 10:00:03',
          content: '阅读器在阅读页面布局时会被可读内容分散注意力，这是一个长期以来的事实。 使用Lorem Ipsum的要点',
          children: [
            {
              img: '../../static/img/c1.jpg',
              username: '马克思',
              time: '2017-11-13 10:00:03',
              content: '内容分散注意力，这是一个长期以来的事实'
            }
          ]
        },
        {
          img: '../../static/img/c1.jpg',
          username: '杰克逊',
          time: '2017-10-16 10:00:03',
          content: '阅读器在阅读页面布局时会被可读内容分散注意力，这是一个长期以来的事实。 使用Lorem Ipsum的要点'
        }
      ],
      isBuyModel: true,
      selected: 'zhifubaoPay',
      buyTypes: [
        { text: '支付宝', value: 'zhifubaoPay' },
        { text: '微信', value: 'weixinPay' }
      ]
    };
  },
  mounted() {
    this.player = this.$refs.player.dp
    
  },
  methods: {
    play() {
      console.log('play callback')
    },
    buyThis(){
      this.$refs.BuyModel.show();
    }
  }
};
</script>

<style>

</style>