<template>
    <a v-if="loggedin" href="/logout" @click.prevent="logoutAction">Logout</a>
    <!-- <span v-if="loggedin" @click="logoutAction">Logout</span> -->
</template>

<script>
    export default {
        name: "TeapotLogoutLink",
        data() {
            return {
                //Component Data
                example: true,
                foo: "bar"
            }
        },

        computed: {
            loggedin() {
                return this.$store.getters.getloggedInStatus;
            },
        },

        methods: {
            logoutAction() {
                console.log('do logout');
                this.$store.dispatch('setloggedInStatus', {loggedin: 0, loggedin_user: {}});
                this.$router.push('/');
            }
        }
    }
</script>
