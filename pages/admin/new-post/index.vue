<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <AdminPostForm @submit="onSubmitted" />
        </section>
    </div>
</template>

<script>
    import axios from 'axios';
    import AdminPostForm from "@/components/Admin/AdminPostForm";

    export default {
        components: {
            AdminPostForm
        },
        methods: {
            onSubmitted(data) {
                axios.post('https://nuxt-blog-1005d.firebaseio.com/posts.json', data)
                    .then(result => console.log(result))
                    .catch(e => console.log(e));
            }
        },
        layout: 'admin'
    }
</script>

<style scoped>
    .new-post-form {
        width: 90%;
        margin: 20px auto;
    }

    @media (min-width: 768px) {
        .new-post-form {
            width: 500px;
        }
    }
</style>
