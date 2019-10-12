import Side from "@/views/Side.vue"
import Foot from "@/views/Foot.vue"
/* 动态路由匹配：
   动态路径参数以 :开头
   index/tom 和 index/cat会映射到相同的路由 
   动态路由之间切换会复用组件实例，组件的生命周期钩子不会再次调用
   可以使用 this.$route.params.userName获取到 :ID的值 { ID: 1}
*/
export default {
  path: '/dynamic/:ID-*',
  component: () => import('@/views/dynamic/Dynamic.vue')
}