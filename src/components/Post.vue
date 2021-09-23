<template>
    <div class="col-md-4 mb-3">
        <div class="card">
            <div class="card-body">
                <p class="lead">Title : {{ post.title }}</p>
                <p class="lead">Desc : {{ descSnippet }}</p>
                <router-link :to="{ name: 'DetailPost', params: { id: post.id } }" class="btn btn-primary w-100">Detail</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
    props: ["post"],
    setup({ post }) {
        const descSnippet = computed(() => post.desc.substring(0, 150) + " ( . . . )");

        return {
            descSnippet,
        };
    },
};
</script>

<style></style>
