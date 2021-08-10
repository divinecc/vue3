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
import { ref, reactive, watch } from "vue";

export default {
  name: "Demo",

  setup() {
    //数据
    let sum = ref(0);
    let msg = ref("Divine");
    let person = ref({
      name: "Divine",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // console.log(sum);
    // console.log(msg);
    // console.log(person);

    //注意监测的是一个属性，是一种结构，而不是监测具体的值，所以不能sum.value，因为.value就是一个具体的值
    watch(sum, (newValue, oldValue) => {
      console.log("sum的值变化了", newValue, oldValue);
    });

    //由于person本来是一个对象，应该用reactive来定义，但是这里用的是ref来定义，所以person被包裹成了一个RefImpl对象，里面有一个value属性，是一个Proxy实例对象，这个是借用了reactive，所以person.value监控的是一个reactive定义的数据
    watch(person.value, (newValue, oldValue) => {
      console.log("person的值变化了", newValue, oldValue);
    });
    //法二：开启深度监视
    watch(
      person,
      (newValue, oldValue) => {
        console.log("person的值变化了", newValue, oldValue);
      },
      { deep: true }
    );

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
