<template>
  <!-- Vue3中的模板结构可以没有div根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <button @click="changeInfo">修改个人信息</button>
</template>

<script>
//vue2和vue3的数据不要混用
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    //数据
    //使用ref之后得到的数据就是被包裹在一个RefImpl对象中的，里面有一个属性vaule等于这个数据的值，可以实现响应式，对数据进行修改
    let name = ref("张三");
    let age = ref(18);
    let job = ref({
      type: "前端工程师",
      salary: "30k",
    });

    //方法
    function changeInfo() {
      //name = "李四"; //这样写数据会被修改，但是页面不会发生改变，因为上面定义的数据不是响应式的
      //age = 48;
      name.value = "李四";
      age.value = 48;
      job.value.type = "UI设计师";
      job.value.salary = "60k";
      // console.log(name, age);
    }

    //返回一个对象（常用）
    return {
      name,
      age,
      changeInfo,
      job,
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
