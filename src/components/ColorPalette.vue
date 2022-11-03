<template>
    <div class="flex flex-col flex-1 max-h-72 md:max-h-96 xl:max-h-[28rem]">
        <div class="flex items-center space-x-8">
            <button :disabled="isChange" @click="select = 'from'" :class="select == 'from' ? 'text-gray-800' : 'text-gray-400 hover:text-gray-600'" class="font-semibold focus:outline-none">
                From Color
            </button>

            <button v-if="viaActive" :disabled="isChange" @click="select = 'via'" :class="select == 'via' ? 'text-gray-800' : 'text-gray-400 hover:text-gray-600'" class="font-semibold transition-colors duration-300 focus:outline-none">
                Via Color
            </button>

            <button :disabled="isChange" @click="select = 'to'" :class="select == 'to' ? 'text-gray-800' : 'text-gray-400 hover:text-gray-600'" class="font-semibold transition-colors duration-300 focus:outline-none">
                To Color
            </button>
        </div>

        <div id="colors" class="relative flex-1 w-full h-64 px-6 py-4 mt-4 space-y-6 overflow-y-auto border rounded-lg">
             <div v-for="(color, index) in colors" :key="index">
                <p class="mb-2 text-gray-600 capitalize" v-text="color"></p>
                
                <div class="grid grid-cols-4 gap-6 md:gap-4 2xl:gap-6 sm:grid-cols-7 md:grid-cols-10 lg:grid-cols-6 xl:grid-cols-10">
                    <div v-for="(number, index) in values" :key="index" >
                        <div>
                            <button
                                class="w-full h-10 sm:h-12 rounded-lg md:h-10 2xl:h-12 focus:outline-none" 
                                @click="updateColor(select + '-' + color + '-' + number)" 
                                :class="'bg-' + color + '-' + number + ' ' + (selectedColor(select + '-' + color + '-' + number) ? 'ring ring-[#0FD3CF]' :  '')"
                            >
                            </button>
                            
                            <p class="mt-1 text-sm text-center" :class="selectedColor(select + '-' + color + '-' + number) ? 'text-[#0FD3CF] font-bold' : 'text-gray-500 font-medium'" v-text="number"></p>
                        </div>
                    </div>
                </div>
            </div>

            <transition 
                enter-active-class="duration-200 ease-in" 
                enter-from-class="scale-95 opacity-0" 
                enter-to-class="scale-100 spacity-100" 
                leave-active-class="duration-300 ease-out" 
                leave-from-class="scale-100 opacity-100" 
                leave-to-class="scale-95 opacity-0"
            >
                <div v-show="isChange" class="absolute inset-x-0 flex items-center justify-center w-full h-full bg-white/70 -top-6">
                    <div class="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-emerald-500">
                            <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                        </svg>

                        <h4 v-text="select + ' Color Selected'" class="mt-2 text-2xl font-semibold text-gray-700 capitalize"></h4>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        from: String,
        to: String,
        via: String,
        viaActive: Boolean
    },
    

    data() {
        return {
            select: 'from',
            isChange: false,
            colors: ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'],
            values: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
        }
    },

    watch: {
        select() {
            let colors = document.getElementById('colors');
            colors.scrollTop = 0;

            this.isChange = true;

            setTimeout(() => this.isChange = false, 500);
        },
    },
    methods: {
        selectedColor(color) {
            if (this.select == 'from' && this.from == color) {
                return true;
            }

            if (this.select == 'via' && this.via == color && this.viaActive) {
                return true;
            }

            if (this.select == 'to' && this.to == color) {
                return true;
            }
        },

        updateColor(color)
        {
            if (this.select == 'from') {
                this.$emit('updateFromColor', color);
            }

            if (this.select == 'via') {
                this.$emit('updateViaColor', color);
            }

            if (this.select == 'to') {
                this.$emit('updateToColor', color);
            }
        }
    }
}
</script>