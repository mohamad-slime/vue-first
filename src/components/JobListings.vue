<script setup lang="js">
    import { RouterLink } from 'vue-router';
    import jobData from '@/jobs.json';
    import JobCard from '@/components/Job.vue';
    import { ref, defineProps } from 'vue';

    const props = defineProps({
        limit: {
            type: Number,
            default: 6
        },
        showButton: {
            type: Boolean,
            default: false
        }

    })
</script>

<template>
    <section class="bg-green-100 px-8 py-6">
        <div class="container-xl lg:container mx-auto m-auto">
            <h2 class="text-2xl font-bold mb-4 text-emerald-800 text-center ">Job Listings</h2>
            <div class="grid grid-cols-1 xl:grid-cols-3  md:grid-cols-2 sm:grid-cols-2  gap-3">
                <JobCard v-for="job in jobData.slice(0, limit || jobData.length)" :key="job.id" :job="job" />
            </div>
        </div>
    </section>

    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View
            All Jobs
        </RouterLink>
    </section>

</template>