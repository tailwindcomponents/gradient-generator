<template>
    <div class="container relative z-50 px-4 mx-auto -mt-16 2xl:-mt-28">
        <div id="generator" class="p-6 bg-white shadow-md lg:p-12 scroll-mt-6 rounded-xl shadow-gray-200/90">
            <h2 class="text-2xl font-bold text-center text-gray-800 md:text-3xl ">Create Your Gradient</h2>
            <p class="mt-2 text-center text-gray-500 md:mt-4 ">Choose if you are looking for text or background gradients.</p>

            <div class="flex justify-center mt-6 ">
                <toggle-active @updated="updateActive" />
            </div>

            <div class="mt-10">
                <div class="relative mt-12 lg:flex">
                    <div class="w-full lg:w-1/2 xl:w-2/5">
                        <h3 class="text-xl font-semibold text-gray-800 ">Choose Colors</h3>

                        <p class="max-w-md mt-2 text-gray-500 ">Pick colors from the Tailwind CSS Palette that fit your design.</p>
                    </div>

                    <div class="w-full mt-4 lg:w-1/2 lg:pl-10 xl:pl-16 xl:w-3/5 lg:mt-0" v-show="active == 'text'">
                        <div>
                            <label class="font-medium text-gray-500">Your Text</label>
                            
                            <input v-model="text" class="w-full h-12 px-4 mt-2 font-medium text-gray-700 bg-white border border-gray-200 rounded-md focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-20" />
                        </div>
                    </div>
                </div>

                <div class="relative mt-6 lg:flex">
                    <div class="transition-all duration-500 " :class="fullWidth ? 'w-full ease-in' : ' lg:w-1/2 xl:w-2/5 ease-out'">
                        <div v-show="active == 'background'" class="relative w-full rounded-xl h-72 md:h-96 xl:h-[28rem]" :class="classes()">
                            <button @click="fullWidth = !fullWidth" class="absolute hidden p-3 transition-colors duration-300 bg-white rounded-full lg:block focus:outline-none hover:bg-indigo-100 right-4 top-4">
                                <svg v-show="!fullWidth" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 1.26251C10.5 1.12189 10.4297 0.981262 10.3359 0.864075C10.2188 0.770325 10.0781 0.700012 9.9375 0.700012H7.71094C7.54688 0.700012 7.40625 0.770325 7.3125 0.864075C7.19531 0.981262 7.14844 1.12189 7.14844 1.26251C7.14844 1.42657 7.19531 1.5672 7.3125 1.66095L7.96875 2.3172L5.4375 4.82501C5.39062 4.87189 5.36719 4.9422 5.36719 5.01251C5.36719 5.10626 5.39062 5.17657 5.4375 5.22345L5.97656 5.76251C6.02344 5.80939 6.09375 5.83282 6.1875 5.83282C6.25781 5.83282 6.32812 5.80939 6.375 5.76251L8.88281 3.23126L9.53906 3.88751C9.63281 4.0047 9.77344 4.05157 9.9375 4.05157C10.0781 4.05157 10.2188 4.0047 10.3359 3.88751C10.4297 3.79376 10.5 3.65314 10.5 3.48907V1.26251ZM4.125 6.13751C4.17188 6.09064 4.21875 6.0672 4.3125 6.0672C4.38281 6.0672 4.45312 6.09064 4.52344 6.13751L5.0625 6.67657C5.10938 6.74689 5.13281 6.8172 5.13281 6.88751C5.13281 6.98126 5.10938 7.02814 5.0625 7.07501L2.53125 9.58282L3.1875 10.2391C3.28125 10.3563 3.35156 10.4969 3.35156 10.6375C3.35156 10.8016 3.28125 10.9422 3.1875 11.0359C3.07031 11.1531 2.92969 11.2 2.78906 11.2H0.5625C0.398438 11.2 0.257812 11.1531 0.164062 11.0359C0.046875 10.9422 0 10.8016 0 10.6375V8.41095C0 8.27032 0.046875 8.1297 0.164062 8.01251C0.257812 7.91876 0.398438 7.84845 0.5625 7.84845C0.703125 7.84845 0.84375 7.91876 0.960938 8.01251L1.61719 8.66876L4.125 6.13751Z" fill="#65748A"/>
                                </svg>

                                <svg v-show="fullWidth" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.875 3.95001L7.38281 6.48126C7.45312 6.55157 7.5 6.64532 7.5 6.73907C7.5 6.85626 7.45312 6.95001 7.38281 6.99689L6.79688 7.58282C6.72656 7.67657 6.63281 7.70001 6.53906 7.70001C6.42188 7.70001 6.32812 7.67657 6.28125 7.58282L3.75 5.07501L1.21875 7.58282C1.14844 7.67657 1.05469 7.70001 0.960938 7.70001C0.84375 7.70001 0.75 7.67657 0.703125 7.58282L0.117188 6.99689C0.0234375 6.95001 0 6.85626 0 6.73907C0 6.64532 0.0234375 6.55157 0.117188 6.48126L2.625 3.95001L0.117188 1.41876C0.0234375 1.37189 0 1.27814 0 1.16095C0 1.0672 0.0234375 0.97345 0.117188 0.903137L0.703125 0.3172C0.75 0.246887 0.84375 0.200012 0.960938 0.200012C1.05469 0.200012 1.14844 0.246887 1.21875 0.3172L3.75 2.82501L6.28125 0.3172C6.32812 0.246887 6.42188 0.200012 6.53906 0.200012C6.63281 0.200012 6.72656 0.246887 6.79688 0.3172L7.38281 0.903137C7.45312 0.97345 7.5 1.0672 7.5 1.16095C7.5 1.27814 7.45312 1.37189 7.38281 1.41876L4.875 3.95001Z" fill="#65748A"/>
                                </svg>
                            </button>
                        </div>

                        <div v-show="active == 'text'" class="w-full flex items-center p-6 bg-gray-50 rounded-xl h-72 md:h-96 xl:h-[28rem]">
                            <h2 v-text="text" class="mx-auto text-2xl font-bold break-words sm:text-3xl md:text-4xl truncate" :class="classes()"> </h2>
                        </div>

                        <button @click="randomGradient" class="flex items-center mx-auto mt-4 space-x-3 font-semibold text-gray-500 transition-colors duration-300 hover:text-indigo-500 focus:outline-none">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.20313 3.75781C4.89063 4.23698 4.53385 4.94792 4.13281 5.89062C4.01823 5.65625 3.92188 5.46875 3.84375 5.32812C3.76563 5.18229 3.65885 5.01562 3.52344 4.82812C3.39323 4.64062 3.26042 4.49479 3.125 4.39062C2.99479 4.28125 2.83073 4.1901 2.63281 4.11719C2.4401 4.03906 2.22917 4 2 4H0.25C0.177083 4 0.117188 3.97656 0.0703125 3.92969C0.0234375 3.88281 0 3.82292 0 3.75V2.25C0 2.17708 0.0234375 2.11719 0.0703125 2.07031C0.117188 2.02344 0.177083 2 0.25 2H2C3.30208 2 4.36979 2.58594 5.20313 3.75781ZM13.9297 9.82031C13.9766 9.86719 14 9.92708 14 10C14 10.0729 13.9766 10.1328 13.9297 10.1797L11.4297 12.6797C11.3828 12.7266 11.3229 12.75 11.25 12.75C11.1823 12.75 11.1224 12.724 11.0703 12.6719C11.0234 12.625 11 12.5677 11 12.5V11C10.8333 11 10.612 11.0026 10.3359 11.0078C10.0599 11.0078 9.84896 11.0104 9.70313 11.0156C9.55729 11.0156 9.36719 11.013 9.13281 11.0078C8.89844 10.9974 8.71354 10.9844 8.57813 10.9687C8.44271 10.9479 8.27604 10.9193 8.07813 10.8828C7.88021 10.8464 7.71615 10.7995 7.58594 10.7422C7.45573 10.6797 7.30469 10.6042 7.13281 10.5156C6.96094 10.4271 6.80729 10.3229 6.67188 10.2031C6.53646 10.0833 6.39323 9.94531 6.24219 9.78906C6.09115 9.6276 5.94531 9.44531 5.80469 9.24219C6.11198 8.75781 6.46615 8.04687 6.86719 7.10937C6.98177 7.34375 7.07813 7.53385 7.15625 7.67969C7.23438 7.82031 7.33854 7.98437 7.46875 8.17188C7.60417 8.35937 7.73698 8.50781 7.86719 8.61719C8.0026 8.72135 8.16667 8.8125 8.35938 8.89062C8.55729 8.96354 8.77083 9 9 9H11V7.5C11 7.42708 11.0234 7.36719 11.0703 7.32031C11.1172 7.27344 11.1771 7.25 11.25 7.25C11.3125 7.25 11.375 7.27604 11.4375 7.32812L13.9297 9.82031ZM13.9297 2.82031C13.9766 2.86719 14 2.92708 14 3C14 3.07292 13.9766 3.13281 13.9297 3.17969L11.4297 5.67969C11.3828 5.72656 11.3229 5.75 11.25 5.75C11.1823 5.75 11.1224 5.72656 11.0703 5.67969C11.0234 5.6276 11 5.56771 11 5.5V4H9C8.75 4 8.52344 4.03906 8.32031 4.11719C8.11719 4.19531 7.9375 4.3125 7.78125 4.46875C7.625 4.625 7.49219 4.78646 7.38281 4.95312C7.27344 5.11458 7.15625 5.3151 7.03125 5.55469C6.86458 5.8776 6.66146 6.32292 6.42188 6.89062C6.27083 7.23437 6.14063 7.52344 6.03125 7.75781C5.92708 7.99219 5.78646 8.26562 5.60938 8.57812C5.4375 8.89062 5.27083 9.15104 5.10938 9.35937C4.95313 9.56771 4.76042 9.78385 4.53125 10.0078C4.30729 10.2318 4.07292 10.4115 3.82812 10.5469C3.58854 10.6771 3.3125 10.7865 3 10.875C2.6875 10.9583 2.35417 11 2 11H0.25C0.177083 11 0.117188 10.9766 0.0703125 10.9297C0.0234375 10.8828 0 10.8229 0 10.75V9.25C0 9.17708 0.0234375 9.11719 0.0703125 9.07031C0.117188 9.02344 0.177083 9 0.25 9H2C2.25 9 2.47656 8.96094 2.67969 8.88281C2.88281 8.80469 3.0625 8.6875 3.21875 8.53125C3.375 8.375 3.50781 8.21615 3.61719 8.05469C3.72656 7.88802 3.84375 7.6849 3.96875 7.44531C4.13542 7.1224 4.33854 6.67708 4.57813 6.10937C4.72917 5.76562 4.85677 5.47656 4.96094 5.24219C5.07031 5.00781 5.21094 4.73437 5.38281 4.42187C5.5599 4.10937 5.72656 3.84896 5.88281 3.64062C6.04427 3.43229 6.23698 3.21615 6.46094 2.99219C6.6901 2.76823 6.92448 2.59115 7.16406 2.46094C7.40885 2.32552 7.6875 2.21615 8 2.13281C8.3125 2.04427 8.64583 2 9 2H11V0.5C11 0.427083 11.0234 0.367187 11.0703 0.320312C11.1172 0.273437 11.1771 0.25 11.25 0.25C11.3125 0.25 11.375 0.276041 11.4375 0.328125L13.9297 2.82031Z" fill="currentColor"/>
                            </svg>

                            <span>Random</span>
                        </button>
                    </div>

                    <div v-show="!fullWidth" class="mt-6 lg:mt-0 lg:pl-10 xl:pl-16 lg:w-1/2 xl:w-3/5" >
                        <color-palette 
                            :to="to"
                            :from="from" 
                            :via="via" 
                            :viaActive="viaActive"
                            @updateFromColor="updateFromColor"
                            @updateViaColor="updateViaColor"
                            @updateToColor="updateToColor"
                        />
                    </div>
                </div>

                <div class="relative mt-12 lg:flex lg:space-x-10 xl:space-x-16">
                    <div class="w-full lg:w-1/2 xl:w-2/5">
                        <h3 class="text-xl font-semibold text-gray-800 ">Settings</h3>

                        <p class="max-w-md mt-2 text-gray-500 ">Add the third color if needed and set the direction of the gradient if you are looking for a linear-gradients or radial-gradient.</p>
                    </div>

                    <div class="w-full mt-4 lg:w-1/2 xl:w-3/5 lg:mt-0">
                        <div class="md:flex md:items-center md:space-x-4">
                            <div class="md:w-1/2">
                                <label class="font-medium text-gray-500">Via</label>
                                
                                <custom-select 
                                    :options="[
                                        { title: 'Inactive', value: false },
                                        { title: 'Active', value: true },
                                    ]"
                                    :default="viaActive"
                                    @input="updateViaActive"
                                />
                            </div>

                             <div class="mt-4 md:w-1/2 md:mt-0">
                                <label class="font-medium text-gray-500">Direction</label>
                                
                                <custom-select 
                                    :options="[
                                        { title: 'To Top', value: 'bg-gradient-to-t' },
                                        { title: 'To Top Right', value: 'bg-gradient-to-tr' },
                                        { title: 'To Right', value: 'bg-gradient-to-r' },
                                        { title: 'To Bottom Right', value: 'bg-gradient-to-br' },
                                        { title: 'To Bottom', value: 'bg-gradient-to-b' },
                                        { title: 'To Bottom Left', value: 'bg-gradient-to-bl' },
                                        { title: 'To Left', value: 'bg-gradient-to-l' },
                                        { title: 'To Top Left', value: 'bg-gradient-to-tl' },
                                    ]"
                                    :default="direction"
                                    :defaultTitle="'To Right'"
                                    @input="updateDirection"
                                />
                            </div>
                        </div>

                        <div class="mt-4 sm:flex sm:items-center sm:space-x-4 lg:block lg:space-x-0 xl:flex xl:space-x-4">
                            <input :value="classes()" disabled class="flex-1 w-full h-12 px-4 font-medium text-gray-700 bg-white border border-gray-200 rounded-md lg:w-full xl:w-auto sm:w-auto cursor-text focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-20" />
                            
                            <button v-clipboard:copy="classes()" v-clipboard:success="copied" class="flex lg:w-full xl:w-auto duration-300 transition-color lg:mt-4 xl:mt-0 mt-4 sm:mt-0 bg-gray-900 hover:bg-gray-700 text-white items-center justify-center w-full px-4 py-2.5 space-x-3 font-semibold rounded-md focus:outline-none sm:w-auto">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ToggleActive from "./ToggleActive.vue";
import ColorPalette from "./ColorPalette.vue";
import CustomSelect from "./CustomSelect.vue";

export default {
    props: ['gradients'],
    
    components: { ToggleActive, ColorPalette, CustomSelect },

    data() {
        return {
            fullWidth: false,
            viaActive: false,
            active: 'background',
            isCopy: false,
            text: 'Awesome Gradient',
            direction: 'bg-gradient-to-r',
            from: 'from-violet-600',
            via: 'via-violet-600',
            to: 'to-indigo-600',
        }
    },

    methods: {
        copied() {
            this.isCopy = true;

            setTimeout(() => this.isCopy = false, 1000);
        },

        updateActive(active) {
            this.fullWidth = false;
            this.active = active;
        },

        updateFromColor(newColor) {
            this.from = newColor;
        },

        updateViaActive(newValue) {
            this.viaActive = newValue
        },

        updateDirection(newValue) {
            this.direction = newValue
        },

        updateViaColor(newColor) {
            this.via = newColor;
        },

        updateToColor(newColor) {
            this.to = newColor;
        },

        classes() {
            if (this.active == 'background') {
                if (this.viaActive == true) {
                    return this.direction + ' ' + this.from + ' ' + this.via + ' ' + this.to;
                }
    
                return this.direction + ' ' + this.from + ' ' + this.to;
            }

            if (this.viaActive == true) {
                return this.direction + ' ' + this.from + ' ' + this.via + ' ' + this.to + ' bg-clip-text text-transparent';
            }

            return this.direction + ' ' + this.from + ' ' + this.to + ' bg-clip-text text-transparent';
        },

        randomGradient() {
            let gradient = this.gradients[Math.floor(Math.random() * 31)].style.split(" ");

            this.viaActive = false;
            this.direction = gradient[0];
            this.from = gradient[1];
            this.to = gradient[2];
        }
    }
}
</script>