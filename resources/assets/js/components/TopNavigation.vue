<template>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">

                <!-- Collapsed Hamburger -->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <!-- Branding Image -->
                <router-link class="navbar-brand" to="/">Laravel</router-link>
            </div>

            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                <!-- Left Side Of Navbar -->
                <ul class="nav navbar-nav">
                    &nbsp;
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="nav navbar-nav navbar-right">
                    <!-- Authentication Links -->

                    <li v-if="!loggedin">
                        <router-link to="/login">Login</router-link>
                    </li>
                    <li v-if="!loggedin">
                        <router-link to="/register">Register</router-link>
                    </li>

                    <li  v-if="loggedin" class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            {{user.name}} <span class="caret"></span>
                        </a>

                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <router-link to="/dashboard">Dashboard</router-link>
                            </li>
                            <li>
                                <teapot-logout-link></teapot-logout-link>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>

 <script>
    export default {
        name: "TopNavigation",
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
            user() {
                return this.$store.getters.getloggedInUser;
            }
        },

        created() {
            //On Component created
        },

        methods: {
        }
    }
</script>
