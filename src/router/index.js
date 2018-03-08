import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  	{
    	path: '/',
    	redirect: '/dept'
    },
    {
      path: '/dept',
      component:resolve => require(['@/page/list'],resolve)
    },
    {
    	path: '/detail/id=:id',
    	component: resolve => require(['@/page/detail'],resolve)
    },   
    {
    	path: '/order',
    	component: resolve => require(['@/page/order'],resolve)
    },
    {
    	path: '/User',
    	component: resolve => require(['@/page/user'],resolve)
    },
    {
    	path: '/set',
    	component: resolve => require(['@/page/set'],resolve)
    }
  ]
})
