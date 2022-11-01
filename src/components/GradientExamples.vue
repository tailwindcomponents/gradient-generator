<template>
    <div class="container px-4 py-20 mx-auto ">
        <div class="flex flex-col items-center text-center ">
            <h2 class="text-3xl font-bold text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 bg-clip-text">Ready to Use</h2>

            <h2 class="mt-4 text-3xl font-bold text-gray-800 ">Awesome Gradients Examples</h2>
            
            <p class="mt-4 text-gray-500 ">Choose from our ready-made Tailwind CSS gradients to create beautiful cards, mobile apps, and websites.</p>
        </div>

        
        <div class="grid grid-cols-1 gap-10 mt-12 md:grid-cols-2 xl:grid-cols-3">
            <div v-for="gradient in gradients" :key="gradient.title">
                <gradient-card :gradient="gradient" />
            </div>
        </div>
    </div>
</template>

<script>
import GradientCard from "./GradientCard.vue";

export default {
    name: 'Gradient Examples',

    props: ['gradients'],
    
    components: { GradientCard },
}
</script>