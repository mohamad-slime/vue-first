<script setup>
    import { defineProps, computed, ref } from 'vue';

    const props = defineProps({
        job: Object
    });

    const showFullDescription = ref(false);

    const descriptionManager = () => {
        showFullDescription.value = !showFullDescription.value;
    }

    const description = computed(() => {
        if (showFullDescription.value) {
            return props.job.description;
        } else {
            return props.job.description.substring(0, 100) + '...';
        }
    })


</script>
<template>
    <div class="bg-white rounded-xl shadow-md relative">
        <div class="p-4">
            <div class="mb-6">
                <div class="text-gray-600 my-2">{{ props.job.type }}</div>
                <h3 class="text-xl font-bold">{{ props.job.title }}</h3>
            </div>

            <div class="mb-5">

                <div>
                    {{ description }}
                </div>
                <button @click="descriptionManager" class="text-green-500 hover:text-green-600">Show {{
                    showFullDescription ? 'less' : 'more' }}</button>
            </div>

            <h3 class="text-green-500 mb-2">{{ props.job.salary }} / Year</h3>

            <div class="border border-gray-100 mb-5"></div>

            <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                    <i class="fa-solid fa-location-dot text-lg"></i>
                    {{ props.job.location }}
                </div>
                <a :href="'/jobs/' + props.job.id"
                    class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                    Read More
                </a>
            </div>
        </div>
    </div>
</template>