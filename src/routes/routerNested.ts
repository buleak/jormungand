/* 
  嵌套路由: 嵌套路由置于 children: []内
  以'/' 开头的嵌套路由会被当成根路径，嵌套路由的路径无需以 '/'开头
  如果 nested/:id --> nested/bul, 会被当成嵌套路由而无法渲染 Nested.vue, 可以在 children里加上一个空白路径的子路由
*/

export default {
  path: '/nested',
  component: () => import('@/views/nested/Nested.vue'),  
  children: [
    {
      path: 'hour',
      component: () => import('@/views/nested/Hour.vue')
    },
    {
      path: 'minute',
      component: () => import('@/views/nested/Minute.vue')
    },
    {
      path: 'second',
      component: () => import('@/views/nested/Second.vue')
    }
  ]
}