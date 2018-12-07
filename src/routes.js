// import components that need to be shown
import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';
import singleBlog from './components/singleBlog.vue';

// export the paths and components for each path
export default [
    { path: '/', component: showBlogs },
    { path: '/add', component: addBlog },
    // /:id will allow us to choose the blog that is clicked
    { path: '/blog/:id', component: singleBlog }
]