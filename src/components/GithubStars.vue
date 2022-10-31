<template>
    <a target="_blank" href="https://github.com/tailwindcomponents/gradient-generator/stargazers" class=" bg-gray-900 py-1 px-2 rounded-md text-white flex items-center space-x-1.5 font-semibold hover:bg-primary duration-300 transition-colors text-xs">
        <svg width="12" height="12" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.05859 0.601562C5.13672 0.445312 5.23438 0.347656 5.39062 0.289062C5.54688 0.25 5.68359 0.25 5.83984 0.289062C5.99609 0.347656 6.11328 0.445312 6.19141 0.601562L7.46094 3.17969L10.3125 3.58984C10.4688 3.62891 10.6055 3.70703 10.7031 3.82422C10.8008 3.96094 10.8398 4.09766 10.8398 4.25391C10.8398 4.41016 10.7812 4.54688 10.6641 4.66406L8.59375 6.67578L9.08203 9.52734C9.10156 9.68359 9.0625 9.83984 8.98438 9.97656C8.90625 10.1133 8.78906 10.1914 8.63281 10.2305C8.47656 10.2695 8.32031 10.25 8.18359 10.1719L5.625 8.84375L3.06641 10.1719C2.91016 10.25 2.77344 10.2695 2.61719 10.2305C2.46094 10.1914 2.32422 10.1133 2.24609 9.97656C2.16797 9.83984 2.12891 9.68359 2.16797 9.52734L2.65625 6.67578L0.585938 4.66406C0.46875 4.54688 0.390625 4.41016 0.390625 4.25391C0.390625 4.09766 0.429688 3.96094 0.527344 3.82422C0.625 3.70703 0.761719 3.62891 0.9375 3.58984L3.78906 3.17969L5.05859 0.601562Z" fill="white"/>
        </svg>

        <span v-text="stargazers_count"></span>
    </a>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            stargazers_count: 0,
        }
    },

    mounted() {
        this.fetch();
    },

    methods: {
        fetch() {
            axios.get('https://api.github.com/repos/tailwindcomponents/gradient-generator')
                .then((response) => {
                    this.stargazers_count = response.data.stargazers_count;
                });
        }
    }
}
</script>