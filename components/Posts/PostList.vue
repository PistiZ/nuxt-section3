<template>
    <section class="post-list">
        <PostPreview id="1"
                     :is-admin="isAdmin"
                     thumbnail="https://cdn.bmwblog.com/wp-content/uploads/2017/05/2017-BMW-M550d-G30-Quadturbo-Diesel-M-Performance-01-830x553.jpg"
                     title="Hello there!"
                     previewText="This is my first post!" />

        <PostPreview id="2"
                     :is-admin="isAdmin"
                     thumbnail="https://picolio.auto123.com/13photo/audi/2013-audi-a4-20-tsfi-fronttrack_1.jpg"
                     title="Hello there the second time!"
                     previewText="This is my second post!" />

        <PostPreview id="3"
                     :is-admin="isAdmin"
                     thumbnail="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/ferrari-488-gtb-rt-2016-web-0032.jpg?itok=96_ZHnuN"
                     title="Hello there the third time"
                     previewText="This is my third post!" />
    </section>
</template>

<script>
    import PostPreview from "@/components/Posts/PostPreview";

    export default {
        name: "PostList",
        components: {
            PostPreview
        },
        props: {
            isAdmin: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    .post-list {
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>
