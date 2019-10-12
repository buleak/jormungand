/* 
  命名视图:
    同时展示多个视图 <router-view name="default"></router-view>
    name默认为 default
    多个视图需要多个组件
  嵌套命名视图:
*/

import NamedView from '@/views/namedView/NamedView.vue'
import Left from '@/views/namedView/Left.vue'
import Right from '@/views/namedView/Right.vue'

export default {
  path: '/namedView',
  component: NamedView,
  children: [
    {
      path: 'content',
      components: {
        left: Left,
        right: Right
      }
    }
  ]
}