<template>
    <p class="mb-2 text-gray-600 capitalize">Directions </p>

    <select class="w-full h-10 text-gray-800 border-gray-200 rounded-lg focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40" 
        v-model="direction" 
        @change="updateDirection"
    >
        <option value="bg-gradient-to-t">To Top</option>
        <option value="bg-gradient-to-tr">To Top Right</option>
        <option value="bg-gradient-to-r">To Right</option>
        <option value="bg-gradient-to-br">To Bottom Right</option>
        <option value="bg-gradient-to-b">To Bottom</option>
        <option value="bg-gradient-to-bl">To Bottom Left</option>
        <option value="bg-gradient-to-l">To Left</option>
        <option value="bg-gradient-to-tl">To Top Left</option>
    </select>
</template>

<script>
export default {
    name: 'Directions',

    data() {
        return {
            direction: 'bg-gradient-to-r',
        }
    },

    methods: {
        updateDirection() {
            this.$emit('updateDirection', this.direction);
        }
    }
}
</script>