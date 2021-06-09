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
                    <input class="border-gray-200 rounded-md text-primary focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40" v-model="text" type="checkbox"> <span class="text-gray-700 ml-0.5">Text</span>
                </div>

                <div>
                    <input class="border-gray-200 rounded-md text-primary focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40" v-model="isVia" type="checkbox"> <span class="text-gray-700 ml-0.5">Via</span>
                </div>
            </div>

        </div>
        <div class="flex items-center mt-4 space-x-4">
            <div class="w-1/2">
                <p class="mb-2 text-gray-700 capitalize" v-text="showColor"></p>

                <select class="w-full h-10 border-gray-200 rounded-lg focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40" v-model="showColor">
                    <option value="from">From</option>
                    <option v-if="isVia" value="via">via</option>
                    <option value="to">to</option>
                </select>
            </div>

            <div class="w-1/2">
                <p class="mb-2 text-gray-700">Direction </p>

                <select class="w-full h-10 border-gray-200 rounded-lg focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40" v-model="direction">
                    <option value="bg-gradient-to-t">To Top</option>
                    <option value="bg-gradient-to-tr">To Top Right</option>
                    <option value="bg-gradient-to-r">To Right</option>
                    <option value="bg-gradient-to-br">To Bottom Right</option>
                    <option value="bg-gradient-to-b">To Bottom</option>
                    <option value="bg-gradient-to-bl">To Bottom Left</option>
                    <option value="bg-gradient-to-l">To Left</option>
                    <option value="bg-gradient-to-tl">To Top Left</option>
                </select>
            </div>
        </div>
        <div>
        </div>

        <div class="flex mt-8 overflow-auto h-80">
            <div v-if="showColor == 'from'">
                <div v-for="(color, index) in colors" :key="index">
                    <p class="mb-2 text-gray-700" v-text="color"></p>
                    
                    <div class="flex items-center px-2 py-1 mb-2 space-x-2 bg-gray-100 rounded-full md:mb-4">
                        <button v-for="(number, index) in values" :key="index" :class="'bg-' + color + '-' + number" @click="from = 'from-' + color + '-' + number" class="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm text-white rounded-full focus:outline-none" v-text="number"></button>
                    </div>
                </div>
            </div>

            <div v-if="showColor == 'via'">
                <div v-for="(color, index) in colors" :key="index">
                    <p class="mb-2 text-gray-700" v-text="color"></p>
                    
                    <div class="flex items-center px-2 py-1 mb-2 space-x-2 bg-gray-100 rounded-full md:mb-4">
                        <button v-for="(number, index) in values" :key="index" :class="'bg-' + color + '-' + number" @click="via = 'via-' + color + '-' + number" class="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm text-white rounded-full focus:outline-none" v-text="number"></button>
                    </div>
                </div>
            </div>

            <div v-if="showColor == 'to'">
                <div v-for="(color, index) in colors" :key="index">
                    <p class="mb-2 text-gray-700" v-text="color"></p>
                    
                    <div class="flex items-center px-2 py-1 mb-2 space-x-2 bg-gray-100 rounded-full md:mb-4">
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
    setup() {
      const message = 'test'
      const onCopy = (e) => {
          console.log(e);
        alert('You just copied: ' + e.text)
      }
      const onError = () => {
        alert('Failed to copy texts')
      }
 
      return { message, onCopy, onError }
    },
    data() {
        return {
            text: false,
            isVia: false,
            showColor: 'from',
            direction: 'bg-gradient-to-r',
            from: 'from-teal-400',
            via: 'via-teal-600',
            to: 'to-teal-800',
            colors: ['blue-gray', 'gray', 'true-gray', 'warm-gray', 'lime', 'green', 'teal', 'cyan', 'light-blue', 'blue', 'indigo',  'purple', 'fuchsia', 'red', 'orange', 'yellow', 'pink', 'rose'],
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