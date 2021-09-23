<template>
    <div class="container">
        <Heading title="Posts" />
        <div class="row">
            <Post v-for="post of posts" :key="post.id" :post="post" />
        </div>
    </div>
</template>

<script>
import Post from "./Post.vue";
import Heading from "./Heading.vue";
export default {
    props: ["posts"],
    components: { Post, Heading },
};
</script>

<style></style>
