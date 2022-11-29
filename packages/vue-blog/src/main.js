import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './assets/reset.css'
import HomeView from './views/HomeView.vue'
import NotFoundView from './views/NotFoundView.vue'
import PostView from './views/PostView.vue'
Vue.config.productionTip = false

// const Post = {
//   template: '<div>User</div>',
// }

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'Home', component: HomeView, path: '/', children: [] },
    { name: 'Post', path: '/post/:id', component: PostView, children: [] },
    { name: 'NotFound', component: NotFoundView, path: '/:pathMatch(.*)*' },
  ],
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
