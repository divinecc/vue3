<template>
  <!-- Vue3中的模板结构可以没有div根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
//vue2和vue3的数据不要混用
import { reactive } from "vue";
export default {
  name: "Demo",
  props: ["msg", "school"],
  emits: ["hello"], //这个是vue3新增的，目的是告诉子组件，我知道你绑定了一个自定义事件
  //也就是说先输出的是---setup--- 后输出的是---before---
  beforeCreate() {
    console.log("----before---");
  },
  setup(props, context) {
    //数据
    // console.log("---setup---", props);
    // console.log("---setup---", context);
    // console.log("---setup---", contex.attrs);//相当于vue2中的$attrs
    // console.log("---setup---", context.emit); //触发自定义事件的
    console.log("---setup---", context.slots); //插槽

    const person = reactive({
      name: "张三",
      age: 18,
    });

    //方法
    function test() {
      context.emit("hello", 666); //如果是vue2的话，就是this.$emit('hello', 666)
    }
    //返回一个对象（常用）
    return {
      person,
      test,
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
