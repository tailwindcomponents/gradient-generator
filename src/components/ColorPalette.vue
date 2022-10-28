<template>
    <div class="flex flex-col flex-1">
        <div class="relative w-full h-4 rounded-xl" :class="classes()"></div>
    
        <div class="flex-1 w-full mt-8">
    
        </div>
    </div>
</template>

<script>
export default {
    props: ['from', 'direction', 'to', 'via', 'viaActive'],

    data() {
        return {}
    },

    methods: {
        classes() {
            if (this.viaActive == 'true') {
                return this.direction + ' ' + this.from + ' ' + this.via + ' ' + this.to;
            }
    
            return this.direction + ' ' + this.from + ' ' + this.to;
        },
    }
}
</script>