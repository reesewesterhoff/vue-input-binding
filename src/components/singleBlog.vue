<template>
    <div id="single-blog">
        <!-- displays title and body of blog in it's own component -->
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
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
        // goes to site and grabs blog by id
        this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
        .then(response => {
            console.log(response.body);
            // sets blog object = to the response
            this.blog = response.body;
        }).catch(error => {
            console.log('error getting specific blog', error);
            alert('Error getting that blog.')
        });
    }
}

</script>