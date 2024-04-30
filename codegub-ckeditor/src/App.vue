<template>
    <div id="app" class="app">
        <smart-editor v-model="editorData" />
        <!-- <p>{{ editorData }}</p> -->
        <!-- <page-editor /> -->
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            editorData: "<p>I'm running Tiptap with Vue.js. 🎉</p>"
        };
    }
};
</script>
<style scoped></style>
