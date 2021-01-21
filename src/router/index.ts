import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/comm'
  },
  {
    path: '/comm',
    component: () => import('/@/pages/CommView.vue'),
    children: [
      {
        path: 'one',
        component: () => import('/@/pages/One/index.vue'),
        meta: {
          title: '页面一',
        },
      },
      {
        path: 'two',
        component: () => import('/@/pages/two/index.vue'),
        meta: {
          title: '页面二',
        },
      },
    ]
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router