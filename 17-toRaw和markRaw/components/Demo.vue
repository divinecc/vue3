<template>
  <h1>当前求和为：{{ sum }}</h1>
  <button @click="sum++">点击我++</button>
  <hr />
  <h1>姓名：{{ name }}</h1>
  <h1>年龄：{{ age }}</h1>
  <h1>薪资：{{ salary }}</h1>
  <h1 v-show="person.car">座驾信息：{{ person.car }}</h1>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="salary++">涨薪</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一辆车</button>
  <button @click="person.car.name += '!'">换车名</button>
  <button @click="changePrice">换价格</button>
</template>

<script>
//vue2和vue3的数据不要混用
import { ref, reactive, toRef, toRaw, markRaw } from "vue";

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
      // car: {}
    });

    function showRawPerson() {
      const p = toRaw(person); //toRaw只能处理reactive创造的响应式对象，不能处理ref创造的响应式对象
      console.log(p);

      const sum = toRaw(sum);
      console.log(sum); //这里输出的结果是undefined，因为不能处理ref创造的响应式对象
    }

    function addCar() {
      let car = {
        name: "Benz",
        price: 40,
      };
      person.car = car; //这里添加了这个car之后，由于setup只执行一次，最开始是没有car的，所以底下在返回的时候除了分开传之外，还要添加一个整体的person，因为他是响应式的，所以当数据发生任何一种变化的时候，都会被vue所监测到，因此页面也会发生响应的变化。第二种解决办法是在上面person类里面准备一个空的car
      person.car = markRaw(car); //用markRaw来定义car之后，car永远不是响应式的数据了，改是改了，但是页面不会发生变化了，而上一节的readonly是一整个都不能修改了
    }

    function changePrice() {
      person.car.price++;
      console.log(person.car.price);
    }

    //返回一个对象（常用）
    return {
      addCar,
      showRawPerson,
      changePrice,
      sum,
      person,
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
