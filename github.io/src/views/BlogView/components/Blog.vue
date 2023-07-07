<script setup>
defineProps({
    title: String,
    description: String,
    link: String,
});
</script>

<template>
    <div>
        <div class="title">
            {{ title }}
        </div>
        <p style="text-align: justify;">
            {{ description }}
        </p>
        <div class="small">
            visit blog at: <a v-bind:href="link">{{ link }}</a>
        </div>
    </div>
</template>

<style scoped>
.title {
    font-weight: bold;
    font-size: 1.4em;
    margin-bottom: 20px;
}

.small {
    font-weight: lighter;
    font-size: 0.8em;
    margin-top: 20px;
}
</style>