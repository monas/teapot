<template>
    <div class="panel panel-default">
        <div class="panel-heading">Login</div>
        <div class="panel-body">
            <div v-if="!loggedin">
                <form class="form-horizontal" role="form" method="POST" action="/">
                    <div v-bind:class="`form-group ${errorsHas('email')}`">
                        <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                        <div class="col-md-6">
                            <input id="email" type="email" class="form-control" name="email" v-model="email" required autofocus>

                            <div v-if="bad_email" class="help-block">
                                <strong>{{errorsFor('email')}}</strong>
                            </div>
                        </div>
                    </div>

                    <div v-bind:class="`form-group ${errorsHas('password')}`">
                        <label for="password" class="col-md-4 control-label">Password</label>

                        <div class="col-md-6">
                            <input id="password" type="password" class="form-control" name="password" required v-model="password">

                            <span v-if="bad_password" class="help-block">
                                <strong>{{errorsFor('password')}}</strong>
                            </span>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-md-6 col-md-offset-4">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="remember" checked> Remember Me
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-md-8 col-md-offset-4">
                            <button @click.prevent="loginAction" type="submit" class="btn btn-primary">
                                Login
                            </button>

                            <router-link to="/forgot">Forgot Your Password?</router-link>
                        </div>
                    </div>
                </form>
            </div>
            <div v-else>
                You are free to logout ;)<br />
                <teapot-logout-link></teapot-logout-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeapotLogin",
        data() {
            return {
                //Component Data
                errors: [],
                email: 'admin@teapot.dev',
                password: 'admin',
                bad_email: false,
                bad_password: false
            }
        },

        computed: {
            loggedin() {
                return this.$store.getters.getloggedInStatus;
            },
        },

        mounted() {
            //On Component created
            console.log('status: ', this.loggedin);
        },

        methods: {
            loginAction() {
                //Basic Component method
                var url = '/api/login';
                axios.post(url, {email: this.email, password: this.password})
                    .then( function (response) {
                        // save user information into state storage
                        this.$store.dispatch('setloggedInStatus', {loggedin: response.data.status, loggedin_user: response.data.user} );
//                        this.getAllUsers();
                    }.bind(this));
            },

            errorsHas(field) {
                return this[field];
            },
            errorsFor(field) {
                return this[field];
            }
        },

        watch: {
            loggedin: function(val) {
                if (val) {
                    // redirect to dashboard
                    this.$router.push('/dashboard');
                }
            },
        }
    }
</script>
