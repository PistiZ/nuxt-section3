<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts" />
    </div>
</template>

<script>
    import PostList from "@/components/Posts/PostList";

    export default {
        components: {
            PostList
        },
        asyncData(context, callback) {
            setTimeout(() => {
                callback(null, {
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
                });
            }, 3000);
        }
    }
</script>

<style scoped>
    .posts-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
