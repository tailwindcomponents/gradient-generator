<template>
    <div v-if="text" class="grid bg-white place-items-center h-80">
        <h1 class="text-3xl font-bold text-transparent bg-clip-text " :class="direction + ' ' + from + ' ' + to">
            Tailwind CSS Gradient Generator
        </h1>
    </div>

    <div v-if="!text" class="h-80" :class="direction + ' ' + from + ' ' + getVia() + ' ' + to"></div>
        
    <div class="max-w-md px-4 py-10 mx-auto overflow-hidden rounded-lg">
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
                <div>
                    <input v-model="text" type="checkbox" name="" id=""> <span>Text</span>
                </div>

                <div>
                    <input v-model="isVia" type="checkbox" name="" id=""> <span>Via</span>
                </div>
            </div>

            <div class="flex items-center space-x-4">
                <select v-model="what">
                    <option value="from">From</option>
                    <option v-if="isVia" value="via">via</option>
                    <option value="to">to</option>
                </select>

                <select v-model="direction">
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
        </div>

        <div class="flex mt-8">
            <div v-if="what == 'from'" class="space-y-4">
                <div class="flex items-center px-2 py-1 space-x-2 bg-gray-100 rounded-full" v-for="(color, index) in colors" :key="index">
                    <button v-for="(number, index) in values" :key="index" :class="'bg-' + color + '-' + number" @click="from = 'from-' + color + '-' + number" class="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm text-white rounded-full focus:outline-none" v-text="number"></button>
                </div>
            </div>

            <div v-if="what == 'via'"  class="space-y-4">
                <div class="flex items-center px-2 py-1 space-x-2 bg-gray-100 rounded-full" v-for="(color, index) in colors" :key="index">
                    <button v-for="(number, index) in values" :key="index" :class="'bg-' + color + '-' + number" @click="via = 'via-' + color + '-' + number" class="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm text-white rounded-full focus:outline-none" v-text="number"></button>
                </div>
            </div>

            <div v-if="what == 'to'"  class="space-y-4">
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
            what: 'from',
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