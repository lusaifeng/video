<template>
  <header>
    <b-row>
      <b-col lg="2" md="2" sm="6">
        <a href="/">
          <img src="../../static/img/logo.png" alt="">
        </a>
      </b-col> 
      <b-col lg="3" md="3" sm="6" class="hidden-xs hidden-sm">
        <b-input-group class="search-form">
            <b-form-input type="text" placeholder="搜索..." />
            <b-input-group-button>
              <b-button to="/search">
                <i class="fa fa-search"></i>
              </b-button>
            </b-input-group-button>
          </b-input-group>
      </b-col>
      <b-col lg="4" md="6" sm="6">
        <ul class="nav">
          <li class="nav-item" v-for="(item, index) in navItems" :key="index">
            <router-link :to="item.href" class="nav-link" active-class="active">
              {{item.name}}
            </router-link>
          </li>
        </ul>
      </b-col>
      <b-col lg="3" md="3" sm="6" class="hidden-xs hidden-sm text-right">
        <b-dropdown id="ddown1" no-caret class="m-md-2 notifications">
          <template slot="button-content">
            <i class="fa fa-bell-o"></i>
            <b-badge variant="danger">5</b-badge>
          </template>
          
          <div class="notification-list">
            <div class="notification-info">
              <router-link to="/video">
                <i class="fa fa-video-camera color-1"></i>
                vue props 细节详解 <span>视频</span>
                <h5 class="time">更新于4小时前</h5>
              </router-link>
            </div>
            <div class="notification-info">
              <router-link to="/video">
                <i class="fa fa-comment color-3"></i>
                vue-router 视频教程 <span>评论</span>
                <h5 class="time">评论于2017-11-22 10:02:23</h5>
              </router-link>
            </div>
          </div>
            
        </b-dropdown>

        <b-dropdown id="ddown1" no-caret class="ml-3 account">
          <template slot="button-content">
            <img src="../../static/img/c1.jpg" class="account-author">
            <span class="account-name">杰克逊</span>
            <i class="fa fa-angle-down"></i>
          </template>
          <div class="notification-list">
            <div class="notification-info">
              <router-link to="/login">
                <i class="fa fa-diamond color-1"></i>
                成为会员 <span class="color-3">699/年</span>
                <h5 class="time">- 会员期间可观看所有视频 -</h5>
              </router-link>
            </div>
            <div class="notification-info">
              <router-link to="/login">
                <i class="fa fa-sign-out color-2"></i>
                退出
              </router-link>
            </div>
          </div>
        </b-dropdown>
      </b-col>
    </b-row>
  </header>
</template>
<script>
export default {
  name: "VHeader",
  data() {
    return {
      navItems: [
        {
          name: "视频观看",
          href: "/"
        },
        {
          name: "历史观看",
          href: "/history"
        },
        {
          name: "关于我们",
          href: "/about"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style>

</style>