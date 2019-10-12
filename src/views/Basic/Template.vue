<template>
  <div id="basic-template">
    <ul>
      <li>
        <h1>插值</h1>
        <section>
          <div>Message: {{ msg }}</div>
          <div v-once>v-once: {{once}}</div>
          <div v-html="html"></div>
          <div>{{boolean ? '单个表达式' : num + 1}}</div>
        </section>
      </li>
      <li>
        <h1>指令</h1>
        <section>
          <div>v-if：条件渲染，更高的切换开销</div>
          <div>v-for：列表渲染，优先级高于v-if(先循环，再每个item单独v-if)</div>
          <div>v-pre：跳过元素及子元素的编译过程</div>
          <div>v-once：只渲染元素&组件一次，之后被视为静态内容跳过</div>
          <div>v-show：显示隐藏，更高的初始渲染开销</div>
          <div>v-else：配合v-if</div>
          <div>v-text：更新文本内容，等同于双大括号</div>
          <div>v-html：按普通HTML插入，不会作为Vue模板进行编译</div>
          <div>v-cloak：直到编译结束</div>
          <div>v-model：表单双向数据绑定</div>
          <div>v-on(@)：监听事件</div>
          <div>v-bind(:)：监听属性</div>
          <div>v-slot(#)：插值</div>
          <div>v-else-if：配合v-if</div>
          <div>动态参数：v-bind:[propName:string]="url"</div>
        </section>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data():object {
    return {
      boolean: false,
      num: 10000000,
      msg: '双大括号语法',
      once: '不能够改变',
      html: '<strong style="color: red;">输出HTML</strong>'
    }
  }
})
</script>

<style scoped>
  li h1,
  section div {
    text-align: left;
  }
  section div {
    margin-left: 50px;
  }
</style>