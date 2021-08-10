<template>
  <!-- Vue3中的模板结构可以没有div根标签 -->
  <h1>x的值是：{{ x.y }}</h1>
  <button @click="x.y++">点击x的值+1</button>
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
import { ref, reactive, toRef, toRefs, shallowReactive, shallowRef } from "vue";

export default {
  name: "Demo",

  setup() {
    //数据
    //shallowReactive是浅层次的响应式，即只处理第一层，后面的就不处理了，这里就是salary无法处理
    let person = shallowReactive({
      name: "Divine",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    //let x = shallowRef(0); //当传入的是基本数据类型的时候，ref和shallowRef没有区别
    let x = shallowRef({
      //当传入的是对象类型的时候，shallowRef就不能实现响应式了
      y: 0,
    });

    //返回一个对象（常用）
    return {
      x,
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
