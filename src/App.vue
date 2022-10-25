<template>
    <div class="flex flex-col min-h-screen font-inter">
        <header-component />

        <div class="container relative z-50 px-4 mx-auto -mt-16 2xl:-mt-28">
            <div id="generator" class="bg-white shadow-md h-96 scroll-mt-10 rounded-xl shadow-gray-200/90"></div>
        </div>

        <gradient-examples />

        <footer-component />
    </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import GradientExamples from './components/GradientExamples.vue';
import FooterComponent from './components/Footer.vue';

export default {
    name: 'App',

    components: { HeaderComponent, GradientExamples, FooterComponent },
}
</script>
