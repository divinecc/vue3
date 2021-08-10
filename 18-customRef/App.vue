<template>
  <input type="text" v-model="keyword" />
  <h3>{{ keyword }}</h3>
</template>

<script>
import { ref, customRef } from "@vue/reactivity";
//vue2和vue3的数据不要混用
export default {
  name: "App",
  setup() {
    //自定义一个ref
    function myRef(value, delay) {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            //当有人想从这里面读数据的时候get就会被调用
            console.log(`有人从myRef这个容器中读取数据了，我把hello给他了`);
            track(); //通知vue追踪value的改变（提前和get商量一下，让它认为这个value是有用的）
            return value;
          },
          set(newValue) {
            //当有人想通过v-model来对这里面的数据进行修改时，set就会被调用
            console.log(`有人把myRef这个容器中的取数据改为了:${newValue}`);
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue; //因为我要在模板里面那个h1的keyword部分显示我的最新的value，显示就要读取，读取就要调用get，但是get的返回值始终是value，所以这里要把newValue的值赋值给value，这样调用get时，里面的返回值就是newValue
              trigger(); //通知Vue去重新解析模板
            }, delay);
          },
        };
      });
    }
    //let keyword = ref("hello");  //使用vue提供的内置的ref
    let keyword = myRef("hello", 500); //使用程序员自定义的ref
    return { keyword };
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
