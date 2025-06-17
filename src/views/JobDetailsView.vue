<script setup>
    import { ref, onMounted, reactive } from 'vue';
    import { RouterLink, useRoute } from 'vue-router';

    const route = useRoute();
    const jobId = route.params.id;

    const jobData = reactive({
        job: {},
    });

    const isLoading = ref(false);
    const error = ref(null);

    const fetchJobData = async (jobId) => {
        isLoading.value = true;
        error.value = null;
        try {
            const response = await fetch(`http://localhost:3030/jobs/${jobId}`);
            if (!response.ok) throw new Error('Failed to fetch job data');
            jobData.job = await response.json();
        } catch (err) {
            error.value = err.message;
        } finally {
            isLoading.value = false;
        }
    };
    onMounted(() => {
        if (jobId) fetchJobData(jobId);
    });
</script>

<template>
    <section class="bg-green-50">
        <div class="container m-auto py-10 px-6">
            <div class="grid grid-cols-3  gap-6">
                <main class="col-span-2">
                    <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                        <div v-if="isLoading" class="text-gray-500 mb-4">Loading job data...</div>
                        <div v-else-if="error" class="text-red-500 mb-4">{{ error }}</div>
                        <div v-else>
                            <div class="text-gray-500 mb-4">{{ jobData.job.type || 'Job Type' }}</div>
                            <h1 class="text-3xl font-bold mb-4">{{ jobData.job.title || 'Loading...' }}</h1>
                            <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                                <i class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
                                <p class="text-orange-700">{{ jobData.job.location }}</p>
                            </div>
                        </div>
                    </div>

                    <div v-if="!isLoading && !error" class="bg-white p-6 rounded-lg shadow-md mt-6">
                        <h3 class="text-green-800 text-lg font-bold mb-6">Job Description</h3>
                        <p class="mb-4">{{ jobData.job.description }}</p>

                        <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>
                        <p class="mb-4">{{ jobData.job.salary }} / Year</p>
                    </div>
                </main>

                <aside class="col-span-1" v-if="!isLoading && !error">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h3 class="text-xl font-bold mb-6">Company Info</h3>
                        <h2 class="text-2xl">{{ jobData.job.company?.name || 'Loading...' }}</h2>
                        <p class="my-2">{{ jobData.job.company?.description || 'Loading...' }}</p>
                        <hr class="my-4" />
                        <h3 class="text-xl">Contact Email:</h3>
                        <p class="my-2 bg-green-100 p-2 font-bold">{{ jobData.job.company?.contactEmail || 'Loading...'
                            }}</p>
                        <h3 class="text-xl">Contact Phone:</h3>
                        <p class="my-2 bg-green-100 p-2 font-bold">{{ jobData.job.company?.contactPhone || 'Loading...'
                            }}</p>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                        <h3 class="text-xl font-bold mb-6">Manage Job</h3>
                        <RouterLink :to="`/jobs/edit/${jobData.job.id}`"
                            class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                            Edit Job</RouterLink>
                        <button
                            class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">Delete
                            Job</button>
                    </div>
                </aside>
            </div>
        </div>
    </section>
</template>
