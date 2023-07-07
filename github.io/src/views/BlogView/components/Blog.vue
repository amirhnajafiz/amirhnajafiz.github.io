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
        <p style="text-align: justify; font-size: 0.8em;">
            {{ description.slice(0, 120)+'...' }}
        </p>
        <div class="small">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
            </svg>
            <span style="margin-left: 10px;">
                visit blog at: <a v-bind:href="link">{{ link.slice(0, 18) }}</a>
            </span>
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
    display: flex;
    align-items: center;
}
</style>