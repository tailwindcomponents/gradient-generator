<template>
    <p class="mb-2 text-gray-600 capitalize">suggestions</p>

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
            colors: ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'],
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