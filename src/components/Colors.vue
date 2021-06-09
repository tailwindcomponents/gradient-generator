<template>
    <div class="mt-8 overflow-auto h-80">
        <div v-for="(color, index) in colors" :key="index">
            <p class="mb-2 text-gray-700" v-text="color"></p>
            
            <div class="flex items-center px-2 py-1 mb-2 space-x-2 bg-gray-100 rounded-full md:mb-4">
                <button v-for="(number, index) in values" :key="index" :class="'bg-' + color + '-' + number" @click="updateColor(color + '-' + number)" class="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm text-white rounded-full focus:outline-none" v-text="number"></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Colors',

    data() {
        return {
            colors: ['blue-gray', 'gray', 'true-gray', 'warm-gray', 'lime', 'green', 'teal', 'cyan', 'light-blue', 'blue', 'indigo',  'purple', 'fuchsia', 'red', 'orange', 'yellow', 'pink', 'rose'],
            values: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
        }
    },

    methods: {
        updateColor(color)
        {
            this.$emit('updateColor', color);
        }
    }
}
</script>