<template>
    <div class="home">
        <div v-if="responseError">
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <h1>{{ responseError }}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="posts.length">
            <Posts :posts="posts" />
        </div>
        <div v-else>
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <h1>Loading</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Posts from "../components/Posts.vue";
import getPosts from "../composable/getPosts";
export default {
    components: { Posts },
    setup() {
        const { posts, responseError, load } = getPosts();
        load();
        return {
            posts,
            responseError,
        };
    },
};
</script>
