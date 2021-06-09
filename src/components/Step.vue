<template>
    <p class="mb-2 text-gray-700 capitalize">Step</p>

    <select class="w-full h-10 border-gray-200 rounded-lg focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40" 
        v-model="step"
        @change="UpdateStep"
    >
        <option value="from">From</option>
        <option v-if="isVia" value="via">via</option>
        <option value="to">to</option>
    </select>
</template>

<script>
export default {
    name: 'Steps',
    
    props: ['isVia'],
    
    data() {
        return {
            step: 'from',
        }
    },

    methods: {
        UpdateStep() {
            this.$emit('updateStep', this.step);
        }
    }
}
</script>