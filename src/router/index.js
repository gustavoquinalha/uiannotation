import Vue from 'vue'
import Router from 'vue-router'
import app from '@/pages/app'
import sidebar from '@/components/sidebar'
import image from '@/components/image'
import content from '@/components/content'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'app',
      components: {
        default: app,
        sidebar: sidebar,
        image: image,
        content: content
      }
    }
  ]
})
