<template>
  <div class="container-full">
    <v-header />
    <div class="main">
      
      <h1 class="new-video-title"><i class="fa fa-search"></i> 搜索结果</h1>
      <b-row>
        <b-col lg="3" md="4" sm="6" v-for="(item, index) in videos" :key="index">
          <div class="video-item">
            <div class="thumb">
              <div class="hover-efect"></div>
              <small class="time">{{item.time}}</small>
              <a :href="item.url"><img :src="item.img" alt=""></a>
            </div>
            <div class="video-info">
              <a href="#" class="title">{{item.title}}</a>
              <span class="views"><i class="fa fa-eye"></i>{{item.view}} </span>
              <span class="date"><i class="fa fa-clock-o"></i>{{item.update}} </span>
            </div>
          </div>
        </b-col>
      </b-row>
      <div id="loading-more" v-show="loading">
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
      loading: false,
      videos: [
        {
          img: '../../static/img/v1.png',
          time: '20:21',
          url: '/',
          title: 'Lorem Ipsum is simply dummy text of the printing and',
          view: 12321,
          update: '2017-10-23'
        },
        {
          img: '../../static/img/v1.png',
          time: '20:21',
          url: '/',
          title: 'Lorem Ipsum is simply dummy text of the printing and',
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