<template>
  <!-- Vue3中的模板结构可以没有div根标签 -->
  <h1>当前求和为：{{ sum }}</h1>
  <button @click="sum++">点我+1</button>
  <hr />
  <h1>当前点击时鼠标的坐标为：x:{{ point.x }} y:{{ point.y }}</h1>
</template>

<script>
//vue2和vue3的数据不要混用
import { ref } from "vue";
import usePoint from "../hooks/usePoint";
export default {
  name: "Demo",
  setup() {
    //数据
    let sum = ref(0);
    let point = usePoint();
    //这个位置可以写自己的配置，也可以引入外部的方法、数据、钩子

    //返回一个对象（常用）
    return {
      sum,
      point,
    };
  },
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
