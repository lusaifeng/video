import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '../components/Login'
import Layout from '../components/Layout'
import History from '../components/History'
import Search from '../components/Search'

const router = new Router({
    routes: [{
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                isPublic: true
            }
        },
        {
            path: '/',
            name: 'layout',
            component: Layout
        },
        {
            path: '/history',
            name: 'history',
            component: History
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        }
    ]
})

export default router