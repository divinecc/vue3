<template>
  <!-- Vue3中的模板结构可以没有div根标签 -->
  <h1>当前求和为：{{ sum }}</h1>
  <button @click="sum++">点我+1</button>
  <hr />
  <h1>当前信息为：{{ msg }}</h1>
  <button @click="msg += '!'">修改信息</button>
  <hr />
  <h1>姓名：{{ person.name }}</h1>
  <h1>年龄：{{ person.age }}</h1>
  <h1>薪资：{{ person.job.j1.salary }}</h1>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
//vue2和vue3的数据不要混用
import { ref, reactive, watch, watchEffect } from "vue";

export default {
  name: "Demo",

  setup() {
    //数据
    let sum = ref(0);
    let msg = ref("Divine");
    let person = reactive({
      name: "Divine",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    //监视
    watch(sum, (newValue, oldValue) => {
      console.log("sum的值变化了", newValue, oldValue);
    });

    //里面用到了谁，就可以监视谁的变化，比如这里用了sum和person.job.j1.salary，那么就可以监视他们两个的变化
    watchEffect(() => {
      const x1 = sum.value;
      const x2 = person.job.j1.salary;
      console.log("watchEffect所指定的回调执行了");
    });

    //返回一个对象（常用）
    return {
      sum,
      msg,
      person,
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
