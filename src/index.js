// 这是工程的入口文件
import Vue from "vue"
import App from "./App.vue"

import "./assets/images/baihua.jpg"
// import "./assets/images/xxxx.jpg"
// import "./assets/images/timg.jpg"

import "./assets/styles/test.css"
import "./assets/styles/test-stylus.styl"

const root = document.createElement("div")
document.body.appendChild(root)

new Vue({
	render: (h) => h(App)
}).$mount(root)