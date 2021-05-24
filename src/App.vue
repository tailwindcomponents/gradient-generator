<template>
    <div class="flex flex-col min-h-screen bg-gray-100">
        <navbar />
        <div class="h-96 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-800"></div>
        <div class="container p-8 mx-auto -mt-32 overflow-hidden bg-white rounded-lg">
            <div class="grid w-full border-4 border-dashed rounded-lg place-items-center h-80">Content</div>
        </div>
        <footer-component />
    </div>
</template>

<script>
import FooterComponent from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

export default {
    components: { Navbar, FooterComponent },
    name: 'App',
}
</script>
