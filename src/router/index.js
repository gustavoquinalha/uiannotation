import Vue from 'vue'
import Router from 'vue-router'
import project from '@/pages/project'
import products from '@/pages/products'
import product from '@/pages/app'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'app',
      component: project
      // children: [
      //   {
      //     path: '/products',
      //     name: 'products',
      //     component: products,
      //     children: [
      //       {
      //         path: '/products/1',
      //         name: 'product',
      //         component: product
      //       }
      //     ]
      //   }
      // ]
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/products/1',
      name: 'product1',
      component: product
    },
    {
      path: '/products/2',
      name: 'product2',
      component: product
    },
    {
      path: '/products/3',
      name: 'product3',
      component: product
    }
  ]
})
