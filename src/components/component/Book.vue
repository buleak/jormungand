<template>
  <div class="son-class">
    {{ newBook }}
    {{ bookData.content }}
    <span class="a" v-for="(item, i) of bookData.index" :key="i">{{ i }} : {{ item }}</span>
    {{ bookData.author }}
    {{ bookData.time }}
    <div @click="zan">点赞: {{ num }}</div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    book: {
      type: Object,
      default() {
        return {
          name: "name",
          content: "xxxxxxxx",
          index: "1,2,3",
          author: "buleak",
          time: "1995"
        };
      }
    },
    num: {
      type: Number,
      default: 100,
      required: true
    }
  },
  data() {
    return {
      bookData: {}
    };
  },
  mounted() {
    this.bookData = this.book;
  },
  computed: {
    newBook() {
      return `书的名字是：<<${this.book.name}>>`;
    }
  },
  methods: {
    zan() {
      this.$emit('dianZan', this.num)
    }
  }
};
</script>

<style>
.son-class {
  font-size: 24px;
}
</style>
