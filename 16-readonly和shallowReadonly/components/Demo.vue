<template>
  <h1>当前求和为：{{ sum }}</h1>
  <button @click="sum++">点击我++</button>
  <hr />
  <h1>姓名：{{ name }}</h1>
  <h1>年龄：{{ age }}</h1>
  <h1>薪资：{{ salary }}</h1>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="salary++">涨薪</button>
</template>

<script>
//vue2和vue3的数据不要混用
import { ref, reactive, toRef, readonly, shallowReadonly } from "vue";

export default {
  name: "Demo",

  setup() {
    //数据
    let sum = ref(0);
    let person = reactive({
      name: "Divine",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // person = readonly(person); //readonly是一个函数，里面传入的参数是响应式的数据
    person = shallowReadonly(person); //shallowReadonly只是这个响应式数据的第一层不允许修改，但是更深层次的数据是可以修改的，在这里就是name和age不能修改，但是salary是可以修改的
    //返回一个对象（常用）
    return {
      sum,
      name: toRef(person, "name"),
      age: toRef(person, "age"),
      salary: toRef(person.job.j1, "salary"), //只要满足传的是一个对象就行
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
