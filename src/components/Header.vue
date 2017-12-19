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
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here...</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="ddown1" no-caret class="ml-3 account">
          <template slot="button-content">
            <span class="account-name">小路</span>
            <i class="fa fa-angle-down"></i>
          </template>
          <b-dropdown-item to="/login">退出</b-dropdown-item>
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
          name: '视频观看',
          href: '/'
        },
        {
          name: '历史观看',
          href: '/history'
        }
      ]
    }
  },
  methods: {}
};
</script>

<style>

</style>