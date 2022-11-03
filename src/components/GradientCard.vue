<template>
    <button class="w-full h-56 lg:h-60 rounded-xl flex justify-center items-center focus:outline-none" v-clipboard:copy="gradient.style" v-clipboard:success="copied" @mouseover="copy = true" @mouseleave="copy = false" :class="gradient.style">
        <transition 
            enter-active-class="duration-200 ease-in" 
            enter-from-class="scale-95 opacity-0" 
            enter-to-class="scale-100 spacity-100" 
            leave-active-class="duration-300 ease-out" 
            leave-from-class="scale-100 opacity-100" 
            leave-to-class="scale-95 opacity-0"
        >
            <button v-show="copy" class="flex w-auto duration-300 transition-color lg:mt-4 xl:mt-0 mt-4 sm:mt-0 bg-gray-900 hover:bg-gray-700 text-white items-center justify-center px-4 py-2.5 space-x-3 font-semibold rounded-md focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 shrink-0">
                <path fill-rule="evenodd" d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 01-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0113.5 1.5H15a3 3 0 012.663 1.618zM12 4.5A1.5 1.5 0 0113.5 3H15a1.5 1.5 0 011.5 1.5H12z" clip-rule="evenodd" />
                <path d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0116.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625v-12z" />
                <path d="M10.5 10.5a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963 5.23 5.23 0 00-3.434-1.279h-1.875a.375.375 0 01-.375-.375V10.5z" />
                </svg>

                <span v-show="!isCopy">
                    Copy CSS
                </span>

                <span v-show="isCopy">
                    Copied
                </span>
            </button>
        </transition>
    </button>

    <div class="flex items-center justify-between mt-6 ">
        <p v-text="gradient.title" class="text-lg font-medium text-gray-500"></p>

        <div class="flex items-center space-x-3 ">
            <p v-text="gradient.classTitle" class="text-base font-medium text-gray-500"></p>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Gradient',

    props: ['gradient'],

    data() {
        return {
            copy: false,
            isCopy: false,
        }
    },

    methods: {
        copied() {
            this.isCopy = true;

            setTimeout(() => {
                this.isCopy = false;
            }, 1000);
        },
    }
}
</script>