<template>
<div class="panel panel-default">
    <div class="panel-body text-center">
        <div class="col-md-2">
            <img src="https://img.clipartfest.com/5a68d99cd467003c04b4ef64004c4313_download-this-image-as-user-profile-clipart_600-557.png" style="max-width: 150px; border: 5px solid #fff; border-radius: 100%; box-shadow: 0 2px  2px rgba(0, 0, 0, 0.3);" alt="user profile clipart">
        </div>
        <div class="col-md-4 col-md-offset-2" style="text-align: left">
            <h1>{{user.name}}</h1>
            <h4>{{user.email}}</h4>
            <h4>Something else</h4>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "UserComponent",
    data() {
        return {}
    },

    computed: {
        user() {
            return this.$store.getters.getloggedInUser;
        }
    }
}
</script>
