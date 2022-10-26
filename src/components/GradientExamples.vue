<template>
    <div class="container px-4 py-20 mx-auto ">
        <div class="flex flex-col items-center text-center ">
            <h2 class="text-3xl font-bold text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 bg-clip-text">Ready to Use</h2>

            <h1 class="mt-4 text-3xl font-bold text-gray-700 ">Awesome Gradients Examples</h1>
            
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

    components: { GradientCard },

    data() {
        return {
            gradients: [
                {
                    title: 'Sunset',
                    classTitle: 'red-500 - orange-500',
                    style: 'bg-gradient-to-r from-red-500 to-orange-500'
                },

                {
                    title: 'Poppy',
                    classTitle: 'rose-400 - red-500',
                    style: 'bg-gradient-to-r from-rose-400 to-red-500'
                },

                {
                    title: 'Rosebud',
                    classTitle: 'pink-500 - rose-500',
                    style: 'bg-gradient-to-r from-pink-500 to-rose-500'
                },

                {
                    title: 'Sunshine',
                    classTitle: 'amber-200 - yellow-400',
                    style: 'bg-gradient-to-r from-amber-200 to-yellow-400'
                },

                {
                    title: 'Gold',
                    classTitle: 'amber-200 - yellow-500',
                    style: 'bg-gradient-to-r from-amber-200 to-yellow-500'
                },

                {
                    title: 'Twilight',
                    classTitle: 'amber-500 - pink-500',
                    style: 'bg-gradient-to-r from-amber-500 to-pink-500'
                },

                {
                    title: 'Powder',
                    classTitle: 'violet-200 - pink-200',
                    style: 'bg-gradient-to-r from-violet-200 to-pink-200'
                },

                {
                    title: 'Holly',
                    classTitle: 'blue-200 - cyan-200',
                    style: 'bg-gradient-to-r from-blue-200 to-cyan-200'
                },

                {
                    title: 'Northern Lights',
                    classTitle: 'teal-200 - teal-500',
                    style: 'bg-gradient-to-r from-teal-200 to-teal-500'
                },

                {
                    title: 'Raw Green',
                    classTitle: 'lime-400 - lime-500',
                    style: 'bg-gradient-to-r from-lime-400 to-lime-500'
                },

                {
                    title: 'Lime',
                    classTitle: 'teal-400 - yellow-200',
                    style: 'bg-gradient-to-r from-teal-400 to-yellow-200'
                },

                {
                    title: 'Nemesia',
                    classTitle: 'emerald-400 - cyan-400',
                    style: 'bg-gradient-to-r from-emerald-400 to-cyan-400'
                },
            ]
        }
    },
}
</script>