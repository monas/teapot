<template>
    <div class="panel panel-default">
        <div class="panel-body text-center">
            <select name="selected_user" v-model="selected_value">
                <option v-for="user in userList" :value="user.id">{{user.email}}</option>
            </select>



        </div>
    </div>
</template>

<script>
    export default {
        name: "UserListComponent",
        data() {
            return {
                selected_value: 'empty'
            }
        },

        mounted() {
            this.getAllUsers();
        },

        methods:{
            getAllUsers() {
                var url = '/api/users';
                axios.get(url)
                    .then( function (response) {
                        // save user information into state storage
                        console.log('users loaded', response);
                        this.$store.dispatch('setAllUsers',  response.data.list );
                    }.bind(this));
            },

            getUserTables(userId) {
                var url = '/api/tables/'+userId;
                axios.get(url)
                    .then( function (response) {
                        // save user information into state storage
                        console.log('users loaded', response);
                        this.$store.dispatch('setUserTables',  response.data.list );
                    }.bind(this));
            }
        },

        computed: {
            user() {
                return this.$store.getters.getloggedInUser;
            },
            userList(){
                return this.$store.getters.getAllUsers;
            },

            // selected_value() {
            //     return this.selected_value;
            // }
        },

        watch: {
            userList: function(val) {
                console.log('useres reloaded', val);
            },

            selected_value: function(val) {
                console.log('ready to hit for tables', val);
                this.getUserTables(val);
            }
        }
    }
</script>
