//引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数，工厂函数的意思就是可以直接调用

import { createApp } from 'vue'
import App from './App.vue'
// createApp(App).mount('#app')

//创建应用实例对象
const app = createApp(App)
//挂载app
app.mount('#app')


