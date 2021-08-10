<template>
  <Demo />
</template>

<script>
//vue2和vue3的数据不要混用
import Demo from "./components/Demo";
export default {
  name: "App",
  components: {
    Demo,
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
