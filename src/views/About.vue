<template>
  <div class="about">
    <h1 :style="{fontSize: `${size}px`}">This is an about page</h1>
    <button @click="sendMsg">send</button>
    <Book
      v-for="(book, index) of bookList"
      :key="index"
      :book="book"
      :num="index"
      data-val="1"
      class="father-class"
      @dianZan="addZan"
    />
    <Inp 
      for="inp"
      v-model="inputValue"
      placeholder="随便输入些什么吧"
    />
    <h1>{{inputValue}}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Book from "@/components/component/Book.vue";
import Inp from "@/components/component/Inp.vue";
export default Vue.extend({
  data() {
    return {
      // socket: "ws://localhost:3000",
      inputValue: '自定义V-Model',
      size: 12,
      bookList: [
        {
          name: "灰与幻想",
          index: ["灰1", "灰2", "灰3"],
          content: "我喜欢灰与幻想的格林姆迦尔",
          author: "十字文青",
          time: "2019/9/24"
        },
        {
          name: "老人与海",
          index: ["灰1", "灰2", "灰3"],
          content: "我喜欢灰与幻想的格林姆迦尔",
          author: "十字文青",
          time: "2019/9/24"
        },
        {
          name: "钢铁是怎样炼成的",
          index: ["灰1", "灰2", "灰3"],
          content: "我喜欢灰与幻想的格林姆迦尔",
          author: "十字文青",
          time: "2019/9/24"
        }
      ]
    };
  },
  components: {
    Book,
    Inp
  },
  methods: {
    sendMsg() {
      // let socket = io
    },
    addZan(data:number) {
      this.size +=data
    }
  }
});
</script>

<style>
  /* 父级传入的特性 */
.father-class { color: red; }
</style>
