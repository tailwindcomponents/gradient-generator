<template>
    <p class="mb-2 text-gray-600 capitalize">Default Gradients</p>

    <div class="space-x-4 overflow-y-auto whitespace-nowrap">
        <button v-for="color in colors" :key="color" 
            :class="'bg-' + color + '-700' + ' ' + 'hover:bg-' + color + '-600'" 
            class="inline w-10 h-10 rounded-md focus:outline-none"
            @click="updateColor(color)"
        >
        </button>
    </div>
</template>

<script>
export default {
    name: 'Deafult Gradients',

    data() {
        return {
            colors: ['blue-gray', 'gray', 'true-gray', 'warm-gray', 'lime', 'green', 'teal', 'cyan', 'light-blue', 'blue', 'indigo',  'purple', 'fuchsia', 'red', 'orange', 'yellow', 'pink', 'rose'],
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