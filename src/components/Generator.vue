<template>
    <div v-if="text" class="container grid mx-auto bg-white place-items-center h-80">
        <h1 class="text-2xl font-bold text-center text-transparent md:text-3xl bg-clip-text " :class="direction + ' ' + from +  ' ' + getVia() + ' ' + to">
            Tailwind CSS Gradient Generator
        </h1>
    </div>

    <div v-if="!text" class="h-80" :class="direction + ' ' + from + ' ' + getVia() + ' ' + to"></div>
        
    <div class="container max-w-md px-4 py-10 mx-auto overflow-hidden rounded-lg">
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
                <div>
                    <input class="border-gray-200 rounded-md text-primary focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40" v-model="text" type="checkbox" name="" id=""> <span>Text</span>
                </div>

                <div>
                    <input class="border-gray-200 rounded-md text-primary focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40" v-model="isVia" type="checkbox" name="" id=""> <span>Via</span>
                </div>
            </div>

            <button type="button" class="flex items-center px-4 py-2 space-x-3 text-gray-500 transition-colors duration-200 transform border rounded-lg focus:outline-none focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40">
                <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path> <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path></svg>
                <span class="text-gray-700">Copy Gradient</span>
            </button>
        </div>

        <div class="flex items-center mt-4 space-x-4">
            <select class="w-1/2 h-10 border-gray-200 rounded-lg focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40" v-model="showColor">
                <option value="from">From</option>
                <option v-if="isVia" value="via">via</option>
                <option value="to">to</option>
            </select>

            <select class="w-1/2 h-10 border-gray-200 rounded-lg focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40" v-model="direction">
                <option value="bg-gradient-to-t">bg-gradient-to-t</option>
                <option value="bg-gradient-to-tr">bg-gradient-to-tr</option>
                <option value="bg-gradient-to-r">bg-gradient-to-r</option>
                <option value="bg-gradient-to-br">bg-gradient-to-br</option>
                <option value="bg-gradient-to-b">bg-gradient-to-b</option>
                <option value="bg-gradient-to-bl">bg-gradient-to-bl</option>
                <option value="bg-gradient-to-l">bg-gradient-to-l</option>
                <option value="bg-gradient-to-tl">bg-gradient-to-tl</option>
            </select>
        </div>
        <div>
        </div>

        <div class="flex mt-8 overflow-auto">
            <div v-if="showColor == 'from'" class="space-y-4">
                <div class="flex items-center px-2 py-1 space-x-2 bg-gray-100 rounded-full" v-for="(color, index) in colors" :key="index">
                    <button v-for="(number, index) in values" :key="index" :class="'bg-' + color + '-' + number" @click="from = 'from-' + color + '-' + number" class="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm text-white rounded-full focus:outline-none" v-text="number"></button>
                </div>
            </div>

            <div v-if="showColor == 'via'"  class="space-y-4">
                <div class="flex items-center px-2 py-1 space-x-2 bg-gray-100 rounded-full" v-for="(color, index) in colors" :key="index">
                    <button v-for="(number, index) in values" :key="index" :class="'bg-' + color + '-' + number" @click="via = 'via-' + color + '-' + number" class="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm text-white rounded-full focus:outline-none" v-text="number"></button>
                </div>
            </div>

            <div v-if="showColor == 'to'"  class="space-y-4">
                <div class="flex items-center px-2 py-1 space-x-2 bg-gray-100 rounded-full" v-for="(color, index) in colors" :key="index">
                    <button v-for="(number, index) in values" :key="index" :class="'bg-' + color + '-' + number" @click="to = 'to-' + color + '-' + number" class="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm text-white rounded-full focus:outline-none" v-text="number"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Generator',

    data() {
        return {
            text: false,
            isVia: true,
            showColor: 'from',
            direction: 'bg-gradient-to-r',
            from: 'from-teal-400',
            via: 'via-teal-500',
            to: 'to-teal-800',
            colors: ['blue-gray', 'gray', 'true-gray', 'warm-gray', 'teal', 'green', 'red'],
            values: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
        }
    },

    methods: {
        getVia() {
            if(!this.isVia) return '';

            return this.via;
        }
    }
}
</script>