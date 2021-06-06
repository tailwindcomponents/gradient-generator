<template>
    <div class="container px-6 mx-auto">
        <div class="flex flex-col items-center border-t border-gray-200">
            <div class="py-6 text-center sm:w-2/3">
                <p class="text-sm text-gray-600">© {{ new Date().getFullYear() }} by Tailwind Components</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>