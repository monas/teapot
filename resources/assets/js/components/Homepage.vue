<template>
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <h1>Awesome homepage goes here ;)</h1>
            <teapot-logout-link></teapot-logout-link>
            <router-link to="/login">Login page</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "TeapotHomepageComponent",
    data() {
        return {
        }
    },

    methods: {
    }
}
</script>
