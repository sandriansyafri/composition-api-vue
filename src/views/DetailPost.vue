<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body p-4">
                        <p>Title : {{ post.title }}</p>
                        <p>
                            Desc : <br />
                            {{ post.desc }}
                        </p>
                        <p>
                            Tags : <br />
                            <span class="badge bg-primary rounded-pill me-2" v-for="tag of post.tags" :key="tag">#{{ tag }} </span>
                        </p>
                    </div>
                    <div class="card-footer">
                        <router-link :to="{ name: 'Home' }" class="btn btn-primary w-100">Kembali</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getPost from "../composable/getPost";
export default {
    props: ["id"],
    setup({ id }) {
        const { post, responseError, load } = getPost(id);

        load();

        return {
            post,
            responseError,
            load,
        };
    },
};
</script>
