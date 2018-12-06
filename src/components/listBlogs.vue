<template>
    <!-- able to create own custom directives -->
  <div v-theme:column="'narrow'" id="show-blogs">
      <h1>List Blog Titles</h1>
      <!-- connects to search property -->
      <input type="text" v-model="search" placeholder="Search Blogs" />
      <!-- cycles through blogs and displays each one in it's own div -->
      <!-- cycles through computed property filteredBlogs to see which titles match -->
      <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
          <!-- need pipe to indicate that there will be a filter -->
          <h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
      </div>
  </div>
</template>

<script>
// import mixin so we can use it here as well as in listBlogs
import searchMixin from '../mixins/searchMixin';


export default {
  data () {
    return {
        blogs: [],
        search: ''
    }
  },
  // when the component is created, go and get blog posts 1-10
  // set the property blogs = the results
  created() {
      this.$http.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
          console.log(response);
          this.blogs = response.body.slice(0,10);
      }).catch(error => {
          console.log(error);
          alert('Error getting blog posts.')
      });
  },
  computed: {
    //   filteredBlogs: function() {
    //     // cycles through blogs array, if "blog" matches a word in the title
    //     // of a blog in the blogs array, that blog stays, if not it is
    //     // filtered out. Filtered by whatever is input into the search bar
    //       return this.blogs.filter((blog) => {
    //           return blog.title.match(this.search);
    //       });
    //   }
  },
  filters: {
      // this is how you would register the filter in the component locally
    // toUppercase(value){   is the same as the line below, cleaner
    //   'to-uppercase': function(value){
    //       return value.toUpperCase();
    //   }
  },
  directives: {
      // this is how you would register directives locally
    //   'rainbow': {
    //     bind(el, binding, vnode) {
    //     el.style.color = "#" + Math.random().toString().slice(2,8);
    //     }
    //   }
  },
  mixins: [searchMixin]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
