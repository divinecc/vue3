<template>
  <div class="app">
    <h3>我是App组件(祖)</h3>
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  ref,
  readonly,
  isRef,
  isReactive,
  isReadonly,
  isProxy,
} from "vue";

export default {
  name: "App",
  setup() {
    let car = reactive({
      name: "Benz",
      price: "40w",
    });
    let sum = ref(0);
    let car2 = readonly(car); //返回的依旧是一个代理的对象，所以isProxy(car2)为真

    console.log(isRef(sum));
    console.log(isReactive(car));
    console.log(isReadonly(car2));
    console.log(isProxy(car));
    console.log(isProxy(car2));

    return {
      ...toRefs(car),
    };
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>