<template>
  <!-- Vue3中的模板结构可以没有div根标签 -->
  <h1>当前求和为：{{ sum }}</h1>
  <button @click="sum++">点我+1</button>
</template>

<script>
//vue2和vue3的数据不要混用
import {
  onBeforeMount,
  ref,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default {
  name: "Demo",
  setup() {
    console.log("---setup---");
    //数据
    let sum = ref(0);

    //通过组合API的形式去使用生命周期钩子
    onBeforeMount(() => {
      console.log("---onBeforeMount---");
    });
    onMounted(() => {
      console.log("---onMounted---");
    });
    onBeforeUpdate(() => {
      console.log("---onBeforeUpdate---");
    });
    onUpdated(() => {
      console.log("---onUpdated---");
    });
    onBeforeUnmount(() => {
      console.log("---onBeforeUnmount---");
    });
    onUnmounted(() => {
      console.log("---onUnmounted---");
    });

    //返回一个对象（常用）
    return {
      sum,
    };
  },
  //通过配置项的形式使用生命周期钩子，在这种情况下，setup比beforeCreate先执行
  // beforeCreate() {
  //   console.log("---beforeCreate---");
  // },
  // created() {
  //   console.log("---created---");
  // },
  // beforeMount() {
  //   console.log("---beforeMount---");
  // },
  // mounted() {
  //   console.log("---mounted---");
  // },
  // beforeUpdate() {
  //   console.log("---beforeUpdate---");
  // },
  // updated() {
  //   console.log("---updated---");
  // },
  // beforeUnmount() {
  //   console.log("---beforeDestroy---");
  // },
  // unmounted() {
  //   console.log("---destroyed---");
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
