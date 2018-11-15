<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>

<script>
    import AdminPostForm from "@/components/Admin/AdminPostForm";

    export default {
        components: {
            AdminPostForm
        },
        data() {
            return {
                loadedPost: {
                    author: 'Doxy',
                    title: 'My awesome post',
                    content: 'Super amazing, thanks for that!',
                    thumbnailLink: 'https://cdn.bmwblog.com/wp-content/uploads/2017/05/2017-BMW-M550d-G30-Quadturbo-Diesel-M-Performance-01-830x553.jpg'
                }
            }
        },
        layout: 'admin'
    }
</script>

<style scoped>
    .update-form {
        width: 90%;
        margin: 20px auto;
    }

    @media (min-width: 768px) {
        .update-form {
            width: 500px;
        }
    }
</style>
