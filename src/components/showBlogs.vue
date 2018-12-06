<template>
    <!-- able to create own custom directives -->
  <div v-theme:column="'narrow'" id="show-blogs">
      <h1>All Blog Articles</h1>
      <!-- cycles through blogs and displays each one in it's own div -->
      <div v-for="blog in blogs" :key="blog.id" class="single-blog">
          <h3 v-rainbow>Title: {{blog.title}}</h3>
          <p>Content: {{blog.body}}</p>
          <p>Author: {{blog.userId}}</p>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        blogs: []
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
  }
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
