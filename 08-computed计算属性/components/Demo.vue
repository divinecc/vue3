<template>
  <!-- Vue3中的模板结构可以没有div根标签 -->
  <h1>一个人的信息</h1>
  姓：<input type="text" v-model="person.firstName" />
  <br />
  名：<input type="text" v-model="person.lastName" />
  <br />
  <span>全名： {{ person.fullName }}</span>
  <br />
  全名：<input type="text" v-model="person.fullName" />
</template>

<script>
//vue2和vue3的数据不要混用
import { reactive, computed } from "vue";

export default {
  name: "Demo",

  //这个是vue2里面的计算属性的写法
  // computed: {
  //   fullName() {
  //     return this.person.firstName + "-" + this.person.lastName;
  //   },
  // },

  setup() {
    //数据
    let person = reactive({
      firstName: "张",
      lastName: "三",
    });
    //计算属性-简写形式（没有考虑计算属性被修改的情况）
    // person.fullName = computed(() => {
    //   return person.firstName + "-" + person.lastName;
    // });

    //计算属性-完整写法（考虑读和写）
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        const nameArr = value.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });
    //返回一个对象（常用）
    return {
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
