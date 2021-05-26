<template>
    <div class="flex flex-col min-h-screen bg-gray-100">
        <navbar />
        <generator />
        <footer-component />
    </div>
</template>

<script>
import FooterComponent from './components/Footer.vue';
import Generator from './components/Generator.vue';
import Navbar from './components/Navbar.vue';

export default {
    name: 'App',

    components: { Navbar, FooterComponent, Generator },
}
</script>
