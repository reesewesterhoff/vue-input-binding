<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <!-- if submitted = true, hide the form -->
    <form v-if="!submitted">
      <!-- using v-model connects input box with property -->
      <label>Blog Title</label>
      <!-- .lazy makes it so that preview shows up upon pressing tab -->
      <input type="text" v-model.lazy="blog.title" required>
      <label>Blog Content</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <!-- checkbox binding -->
      <div id="checkboxes">
        <!-- vue will add whatever the value of the checkbox is, can be array -->
        <label for="ninjas">Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories">
        <label for="wizards">Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories">
        <label for="mario">Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories">
        <label for="cheese">Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories">
      </div>
      <!-- select box tutorial -->
      <label>Author:</label>
      <select v-model="blog.author">
        <!-- loop through authors array, selecting one makes the blog.author update -->
        <option v-for="author in authors" :key="author">{{author}}</option>
      </select>
      <!-- prevent prevents the page from refreshing -->
      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{blog.title}}</p>
      <p>Blog Content: {{blog.content}}</p>
      <p>Blog Categories:</p>
      <!-- cycle through array of categories and display them on DOM -->
      <ul>
        <li v-for="category in blog.categories" :key="category">{{category}}</li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>
    <!-- if submitted = true, show this h3 -->
    <div v-if="submitted">
      <h3>Thanks for submitting your blog!</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // properties that can be edited with the input fields
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["Reese", "Jeff", "Bob"],
      submitted: false
    };
  },
  // http request, also changes submitted to true
  methods: {
    post: function() {
      this.$http
      // change post url to firebase database, send entire blog object
        .post("https://vue-blog-1dce8.firebaseio.com/posts.json", this.blog)
        .then(response => {
          console.log(response);
          this.submitted = true;
        })
        .catch(error => {
          console.log(error);
          alert('Error submitting your blog.')
        });
    }
  }
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>