<template>
    <div class="relative w-full h-12 px-4 mt-2 font-medium text-gray-700 bg-white border border-gray-200 rounded-md focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-20 " 
        :tabindex="tabindex" 
        @blur="open = false"
      >
        <button @click="open = !open" class="flex items-center justify-between w-full h-full">
            <div class="flex items-center w-full h-full " :class="{ open: open }" >
                {{ selectedTitle }}
            </div>
    
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-gray-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </button>


        <div 
          class="absolute left-0 z-20 w-full py-2 mt-2 bg-white border border-gray-100 rounded-lg shadow-xl top-12 lg:left-auto lg:right-0" 
          v-show="open"
        >
            <div
                class="px-4 py-3 cursor-pointer hover:bg-gray-50"
                v-for="(option, i) of options"
                :key="i"
                @click="
                  selectedTitle = option.title;
                  open = false;
                  $emit('input', option.value);
                "

                :class="selectedTitle == option.title ? ' bg-gray-100' : ''"
            >
                {{ option.title }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true,
        },

        default: {
            type: String,
            required: false,
            default: null,
        },

        defaultTitle: {
            type: String,
            required: false,
            default: null,
        },

        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
    },

    mounted() {
        this.$emit("input", this.selected);
    },

    data() {
        return {
            selected: this.default
                ? this.default
                : this.options.length > 0
                ? this.options[0].value
                : null,
            selectedTitle: this.defaultTitle
                ? this.defaultTitle
                : this.options.length > 0
                ? this.options[0].title
                : null,
            open: false,
        };
    },

    watch: {
        default(newValue) {
            this.selected = newValue;

            let newOption = this.options.filter(option => {
                return option.value == newValue;
            });

            this.selectedTitle = newOption[0].title;
        }
    }
};
</script>
