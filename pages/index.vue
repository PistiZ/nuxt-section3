<template>
    <div class="home-page">
        <section class="intro">
            <h1>Get the latest tech news!</h1>
        </section>

        <section class="featured-posts">
            <PostPreview id="1"
                         thumbnail="https://cdn.bmwblog.com/wp-content/uploads/2017/05/2017-BMW-M550d-G30-Quadturbo-Diesel-M-Performance-01-830x553.jpg"
                         title="Hello there!"
                         previewText="This is my first post!" />

            <PostPreview id="2"
                         thumbnail="https://picolio.auto123.com/13photo/audi/2013-audi-a4-20-tsfi-fronttrack_1.jpg"
                         title="Hello there the second time!"
                         previewText="This is my second post!" />

            <PostPreview id="3"
                         thumbnail="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/ferrari-488-gtb-rt-2016-web-0032.jpg?itok=96_ZHnuN"
                         title="Hello there the third time"
                         previewText="This is my third post!" />
        </section>
    </div>
</template>

<script>
    import PostPreview from '@/components/Posts/PostPreview'

    export default {
        components: {
            PostPreview
        }
    }
</script>

<style scoped>
    .intro {
        height: 300px;
        position: relative;
        padding: 30px;
        box-sizing: border-box;
        background-position: center;
        background-size: cover;
    }

    .intro h1 {
        position: absolute;
        top: 10%;
        left: 5%;
        width: 90%;
        font-size: 1.5rem;
        color: black;
        background-color: rgb(211, 211, 211);
        padding: 10px;
        border-radius: 10px;
        box-shadow: 3px 3px 3px black;
        box-sizing: border-box;
        border: 1px solid black;
    }

    @media (min-width: 768px) {
        .intro h1 {
            font-size: 2rem;
        }
    }

    .featured-posts {
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>
