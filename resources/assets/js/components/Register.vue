<template lang="html">
    <div class="panel panel-default">
        <div class="panel-heading">Register</div>
        <div class="panel-body">
            <form class="form-horizontal" role="form" method="POST" action="/">

                <div class="form-group [[errorsFor('name')]]">
                    <label for="name" class="col-md-4 control-label">Name</label>

                    <div class="col-md-6">
                        <input id="name" type="text" class="form-control" name="name" v-model="name" required autofocus>

                        <span v-if="bad_name" class="help-block">
                            <strong>{{errorsFor('name')}}</strong>
                        </span>
                    </div>
                </div>

                <div class="form-group">
                    <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                    <div class="col-md-6">
                        <input id="email" type="email" class="form-control" name="email" v-model="email" required>

                        <span v-if="bad_email" class="help-block">
                            <strong>[[errorsFor('email')]]</strong>
                        </span>
                    </div>
                </div>

                <div class="form-group">
                    <label for="password" class="col-md-4 control-label">Password</label>

                    <div class="col-md-6">
                        <input id="password" type="password" class="form-control" name="password" v-model="password" required>

                        <span v-if="bad_password" class="help-block">
                            <strong>[[errorsFor('password')]]</strong>
                        </span>
                    </div>
                </div>

                <div class="form-group">
                    <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>

                    <div class="col-md-6">
                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-6 col-md-offset-4">
                        <button type="submit" @click.prevent="createUser" class="btn btn-primary">
                            Register
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeapotRegister",
        data() {
            return {
                //Component Data
                errors: [],
                name: '',
                email: '',
                password: '',
                bad_name: false,
                bad_email: false,
                bad_password: false,
                errors: {
                    'name': 'Tokį turim'
                }
            }
        },

        methods: {
            createUser() {
                console.log('lets register user', this.name, this.email, this.password);

                this.bad_name = true;
            },

            errorsFor(field) {
                if (this.errors[field]) {
                    return this.errors[field];
                }

                return 'error description not found';
            }
        }
    }
</script>

<style lang="css">

</style>
