import { ref } from "@vue/reactivity";

const getPosts = () => {

    const posts = ref([]);
    const responseError = ref(null);

    const load = async () => {
        try {
            const data = await fetch(`http://localhost:3004/posts`);
            if (!data.ok) {
                throw Error("data not available");
            }
            posts.value = await data.json();
        } catch (err) {
            responseError.value = err.message;
        }
    };

    return {
        posts, responseError, load
    }

}

export default getPosts;