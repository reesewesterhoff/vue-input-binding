import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
// imports for routing
import VueRouter from 'vue-router';
import Routes from './routes';

Vue.use(VueResource);
// use router
Vue.use(VueRouter);

// define router constant as an instance of VueRouter
const router = new VueRouter({
  // use routes defined in routes.js
  routes: Routes,
  // this makes it so there is no hash needed before the /url
  // mode: 'history'
})

// Custom directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
});

// have different layout depending on directives and arguments
Vue.directive('theme', {
  bind(el, binding, vnode){
    if(binding.value == 'wide') {
      el.style.maxWidth = "1200px"
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "600px"
    }
    if (binding.arg == 'column') {
      el.style.background == '#ddd';
      el.style.padding == '20px';
    }
  }
});

// Filters
Vue.filter('to-uppercase', function(value) {
  return value.toUpperCase();
});

// Filters by only letting 100 characters through
Vue.filter('snippet', function(value) {
  return value.slice(0,100) + '...';
})

new Vue({
  el: '#app',
  render: h => h(App),
  // router is whatever we defined for the router variable
  router: router
})
