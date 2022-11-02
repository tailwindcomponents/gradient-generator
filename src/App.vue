<template>
    <div class="flex flex-col min-h-screen font-inter bg-[#FCFCFD]">
        <header-component />

        <generator-component :gradients="gradients" />

        <gradient-examples :gradients="gradients" />

        

        <footer-component />
    </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import GeneratorComponent from './components/Generator.vue';
import GradientExamples from './components/GradientExamples.vue';
import FooterComponent from './components/Footer.vue';

export default {
    name: 'App',

    components: { HeaderComponent, GeneratorComponent, GradientExamples, FooterComponent },

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

                {
                    title: 'Snowflake',
                    classTitle: 'indigo-400 - cyan-400',
                    style: 'bg-gradient-to-r from-indigo-400 to-cyan-400'
                },

                {
                    title: 'Blue Bird',
                    classTitle: 'cyan-500 - blue-500',
                    style: 'bg-gradient-to-r from-cyan-500 to-blue-500'
                },

                {
                    title: 'Blueprint',
                    classTitle: 'indigo-500 - blue-500',
                    style: 'bg-gradient-to-r from-indigo-500 to-blue-500'
                },

                {
                    title: 'Salvia',
                    classTitle: 'blue-600 - violet-600',
                    style: 'bg-gradient-to-r from-blue-600 to-violet-600'
                },

                {
                    title: 'Snowflake',
                    classTitle: 'fuchsia-500 - cyan-500',
                    style: 'bg-gradient-to-r from-fuchsia-500 to-cyan-500'
                },

                {
                    title: 'Heartsease',
                    classTitle: 'fuchsia-600 - pink-600',
                    style: 'bg-gradient-to-r from-fuchsia-600 to-pink-600'
                },

                {
                    title: 'Amaranthus',
                    classTitle: 'fuchsia-600 - purple-600',
                    style: 'bg-gradient-to-r from-fuchsia-600 to-purple-600'
                },

                {
                    title: 'Candy',
                    classTitle: 'fuchsia-500 - pink-500',
                    style: 'bg-gradient-to-r from-fuchsia-500 to-pink-500'
                },

                {
                    title: 'Verbena',
                    classTitle: 'violet-500 - purple 500',
                    style: 'bg-gradient-to-r from-violet-500 to-purple-500'
                },

                {
                    title: 'Clematis',
                    classTitle: 'violet-600 - indigo-600',
                    style: 'bg-gradient-to-r from-violet-600 to-indigo-600'
                },

                {
                    title: 'Hibiscus',
                    classTitle: 'purple-500 - purple-900',
                    style: 'bg-gradient-to-r from-purple-500 to-purple-900'
                },

                {
                    title: 'Clear Night',
                    classTitle: 'blue-800 - indigo-900',
                    style: 'bg-gradient-to-r from-blue-800 to-indigo-900'
                },

                {
                    title: 'Clay',
                    classTitle: 'neutral-300 - stone-400',
                    style: 'bg-gradient-to-r from-neutral-300 to-stone-400'
                },

                {
                    title: 'Soil',
                    classTitle: 'stone-500 - stone-700',
                    style: 'bg-gradient-to-r from-stone-500 to-stone-700'
                },

                {
                    title: 'Silver',
                    classTitle: 'slate-300 - slate-500',
                    style: 'bg-gradient-to-r from-slate-300 to-slate-500'
                },

                {
                    title: 'Fir Tree',
                    classTitle: 'emerald-500 - emerald-900',
                    style: 'bg-gradient-to-r from-emerald-500 to-emerald-900'
                },

                {
                    title: 'Metal',
                    classTitle: 'slate-500 - slate-800',
                    style: 'bg-gradient-to-r from-slate-500 to-slate-800'
                },

                {
                    title: 'Darkness',
                    classTitle: 'slate-900 - slate-700',
                    style: 'bg-gradient-to-r from-slate-900 to-slate-700'
                },
            ]
        }
    }
}
</script>
