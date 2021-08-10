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
import { ref, reactive, watch, warn } from "vue";

export default {
  name: "Demo",
  //这个是vue2的简便写法，watch就是用来监测一个属性是否发生变化
  //在vue2中，watch是一个配置项，所以只能写一个watch，但是在vue3中，watch是一种操作，可以写多个watch
  // watch: {
  //   sum(newValue, oldValue) {
  //     console.log("sum的值变化了", newValue, oldValue);
  //   },
  // },
  //vue2的完整写法，可以添加一些属性
  // watch: {
  //   sum: {
  //     handler(newValue, oldValue) {
  //       console.log("sum的值发生了变化", newValue, oldValue);
  //     },
  //     immediate: true, //这句话的意思就是表示在watch中首次绑定的时候，是否执行handler，值为true则表示在watch中声明的时候，就立即执行handler方法，值为false，则和一般使用watch一样，在数据发生变化的时候才执行handler
  //   },
  //   deep: true, //深度监视：当需要监听一个对象的改变时，普通的watch方法无法监听到对象内部属性的改变，只有data中的数据才能够监听到变化，此时就需要deep属性对对象进行深度监听
  // },
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

    //情况一：监视ref所定义的响应式数据
    // watch(sum, (newValue, oldValue) => {
    //   console.log("sum变了", newValue, oldValue);
    // });

    //情况二：监视ref所定义的多个响应式数据
    // watch(
    //   [sum, msg],
    //   (newValue, oldValue) => {
    //     console.log("sum或msg变了", newValue, oldValue);
    //   },
    //   { immediate: true }
    // );

    //情况三：监视reactive所定义的一个响应式数据
    //注意1：用reactive定义的数据，在此处无法正确地获取oldValue
    //注意2：默认开启了深度监视，也就是可以不写deep:true,就可以监视对象型数据里面的属性值的变化，而且无法关掉,也就是deep的配置无效
    // watch(person, (newValue, oldValue) => {
    //   console.log("person改变了", newValue, oldValue);
    // });

    //情况4：监视reactive所定义的一个响应式数据中的某一个属性
    // watch(
    //   () => person.age,
    //   (newValue, oldValue) => {
    //     console.log("person的age变化了", newValue, oldValue);
    //   }
    // );

    //情况5：监视reactive所定义的一个响应式数据中的某些属性
    // watch([() => person.age, () => person.name], (newValue, oldValue) => {
    //   console.log("person的age或name变化了", newValue, oldValue);
    // });

    //特殊情况，监视reactive所定义的一个响应式数据中的某个属性，而且这个对象依然是一个对象，所以deep配置有效
    watch(
      () => person.job,
      (newValue, oldValue) => {
        console.log("person的job变化了", newValue, oldValue);
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
