<template>
    <div class="home-page">
        <section class="intro">
            <h1>Get the latest tech news!</h1>
        </section>

        <PostList :posts="loadedPosts" />
    </div>
</template>

<script>
    import PostList from "@/components/Posts/PostList";

    export default {
        components: {
            PostList
        },
        data() {
            return {
                loadedPosts: [
                    {
                        id: '1',
                        title: 'First post',
                        previewText: 'This is our first post',
                        thumbnail: 'https://cdn.bmwblog.com/wp-content/uploads/2017/05/2017-BMW-M550d-G30-Quadturbo-Diesel-M-Performance-01-830x553.jpg'
                    },
                    {
                        id: '2',
                        title: 'Second post',
                        previewText: 'This is our second post',
                        thumbnail: 'https://picolio.auto123.com/13photo/audi/2013-audi-a4-20-tsfi-fronttrack_1.jpg'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .intro {
        height: 300px;
        position: relative;
        padding: 30px;
        box-sizing: border-box;
        background: url('~assets/images/main-page-background.jpg') center;
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
</style>
