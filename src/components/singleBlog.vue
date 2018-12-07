<template>
    <div id="single-blog">
        <!-- displays title and body of blog in it's own component -->
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>Author: {{blog.author}}</p>
        <p>Categories: </p>
        <ul>
            <li v-for="category in blog.categories" :key="category.id">{{category}}</li>
        </ul>
    </div>
</template>

<script>
    
export default {
    data() {
        return {
            // id comes from router, id is taco
            id: this.$route.params.id,
            blog: {}
        }
    },
    // will go and grab data when component has been created "componentDidMount"
    created() {
        // goes to firebase and grabs blog by id
        this.$http.get('https://vue-blog-1dce8.firebaseio.com/posts/' + this.id + '.json')
        .then(response => {
            // returns response.json() which is a function, allows another .then
            return response.json();
            // console.log(response.body);
            // sets blog object = to the response
            // this.blog = response.body;
        }).then(response2 => {
            // sets blog = the response of the return of the response.json()
            this.blog = response2;
        })
    }
}

</script>