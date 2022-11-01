<template>
    <div class="w-full h-56 lg:h-60 rounded-xl flex justify-center items-center" :class="gradient.style">
        <transition 
            enter-active-class="duration-200 ease-in" 
            enter-from-class="scale-95 opacity-0" 
            enter-to-class="scale-100 spacity-100" 
            leave-active-class="duration-300 ease-out" 
            leave-from-class="scale-100 opacity-100" 
            leave-to-class="scale-95 opacity-0"
        >
            <div v-show="isCopy" class="text-2xl flex items-center space-x-2 font-medium italic text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                </svg>

                <p>Copied</p>
            </div>
        </transition>
    </div>

    <div class="flex items-center justify-between mt-6 ">
        <p v-text="gradient.title" class="text-lg font-medium text-gray-500"></p>

        <div class="flex items-center space-x-3 ">
            <p v-text="gradient.classTitle" class="text-base font-medium text-gray-500"></p>

            <button v-clipboard:copy="gradient.style" v-clipboard:success="copied" class="font-medium text-gray-500 transition-colors duration-300 focus:outline-none hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                </svg>
            </button>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Gradient',

    props: ['gradient'],

    data() {
        return {
            isCopy: false,
        }
    },

    methods: {
        copied() {
            this.isCopy = true;

            setTimeout(() => this.isCopy = false, 1000);
        },
    }
}
</script>