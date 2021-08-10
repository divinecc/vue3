<template>
  <!-- Vue3中的模板结构可以没有div根标签 -->
  <h1>姓名：{{ name }}</h1>
  <h1>年龄：{{ age }}</h1>
  <h1>薪资：{{ salary }}</h1>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="salary++">涨薪</button>
</template>

<script>
//vue2和vue3的数据不要混用
import { ref, reactive, toRef, toRefs } from "vue";

export default {
  name: "Demo",

  setup() {
    //数据
    let person = reactive({
      name: "Divine",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // const name1 = person.name;
    // console.log("%%%", name1);

    // const name2 = toRef(person, "name"); //第一个参数是你要取的对象，第二个参数是你要取的对象里面的属性  name2是一个RefImpl,里面有很多属性，包括value，这个value指向的就是person.name, 又因为是ref类型的值，所以在模板里面使用的时候不需要.value
    // console.log("###", name2);

    //toRefs可以批量处理一个对象里面的所有属性，只用一个参数
    const x = toRefs(person);
    console.log(x);
    //返回一个对象（常用）
    return {
      name: toRef(person, "name"),
      age: toRef(person, "age"),
      salary: toRef(person.job.j1, "salary"), //只要满足传的是一个对象就行
    };

    // return {
    //   person,
    //   ...toRefs(person)
    // }  这样写的话，就只能解析一层，所以salary解析不出来，在模板里面引用的时候要写成job.j1.salary
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
