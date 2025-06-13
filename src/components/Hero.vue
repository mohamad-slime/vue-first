<script setup>
    import { defineProps } from 'vue';


    const props = defineProps({
        title: {
            type: String,
            default: 'Find your dream job'
        },
        description: {
            type: String,
            default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        }
    })
</script>


<template>
    <section class="bg-green-700 py-20 mb-4">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div class="text-center">
                <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                    {{ props.title }}
                </h1>
                <p class="my-4 text-xl text-white">
                    {{ props.description }}
                </p>
            </div>
        </div>
    </section>
</template>