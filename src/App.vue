<template>
    <div class="flex flex-col min-h-screen bg-gray-100">
        <navbar />

        <div class="h-96 bg-gradient-to-r" :class="from + ' ' + via + ' ' + to"></div>
        
        <div class="container p-8 mx-auto -mt-32 overflow-hidden bg-white rounded-lg">
            <div class="flex justify-center w-full -mx-3 rounded-lg h-80">
                <div class="h-full px-3 overflow-y-scroll">
                    <div class="flex items-center space-x-2" v-for="(color, index) in colors" :key="index">
                        <button v-for="(number, index) in numbers" :key="index" :class="'bg-' + color + '-' + number" @click="from = 'from-' + color + '-' + number" class="grid w-8 h-8 mt-3 text-sm text-white rounded-full focus:outline-none place-items-center" v-text="number"></button>
                    </div>
                </div>

                <div class="h-full px-3 overflow-y-scroll">
                    <div class="flex items-center space-x-2" v-for="(color, index) in colors" :key="index">
                        <button v-for="(number, index) in numbers" :key="index" :class="'bg-' + color + '-' + number" @click="via = 'via-' + color + '-' + number" class="grid w-8 h-8 mt-3 text-sm text-white rounded-full focus:outline-none place-items-center" v-text="number"></button>
                    </div>
                </div>
                
                <div class="h-full px-3 overflow-y-scroll">
                    <div class="flex items-center space-x-2" v-for="(color, index) in colors" :key="index">
                        <button v-for="(number, index) in numbers" :key="index" :class="'bg-' + color + '-' + number" @click="to = 'to-' + color + '-' + number" class="grid w-8 h-8 mt-3 text-sm text-white rounded-full focus:outline-none place-items-center" v-text="number"></button>
                    </div>
                </div>
            </div>
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
    data() {
        return {
            from: 'from-teal-400',
            via: 'via-teal-500',
            to: 'to-teal-800',
            colors: ['blue-gray', 'gray', 'true-gray', 'warm-gray', 'teal', 'green', 'red',],
            numbers: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900',]
        }
    }
}
</script>
