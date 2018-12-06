// mixins are reusable bits of code that we can store here and reference
// from different vue files
export default {
    computed: {
        filteredBlogs: function() {
            // cycles through blogs array, if "blog" matches a word in the title
            // of a blog in the blogs array, that blog stays, if not it is
            // filtered out. Filtered by whatever is input into the search bar
              return this.blogs.filter((blog) => {
                  return blog.title.match(this.search);
              });
          }
    }
}