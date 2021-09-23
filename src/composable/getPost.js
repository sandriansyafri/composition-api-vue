import { ref } from "@vue/reactivity";

const getPost = (id) => {

    const post = ref([]);
    const responseError = ref(null);

    const load = async () => {
        try {
            const data = await fetch(`http://localhost:3004/posts/${id}`);
            if (!data.ok) {
                throw Error("data not available");
            }
            post.value = await data.json();
        } catch (err) {
            responseError.value = err.message;
        }
    };

    return {
        post, responseError, load
    }

}

export default getPost;