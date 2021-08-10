<template>
  <div class="app">
    <h3>我是App组件(祖), {{ name }} -- {{ price }}</h3>
    <Child />
  </div>
</template>

<script>
import { reactive, toRefs, provide } from "vue";
import Child from "./components/Child.vue";
export default {
  name: "App",
  components: {
    Child,
  },
  setup() {
    let car = reactive({
      name: "Benz",
      price: "40w",
    });
    provide("car", car); //给自己的后代组件传递数据。provide函数有两个参数，第一个参数是给要传递的数据起的一个名字，第二个参数是就是要传递的数据
    return {
      ...toRefs(car),
    };
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>