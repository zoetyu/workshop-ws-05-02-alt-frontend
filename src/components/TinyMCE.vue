<template>
    <tinymce id="d1" 
            :other_options="tinyOptions" 
            v-model="todo"
    ></tinymce>
</template>

<script>
import tinymce from 'vue-tinymce-editor';

export default {
    components: {
        tinymce,
    },
    data() {
        return {
            name: "tiny-mce",
            todo: '<h2 style="color: #339966;">Hi there from TinyMCE for Vue.js.</h2> <p>&nbsp;</p> <p><span>Hey y`all.</span></p>',
            tinyOptions: {
                    'height': 500
            }
        }
    }
}
</script>