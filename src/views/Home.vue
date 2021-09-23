<template>
    <div class="home container">
        <div class="row justify-content-center">
            <div class="col-6 text-center">
                <h1>Search</h1>
                <input v-model="keywords" type="text" class="form-control" />
            </div>
        </div>
        <div class="row mt-4 justify-content-center">
            <div class="col-6">
                <h3 class="text-center">Lists Student</h3>
                <ul class="list-group" v-if="filterStudent.length">
                    <li v-for="student of filterStudent" :key="student" class="list-group-item">{{ student }}</li>
                </ul>
                <ul v-else class="text-center">
                    <li class="list-group-item">data tidak ada</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
export default {
    setup() {
        const keywords = ref("");
        const students = ref(["Hafid", "Yogi", "Fikri"]);
        const filterStudent = computed(() => {
            return students.value.filter((student) => {
                return student.toLowerCase().includes(keywords.value.toLowerCase());
            });
        });

        return {
            students,
            keywords,
            filterStudent,
        };
    },
};
</script>
