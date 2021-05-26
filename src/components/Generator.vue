<template>
    <div class="h-80 bg-gradient-to-r" :class="from + ' ' + via + ' ' + to"></div>
        
    <div class="container p-4 mx-auto overflow-hidden bg-white rounded-lg lg:-mt-24">
        <div class="flex flex-col space-y-8 rounded-lg lg:space-y-0 lg:flex-row lg:space-x-4 lg:h-80">
            <div class="overflow-y-auto">
                <h4 class="px-2 text-xl font-medium text-gray-800">From</h4>

                <div class="mt-2 space-y-4">
                    <div class="flex items-center px-2 py-1 space-x-2 bg-gray-100 rounded-full" v-for="(color, index) in colors" :key="index">
                        <button v-for="(number, index) in values" :key="index" :class="'bg-' + color + '-' + number" @click="from = 'from-' + color + '-' + number" class="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm text-white rounded-full focus:outline-none" v-text="number"></button>
                    </div>
                </div>
            
            </div>

            <div class="overflow-y-auto">
                <h4 class="px-2 text-xl font-medium text-gray-800">Via</h4>

                <div class="mt-2 space-y-4">
                    <div class="flex items-center px-2 py-1 space-x-2 bg-gray-100 rounded-full" v-for="(color, index) in colors" :key="index">
                        <button v-for="(number, index) in values" :key="index" :class="'bg-' + color + '-' + number" @click="via = 'via-' + color + '-' + number" class="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm text-white rounded-full focus:outline-none" v-text="number"></button>
                    </div>
                </div>
            
            </div>
            
            <div class="overflow-y-auto">
                <h4 class="px-2 text-xl font-medium text-gray-800">To</h4>
                
                <div class="mt-2 space-y-4">
                    <div class="flex items-center px-2 py-1 space-x-2 bg-gray-100 rounded-full" v-for="(color, index) in colors" :key="index">
                        <button v-for="(number, index) in values" :key="index" :class="'bg-' + color + '-' + number" @click="to = 'to-' + color + '-' + number" class="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm text-white rounded-full focus:outline-none" v-text="number"></button>
                    </div>
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
            from: 'from-teal-400',
            via: 'via-teal-500',
            to: 'to-teal-800',
            colors: ['blue-gray', 'gray', 'true-gray', 'warm-gray', 'teal', 'green', 'red'],
            values: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
        }
    }
}
</script>