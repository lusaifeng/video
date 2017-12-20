<template>
  <div class="container-full">
    <v-header />
    <div class="main">
      
      <h1 class="new-video-title"><i class="fa fa-youtube-play"></i> 视频观看</h1>
      <b-row>
        <b-col lg="3" md="4" sm="6" v-for="(item, index) in videos" :key="index">
          <div class="video-item">
            <router-link :to="item.url">
              <div class="thumb">
                <div class="hover-efect"></div>
                <small class="time">{{item.time}}</small>
                <img :src="item.img">
              </div>
              <div class="video-info">
                <div class="title">{{item.title}}</div>
                <div>
                  <span class="views"><i class="fa fa-eye"></i>{{item.view}} </span>
                  <span class="date"><i class="fa fa-clock-o"></i>{{item.update}} </span>
                </div>
              </div>
            </router-link>
          </div>
        </b-col>
      </b-row>
      <div id="loading-more">
        <i class="fa fa-refresh faa-spin animated"></i> <span>Loading more</span>
      </div>

    </div>
    <v-footer />
  </div>
</template>
<script>
import VHeader from './Header'
import VFooter from './Footer'
export default {
  name: "Layout",
  components: {
    VHeader,
    VFooter
  },
  data() {
    return {
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
      ]
    };
  },
  methods: {}
};
</script>

<style>

</style>