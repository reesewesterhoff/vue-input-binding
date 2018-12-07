<template>
    <!-- able to create own custom directives -->
  <div v-theme:column="'narrow'" id="show-blogs">
      <h1>All Blog Articles</h1>
      <!-- connects to search property -->
      <input type="text" v-model="search" placeholder="Search Blogs" />
      <!-- cycles through blogs and displays each one in it's own div -->
      <!-- cycles through computed property filteredBlogs to see which titles match -->
      <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
          <!-- need pipe to indicate that there will be a filter -->
          <router-link v-bind:to="'/blog/' + blog.id"><h3 v-rainbow>{{blog.title | to-uppercase}}</h3></router-link>
          <!-- blog.content for us, not blog.body like before -->
          <p>{{blog.content | snippet}}</p>
          <p>Author: {{blog.author}}</p>
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
      // get whatever is in my firebase database
      this.$http.get('https://vue-blog-1dce8.firebaseio.com/posts.json')
      .then(response => {
          // return function
          return response.json();
          // second .then to wait for response.json() promise to complete
      }).then(response2 => {
          // temporary array
          let blogsArray = [];
          // cycle through .then of json()
          for(let key in response2) {
              // give each object an id property
              response2[key].id = key;
              // push each object into temporary array
              blogsArray.push(response2[key]);
          }
            // set temporary array = to blogs array
            this.blogs = blogsArray;    
      })
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
  // use mixin (reusable code)
  mixins: [searchMixin]
}
</script>

<style scoped>
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
