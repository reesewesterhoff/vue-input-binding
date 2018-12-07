// import components that need to be shown
import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';

// export the paths and components for each path
export default [
    { path: '/', component: showBlogs },
    { path: '/add', component: addBlog }
]