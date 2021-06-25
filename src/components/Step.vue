<template>
    <p class="mb-2 text-gray-600 capitalize">Steps</p>

    <div class="flex items-center space-x-2 text-gray-800">
        <button @click="updateStep('from')" type="button" :class="step == 'from' ? 'border-teal-500 ring ring-primary ring-opacity-40' : ''" class="w-full px-4 py-2 transition-colors duration-200 transform border rounded-lg focus:outline-none">
            From
        </button>

        <button v-if="isVia" @click="updateStep('via')" type="button" :class="step == 'via' ? 'border-teal-500 ring ring-primary ring-opacity-40' : ''" class="w-full px-4 py-2 transition-colors duration-200 transform border rounded-lg focus:outline-none">
            Via
        </button>

        <button @click="updateStep('to')" type="button" :class="step == 'to' ? 'border-teal-500 ring ring-primary ring-opacity-40' : ''" class="w-full px-4 py-2 transition-colors duration-200 transform border rounded-lg focus:outline-none">
            To
        </button>
    </div>
</template>

<script>
export default {
    name: 'Steps',
    
    props: ['isVia', 'step'],

    methods: {
        updateStep(step) {
            this.$emit('updateStep', step);
        }
    }
}
</script>