<template>
  <div id="app">
    <app-header></app-header>
    <!-- needed for showing components dynamically according to url -->
    <router-view></router-view>
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs>
    <list-blogs></list-blogs> -->
  </div>
</template>

// <script>
// import addBlog from './components/addBlog.vue';
// import showBlogs from './components/showBlogs.vue';
// import listBlogs from './components/listBlogs.vue';
import header from './components/header.vue';

export default {
  components: {
    // 'add-blog': addBlog,
    // 'show-blogs': showBlogs,
    // 'list-blogs': listBlogs,
    'app-header': header
  },
  data () {
    return {
     
    }
  }
}
</script>

<style>

</style>
