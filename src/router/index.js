import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News.vue'
import Media from '@/components/Media.vue'
import Achieve from '@/components/Achieve.vue'
import Schedule from '@/components/Schedule.vue'
import Main from '@/components/Main.vue'
import OneNews from '@/components/OneNews.vue'
import NumsPage from '@/components/NumsPage.vue'
import Test from '@/components/Test.vue'
import Header from '@/components/Header.vue'
// import Form from '@/components/Form.vue'
// import Tabs from '@/components/Tabs.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'MajorPart',
      component: Main
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/news/:ID',
      name: 'NewsApart',
      component: OneNews
    },
    {
      path: '/page/:NUM',
      name: 'NumsPage',
      component: NumsPage
    },
    {
      path: '/media',
      name: 'Media',
      component: Media
    },
    {
      path: '/achieve',
      name: 'Achieve',
      component: Achieve
    },
    {
      path: '/href',
      name: 'href',
      component: Header 
    },
    {
      path: '/games',
      name: 'Schedule',
      component: Schedule
    },
    // {
    //   path: '/form',
    //   name: 'Form',
    //   component: Form
    // },
    // {
    //   path: '/category/:tabs',
    //   name: 'Category',
    //   component: Tabs,
    //   props:true
    // },
    
  ]
})
