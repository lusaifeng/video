<template>
  <div class="container-full">
    <v-header />
    <div class="main">
      
      <b-row>
        <b-col lg="8">
          <div class="watch">
            <h1 class="video-title">视频标题</h1>
            <div class="video">
              <d-player :video="video"
                :autoplay="false"
                :contextmenu="contextmenu"
                :screenshot="false"
                @play="play"
                ref="player">
              </d-player>
            </div>
            <div id="comments" class="post-comments">
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
            <div class="related-video-item" v-for="item in videos" :key="item.name">
              <div class="thumb">
                <small class="time">{{item.time}}</small>
                <router-link :to="item.url"><img :src="item.img" ></router-link>
              </div>
              <router-link :to="item.url" class="title">Lorem Ipsum is simply dummy text of the printing and </router-link>
            </div>
          </div>
        </b-col>
      </b-row>

    </div>

    <v-footer />
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
      video: {
        url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
        pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
      },
      videoUrl: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4',
      autoplay: false,
      player: null,
      contextmenu: [
          {
              text: 'GitHub',
              link: 'https://github.com/MoePlayer/vue-dplayer'
          }
      ],
      videos: [
        {
          img: "../../static/img/v1.png",
          time: "20:21",
          url: "/video",
          title: "Lorem Ipsum is simply dummy text of the printing and",
          view: 12321,
          update: "2017-10-23"
        },
        {
          img: "../../static/img/v1.png",
          time: "20:21",
          url: "/video",
          title: "Lorem Ipsum is simply dummy text of the printing and",
          view: 12321,
          update: "2017-10-23"
        },
        {
          img: "../../static/img/v1.png",
          time: "20:21",
          url: "/video",
          title: "Lorem Ipsum is simply dummy text of the printing and",
          view: 12321,
          update: "2017-10-23"
        },
        {
          img: "../../static/img/v1.png",
          time: "20:21",
          url: "/video",
          title: "Lorem Ipsum is simply dummy text of the printing and",
          view: 12321,
          update: "2017-10-23"
        },
        {
          img: "../../static/img/v1.png",
          time: "20:21",
          url: "/video",
          title: "Lorem Ipsum is simply dummy text of the printing and",
          view: 12321,
          update: "2017-10-23"
        },
        {
          img: "../../static/img/v1.png",
          time: "20:21",
          url: "/video",
          title: "Lorem Ipsum is simply dummy text of the printing and",
          view: 12321,
          update: "2017-10-23"
        },
        {
          img: "../../static/img/v1.png",
          time: "20:21",
          url: "/video",
          title: "Lorem Ipsum is simply dummy text of the printing and",
          view: 12321,
          update: "2017-10-23"
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
    switchHandle() {
      this.player.switchVideo({
        url: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4'
      })
    }
  }
};
</script>

<style>

</style>