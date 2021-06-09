<template>
    <div id="gradientdiv" v-if="text" class="container grid h-64 mx-auto bg-white place-items-center">
        <h1 class="text-2xl font-bold text-center text-transparent md:text-3xl bg-clip-text " :class="direction + ' ' + from +  ' ' + getVia() + ' ' + to">
            Tailwind CSS Gradient Generator
        </h1>
    </div>

    <div id="gradientdiv">
        <div v-if="!text" class="h-64" :class="direction + ' ' + from + ' ' + getVia() + ' ' + to"></div>  
    </div>

    <div class="container max-w-md px-4 py-10 mx-auto overflow-hidden rounded-lg">
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
                <div>
                    <input class="border-gray-200 rounded-md text-primary focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40" v-model="text" type="checkbox"> <span class="text-gray-700 ml-0.5">Text</span>
                </div>

                <div>
                    <input class="border-gray-200 rounded-md text-primary focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40" v-model="isVia" type="checkbox"> <span class="text-gray-700 ml-0.5">Via</span>
                </div>
            </div>

            <button v-clipboard:copy="code" v-clipboard:success="onCopy" type="button" class="px-4 py-2 text-gray-500 transition-colors duration-200 transform border rounded-lg focus:outline-none focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40">
                <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path> <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path></svg>
            </button>
        </div>

        <div class="flex items-center mt-4 space-x-4">
            <div class="w-1/2">
                <steps-component :isVia="isVia" @updateStep="setStep"/>
            </div>

            <div class="w-1/2">
                <directions-component @updateDirection="setDirection"/>
            </div>
        </div>

        <colors-component @updateColor="setColor" />
    </div>
</template>

<script>
import ColorsComponent from "./Colors.vue";
import DirectionsComponent from "./Directions.vue";
import StepsComponent from "./Step.vue";

export default {
    name: 'Generator',

    components: { ColorsComponent, StepsComponent, DirectionsComponent },

    data() {
        return {
            code: '',
            text: false,
            isVia: false,
            step: 'from',
            direction: 'bg-gradient-to-r',
            from: 'from-teal-400',
            via: 'via-teal-600',
            to: 'to-teal-800',
        }
    },
    
    mounted() {
        this.code = document.querySelector("#gradientdiv").innerHTML;
    },

    updated() {
        this.code = document.querySelector("#gradientdiv").innerHTML;
    },

    methods: {
        getVia() {
            if(!this.isVia) return '';

            return this.via;
        },

        setColor(color) {
            if (this.step == 'from') this.from = 'from-' + color;
            if (this.step == 'via') this.via = 'via-' + color;
            if (this.step == 'to') this.to = 'to-' + color;
        },

        setStep(step) {
            this.step = step;
        },

        setDirection(direction) {
            this.direction = direction;
        },

        onCopy(e) {
            alert('You just copied: ' + e.text)
        },
    }
}
</script>